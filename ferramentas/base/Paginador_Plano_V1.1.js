(() => {
    'use strict';

    const TOLERANCE = 1;
    const MAX_STEPS = 20000;

    let documentRoot = null;
    let sourceRoot = null;
    let sourceTemplate = null;
    let headerIdentity = 'PLANO DE ESTUDO';
    let footerIdentity = 'APOSTILA DE ESTUDO';
    let steps = 0;
    let problemCount = 0;
    let errorCount = 0;
    let running = false;

    function reportProblem(type, message, element = null, page = null, level = 'warn') {
        const prefix = `[Paginador do Plano] ${type}: ${message}`;
        const logger = level === 'error' ? console.error : console.warn;
        logger(prefix, element || '');

        problemCount += 1;
        if (level === 'error') errorCount += 1;

        if (element instanceof Element) {
            element.classList.add('debug-problem');
            element.dataset.paginationProblem = type;
        }

        if (page instanceof Element) {
            page.classList.add('page--overflow-warning');
            const previous = page.dataset.problem;
            page.dataset.problem = previous ? `${previous}; ${type}` : type;
        }
    }

    function ensureProgress() {
        steps += 1;
        if (steps > MAX_STEPS) {
            throw new Error('Falha de progresso: limite de segurança do paginador excedido.');
        }
    }

    function pageFits(content) {
        return (
            content.scrollHeight <= content.clientHeight + TOLERANCE &&
            content.scrollWidth <= content.clientWidth + TOLERANCE
        );
    }

    function contentHasElements(content) {
        return content.children.length > 0;
    }

    function createPage(context) {
        const page = document.createElement('section');
        page.className = 'page page--generated';

        const header = document.createElement('header');
        header.className = 'page-header';

        const headerBrand = document.createElement('span');
        headerBrand.textContent = headerIdentity;

        const headerContext = document.createElement('span');
        headerContext.className = 'header-context';
        headerContext.textContent = context || '';

        header.append(headerBrand, headerContext);

        const content = document.createElement('div');
        content.className = 'page-content';

        const footer = document.createElement('footer');
        footer.className = 'page-footer';

        const footerBrand = document.createElement('span');
        footerBrand.textContent = footerIdentity;

        const number = document.createElement('span');
        number.className = 'page-number';

        footer.append(footerBrand, number);
        page.append(header, content, footer);

        documentRoot.insertBefore(page, sourceRoot);
        return { page, content };
    }

    function freshPageIfNeeded(state, context) {
        if (!contentHasElements(state.content)) return state;
        return createPage(context);
    }

    function appendNodes(content, nodes) {
        nodes.forEach((node) => content.appendChild(node));
    }

    function removeNodes(content, nodes) {
        for (let index = nodes.length - 1; index >= 0; index -= 1) {
            const node = nodes[index];
            if (node.parentNode === content) {
                content.removeChild(node);
            }
        }
    }

    function stripIdsDeep(root) {
        if (!(root instanceof Element)) return;
        root.removeAttribute('id');
        root.querySelectorAll('[id]').forEach((element) => {
            element.removeAttribute('id');
        });
    }

    function hasSignificantTextNodes(element) {
        return Array.from(element.childNodes).some(
            (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== ''
        );
    }

    function cloneContainerShell(element, firstFragment) {
        const shell = element.cloneNode(false);
        shell.removeAttribute('data-split');

        if (!firstFragment) {
            shell.removeAttribute('id');
        }

        return shell;
    }

    function splitChildren(container, state, context) {
        const children = Array.from(container.children);

        if (!children.length || hasSignificantTextNodes(container)) {
            state = freshPageIfNeeded(state, context);
            state.content.appendChild(container);
            reportProblem(
                'FALHA DE SPLIT',
                'data-split="children" exige filhos elementares e não divide texto solto.',
                container,
                state.page,
                'error'
            );
            return state;
        }

        let firstFragment = true;
        let fragment = cloneContainerShell(container, firstFragment);
        state.content.appendChild(fragment);

        for (let index = 0; index < children.length; index += 1) {
            ensureProgress();
            const child = children[index];
            fragment.appendChild(child);

            if (pageFits(state.content)) continue;

            fragment.removeChild(child);

            if (fragment.children.length === 0) {
                const pageHasPreviousContent = Array.from(state.content.children).some(
                    (element) => element !== fragment
                );

                if (pageHasPreviousContent) {
                    fragment.remove();
                    state = createPage(context);
                    fragment = cloneContainerShell(container, firstFragment);
                    state.content.appendChild(fragment);
                }

                fragment.appendChild(child);

                const childFitsFreshPage = pageFits(state.content);

                if (!childFitsFreshPage) {
                    reportProblem(
                        'UNIDADE MAIOR QUE UMA PÁGINA',
                        'Um filho de unidade continuável excede sozinho a área útil.',
                        child,
                        state.page,
                        'error'
                    );
                }

                firstFragment = false;

                /*
                 * Se o primeiro filho não cabia no restante da página anterior,
                 * ele é movido para uma página nova. Quando passa a caber nessa
                 * página vazia, os irmãos seguintes devem continuar sendo
                 * tentados no mesmo fragmento. A V1.0 criava outra página de
                 * forma incondicional, produzindo páginas quase vazias.
                 */
                if (!childFitsFreshPage && index + 1 < children.length) {
                    state = createPage(context);
                    fragment = cloneContainerShell(container, false);
                    state.content.appendChild(fragment);
                }

                continue;
            }

            firstFragment = false;
            state = createPage(context);
            fragment = cloneContainerShell(container, false);
            state.content.appendChild(fragment);
            fragment.appendChild(child);

            if (!pageFits(state.content)) {
                reportProblem(
                    'UNIDADE MAIOR QUE UMA PÁGINA',
                    'Um filho de unidade continuável excede sozinho a área útil.',
                    child,
                    state.page,
                    'error'
                );

                if (index + 1 < children.length) {
                    state = createPage(context);
                    fragment = cloneContainerShell(container, false);
                    state.content.appendChild(fragment);
                }
            }
        }

        return state;
    }

    function tableBlueprint(node) {
        let wrap = null;
        let table = null;

        if (node.matches && node.matches('.table-wrap')) {
            wrap = node;
            const elementChildren = Array.from(wrap.children);
            const tables = elementChildren.filter((child) => child.tagName === 'TABLE');

            if (tables.length !== 1 || elementChildren.length !== 1) {
                return {
                    safe: false,
                    reason: 'table-wrap deve conter exatamente uma tabela como filho elementar',
                    wrap,
                    table: tables[0] || null
                };
            }

            table = tables[0];
        } else if (node.tagName === 'TABLE') {
            table = node;
        } else {
            return null;
        }

        if (table.querySelector('table')) {
            return {
                safe: false,
                reason: 'tabela aninhada',
                wrap,
                table
            };
        }

        const rows = Array.from(table.rows);
        const hasUnsafeRowspan = rows.some((row) =>
            Array.from(row.cells).some((cell) => cell.rowSpan > 1)
        );

        if (hasUnsafeRowspan) {
            return {
                safe: false,
                reason: 'rowspan maior que 1',
                wrap,
                table
            };
        }

        const bodies = Array.from(table.tBodies);
        if (bodies.length === 0) {
            return {
                safe: false,
                reason: 'tabela sem tbody fragmentável',
                wrap,
                table
            };
        }

        const rowRecords = [];
        bodies.forEach((body, bodyIndex) => {
            Array.from(body.rows).forEach((row) => {
                rowRecords.push({ row, body, bodyIndex });
            });
        });

        if (rowRecords.length === 0) {
            return {
                safe: false,
                reason: 'tabela sem linhas no tbody',
                wrap,
                table
            };
        }

        return {
            safe: true,
            wrap,
            table,
            caption: table.caption,
            colgroups: Array.from(table.children).filter(
                (child) => child.tagName === 'COLGROUP'
            ),
            thead: table.tHead,
            tfoot: table.tFoot,
            bodies,
            rowRecords
        };
    }

    function createTableFragment(blueprint, firstFragment) {
        const root = blueprint.wrap
            ? blueprint.wrap.cloneNode(false)
            : blueprint.table.cloneNode(false);

        const table = blueprint.wrap
            ? blueprint.table.cloneNode(false)
            : root;

        if (blueprint.wrap) {
            root.appendChild(table);
        }

        if (!firstFragment) {
            stripIdsDeep(root);
        }

        if (blueprint.caption && firstFragment) {
            table.appendChild(blueprint.caption.cloneNode(true));
        }

        blueprint.colgroups.forEach((colgroup) => {
            const clone = colgroup.cloneNode(true);
            if (!firstFragment) stripIdsDeep(clone);
            table.appendChild(clone);
        });

        if (blueprint.thead) {
            const clone = blueprint.thead.cloneNode(true);
            if (!firstFragment) stripIdsDeep(clone);
            table.appendChild(clone);
        }

        return {
            root,
            table,
            bodyMap: new Map(),
            firstFragment
        };
    }

    function ensureFragmentBody(fragment, record) {
        if (fragment.bodyMap.has(record.bodyIndex)) {
            return fragment.bodyMap.get(record.bodyIndex);
        }

        const body = record.body.cloneNode(false);
        if (!fragment.firstFragment) stripIdsDeep(body);

        fragment.table.appendChild(body);
        fragment.bodyMap.set(record.bodyIndex, body);
        return body;
    }

    function appendRow(fragment, record) {
        const body = ensureFragmentBody(fragment, record);
        body.appendChild(record.row);
    }

    function removeRow(fragment, record) {
        const body = fragment.bodyMap.get(record.bodyIndex);
        if (!body || record.row.parentNode !== body) return;

        body.removeChild(record.row);

        if (body.rows.length === 0) {
            body.remove();
            fragment.bodyMap.delete(record.bodyIndex);
        }
    }

    function appendFinalFoot(fragment, blueprint) {
        if (!blueprint.tfoot) return null;
        const foot = blueprint.tfoot.cloneNode(true);
        fragment.table.appendChild(foot);
        return foot;
    }

    function splitTableAcrossPages(blueprint, state, context) {
        let rowIndex = 0;
        let fragmentIndex = 0;

        while (rowIndex < blueprint.rowRecords.length) {
            ensureProgress();
            const pageHadPriorContent = contentHasElements(state.content);
            const fragment = createTableFragment(blueprint, fragmentIndex === 0);
            state.content.appendChild(fragment.root);

            let acceptedRows = 0;
            let fragmentClosed = false;

            while (rowIndex < blueprint.rowRecords.length) {
                ensureProgress();
                const record = blueprint.rowRecords[rowIndex];
                appendRow(fragment, record);

                let foot = null;
                const isLastRow = rowIndex === blueprint.rowRecords.length - 1;

                if (isLastRow) {
                    foot = appendFinalFoot(fragment, blueprint);
                }

                if (pageFits(state.content)) {
                    acceptedRows += 1;
                    rowIndex += 1;
                    continue;
                }

                if (foot) foot.remove();
                removeRow(fragment, record);

                if (acceptedRows > 0) {
                    fragmentClosed = true;
                    break;
                }

                if (pageHadPriorContent) {
                    fragment.root.remove();
                    state = createPage(context);
                    fragmentClosed = true;
                    break;
                }

                appendRow(fragment, record);
                if (isLastRow) appendFinalFoot(fragment, blueprint);

                reportProblem(
                    'UNIDADE MAIOR QUE UMA PÁGINA',
                    'Uma linha da tabela excede sozinha a área útil.',
                    record.row,
                    state.page,
                    'error'
                );

                acceptedRows = 1;
                rowIndex += 1;
                fragmentClosed = true;
                break;
            }

            if (fragment.root.isConnected && acceptedRows > 0) {
                fragmentIndex += 1;
            }

            if (
                rowIndex < blueprint.rowRecords.length &&
                fragment.root.isConnected &&
                acceptedRows > 0 &&
                fragmentClosed
            ) {
                state = createPage(context);
            }
        }

        return state;
    }

    function placeUnsplittable(node, state, context, problemType, problemMessage) {
        state = freshPageIfNeeded(state, context);
        state.content.appendChild(node);

        if (!pageFits(state.content)) {
            reportProblem(problemType, problemMessage, node, state.page, 'error');
        }

        return state;
    }

    function placeSingleNode(node, state, context) {
        ensureProgress();
        state.content.appendChild(node);

        if (pageFits(state.content)) {
            return state;
        }

        state.content.removeChild(node);

        if (node.classList && node.classList.contains('atomic-group')) {
            return placeUnsplittable(
                node,
                state,
                context,
                'UNIDADE MAIOR QUE UMA PÁGINA',
                'Grupo atômico excede a área útil mesmo em página vazia.'
            );
        }

        const blueprint = tableBlueprint(node);
        if (blueprint) {
            if (blueprint.safe) {
                return splitTableAcrossPages(blueprint, state, context);
            }

            return placeUnsplittable(
                node,
                state,
                context,
                'TABELA NÃO FRAGMENTÁVEL',
                `A tabela excede a página e não pode ser dividida com segurança: ${blueprint.reason}.`
            );
        }

        if (node.dataset && node.dataset.split === 'children') {
            return splitChildren(node, state, context);
        }

        return placeUnsplittable(
            node,
            state,
            context,
            'UNIDADE MAIOR QUE UMA PÁGINA',
            'Unidade sem contrato de divisão excede a área útil.'
        );
    }

    function placePreferredGroup(nodes, state, context, label) {
        ensureProgress();
        appendNodes(state.content, nodes);

        if (pageFits(state.content)) {
            return state;
        }

        removeNodes(state.content, nodes);
        state = freshPageIfNeeded(state, context);
        appendNodes(state.content, nodes);

        if (pageFits(state.content)) {
            return state;
        }

        removeNodes(state.content, nodes);
        reportProblem(
            'GRUPO DE CONTINUIDADE',
            `${label} excede a área útil; o paginador preservará a ordem e dividirá o grupo somente porque ele não cabe inteiro em página vazia.`,
            nodes[0],
            state.page
        );

        for (const node of nodes) {
            state = placeSingleNode(node, state, context);
        }

        return state;
    }

    function paginateSection(section) {
        const context = section.dataset.context || '';
        const nodes = Array.from(section.children);
        if (nodes.length === 0) return;

        let state = createPage(context);

        for (let index = 0; index < nodes.length; index += 1) {
            const node = nodes[index];
            let count = 1;
            let label = '';

            if (node.dataset && node.dataset.keepCount) {
                count = Math.max(1, parseInt(node.dataset.keepCount, 10) || 1);
                label = `data-keep-count="${count}"`;
            } else if (
                node.classList &&
                node.classList.contains('keep-with-next') &&
                index + 1 < nodes.length
            ) {
                count = 2;
                label = '.keep-with-next';
            }

            count = Math.min(count, nodes.length - index);

            if (count > 1) {
                const group = nodes.slice(index, index + count);
                state = placePreferredGroup(group, state, context, label);
                index += count - 1;
                continue;
            }

            state = placeSingleNode(node, state, context);
        }
    }

    function removeEmptyGeneratedPages() {
        documentRoot.querySelectorAll(':scope > .page--generated').forEach((page) => {
            const content = page.querySelector('.page-content');
            if (content && !contentHasElements(content) && content.textContent.trim() === '') {
                page.remove();
            }
        });
    }

    function renumberPages() {
        let physicalNumber = 2;
        documentRoot.querySelectorAll(':scope > .page--generated').forEach((page) => {
            page.setAttribute('aria-label', `Página ${physicalNumber}`);
            const number = page.querySelector('.page-number');
            if (number) number.textContent = String(physicalNumber);
            physicalNumber += 1;
        });
    }

    function auditAssets() {
        document.querySelectorAll('img').forEach((image) => {
            if (!image.complete || image.naturalWidth === 0) {
                reportProblem(
                    'ASSET NÃO CARREGADO',
                    image.currentSrc || image.src || 'Imagem sem origem.',
                    image,
                    image.closest('.page--generated'),
                    'error'
                );
            }
        });
    }

    function auditRenderedPages() {
        documentRoot.querySelectorAll(':scope > .page--generated').forEach((page) => {
            const content = page.querySelector('.page-content');
            if (!content) {
                reportProblem(
                    'ESTRUTURA AUSENTE',
                    'Página gerada sem .page-content.',
                    page,
                    page,
                    'error'
                );
                return;
            }

            if (!pageFits(content)) {
                reportProblem(
                    'OVERFLOW',
                    'Conteúdo ultrapassa a área útil da página.',
                    content,
                    page,
                    'error'
                );
            }

            content.querySelectorAll('table').forEach((table) => {
                if (table.scrollWidth > content.clientWidth + TOLERANCE) {
                    reportProblem(
                        'TABELA LARGA',
                        'Tabela ultrapassa a largura útil da página.',
                        table,
                        page,
                        'error'
                    );
                }
            });
        });
    }

    function auditDuplicateIds() {
        const seen = new Map();

        document.querySelectorAll('[id]').forEach((element) => {
            const id = element.id;
            if (!seen.has(id)) {
                seen.set(id, element);
                return;
            }

            reportProblem(
                'ID DUPLICADO',
                `O identificador "${id}" aparece mais de uma vez no documento paginado.`,
                element,
                element.closest('.page--generated'),
                'error'
            );
        });
    }

    function clearGeneratedPages() {
        if (!documentRoot) return;
        documentRoot.querySelectorAll(':scope > .page--generated').forEach((page) => page.remove());
    }

    function restoreSource() {
        const existing = document.getElementById('source-content');
        if (existing) return existing;
        if (!sourceTemplate) return null;

        const restored = sourceTemplate.cloneNode(true);
        documentRoot.appendChild(restored);
        return restored;
    }

    function prepareSourceTemplate() {
        const existing = document.getElementById('source-content');
        if (existing && !sourceTemplate) {
            sourceTemplate = existing.cloneNode(true);
        }
        return existing;
    }

    function paginate() {
        if (running) return;
        running = true;

        try {
            document.documentElement.removeAttribute('data-pagination-problems');
            document.documentElement.removeAttribute('data-pagination-ready');

            documentRoot = document.getElementById('document');
            if (!documentRoot) {
                throw new Error('ESTRUTURA AUSENTE: elemento #document não encontrado.');
            }

            prepareSourceTemplate();
            clearGeneratedPages();
            sourceRoot = restoreSource();

            if (!sourceRoot) {
                throw new Error('ESTRUTURA AUSENTE: elemento #source-content não encontrado.');
            }

            headerIdentity =
                documentRoot.dataset.headerIdentity || 'PLANO DE ESTUDO';
            footerIdentity =
                documentRoot.dataset.footerIdentity || 'APOSTILA DE ESTUDO';

            steps = 0;
            problemCount = 0;
            errorCount = 0;

            const sections = Array.from(
                sourceRoot.querySelectorAll(':scope > .source-section')
            );

            if (sections.length === 0) {
                reportProblem(
                    'ESTRUTURA AUSENTE',
                    '#source-content não contém .source-section.',
                    sourceRoot,
                    null,
                    'error'
                );
            }

            sections.forEach(paginateSection);

            sourceRoot.remove();
            sourceRoot = null;

            removeEmptyGeneratedPages();
            renumberPages();
            auditAssets();
            auditRenderedPages();
            auditDuplicateIds();

            if (problemCount > 0) {
                document.documentElement.setAttribute(
                    'data-pagination-problems',
                    errorCount > 0 ? 'error' : 'warning'
                );
            }

            document.documentElement.setAttribute('data-pagination-ready', 'true');
        } catch (error) {
            document.documentElement.setAttribute('data-pagination-ready', 'error');
            console.error('[Paginador do Plano] FALHA DE PAGINAÇÃO:', error);
        } finally {
            running = false;
        }
    }

    window.PaginadorPlano = Object.freeze({ paginate });

    if (document.readyState === 'complete') {
        paginate();
    } else {
        window.addEventListener('load', paginate, { once: true });
    }
})();
