// ═══════════════════════════════════════════════════════
// DWES — Lógica del cuestionario
// ═══════════════════════════════════════════════════════

let temasSeleccionados = ['todos'];
let preguntasActuales  = [];
let indicePregunta     = 0;
let correctas          = 0;
let respuestas         = [];
let ultimaEleccion     = [];

// ── Init ────────────────────────────────────────────────
function init() {
  const total = Object.values(BANCO).flat().length;
  document.getElementById('total-preguntas-badge').textContent = total;
  actualizarChips();

  document.querySelectorAll('.tema-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const tema = this.dataset.tema;
      if (tema === 'todos') {
        temasSeleccionados = ['todos'];
        document.querySelectorAll('.tema-btn').forEach(b => b.classList.remove('activo'));
        this.classList.add('activo');
      } else {
        const btnTodos = document.querySelector('.tema-btn[data-tema="todos"]');
        btnTodos.classList.remove('activo');
        if (temasSeleccionados.includes('todos')) temasSeleccionados = [];

        if (this.classList.contains('activo')) {
          this.classList.remove('activo');
          temasSeleccionados = temasSeleccionados.filter(t => t !== tema);
          if (temasSeleccionados.length === 0) {
            temasSeleccionados = ['todos'];
            btnTodos.classList.add('activo');
          }
        } else {
          this.classList.add('activo');
          temasSeleccionados.push(tema);
        }
      }
      actualizarChips();
    });
  });

  document.getElementById('btn-comenzar').addEventListener('click', iniciarCuestionario);
  document.getElementById('btn-anterior').addEventListener('click', irAnterior);
  document.getElementById('btn-siguiente').addEventListener('click', irSiguiente);
  document.getElementById('btn-repetir').addEventListener('click', repetirMismos);
  document.getElementById('btn-nuevo').addEventListener('click', iniciarCuestionario);
  document.getElementById('btn-volver').addEventListener('click', volverConfig);
}

function actualizarChips() {
  const container = document.getElementById('temas-info');
  container.innerHTML = '';
  const seleccion = temasSeleccionados.includes('todos')
    ? Object.keys(BANCO)
    : temasSeleccionados;

  seleccion.forEach(tema => {
    const n = (BANCO[tema] || []).length;
    const chip = document.createElement('div');
    chip.className = 'tema-chip';
    chip.innerHTML = `${tema} — <b>${n}</b>`;
    container.appendChild(chip);
  });
}

// ── Start ───────────────────────────────────────────────
function iniciarCuestionario() {
  const numDeseado = parseInt(document.getElementById('num-preguntas').value);
  let pool = temasSeleccionados.includes('todos')
    ? Object.values(BANCO).flat()
    : temasSeleccionados.flatMap(t => BANCO[t] || []);

  pool = mezclar(pool).slice(0, Math.min(numDeseado, pool.length));

  preguntasActuales = pool.map(q => {
    const idx = mezclar([0, 1, 2, 3].slice(0, q.ops.length));
    return { ...q, ops: idx.map(i => q.ops[i]), r: idx.indexOf(q.r) };
  });

  respuestas     = new Array(preguntasActuales.length).fill(null);
  ultimaEleccion = new Array(preguntasActuales.length).fill(null);
  indicePregunta = 0;
  correctas      = 0;

  mostrarPantalla('quiz');
  document.getElementById('score-live').textContent = '0';
  mostrarPregunta();
}

function repetirMismos() {
  preguntasActuales = mezclar(preguntasActuales);
  respuestas     = new Array(preguntasActuales.length).fill(null);
  ultimaEleccion = new Array(preguntasActuales.length).fill(null);
  indicePregunta = 0;
  correctas      = 0;
  mostrarPantalla('quiz');
  document.getElementById('score-live').textContent = '0';
  mostrarPregunta();
}

function volverConfig() { mostrarPantalla('config'); }

// ── Screens ─────────────────────────────────────────────
function mostrarPantalla(cual) {
  document.getElementById('panel-configuracion').style.display = cual === 'config'    ? 'block' : 'none';
  document.getElementById('barra-progreso').style.display      = cual === 'quiz'      ? 'block' : 'none';
  document.getElementById('zona-quiz').style.display           = cual === 'quiz'      ? 'block' : 'none';
  document.getElementById('zona-resultados').style.display     = cual === 'resultado' ? 'block' : 'none';
}

