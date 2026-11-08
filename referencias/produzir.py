"""Reconstrói o HTML fiel ao Markdown e exporta/audita o PDF local.

Uso: python plano-v4/produzir.py [--pdf] [--inspecao DIRETORIO]
Dependências de produção: markdown-it-py, beautifulsoup4.
Para PDF: playwright (Chrome instalado) e pymupdf; Pillow para folhas de inspeção.
O HTML/PDF produzido não depende desses pacotes para leitura.
"""
from pathlib import Path
import argparse
import hashlib
import json
import re
from collections import Counter

from bs4 import BeautifulSoup, NavigableString, Tag
from markdown_it import MarkdownIt

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent
MASTER = ROOT / 'referencias/base/Texto_Mestre_Plano_Linguistico_V4.0.md'
HTML = HERE / 'Plano_Linguistico_V4.0.html'
PDF = HERE / 'Plano_Linguistico_V4.0.pdf'
EXPECTED = 'ba27219d85754fe4db991e3325408a0e1201ab0742ed1d85b9b25acc37de7dff'

# Metadados editoriais: não substituem títulos nem headings da fonte.
RUNNING_CONTEXTS = {
    'Apresentação': 'Apresentação',
    'Parte I': 'Parte I — Percurso de formação linguística',
    'Parte II': 'Parte II — Conhecimento linguístico',
    'Parte III': 'Parte III — Fontes e materialidade da linguagem',
    'Parte IV': 'Parte IV — Utilização e produção do método',
    'Conclusão': 'Conclusão',
}
BOOKMARKS = [
    ('plv4-apresentacao', 1, 'Apresentação'),
    ('plv4-parte-i', 1, None),
    *[(f'plv4-m{i:02}', 2, None) for i in range(1, 9)],
    ('plv4-parte-ii', 1, None),
    ('plv4-s09', 2, 'Texto Teórico'),
    ('plv4-s11', 2, 'Texto Prático'),
    ('plv4-parte-iii', 1, None),
    ('plv4-parte-iv', 1, None),
    ('plv4-s20', 2, 'Como estudar com as apostilas'),
    ('plv4-conclusao', 1, 'Conclusão'),
]


def norm(text):
    return re.sub(r'\s+', ' ', text).strip()


def signature(node):
    """Compara toda a árvore textual, inclusive ênfases, células e ordem."""
    if isinstance(node, NavigableString):
        return norm(str(node)) or None
    name = 'heading' if re.fullmatch(r'h[1-6]', node.name) else node.name
    children = [signature(c) for c in node.children if isinstance(c, (Tag, NavigableString))]
    children = [c for c in children if c is not None]
    # Colgroups são geometria editorial, não conteúdo da fonte.
    children = [c for c in children if not (isinstance(c, list) and c[0] == 'colgroup')]
    return [name, children]


def source_blocks():
    raw = MASTER.read_bytes()
    if hashlib.sha256(raw).hexdigest() != EXPECTED:
        raise ValueError('Texto-Mestre divergente: reconferir Arquitetura/Mapeamento antes de produzir.')
    md = MarkdownIt('commonmark').enable('table')
    doc = BeautifulSoup(md.render(raw.decode('utf-8')), 'html.parser')
    return list(doc.find_all(recursive=False))


