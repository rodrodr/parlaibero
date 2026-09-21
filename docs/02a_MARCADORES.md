# Catálogo de marcadores del copy

**Generado el 2026-09-21** desde `diaries/docs/_scrollytelling/parlaibero.data.json` (medido el 2026-09-07). **No se edita a mano.**
Es la especificación de `provenance.json`: cuando exista `diaries/scripts/exportar_sitio.py`, este fichero sobra y se borra.

**Regla del copy:** ningún número se teclea. Se escribe `{{clave}}` y el build lo resuelve y lo formatea una vez. Los valores de abajo son los de HOY y están para que la frase concuerde (singular, plural, género), no para copiarlos.
Claves de fuente: **P** edición depositada (lo que devuelve el DOI) · **L** bloque `linkage` de `corpus_info.json` · **C** canónicos de trabajo · **M** monografía · **D** `dois.json` · **CALC** aritmética sobre las anteriores.

## 0. Convenciones fijadas al redactar el copy (2026-09-21)

- **Unidad de peso:** la de Harvard Dataverse, que divide por 1.024 y rotula KB/MB/GB (comprobado: `corpus_info.json`, 17.645 bytes → «17.2 KB»). El Salvador, 103.092.395 bytes → **98 MB**. Desde 1.024 MB, en GB con un decimal.
- **Edición de datos** = fecha de la versión publicada (2026-09-07), NO `meta.edicion_depositada` (2026-09-04).
- **Formatos:** `|letra` escribe el número en palabras y **capitaliza a principio de frase**; `|fecha_larga`; `|peso`. Subcampos `.n` · `.pct` · `.den` · `.pais`.
- La lista completa de marcadores nuevos que pide el copy está en `02_COPY_es.md`, anexo B. **Ninguno exige medir nada nuevo en `diaries`.**

## 1. Colección

| marcador | valor hoy | fuente | nota |
|---|---:|---|---|
| `{{corpus.n}}` | 16 | CALC | cámaras con corpus |
| `{{universo.n}}` | 21 | M §2.2 | 19 Estados latinoamericanos de lengua española o portuguesa + España + Portugal |
| `{{ausentes.n}}` | 5 | M §2.2 |  |
| `{{rejilla.desde}}` | 1976 | C |  |
| `{{rejilla.hasta}}` | 2025 | C | EC y GT tienen sesiones de 2026, fuera de la rejilla |
| `{{rejilla.llenas}}` | 527 | CALC | celdas país-año con al menos una sesión |
| `{{rejilla.total}}` | 800 | CALC |  |
| `{{filas.P}}` | 10.091.060 | P | cifra de cabecera; la canónica es 10.091.210 |
| `{{sesiones.P}}` | 52.718 | P |  |
| `{{primera.P}}` | 1976-06-03 | P | Portugal |
| `{{ultima.P}}` | 2026-01-14 | P |  |
| `{{habla.L}}` | 9.868.087 | L | turnos de habla; Σ `speech_rows` |
| `{{vinculados.L}}` | 8.590.210 | L | turnos con diputado identificado |
| `{{vinc.bruta}}` | 87,05 % | CALC | 8.590.210 / 9.868.087 |
| `{{vinc.efectiva}}` | 98,12 % | CALC | 8.590.210 / 8.754.495; descuenta a quien no puede tener escaño Y a las voces colectivas |
| `{{novinc.n}}` | 1.277.877 | CALC | turnos de habla sin diputado |
| `{{novinc.noescano}}` | 962.878 · 75,35 % | L | no pueden ocupar escaño |
| `{{novinc.colectiva}}` | 150.714 · 11,79 % | L | voz colectiva o anónima |
| `{{novinc.laguna}}` | 164.285 · 12,86 % | CALC | laguna propia del corpus |
| `{{palabras_habla.C}}` | 1.633.738.332 | C | ≈ 1.634 millones; decir SIEMPRE «de habla» |
| `{{prolegomena.C}}` | 51.741 | C | carátulas, sumarios y pases de lista conservados; 5,1 % del texto (M §6.7) |
| `{{nohabla.C}}` | 222.975 | C | filas declaradas `dm_speech = 0` |
| `{{padron.personas}}` | 37.523 | C |  |
| `{{padron.tramos}}` | 70.570 | C |  |
| `{{partidos.n}}` | 1.391 | C |  |
| `{{oradores.C}}` | 24.868 | C | ⚠ NO viaja a Inicio: circula con tres valores |
| `{{decada.n_corpus}}` | 3 · 7 · 11 · 15 · 16 · 16 | C | cámaras presentes en los 1970s…2020s |
| `{{sexo.exactitud}}` | 98,98 % | M ap. D.4 | sobre 38.372 filas de revisión humana |
| `{{sexo.exactitud_h}}` | 99,54 % | M ap. D.4 |  |
| `{{sexo.exactitud_m}}` | 97,43 % | M ap. D.4 |  |
| `{{sexo.razon_error}}` | 5,6 × | CALC | error en mujeres / error en hombres |
| `{{sexo.padrones_auditados}}` | 11 | M ap. D.4 | CO, CR, DO, ES, GT, MX, PA, PT, PY, SV, UY |
| `{{sexo.padrones_sin_auditar}}` | 5 | CALC | AR, BR, CL, EC, PE |
| `{{turno.mediana_min}}` | 11 (UY) | C | palabras por turno |
| `{{turno.mediana_max}}` | 92 (SV) | C |  |
| `{{turno.n_bajo_30}}` | 11 | C | cámaras con mediana inferior a 30 palabras |
| `{{ocr.fragmentos_retirados}}` | 1.949 | M §6.6 y §9.7 | en UY, EC, PA, DO; clase ACOTADA, no cerrada |
| `{{validacion.fuga}}` | 0,5 % [0,09–2,78] | M §7.4 | fuga del filtro PASS/FLAG: 1 de 200; Wilson 95 %; ejecutada el 2026-07-31, ANTES del reproceso y SIN Ecuador |
| `{{validacion.muestra}}` | 300 × 15 | M §7.4 | filas por país × países |
| `{{dois.n}}` | 16 | D |  |
| `{{dois.n_v2}}` | 15 | D | PE está en v1.0 |
| `{{paquete.ficheros}}` | 17 | M §10.2 | 2 de datos + 15 de documentación (12 en EN/ES/PT + 3 legibles por máquina) |
| `{{columnas.n}}` | 16 | C |  |