// ── Question render ─────────────────────────────────────
function mostrarPregunta() {
  const q     = preguntasActuales[indicePregunta];
  const total = preguntasActuales.length;
  const pct   = (indicePregunta / total * 100).toFixed(0);

  document.getElementById('prog-label').textContent  = `${indicePregunta + 1} / ${total}`;
  document.getElementById('prog-fill').style.width   = pct + '%';
  document.getElementById('q-num').textContent       = `Pregunta ${indicePregunta + 1} de ${total}`;
  document.getElementById('q-tag').textContent       = q.tema;
  document.getElementById('q-text').textContent      = q.p;

  const letras = ['A', 'B', 'C', 'D'];
  const lista  = document.getElementById('q-options');
  lista.innerHTML = '';

  q.ops.forEach((op, i) => {
    const div = document.createElement('div');
    div.className = 'opt';
    const letra = document.createElement('span');
    letra.className = 'opt-letter';
    letra.textContent = letras[i];
    const texto = document.createElement('span');
    texto.className = 'opt-text';
    texto.textContent = op;
    div.appendChild(letra);
    div.appendChild(texto);

    if (respuestas[indicePregunta] !== null) {
      div.classList.add('locked');
      if (i === q.r) div.classList.add('correct');
      else if (i === ultimaEleccion[indicePregunta]) div.classList.add('wrong');
    } else {
      div.addEventListener('click', () => responder(i));
    }
    lista.appendChild(div);
  });

  const fb  = document.getElementById('q-feedback');
  const exp = document.getElementById('q-explanation');

  if (respuestas[indicePregunta] === true) {
    fb.className = 'q-feedback ok';
    fb.textContent = '✓ Correcto';
    exp.textContent = q.e;
    exp.className = 'q-explanation show';
  } else if (respuestas[indicePregunta] === false) {
    fb.className = 'q-feedback ko';
    fb.textContent = `✗ Incorrecto — Correcta: ${letras[q.r]}`;
    exp.textContent = q.e;
    exp.className = 'q-explanation show';
  } else {
    fb.className = 'q-feedback';
    exp.className = 'q-explanation';
  }

  document.getElementById('btn-anterior').disabled = indicePregunta === 0;
  const btnSig = document.getElementById('btn-siguiente');
  btnSig.disabled = respuestas[indicePregunta] === null;
  btnSig.textContent = indicePregunta === total - 1 ? 'Ver resultado →' : 'Siguiente →';
}

// ── Answer ──────────────────────────────────────────────
function responder(opcion) {
  if (respuestas[indicePregunta] !== null) return;
  const q = preguntasActuales[indicePregunta];
  ultimaEleccion[indicePregunta] = opcion;
  if (opcion === q.r) {
    respuestas[indicePregunta] = true;
    correctas++;
    document.getElementById('score-live').textContent = correctas;
  } else {
    respuestas[indicePregunta] = false;
  }
  mostrarPregunta();
}

function irSiguiente() {
  if (indicePregunta === preguntasActuales.length - 1) mostrarResultados();
  else { indicePregunta++; mostrarPregunta(); }
}

function irAnterior() {
  if (indicePregunta > 0) { indicePregunta--; mostrarPregunta(); }
}

// ── Results ─────────────────────────────────────────────
function mostrarResultados() {
  mostrarPantalla('resultado');
  const total       = preguntasActuales.length;
  const sinResp     = respuestas.filter(r => r === null).length;
  const incorrectas = total - correctas - sinResp;
  const pct         = (correctas / total) * 100;
  const nota        = ((correctas / total) * 10).toFixed(1);
  const notaNum     = parseFloat(nota);

  document.getElementById('res-nota').textContent      = nota;
  document.getElementById('res-fraction').textContent  = `${correctas} de ${total} correctas`;
  document.getElementById('res-correctas').textContent = correctas;
  document.getElementById('res-incorrectas').textContent = incorrectas;
  document.getElementById('res-sin-resp').textContent  = sinResp;

  setTimeout(() => {
    document.getElementById('res-fill').style.width = pct + '%';
  }, 100);

  let color, texto, barColor;
  if (notaNum >= 9)      { color = '#1A7A4A'; texto = 'Sobresaliente'; barColor = '#1A7A4A'; }
  else if (notaNum >= 7) { color = '#2D5BE3'; texto = 'Notable';       barColor = '#2D5BE3'; }
  else if (notaNum >= 5) { color = '#C87A00'; texto = 'Aprobado';      barColor = '#C87A00'; }
  else                   { color = '#C0392B'; texto = 'Suspenso';      barColor = '#C0392B'; }

  const badge = document.getElementById('res-badge');
  badge.textContent    = texto;
  badge.style.color    = color;
  badge.style.borderColor = color;
  badge.style.background  = color + '12';

  document.getElementById('res-nota').style.color      = color;
  document.getElementById('res-fill').style.background = barColor;
}

// ── Utils ────────────────────────────────────────────────
function mezclar(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

document.addEventListener('DOMContentLoaded', init);