def audit_source(original, result):
    blocks = result.select('[data-source-block]')
    assert len(blocks) == len(original), 'Quantidade de blocos divergente'
    for i, (before, after) in enumerate(zip(original, blocks)):
        assert int(after['data-source-block']) == i, f'Ordem divergente: {i}'
        assert signature(before) == signature(after), f'Bloco divergente: {i}'
    assert len(result.select('h1')) == 1
    assert len(result.select('h2')) == 6
    assert len(result.select('h3')) == 25
    assert len(result.select('h4')) == 18
    tables = result.select('table')
    assert len(tables) == 10
    assert [len(t.select('tbody tr')) for t in tables] == [4, 3, 4, 5, 5, 3, 4, 4, 3, 5]
    assert [len(t.select('thead th')) for t in tables] == [2]*8 + [3, 3]
    assert [(x.name, len(x.select(':scope > li'))) for x in result.select('ul, ol')] == [
        ('ul', 3), ('ul', 3), ('ul', 5), ('ul', 4), ('ol', 6), ('ol', 4)]
    assert len(result.select('blockquote')) == 4
    assert [q.get_text(' ', strip=True) for q in result.select('.linguistic-example')][-2:] == [
        'Não espere.', 'Não, espere.']
    assert 'Signo Linguístico' in result.select_one('#plv4-t1-3').get_text()
    ids = [x['id'] for x in result.select('[id]')]
    assert len(ids) == len(set(ids)), 'IDs duplicados na origem'
    for x in result.select('[src], link[href]'):
        ref = x.get('src', x.get('href'))
        assert not re.match(r'(?:[a-z]+:|/)', ref, re.I), ref
        assert (HERE / ref).is_file(), ref
    return {'blocos_integrais': len(blocks), 'secoes': 25, 'macroestruturas': 8,
            'topicos': 32, 'tabelas': 10, 'listas': 6, 'citacoes': 4,
            'enfases': dict(Counter(x.name for x in result.select('strong, em')))}