## 2. Por cámara

Forma del marcador: `{{pais.<iso>.<campo>}}`. La voz femenina es **en palabras** (`palF`), con denominador = palabras de diputados con sexo conocido. ⚠ Cámaras sin auditar: se dibujan distinto y se dice.

| iso | nombre | cámara | inicio–fin | huecos | sesiones.P | filas.P | bruta | efectiva | no escaño | mediana | CSV | sexo auditado | versión | DOI |
|---|---|---|---|---|---:|---:|---:|---:|---:|---:|---:|---|---|---|
| pt | Portugal | Assembleia da República | 1976–2025 | — | 4.939 | 1.559.320 | 85,54 % | 98,32 % | 4,14 % | 18 | 1144 MB | sí | v2.0 | `10.7910/DVN/VRPUFU` |
| es | España | Congreso de los Diputados | 1977–2025 | — | 3.559 | 562.514 | 96,85 % | 99,41 % | 2,57 % | 40 | 1009 MB | sí | v2.0 | `10.7910/DVN/OKHGAB` |
| ec | Ecuador | Cámara Nacional de Representantes / Congreso Nacional / Asambleas Constituyentes / Asamblea Nacional | 1979–2025 | — | 6.105 | 1.292.596 | 68,76 % | 94,78 % | 27,46 % | 15 | 1100 MB | **NO** | v2.0 | `10.7910/DVN/M2QJN6` |
| ar | Argentina | Cámara de Diputados de la Nación | 1983–2025 | 1991, 1992, 1993, 1994, 1995, 1996, 1… | 1.086 | 258.808 | 90,78 % | 97,16 % | 6,56 % | 23 | 841 MB | **NO** | v2.0 | `10.7910/DVN/IVNYID` |
| uy | Uruguay | Cámara de Representantes | 1985–2025 | — | 2.813 | 424.097 | 96,41 % | 97,68 % | 0,81 % | 11 | 929 MB | sí | v2.0 | `10.7910/DVN/KI1AOC` |
| mx | México | Cámara de Diputados | 1988–2025 | — | 2.537 | 633.474 | 96,18 % | 98,21 % | 2,07 % | 30 | 1573 MB | sí | v2.0 | `10.7910/DVN/0IS1YE` |
| py | Paraguay | Cámara de Diputados | 1988–2025 | 2001, 2002, 2006, 2007, 2011, 2012 | 1.275 | 362.945 | 76,59 % | 93,91 % | 18,44 % | 23 | 252 MB | sí | v2.0 | `10.7910/DVN/PDX8GA` |
| cl | Chile | Cámara de Diputadas y Diputados | 1990–2025 | — | 4.336 | 596.729 | 95,07 % | 99,57 % | 3,37 % | 27 | 957 MB | **NO** | v2.0 | `10.7910/DVN/IKBNRL` |
| cr | Costa Rica | Asamblea Legislativa | 1994–2025 | — | 5.343 | 381.976 | 95,66 % | 99,79 % | 4,14 % | 49 | 655 MB | sí | v2.0 | `10.7910/DVN/W6UAHQ` |
| pe | Perú | Congreso de la República | 1995–2025 | — | 3.061 | 852.560 | 88,74 % | 99,02 % | 9,86 % | 23 | 798 MB | **NO** | v1.0 | `10.7910/DVN/7MK94V` |
| pa | Panamá | Asamblea Nacional (Legislativa hasta 2004) | 1996–2025 | — | 3.638 | 511.962 | 67,93 % | 98,00 % | 30,68 % | 16 | 465 MB | sí | v2.0 | `10.7910/DVN/Y8FUSX` |
| co | Colombia | Cámara de Representantes | 2000–2025 | — | 1.608 | 464.805 | 69,36 % | 96,79 % | 28,35 % | 23 | 483 MB | sí | v2.0 | `10.7910/DVN/TYYERX` |
| gt | Guatemala | Congreso de la República | 2000–2026 | — | 2.039 | 253.759 | 96,38 % | 99,80 % | 3,43 % | 18 | 269 MB | sí | v2.0 | `10.7910/DVN/NH5TTC` |
| do | República Dominicana | Cámara de Diputados | 2001–2025 | — | 2.225 | 229.325 | 98,50 % | 98,88 % | 0,38 % | 50 | 523 MB | sí | v2.0 | `10.7910/DVN/DZKXUG` |
| br | Brasil | Câmara dos Deputados | 2003–2025 | — | 7.731 | 1.657.113 | 98,04 % | 99,10 % | 1,07 % | 15 | 1457 MB | **NO** | v2.0 | `10.7910/DVN/VTXNW3` |
| sv | El Salvador | Asamblea Legislativa | 2018–2025 | — | 423 | 49.077 | 98,38 % | 99,94 % | 1,56 % | 92 | 98 MB | sí | v2.0 | `10.7910/DVN/MUJU6A` |

