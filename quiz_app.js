// ============================================================
// QUIZ UAX — Lógica compartida v2 (+ Modo Código)
// Requiere: window.BANCO (objeto UF->array), window.UFS (array config)
// Opcional: window.EJERCICIOS_CODIGO (ejercicios de código)
// ============================================================

(function () {
  // ── Estado ──────────────────────────────────────────────
  const S = {
    modo: 'test',        // 'test' o 'codigo'
    ufsSeleccionadas: [],
    cantidad: 10,
    preguntas: [],       // {p, ops, ok, exp, _uf, _shuffled_ok} o {codigo, lenguaje, ...}
    idx: 0,
    respuestas: [],      // null | true | false
    respondida: false,
    historial: [],       // {uf, ok} por pregunta respondida
  };

  // ── Helpers ──────────────────────────────────────────────
  const $  = id => document.getElementById(id);
  const sh = arr => arr.slice().sort(() => Math.random() - 0.5);

  // Normaliza formato antiguo {r, e} al nuevo {ok, exp}
  function normalizar(q) {
    return {
      ...q,
      ok:  q.ok  !== undefined ? q.ok  : q.r,
      exp: q.exp !== undefined ? q.exp : q.e,
    };
  }

  function mezclarOpciones(q) {
    const n = normalizar(q);
    const indices = sh([...Array(n.ops.length).keys()]);
    const newOps  = indices.map(i => n.ops[i]);
    const newOk   = indices.indexOf(n.ok);
    return { ...n, ops: newOps, ok: newOk };
  }

  // ── Init ─────────────────────────────────────────────────
  function init() {
    // Badge total
    const total = Object.values(BANCO).flat().length;
    const badge = $('total-badge');
    if (badge) badge.textContent = total + ' preguntas';

    // Botones de modo (test / codigo)
    const btnsModo = document.querySelectorAll('.btn-mode');
    btnsModo.forEach(btn => {
      btn.addEventListener('click', () => {
        btnsModo.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        S.modo = btn.dataset.mode;
        actualizarContadores();
      });
    });

    // Botón "Todo el temario"
    const btnTodo = $('btn-todo');
    if (btnTodo) {
      btnTodo.addEventListener('click', () => {
        S.ufsSeleccionadas = Object.keys(BANCO);
        document.querySelectorAll('.btn-uf').forEach(b => b.classList.add('active'));
        btnTodo.classList.add('active');
        actualizarContadores();
      });
    }

    // Botones UF
    document.querySelectorAll('.btn-uf').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btnTodo) btnTodo.classList.remove('active');
        toggleUF(btn);
      });
    });

    // Cantidad
    document.querySelectorAll('.btn-cantidad').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.btn-cantidad').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        S.cantidad = parseInt(btn.dataset.n);
      });
    });

    $('btn-start').addEventListener('click', arrancar);
    $('btn-siguiente').addEventListener('click', siguiente);
    $('btn-repetir').addEventListener('click', repetir);
    $('btn-nuevo').addEventListener('click', volverConfig);
    $('btn-volver').addEventListener('click', () => { window.location.href = '../index.html'; });

    // Seleccionar primera UF por defecto + cantidad 10
    const primer = document.querySelector('.btn-uf');
    if (primer) { 
      primer.classList.add('active'); 
      const uf = primer.dataset.uf;
      S.ufsSeleccionadas = uf.includes('-') ? uf.split('-') : [uf];
    }
    const c10 = document.querySelector('.btn-cantidad[data-n="10"]');
    if (c10) { c10.classList.add('active'); S.cantidad = 10; }
    actualizarContadores();
  }

  function toggleUF(btn) {
    const uf = btn.dataset.uf;
    
    // Expandir UFs compuestas (ej: "UF2-UF3" → ["UF2", "UF3"])
    const ufsExpanded = uf.includes('-') ? uf.split('-') : [uf];
    
    if (btn.classList.contains('active')) {
      // Deselect only if there's more than one selected
      if (S.ufsSeleccionadas.length > ufsExpanded.length) {
        btn.classList.remove('active');
        S.ufsSeleccionadas = S.ufsSeleccionadas.filter(u => !ufsExpanded.includes(u));
      }
    } else {
      btn.classList.add('active');
      ufsExpanded.forEach(u => {
        if (!S.ufsSeleccionadas.includes(u)) {
          S.ufsSeleccionadas.push(u);
        }
      });
    }
    actualizarContadores();
  }

  function actualizarContadores() {
    let total = 0;
    
    if (S.modo === 'test') {
      // Modo test normal
      S.ufsSeleccionadas.forEach(uf => { total += (BANCO[uf] || []).length; });
    } else if (S.modo === 'codigo') {
      // Modo código: contar ejercicios disponibles según categoría
      if (typeof EJERCICIOS_CODIGO !== 'undefined') {
        const category = window.CODIGO_CATEGORY || 'all';
        
        if (category === 'all') {
          // Todos los ejercicios
          Object.values(EJERCICIOS_CODIGO).forEach(arr => {
            total += arr.length;
          });
        } else if (category === 'php') {
          // Solo ejercicios de PHP
          total += (EJERCICIOS_CODIGO.PHP_ERRORES || []).length;
          total += (EJERCICIOS_CODIGO.PHP_AUTOCOMPLETAR || []).length;
          total += (EJERCICIOS_CODIGO.PHP_QUE_HACE || []).length;
        } else if (category === 'laravel') {
          // Solo ejercicios de Laravel
          total += (EJERCICIOS_CODIGO.LARAVEL_ERRORES || []).length;
          total += (EJERCICIOS_CODIGO.LARAVEL_AUTOCOMPLETAR || []).length;
        } else if (category === 'mongodb') {
          // Solo ejercicios de MongoDB
          total += (EJERCICIOS_CODIGO.MONGODB_SINTAXIS || []).length;
        }
      }
    }
    
    const inf = $('pool-info');
    if (inf) {
      const tipo = S.modo === 'codigo' ? 'ejercicios' : 'preguntas';
      inf.textContent = total + ' ' + tipo + ' disponibles';
    }
  }

  // ── Arrancar ──────────────────────────────────────────────
  function arrancar() {
    if (S.ufsSeleccionadas.length === 0 && S.modo === 'test') return;

    let pool = [];
    
    if (S.modo === 'test') {
      // Modo test normal
      S.ufsSeleccionadas.forEach(uf => {
        (BANCO[uf] || []).forEach(q => pool.push({ ...q, _uf: uf }));
      });
      pool = sh(pool).slice(0, Math.min(S.cantidad, pool.length));
      S.preguntas = pool.map(mezclarOpciones);
      
    } else if (S.modo === 'codigo') {
      // Modo código: filtrar por categoría
      if (typeof EJERCICIOS_CODIGO !== 'undefined') {
        const category = window.CODIGO_CATEGORY || 'all';
        
        if (category === 'all') {
          // Todos los ejercicios
          Object.values(EJERCICIOS_CODIGO).forEach(categoria => {
            categoria.forEach(ejercicio => {
              pool.push({ ...ejercicio, _uf: ejercicio.lenguaje || 'CÓDIGO' });
            });
          });
        } else if (category === 'php') {
          // Solo PHP
          ['PHP_ERRORES', 'PHP_AUTOCOMPLETAR', 'PHP_QUE_HACE'].forEach(cat => {
            (EJERCICIOS_CODIGO[cat] || []).forEach(ejercicio => {
              pool.push({ ...ejercicio, _uf: 'PHP' });
            });
          });
        } else if (category === 'laravel') {
          // Solo Laravel
          ['LARAVEL_ERRORES', 'LARAVEL_AUTOCOMPLETAR'].forEach(cat => {
            (EJERCICIOS_CODIGO[cat] || []).forEach(ejercicio => {
              pool.push({ ...ejercicio, _uf: 'Laravel' });
            });
          });
        } else if (category === 'mongodb') {
          // Solo MongoDB
          (EJERCICIOS_CODIGO.MONGODB_SINTAXIS || []).forEach(ejercicio => {
            pool.push({ ...ejercicio, _uf: 'MongoDB' });
          });
        }
        
        pool = sh(pool).slice(0, Math.min(S.cantidad, pool.length));
        
        // En modo código también mezclamos opciones
        S.preguntas = pool.map(q => {
          // Normalizar estructura: enunciado -> p, opciones -> ops, correcta -> ok, explicacion -> exp
          return mezclarOpciones({
            ...q,
            p: q.enunciado,
            ops: q.opciones,
            ok: q.correcta,
            exp: q.explicacion
          });
        });
      }
    }

    S.idx         = 0;
    S.respuestas  = Array(S.preguntas.length).fill(null);
    S.respondida  = false;
    S.historial   = [];

    $('panel-config').style.display  = 'none';
    $('panel-results').style.display = 'none';
    $('panel-quiz').style.display    = 'block';
    renderPregunta();
  }

  // ── Render pregunta ───────────────────────────────────────
  function renderPregunta() {
    const q = S.preguntas[S.idx];
    const n = S.preguntas.length;
    S.respondida = false;

    // Meta
    $('quiz-counter').textContent = `Pregunta ${S.idx + 1} de ${n}`;
    $('progress-fill').style.width = `${(S.idx / n) * 100}%`;

    const ok = S.respuestas.filter(r => r === true).length;
    const ko = S.respuestas.filter(r => r === false).length;
    $('lsc-ok').textContent = `✓ ${ok}`;
    $('lsc-ko').textContent = `✗ ${ko}`;

    // Pregunta
    $('q-uf-pill').textContent = q._uf || 'CÓDIGO';
    $('q-num').textContent     = `${S.idx + 1}/${n}`;
    $('q-text').textContent    = q.p;

    // Mostrar/ocultar bloque de código según el modo (solo si existe el contenedor)
    const codeContainer = $('code-container');
    if (codeContainer) {
      if (S.modo === 'codigo' && q.codigo) {
        codeContainer.style.display = 'block';
        $('code-language').textContent = q.lenguaje || 'PHP';
        $('code-block').textContent = q.codigo;
      } else {
        codeContainer.style.display = 'none';
      }
    }

    const exp = $('explanation');
    exp.textContent = q.exp || '';
    exp.classList.remove('show');

    // Opciones
    const letras = ['A', 'B', 'C', 'D'];
    const cont   = $('options');
    cont.innerHTML = '';
    q.ops.forEach((op, i) => {
      const btn = document.createElement('button');
      btn.className = 'btn-opt';
      btn.innerHTML = `<span class="opt-badge">${letras[i]}</span><span>${op}</span>`;
      btn.addEventListener('click', () => responder(i, btn));
      cont.appendChild(btn);
    });

    const btnSig = $('btn-siguiente');
    btnSig.style.display = 'none';
    btnSig.textContent = S.idx === n - 1 ? 'Ver resultados →' : 'Siguiente →';
  }

  // ── Responder ──────────────────────────────────────────────
  function responder(i, pulsado) {
    if (S.respondida) return;
    S.respondida = true;

    const q      = S.preguntas[S.idx];
    const acierto = i === q.ok;
    S.respuestas[S.idx] = acierto;
    S.historial.push({ uf: q._uf, ok: acierto, q: q.p });

    document.querySelectorAll('.btn-opt').forEach((b, idx) => {
      b.disabled = true;
      if (idx === q.ok) b.classList.add('correct');
      if (idx === i && !acierto) b.classList.add('wrong');
    });

    $('explanation').classList.add('show');
    $('btn-siguiente').style.display = 'flex';
  }

  // ── Siguiente ──────────────────────────────────────────────
  function siguiente() {
    if (!S.respondida) return;
    S.idx++;
    if (S.idx < S.preguntas.length) renderPregunta();
    else mostrarResultados();
  }

  // ── Resultados ─────────────────────────────────────────────
  function mostrarResultados() {
    $('panel-quiz').style.display    = 'none';
    $('panel-results').style.display = 'block';

    const total    = S.preguntas.length;
    const ok       = S.respuestas.filter(r => r === true).length;
    const ko       = S.respuestas.filter(r => r === false).length;
    const sinResp  = S.respuestas.filter(r => r === null).length;
    const pct      = Math.round((ok / total) * 100);
    const nota     = (ok / total * 10).toFixed(1);

    // Porcentaje y nota
    const pctEl = $('res-pct');
    pctEl.textContent = `${pct}%`;

    const notaEl = $('nota-num');
    if (notaEl) notaEl.textContent = nota;

    const notaLabelEl = $('nota-label');
    if (notaLabelEl) {
      notaLabelEl.textContent = nota >= 5 ? '— Aprobado' : '— Suspenso';
      notaLabelEl.style.color = nota >= 5 ? 'var(--accent-bright)' : 'var(--ko-text)';
    }

    const cls = pct >= 75 ? 'high' : pct >= 50 ? 'mid' : 'low';
    pctEl.className = `res-pct ${cls}`;

    const badge = $('res-badge');
    const labels = { high: '✓ APROBADO', mid: '~ CERCA', low: '✗ A REPASAR' };
    badge.textContent = labels[cls];
    badge.className = `res-badge ${cls}`;

    $('res-ok').textContent      = ok;
    $('res-ko').textContent      = ko;
    $('res-sinresp').textContent = sinResp;

    // Guardar progreso en localStorage
    guardarProgreso(ok, total);

    // Recomendaciones
    renderRecomendaciones(pct);

    $('progress-fill').style.width = '100%';
  }

  function renderRecomendaciones(pct) {
    const recCont = $('rec-items');
    if (!recCont) return;

    const solo1UF = S.ufsSeleccionadas.length === 1;

    if (solo1UF) {
      // Modo: UF única — recomendar conceptos
      const uf  = S.ufsSeleccionadas[0];
      const ufInfo = (typeof UFS !== 'undefined' ? UFS : []).find(u => u.id === uf);
      const nombre = ufInfo ? ufInfo.nombre : uf;

      const fallos = S.historial.filter(h => !h.ok);

      recCont.innerHTML = '';
      if (pct === 100) {
        const tipoTexto = S.modo === 'codigo' ? 'ejercicios de código' : 'conceptos';
        recCont.innerHTML = `<div class="rec-item"><div class="rec-dot ok"></div><span>¡Perfecto! Dominas todos los ${tipoTexto} de <strong>${nombre}</strong>. Prueba con más preguntas o cambia de UF.</span></div>`;
      } else if (fallos.length === 0) {
        recCont.innerHTML = `<div class="rec-item"><div class="rec-dot ok"></div><span>Sin fallos registrados en esta sesión.</span></div>`;
      } else {
        const tipoTexto = S.modo === 'codigo' ? 'ejercicios' : 'conceptos';
        const intro = document.createElement('div');
        intro.className = 'rec-item';
        intro.innerHTML = `<div class="rec-dot warn"></div><span>Repasa estos ${tipoTexto} de <strong>${nombre}</strong>:</span>`;
        recCont.appendChild(intro);

        fallos.slice(0, 5).forEach(f => {
          const d = document.createElement('div');
          d.className = 'rec-item';
          d.style.paddingLeft = '16px';
          d.innerHTML = `<div class="rec-dot bad"></div><span style="font-size:0.82rem;color:var(--text-2)">${f.q}</span>`;
          recCont.appendChild(d);
        });

        if (fallos.length > 5) {
          const more = document.createElement('div');
          more.className = 'rec-item';
          more.style.paddingLeft = '16px';
          more.innerHTML = `<div class="rec-dot bad"></div><span style="font-size:0.8rem;color:var(--muted)">…y ${fallos.length - 5} preguntas más sin responder correctamente.</span>`;
          recCont.appendChild(more);
        }
      }
    } else {
      // Modo: múltiples UFs — mostrar rendimiento por UF
      const ufStats = {};
      S.historial.forEach(h => {
        if (!ufStats[h.uf]) ufStats[h.uf] = { ok: 0, total: 0 };
        ufStats[h.uf].total++;
        if (h.ok) ufStats[h.uf].ok++;
      });

      recCont.innerHTML = '';

      // Ordenar de peor a mejor
      const entries = Object.entries(ufStats).sort((a, b) => {
        const pA = a[1].ok / a[1].total;
        const pB = b[1].ok / b[1].total;
        return pA - pB;
      });

      if (entries.length === 0) {
        recCont.innerHTML = '<div class="rec-item"><span>No hay datos suficientes.</span></div>';
        return;
      }

      entries.forEach(([uf, st]) => {
        const p  = Math.round((st.ok / st.total) * 100);
        const cls = p >= 75 ? 'ok' : p >= 50 ? 'warn' : 'bad';
        const msg = p >= 75
          ? `Bien — ${p}% de acierto (${st.ok}/${st.total})`
          : p >= 50
          ? `Regular — ${p}% de acierto. Conviene repasar.`
          : `Flojo — ${p}% de acierto. Dedica más tiempo a esta UF.`;

        const ufInfo = (typeof UFS !== 'undefined' ? UFS : []).find(u => u.id === uf);
        const nombre = ufInfo ? ufInfo.nombre : uf;

        const d = document.createElement('div');
        d.className = 'rec-item';
        d.innerHTML = `<div class="rec-dot ${cls}"></div><span><span class="rec-uf-label">${uf}</span>${nombre} — ${msg}</span>`;
        recCont.appendChild(d);
      });
    }
  }

  // ── Guardar progreso ───────────────────────────────────────
  function guardarProgreso(ok, total) {
    const suffix = S.modo === 'codigo' ? '_codigo' : '';
    const key = 'quiz_stats_' + (window.QUIZ_KEY || 'unknown') + suffix;
    let stats = { ok: 0, total: 0, tests: 0 };
    try {
      const raw = localStorage.getItem(key);
      if (raw) stats = JSON.parse(raw);
    } catch(e) {}
    stats.ok    += ok;
    stats.total += total;
    stats.tests += 1;
    try { localStorage.setItem(key, JSON.stringify(stats)); } catch(e) {}
  }

  // ── Repetir ────────────────────────────────────────────────
  function repetir() {
    S.idx        = 0;
    S.respuestas = Array(S.preguntas.length).fill(null);
    S.respondida = false;
    S.historial  = [];
    S.preguntas  = sh(S.preguntas).map(mezclarOpciones);

    $('panel-results').style.display = 'none';
    $('panel-quiz').style.display    = 'block';
    renderPregunta();
  }

  function volverConfig() {
    $('panel-results').style.display = 'none';
    $('panel-quiz').style.display    = 'none';
    $('panel-config').style.display  = 'block';
    actualizarContadores();
  }

  // ── Boot ───────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