def build():
    original = source_blocks()
    soup = BeautifulSoup('''<!DOCTYPE html>
<html lang="pt-BR"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Plano de Estudo Linguístico e da Língua Portuguesa — Currículo, fundamentos e método de estudo — Versão 4.0.">
<title>Plano de Estudo Linguístico e da Língua Portuguesa — Versão 4.0</title>
<link rel="stylesheet" href="Plano_Linguistico_V4.0.css"></head>
<body class="theme--ling plano-v4"><main class="document" id="document"
data-header-identity="PLANO DE ESTUDO • LÍNGUA PORTUGUESA"
data-footer-identity="CURRÍCULO, FUNDAMENTOS E MÉTODO DE ESTUDO • V4.0">
<section class="page page--cover" id="capa" aria-label="Capa">
<div class="cover-top"><div class="cover-collection" aria-hidden="true">PLANO DE ESTUDO • LÍNGUA PORTUGUESA</div></div>
<div class="cover-bottom"></div></section>
<div class="source-content" id="source-content"></div></main>
<script src="../ferramentas/base/Paginador_Plano_V1.1.js"></script>
</body></html>''', 'html.parser')
    root = soup.select_one('#source-content')
    section = None
    current = 'identidade'
    part = ''
    macro = 0
    table_count = 0
    list_count = 0
    quote_count = 0
    for i, raw in enumerate(original):
        node = BeautifulSoup(str(raw), 'html.parser').find()
        node['data-source-block'] = str(i)
        text = node.get_text(' ', strip=True)
        if i < 4:
            target = soup.select_one('.cover-bottom')
            if node.name == 'h1':
                node['class'] = ['cover-title']
                node['id'] = 'plv4-titulo'
            elif node.name == 'p':
                node['class'] = ['cover-subtitle', 'cover-version']
                rule = soup.new_tag('div', attrs={'class': 'cover-rule', 'aria-hidden': 'true'})
                rule.append(soup.new_tag('span'))
                rule.append(soup.new_tag('span'))
                target.append(rule)
            elif node.name == 'blockquote':
                node['class'] = ['guiding-principle']
                node['id'] = 'plv4-principio'
                node['data-key'] = 'C-PRINCIPIO'
            elif node.name == 'hr':
                node['class'] = ['editorial-transition']
            target.append(node)
            continue
        if raw.name == 'h1':
            node.name = 'h2'
            part = text.split(' — ')[0]
            current = {'Apresentação': 'apresentacao', 'Conclusão': 'conclusao'}.get(part)
            if current is None:
                current = 'parte-' + part.split()[-1].lower()
            section = soup.new_tag('section', attrs={'class': 'source-section', 'data-context': RUNNING_CONTEXTS[part],
                                                    'aria-labelledby': 'plv4-' + current})
            root.append(section)
            header = soup.new_tag('header', attrs={'class': 'part-opening' if part.startswith('Parte') else 'section-opening',
                                                   'data-keep-count': '3' if part in ['Parte I', 'Parte II', 'Parte III'] else '2'})
            node['class'] = ['part-title' if part.startswith('Parte') else 'section-title']
            node['id'] = 'plv4-' + current
            header.append(node)
            section.append(header)
            continue
        if raw.name == 'h2':
            node.name = 'h3'
            number = int(text.split('.')[0])
            current = f's{number:02}'
            node['id'] = 'plv4-' + current
            node['class'] = ['item-title', 'keep-with-next']
            if number == 3:
                node['data-keep-count'] = '4'
        elif raw.name == 'h3':
            node.name = 'h4'
            node['class'] = ['minor-title', 'keep-with-next']
            if text.startswith('Macroestrutura'):
                macro += 1
                node['id'] = f'plv4-m{macro:02}'
                node['class'] = ['macro-title', 'keep-with-next']
                node['data-keep-count'] = '3'
            else:
                node['id'] = 'plv4-s' + text.split('. ')[0].replace('.', '-')
        elif node.name == 'table':
            table_count += 1
            key = f'm{table_count:02}' if table_count <= 8 else ('fontes' if table_count == 9 else 'auditoria')
            node['id'] = 'plv4-tab-' + key
            node['data-key'] = 'TAB-' + key.upper()
            node['class'] = ['curriculum-table' if table_count <= 8 else 'analytical-table']
            node['aria-labelledby'] = f'plv4-m{table_count:02}' if table_count <= 8 else 'plv4-' + current
            cols = soup.new_tag('colgroup')
            for _ in node.select('thead th'):
                cols.append(soup.new_tag('col'))
            node.insert(0, cols)
            for th in node.select('thead th'):
                th['scope'] = 'col'
            if table_count <= 8:
                for row in node.select('tbody tr'):
                    topic = row.select_one('td').get_text().split(' — ')[0]
                    row['id'] = 'plv4-t' + topic.replace('.', '-')
                    row['data-topic'] = topic
        elif node.name in ('ul', 'ol'):
            list_count += 1
            node['id'] = f'plv4-lista-{list_count}'
            node['data-key'] = f'L-{current.upper()}'
        elif node.name == 'blockquote':
            quote_count += 1
            node['class'] = ['linguistic-example']
            node['data-key'] = ['E-REFERENTE', 'E-NEGACAO-1', 'E-NEGACAO-2'][quote_count-1]
            node['id'] = 'plv4-' + node['data-key'].lower()
        elif node.name == 'hr':
            node['class'] = ['editorial-transition']
        if node.name == 'p' and text.startswith('Pergunta central:'):
            node['class'] = ['central-question']
        if current == 's07' and text == 'Considere duas construções criadas para esta explicação:':
            node['data-keep-count'] = '4'
        if current == 's06' and text == 'Considere o enunciado criado para esta explicação:':
            node['data-keep-count'] = '3'
        if current == 's12' and text.startswith('Considere novamente'):
            node['data-key'] = 'E-RETORNO'
        node['data-section'] = current
        section.append(node)
    audit = audit_source(original, soup)
    HTML.write_text(str(soup) + '\n', encoding='utf-8')
    return audit


