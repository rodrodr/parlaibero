#!/usr/bin/env python3
"""Genera src/i18n/<lang>.json desde docs/02_COPY_<lang>.md.

El Markdown del copy es la FUENTE editable; el JSON es GENERADO y no se toca a mano.
Una unidad de texto empieza en su clave `<!-- clave -->` y acaba en la siguiente clave, un
encabezado, una nota de diseño (`>`), una regla (`---`), un rótulo editorial (una línea ENTERA en
negrita, como «**Huecos rellenos · figura de la voz**») o el anexo A. `↺` marca una frase fija
repetida: todas sus apariciones deben ser idénticas, o el script falla.

Uso:  python3 scripts/copy2i18n.py es            (escribe src/i18n/es.json)
      python3 scripts/copy2i18n.py es --check    (solo comprueba; no escribe)
"""
import json, re, sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
CLAVE = re.compile(r'^<!--\s*(↺\s*)?([A-Za-z0-9_.\-]+)\s*-->\s*(.*)$')
# Un rótulo editorial del copy: no es texto para el lector. Se colaba al final de la clave anterior
# (comun.leame.contacto, fig.voz.salvedad). Ninguna unidad legítima es una sola línea toda en negrita.
ROTULO = re.compile(r'^\*\*[^*]+\*\*$')


def unidades(md: str):
    fin = md.find('\n## Anexo A')
    lineas = (md if fin < 0 else md[:fin]).split('\n')
    actual, buf, en_codigo = None, [], False
    for ln in lineas:
        s = ln.rstrip()
        if s.lstrip().startswith('```'):
            en_codigo = not en_codigo
            if actual: buf.append(s)
            continue
        m = None if en_codigo else CLAVE.match(s.strip())
        if m:
            if actual: yield actual, buf
            actual, buf = (m.group(2), bool(m.group(1))), ([m.group(3)] if m.group(3) else [])
            continue
        if not en_codigo and (s.startswith('#') or s.startswith('>') or s.strip() == '---' or ROTULO.match(s.strip())):
            if actual: yield actual, buf
            actual, buf = None, []
            continue
        if actual: buf.append(s)
    if actual: yield actual, buf


def main():
    lang = sys.argv[1] if len(sys.argv) > 1 else 'es'
    solo_check = '--check' in sys.argv
    origen = RAIZ / 'docs' / ('02_COPY_es.md' if lang == 'es' else f'03_COPY_{lang}.md')
    md = origen.read_text(encoding='utf-8')
    dic, errores = {}, []
    for (clave, fija), buf in unidades(md):
        texto = '\n'.join(buf).strip()
        if not texto:
            errores.append(f'vacía: {clave}'); continue
        if clave in dic and dic[clave] != texto:
            errores.append(f'la frase {"fija " if fija else ""}«{clave}» aparece con dos redacciones distintas')
        dic.setdefault(clave, texto)
    if errores:
        print('\n'.join('✗ ' + e for e in errores)); sys.exit(1)
    if not solo_check:
        destino = RAIZ / 'src' / 'i18n' / f'{lang}.json'
        destino.parent.mkdir(parents=True, exist_ok=True)
        destino.write_text(json.dumps(dic, ensure_ascii=False, indent=1, sort_keys=True) + '\n', encoding='utf-8')
    print(f'✓ {lang}: {len(dic)} claves desde {origen.name}' + ('' if solo_check else ' → src/i18n/' + lang + '.json'))


if __name__ == '__main__':
    main()
