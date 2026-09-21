#!/usr/bin/env python3
"""Genera docs/02_COPY_es.lectura.md: el copy con las cifras de HOY ya puestas, para leerlo sin marcadores.

Es una COPIA DE LECTURA: se genera y no se edita; las correcciones van en docs/02_COPY_es.md. Los valores salen de
src/data/ (lo que exporta diaries/scripts/exportar_sitio.py), igual que en el sitio, así que lo que se lee aquí es lo
que el sitio pintará. Lo que queda entre ⟦corchetes dobles⟧ aún no tiene valor: lo da el investigador o es un comodín
de plantilla (`<iso>`).

Uso:  python3 scripts/copy_lectura.py
"""
import json, re
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
D = RAIZ / 'src' / 'data'
LETRA = ['cero', 'una', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce',
         'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuna']
MES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']


def entero(x): return f'{int(round(x)):,}'.replace(',', '.')
def pct(x, dec=2): return f'{100 * x:.{dec}f}'.replace('.', ',') + ' %'
def fecha_larga(s): y, m, d = s.split('-'); return f'{int(d)} de {MES[int(m) - 1]} de {y}'
def peso(b):
    mb = b / 1048576
    return (f'{mb / 1024:.1f}'.replace('.', ',') + ' GB') if mb >= 1024 else f'{mb:.0f} MB'


def main():
    cifras = json.loads((D / 'cifras.json').read_text(encoding='utf-8'))
    paises = {p['iso']: p for p in json.loads((D / 'paises.json').read_text(encoding='utf-8'))}
    eventos = {f"{e['iso']}-{e['date']}": e for e in json.loads((D / 'eventos.json').read_text(encoding='utf-8'))}
    es = json.loads((RAIZ / 'src/i18n/es.json').read_text(encoding='utf-8'))

    def de_pais(p, campo):
        simple = {'nombre': p['nombre']['es'], 'camara': p['camara'], 'diario': p['diario'], 'inicio': p['inicio'], 'fin': p['fin'],
                  'sesiones.P': entero(p['sesiones']), 'filas.P': entero(p['filas']), 'habla.L': entero(p['habla']),
                  'bruta': pct(p['vinculados'] / p['habla']), 'efectiva': pct(p['vinculados'] / p['den_efectivo']), 'noescano': pct(p['no_escano'] / p['habla']),
                  'csv': peso(p['csv_bytes']), 'doi': p['doi'], 'version': 'v' + p['version'], 'n_limitaciones': p['n_limitaciones'],
                  'huecos_rangos': ', '.join(str(a) if a == b else f'{a}–{b}' for a, b in p['huecos'])}
        if campo in simple: return simple[campo]
        m = re.match(r'palF\.(\d{4}s|primera|ultima)\.(pct|n|den)$', campo)
        if m:
            decs = list(p['voz']); dec = decs[0] if m.group(1) == 'primera' else decs[-1] if m.group(1) == 'ultima' else m.group(1)
            b = p['voz'].get(dec, {}).get('palabras')
            return None if not b else pct(b['v']) if m.group(2) == 'pct' else entero(b[m.group(2)])
        return None

    def resuelve(m):
        clave, _, fmt = m.group(1).partition('|'); clave = clave.strip().removeprefix('NUEVO:'); fmt = fmt.strip()
        c = cifras.get(clave); v = None
        if c:
            t, x = c['t'], c['v']
            v = (x['es'] if t == 'i18n' else entero(x) if t == 'int' else pct(x, c.get('dec', 2)) if t == 'pct' else peso(x) if t == 'bytes'
                 else f'{x:.1f}'.replace('.', ',') if t == 'ratio' else (f'{x:g}'.replace('.', ',') + ' s') if t == 'seg' else x)
            if fmt == 'letra' and t == 'int' and 0 <= x < len(LETRA): v = LETRA[x]
            if fmt == 'fecha_larga': v = fecha_larga(str(x))
        elif (mm := re.match(r'pais\.([a-z]{2})\.(.+)$', clave)) and mm.group(1) in paises:
            v = de_pais(paises[mm.group(1)], mm.group(2))
            if fmt == 'letra' and isinstance(v, int) and v < len(LETRA): v = LETRA[v]
        elif (mm := re.match(r'evento\.([a-z]{2}-\d{4}-\d{2}-\d{2})\.(\w+)$', clave)) and mm.group(1) in eventos:
            e = eventos[mm.group(1)]
            v = {'filas': entero(e['filas']), 'fecha': fecha_larga(e['date']) if fmt == 'fecha_larga' else e['date'],
                 'que_paso': es.get('eventos.' + mm.group(1))}.get(mm.group(2))
        return '⟦' + clave + '⟧' if v is None else str(v)

    copy = (RAIZ / 'docs/02_COPY_es.md').read_text(encoding='utf-8')
    total = len(re.findall(r'\{\{[^{}]+\}\}', copy))
    salida = re.sub(r'\{\{([^{}]+)\}\}', resuelve, copy)
    aviso = ('> ⚠ **VERSIÓN DE LECTURA — GENERADA, NO SE EDITA** (`python3 scripts/copy_lectura.py`). Es `02_COPY_es.md` con las cifras de hoy ya '
             f'puestas (medidas el {cifras["medido_el"]["v"]}). Lo que sigue entre ⟦corchetes dobles⟧ aún no tiene valor: lo da usted, o es un comodín '
             'de plantilla. Las correcciones se hacen en `02_COPY_es.md`.\n\n')
    (RAIZ / 'docs/02_COPY_es.lectura.md').write_text(aviso + salida, encoding='utf-8')
    print(f'✓ docs/02_COPY_es.lectura.md · {total} marcadores, {len(re.findall(r"⟦[^⟧]+⟧", salida))} sin valor')


if __name__ == '__main__':
    main()
