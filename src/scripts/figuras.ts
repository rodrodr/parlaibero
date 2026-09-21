/**
 * Isla mínima de las figuras. SOLO AÑADE: la nota emergente, el recorrido de los años con las flechas y el enlace
 * «Ver turnos y oradoras» de la página. Sin este script las figuras se leen enteras: las pestañas y las medidas son
 * radios con CSS, cada fila de la rejilla es un enlace y todos los valores están en la pestaña «Tabla».
 *
 * Ninguna cifra se formatea aquí: el build ya las dejó escritas, en la lengua de la página, en `data-*`.
 *  · `[data-tip]`  → texto completo de la nota (puntos de la voz, huecos de la rejilla).
 *  · `[data-a]`    → celda de la rejilla: la nota se compone con `data-plantilla` de la figura y `data-pais` de la fila.
 */

const SEL_NOTA = '[data-tip], [data-a]';

let nota: HTMLDivElement | null = null;
let viva: HTMLDivElement | null = null;

/** La nota y la región viva se crean una sola vez y solo si hay alguna figura en la página. */
function prepara(): void {
  if (nota) return;
  nota = document.createElement('div');
  nota.className = 'fig-tip';
  nota.hidden = true;
  nota.setAttribute('aria-hidden', 'true'); // quien lee con lector de pantalla lo oye por la región viva, una vez
  viva = document.createElement('div');
  viva.className = 'sr-only';
  viva.setAttribute('aria-live', 'polite');
  document.body.append(nota, viva);
}

function textoDe(el: Element): string {
  const escrito = el.getAttribute('data-tip');
  if (escrito) return escrito;
  const figura = el.closest<HTMLElement>('[data-plantilla]');
  const fila = el.closest<HTMLElement>('[data-pais]');
  if (!figura || !fila) return '';
  const valores: Record<string, string> = {
    pais: fila.dataset.pais ?? '', a: el.getAttribute('data-a') ?? '', s: el.getAttribute('data-s') ?? '', h: el.getAttribute('data-h') ?? '',
  };
  return (figura.dataset.plantilla ?? '').replace(/\{(pais|a|s|h)\}/g, (_todo, k: string) => valores[k]);
}

function muestra(el: Element, anuncia = false): void {
  prepara();
  const texto = textoDe(el);
  if (!nota || !texto) return oculta();
  nota.textContent = texto;
  nota.hidden = false;
  // Se ancla al elemento, no al puntero: así sirve igual para el ratón y para el teclado.
  const caja = el.getBoundingClientRect();
  const ancho = nota.offsetWidth, alto = nota.offsetHeight, margen = 8;
  const x = Math.min(Math.max(caja.left + caja.width / 2 - ancho / 2, margen), window.innerWidth - ancho - margen);
  const arriba = caja.top - alto - margen;
  const y = arriba >= margen ? arriba : caja.bottom + margen;
  nota.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
  if (anuncia && viva) viva.textContent = texto;
}

function oculta(): void {
  if (nota) nota.hidden = true;
}

// ── cursor de la rejilla: el recuadro que marca la celda activa, con ratón o con flechas ─────────────────────
function cursor(celda: Element | null, fila?: Element | null): void {
  // Son dos rectángulos (la tinta y su halo de papel): se mueven juntos.
  (celda ?? fila)?.closest('a')?.querySelectorAll<SVGRectElement>('.rj-cursor').forEach((marca) => {
    if (!celda) return marca.removeAttribute('data-visible');
    marca.setAttribute('x', celda.getAttribute('data-x') ?? '0');
    marca.setAttribute('width', celda.getAttribute('data-ancho') ?? '1');
    marca.setAttribute('data-visible', '');
  });
}

function ratones(figura: HTMLElement): void {
  let ultima: Element | null = null;
  figura.addEventListener('pointerover', (e) => {
    const el = (e.target as Element).closest?.(SEL_NOTA) ?? null;
    if (el === ultima) return;
    if (ultima?.hasAttribute('data-celda')) cursor(null, ultima);
    ultima = el;
    if (!el) return oculta();
    if (el.hasAttribute('data-celda')) cursor(el);
    muestra(el);
  });
  figura.addEventListener('pointerleave', () => {
    if (ultima?.hasAttribute('data-celda')) cursor(null, ultima);
    ultima = null;
    oculta();
  });
}