### Voz femenina en palabras, por década — `{{pais.<iso>.palF.<década>.pct}}` · `.n` · `.den`

Décadas: `1970s` … `2020s`; alias `primera` y `ultima`. **`n` y `den` son PALABRAS** de diputadas y de diputados y diputadas con sexo conocido (`paises[].d*.pct_F_palabras.{v,n,den}`). *Corregido el 2026-09-21: la primera versión imprimía oradores.*

| iso | 1970s | 1980s | 1990s | 2000s | 2010s | 2020s |
|---|---:|---:|---:|---:|---:|---:|
| pt | 4,40 % · 417.649 de 9.490.002 | 6,02 % · 2.033.981 de 33.811.479 | 10,05 % · 2.688.607 de 26.748.967 | 16,37 % · 4.050.670 de 24.750.897 | 32,50 % · 7.901.736 de 24.313.683 | 33,50 % · 4.939.918 de 14.744.562 |
| es | 2,47 % · 171.994 de 6.957.442 | 3,45 % · 870.925 de 25.219.651 | 13,40 % · 3.760.199 de 28.062.547 | 24,90 % · 7.148.025 de 28.706.980 | 30,56 % · 7.805.237 de 25.540.474 | 42,13 % · 8.603.279 de 20.419.933 |
| ec | 0,23 % · 3.953 de 1.729.603 | 1,42 % · 292.507 de 20.549.543 | 4,54 % · 1.071.862 de 23.616.868 | 11,76 % · 2.740.550 de 23.311.480 | 33,11 % · 5.112.096 de 15.437.949 | 40,30 % · 3.950.418 de 9.801.985 |
| ar | · | 0,74 % · 185.553 de 25.205.994 | 2,10 % · 5.013 de 239.111 | 16,18 % · 4.931.428 de 30.469.254 | 24,92 % · 5.782.681 de 23.205.281 | 28,80 % · 2.727.506 de 9.471.802 |
| uy | · | 0,25 % · 31.342 de 12.733.594 | 2,45 % · 697.967 de 28.488.302 | 10,03 % · 3.319.670 de 33.087.027 | 19,72 % · 6.145.822 de 31.172.589 | 23,41 % · 4.441.241 de 18.967.908 |
| mx | · | 14,31 % · 812.894 de 5.682.374 | 17,37 % · 3.820.131 de 21.994.326 | 37,46 % · 28.492.280 de 76.070.209 | 50,94 % · 43.060.198 de 84.533.988 | 64,91 % · 21.187.802 de 32.642.730 |
| py | · | 1,21 % · 5.238 de 432.238 | 2,01 % · 277.502 de 13.802.228 | 8,63 % · 357.272 de 4.138.788 | 16,75 % · 413.713 de 2.469.304 | 22,29 % · 1.155.003 de 5.181.214 |
| cl | · | · | 6,04 % · 1.567.951 de 25.968.455 | 11,16 % · 3.381.613 de 30.297.125 | 14,65 % · 3.964.352 de 27.068.953 | 26,30 % · 5.204.215 de 19.789.583 |
| cr | · | · | 11,81 % · 1.036.172 de 8.772.729 | 23,37 % · 8.011.846 de 34.285.601 | 23,33 % · 8.507.669 de 36.470.866 | 43,42 % · 6.296.258 de 14.499.819 |
| pe | · | · | 13,67 % · 1.970.025 de 14.415.152 | 17,40 % · 5.933.906 de 34.094.809 | 24,52 % · 6.424.842 de 26.197.692 | 31,55 % · 5.278.354 de 16.730.178 |
| pa | · | · | 10,73 % · 924.545 de 8.612.471 | 11,92 % · 1.965.522 de 16.485.416 | 19,22 % · 2.525.182 de 13.135.828 | 25,44 % · 1.683.806 de 6.619.535 |
| co | · | · | · | 11,63 % · 1.290.717 de 11.094.357 | 12,95 % · 2.001.260 de 15.457.989 | 21,08 % · 2.682.435 de 12.724.204 |
| gt | · | · | · | 16,94 % · 2.991.194 de 17.655.162 | 10,20 % · 954.772 de 9.364.008 | 21,29 % · 1.487.800 de 6.986.985 |
| do | · | · | · | 18,32 % · 1.014.799 de 5.539.817 | 19,81 % · 979.880 de 4.945.222 | 11,58 % · 383.675 de 3.312.909 |
| br | · | · | · | 8,16 % · 6.122.269 de 75.060.136 | 10,55 % · 9.707.697 de 92.050.212 | 20,73 % · 6.696.176 de 32.303.978 |
| sv | · | · | · | · | 23,19 % · 600.875 de 2.591.452 | 35,63 % · 3.971.087 de 11.146.865 |