def export(inspection=None):
    from playwright.sync_api import sync_playwright
    import pymupdf
    with sync_playwright() as pw:
        browser = pw.chromium.launch(channel='chrome', headless=True)
        page = browser.new_page()
        messages = []
        page.on('console', lambda m: messages.append({'level': m.type, 'text': m.text}) if m.type in ('warning', 'error') else None)
        page.on('pageerror', lambda e: messages.append({'level': 'error', 'text': str(e)}))
        # A exportação mede e pagina no mesmo regime de impressão.
        page.emulate_media(media='print')
        page.goto(HTML.as_uri(), wait_until='load')
        page.wait_for_function("document.documentElement.dataset.paginationReady !== undefined")
        assert page.locator('html').get_attribute('data-pagination-ready') == 'true'
        assert not page.locator('html').get_attribute('data-pagination-problems'), messages
        assert not messages, messages
        rendered = page.content()
        audit_source(source_blocks(), BeautifulSoup(rendered, 'html.parser'))
        geometry = page.evaluate('''() => [...document.querySelectorAll('.page--generated')].map(p => {
            const c = p.querySelector('.page-content'), r = c.getBoundingClientRect();
            const nodes = [...c.children].filter(n => n.tagName !== 'HR');
            const last = nodes.at(-1);
            return {page: Number(p.querySelector('.page-number').textContent),
                overflowX: c.scrollWidth-c.clientWidth, overflowY: c.scrollHeight-c.clientHeight,
                lastTag: last?.tagName, lastText: last?.textContent.slice(0,100),
                occupancy: last ? (last.getBoundingClientRect().bottom-r.top)/r.height : 0};
        })''')
        assert all(g['overflowX'] <= 1 and g['overflowY'] <= 1 for g in geometry)
        assert all(g['lastTag'] not in ['H2', 'H3', 'H4'] for g in geometry), geometry
        headers = page.locator('.page-header').evaluate_all('''ns => ns.map(n => {
            const brand = n.children[0], context = n.children[1];
            const a = brand.getBoundingClientRect(), b = context.getBoundingClientRect();
            const range = document.createRange(); range.selectNodeContents(context);
            return {context: context.textContent, lines: range.getClientRects().length,
                font: getComputedStyle(n).fontSize,
                overflow: Math.max(brand.scrollWidth-brand.clientWidth, context.scrollWidth-context.clientWidth),
                overlap: a.right > b.left, outside: b.right > n.getBoundingClientRect().right+1};
        })''')
        assert all(h['lines'] == 1 and h['overflow'] <= 1 and not h['overlap'] and not h['outside'] for h in headers), headers
        heads = page.locator('h1,h2,h3,h4').evaluate_all('''ns => ns.map(n => ({
            id: n.id, level: Number(n.tagName[1]), title: n.textContent.trim(),
            page: n.closest('.page--cover') ? 1 : Number(n.closest('.page').querySelector('.page-number').textContent)
        }))''')
        page.pdf(path=str(PDF), prefer_css_page_size=True, print_background=True,
                 display_header_footer=False, tagged=True, outline=True)
        # Mesma integridade e diagnóstico também em tela e em repaginação.
        page.emulate_media(media='screen')
        page.evaluate('window.PaginadorPlano.paginate()')
        assert not page.locator('html').get_attribute('data-pagination-problems'), messages
        audit_source(source_blocks(), BeautifulSoup(page.content(), 'html.parser'))
        assert page.locator('.page').count() == len(geometry) + 1
        browser.close()
    pdf = pymupdf.open(PDF)
    assert len(pdf) == len(geometry) + 1
    for p in pdf:
        assert abs(p.rect.width - 595.28) < 1 and abs(p.rect.height - 841.89) < 1
        assert '\ufffd' not in p.get_text() and p.get_text().strip()
    # Chromium exporta todos os headings. Selecionar o outline com PyMuPDF,
    # preservando os destinos nativos (página e coordenadas) dos headings reais.
    native_toc = pdf.get_toc(simple=False)
    assert [(x[0], x[2]) for x in native_toc] == [(h['level'], h['page']) for h in heads]
    by_id = {h['id']: (h, entry) for h, entry in zip(heads, native_toc)}
    detailed_toc, expected_toc = [], []
    for target, level, label in BOOKMARKS:
        heading, native = by_id[target]
        entry = [level, label or heading['title'], heading['page'], native[3]]
        assert native[3]['page'] == heading['page'] - 1
        detailed_toc.append(entry)
        expected_toc.append(entry[:3])
    assert len(detailed_toc) == 17
    assert len({(e[2], e[3]['to'].x, e[3]['to'].y) for e in detailed_toc}) == 17
    # set_toc altera somente a navegação, nunca texto ou geometria das páginas.
    before_outline = [(p.rect, p.get_text()) for p in pdf]
    pdf.set_toc(detailed_toc)
    pdf_bytes = pdf.tobytes(garbage=3, deflate=True)
    pdf.close()
    PDF.write_bytes(pdf_bytes)
    pdf = pymupdf.open(PDF)
    assert before_outline == [(p.rect, p.get_text()) for p in pdf]
    toc = pdf.get_toc()
    assert toc == expected_toc, {'outline_esperado': expected_toc, 'outline_real': toc}
    for actual, expected_entry in zip(pdf.get_toc(simple=False), detailed_toc):
        assert actual[3]['page'] == expected_entry[3]['page']
        assert actual[3]['to'].distance_to(expected_entry[3]['to']) < 0.01
    # Contagem de cada palavra por página, incluindo repetições. A ordem integral
    # de blocos/células/ênfases já foi comparada entre Markdown e DOM paginado.
    # A ordem de pintura PDF da capa não coincide com sua ordem de leitura.
    with sync_playwright() as pw:
        browser = pw.chromium.launch(channel='chrome', headless=True)
        page = browser.new_page()
        page.emulate_media(media='print')
        page.goto(HTML.as_uri(), wait_until='load')
        page.wait_for_function("document.documentElement.dataset.paginationReady === 'true'")
        expected_pages = page.locator('.page').evaluate_all('''ns => ns.map(n => n.innerText + ' ' +
            [...n.querySelectorAll('ol')].flatMap(ol => [...ol.children].map((li,i) =>
                String(Number(ol.getAttribute('start') || 1)+i)+'.')).join(' '))''')
        browser.close()
    for i, (p, expected_text) in enumerate(zip(pdf, expected_pages)):
        # Quebra editorial após hífen literal: conservar o sinal e juntar a palavra.
        words = lambda text: Counter(re.sub(r'-\s+', '-', norm(text)).split())
        assert words(p.get_text()) == words(expected_text), f'Extração textual PDF/DOM diverge na página {i+1}'
    result = {'paginas': len(pdf), 'formato': 'A4 (210 × 297 mm)', 'bookmarks': len(toc),
              'diagnosticos': messages, 'geometria': geometry, 'cabecalhos': headers, 'outline': toc,
              'texto_pdf_dom': 'mesmas palavras, pontuação e multiplicidades por página', 'tela_repaginação': 'aprovada'}
    if inspection:
        from PIL import Image, ImageOps, ImageDraw
        inspection = Path(inspection)
        inspection.mkdir(parents=True, exist_ok=True)
        thumbs = []
        for i, p in enumerate(pdf):
            pix = p.get_pixmap(matrix=pymupdf.Matrix(1.4, 1.4))
            image = Image.frombytes('RGB', [pix.width, pix.height], pix.samples)
            image.save(inspection / f'pagina-{i+1:02}.png')
            thumb = ImageOps.contain(image, (420, 594))
            tile = Image.new('RGB', (444, 630), '#ddd8d3')
            tile.paste(thumb, ((444-thumb.width)//2, 10))
            ImageDraw.Draw(tile).text((12, 610), f'Página {i+1}', fill='black')
            thumbs.append(tile)
        for start in range(0, len(thumbs), 6):
            sheet = Image.new('RGB', (444*3, 630*2), '#ddd8d3')
            for j, thumb in enumerate(thumbs[start:start+6]):
                sheet.paste(thumb, ((j%3)*444, (j//3)*630))
            sheet.save(inspection / f'folha-{start//6+1}.png')
        (inspection / 'auditoria.json').write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding='utf-8')
    pdf.close()
    return result


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--pdf', action='store_true')
    parser.add_argument('--inspecao', type=Path)
    args = parser.parse_args()
    report = {'fonte': build()}
    if args.pdf:
        report['pdf'] = export(args.inspecao)
    print(json.dumps(report, ensure_ascii=False, indent=2))