/** Una parada de tabulación por cámara (el enlace de la fila); dentro, ← → Inicio Fin recorren sus años. */
function teclado(rejilla: HTMLElement): void {
  const activa = new WeakMap<Element, number>();
  const celdasDe = (fila: Element) =>
    [...fila.querySelectorAll('[data-celda]')].sort((a, b) => Number(a.getAttribute('data-x')) - Number(b.getAttribute('data-x')));

  rejilla.addEventListener('keydown', (e) => {
    const fila = (e.target as Element).closest?.('a[data-pais]');
    if (!fila || e.altKey || e.ctrlKey || e.metaKey) return;
    const celdas = celdasDe(fila);
    if (!celdas.length) return;
    const i = activa.get(fila) ?? -1;
    let j: number;
    switch (e.key) {
      case 'ArrowRight': j = Math.min(i + 1, celdas.length - 1); break;
      case 'ArrowLeft': j = i < 0 ? celdas.length - 1 : Math.max(i - 1, 0); break;
      case 'Home': j = 0; break;
      case 'End': j = celdas.length - 1; break;
      case 'Escape': activa.delete(fila); cursor(null, fila); oculta(); return;
      default: return;
    }
    e.preventDefault();
    activa.set(fila, j);
    cursor(celdas[j]);
    muestra(celdas[j], true);
  });
  rejilla.addEventListener('focusout', (e) => {
    const fila = (e.target as Element).closest?.('a[data-pais]');
    if (!fila) return;
    activa.delete(fila);
    cursor(null, fila);
    oculta();
  });

  // La frase «con el teclado…» solo es verdad desde ahora: se enseña y se suma a la descripción de la figura.
  rejilla.querySelectorAll<HTMLElement>('[data-solo-isla]').forEach((aviso) => {
    aviso.hidden = false;
    if (aviso.id) rejilla.setAttribute('aria-describedby', `${rejilla.getAttribute('aria-describedby') ?? ''} ${aviso.id}`.trim());
  });
}

/** «Ver turnos y oradoras», escrito en la página: abre la segunda medida sobre la misma figura y lleva allí el foco. */
function enlaceMedidas(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[data-voz-medidas]').forEach((enlace) => {
    enlace.addEventListener('click', () => {
      const figura = document.querySelector<HTMLElement>('[data-figura="voz"]');
      const medidas = figura?.querySelectorAll<HTMLInputElement>('input[data-conmuta]');
      const grafico = figura?.querySelector<HTMLInputElement>('.pest-radio');
      if (!medidas || medidas.length < 2) return;
      if (grafico) grafico.checked = true;
      // Si ya se había elegido turnos u oradoras, se respeta; si no, se abre la primera de las dos.
      const elegida = [...medidas].find((m, k) => k > 0 && m.checked) ?? medidas[1];
      elegida.checked = true;
      // El ancla hace su salto; el foco va después, sin otro salto.
      requestAnimationFrame(() => elegida.focus({ preventScroll: true }));
    });
  });
}

function arranca(): void {
  document.querySelectorAll<HTMLElement>('[data-figura]:not([data-isla])').forEach((figura) => {
    figura.setAttribute('data-isla', '');
    ratones(figura);
    figura.querySelectorAll<HTMLElement>('[data-rejilla]').forEach(teclado);
  });
  if (!document.documentElement.hasAttribute('data-isla-figuras')) {
    document.documentElement.setAttribute('data-isla-figuras', '');
    enlaceMedidas();
    // La nota que abre el puntero también se cierra con Escape, sin mover el puntero (WCAG 1.4.13); la del recorrido
    // por teclado ya lo hacía, pero solo con el foco dentro de la rejilla.
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') oculta(); });
    // Una nota anclada a su celda no debe quedarse flotando si la página se mueve debajo.
    window.addEventListener('scroll', oculta, { passive: true });
    window.addEventListener('resize', oculta, { passive: true });
  }
}

arranca();