## 3. Sesiones que el lector conoce (descritas SIN NOMBRES: directiva del 2026-09-21; el texto sale de las claves `eventos.*` del copy) — `{{evento.<iso>-<fecha>.<campo>}}`

| iso | fecha | qué pasó | presente | filas | id_session |
|---|---|---|---|---:|---|
| br | 2016-04-17 | La Cámara admite el proceso de destitución de la presidenta de la República. | sí | 1780 | BR0050590 |
| ec | 1997-02-06 | El Congreso cesa al presidente de la República. | sí | 353 | EC0080072 |
| ec | 2005-04-20 | El Congreso cesa al presidente de la República. | sí | 790 | EC0100390 |
| pe | 2020-11-09 | El Congreso declara la vacancia de la Presidencia de la República. | sí | 481 | PE0080044 |
| ar | 2001-12-21 | Asamblea Legislativa tras la renuncia del presidente de la Nación. | sí | 122 | AR0080044 |
| es | 1981-02-23 | La sesión de investidura interrumpida por el asalto al Congreso. | sí | 28 | ES0020146 |
| py | 2012-06-21 | Juicio político al presidente de la República: cae dentro de un hueco declarado. | **no** | 0 | — |
| py | 2012-06-22 | Destitución del presidente de la República: cae dentro de un hueco declarado. | **no** | 0 | — |

## 4. Estados del universo sin corpus — redacción del investigador (guion, escena 8)

- **Venezuela, Cuba, Nicaragua** — no publican las actas de sus debates.
- **Bolivia** — las publica sin digitalizar.
- **Honduras** — publica resúmenes de lo discutido, no las intervenciones.
