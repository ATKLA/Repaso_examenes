// ═══════════════════════════════════════════════════════════════════
// MANEJADOR DE EJERCICIOS DE CÓDIGO - DWES
// Gestiona la visualización de cards y ejercicios con inputs de texto
// ═══════════════════════════════════════════════════════════════════

(function() {
  'use strict';

  // Estado global
  let categoriaActual = 'php';
  let ejercicioActual = null;
  let huecosCompletados = new Set(); // Rastrear huecos completados correctamente
  let totalHuecos = 0; // Total de huecos en el ejercicio actual

  // Inicializar cuando se carga el DOM
  document.addEventListener('DOMContentLoaded', () => {
    inicializarEventosCategoria();
  });

  // ─────────────────────────────────────────────────────────────
  // EVENTOS DE CATEGORÍAS
  // ─────────────────────────────────────────────────────────────
  function inicializarEventosCategoria() {
    const btnsCategory = document.querySelectorAll('.btn-category');
    
    btnsCategory.forEach(btn => {
      btn.addEventListener('click', () => {
        const categoria = btn.dataset.category;
        categoriaActual = categoria;
        
        // Actualizar botón activo
        btnsCategory.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Mostrar ejercicios de la categoría
        mostrarEjerciciosCategoria(categoria);
      });
    });

    // Mostrar PHP por defecto al cargar
    setTimeout(() => {
      const btnPHP = document.querySelector('[data-category="php"]');
      if (btnPHP) {
        mostrarEjerciciosCategoria('php');
      }
    }, 100);
  }

  // ─────────────────────────────────────────────────────────────
  // MOSTRAR CARDS DE EJERCICIOS
  // ─────────────────────────────────────────────────────────────
  window.mostrarEjerciciosCategoria = function(categoria) {
    const container = document.getElementById('ejercicios-cards-container');
    if (!container) return;

    const categoriaUpper = categoria.toUpperCase();
    const ejercicios = EJERCICIOS_CODIGO[categoriaUpper];
    
    if (!ejercicios || ejercicios.length === 0) {
      container.innerHTML = '<p style="color: var(--muted); text-align: center;">No hay ejercicios disponibles</p>';
      return;
    }

    // Generar HTML de las cards
    const html = ejercicios.map((ej, index) => `
      <div class="ejercicio-card" data-categoria="${categoria}" data-ejercicio-id="${ej.id}">
        <div class="ejercicio-card-header">
          <div class="ejercicio-numero">${index + 1}</div>
          <div class="ejercicio-titulo">${ej.titulo}</div>
        </div>
        <div class="ejercicio-descripcion">${ej.descripcion}</div>
      </div>
    `).join('');

    container.innerHTML = html;

    // Añadir eventos de clic a las cards
    const cards = container.querySelectorAll('.ejercicio-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const ejercicioId = parseInt(card.dataset.ejercicioId);
        const categoria = card.dataset.categoria;
        abrirEjercicio(categoria, ejercicioId);
      });
    });

    // Mostrar el panel
    const panel = document.getElementById('codigo-ejercicios-panel');
    if (panel) {
      panel.style.display = 'block';
    }
  }

  // ─────────────────────────────────────────────────────────────
  // ABRIR EJERCICIO COMPLETO
  // ─────────────────────────────────────────────────────────────
  window.abrirEjercicio = function(categoria, ejercicioId) {
    const categoriaUpper = categoria.toUpperCase();
    const ejercicio = EJERCICIOS_CODIGO[categoriaUpper].find(e => e.id === ejercicioId);
    
    if (!ejercicio) return;
    
    ejercicioActual = { categoria, ejercicio };
    
    // Reiniciar progreso para este ejercicio
    huecosCompletados.clear();
    totalHuecos = ejercicio.huecos.length;

    // Ocultar panel de configuración
    const panelConfig = document.getElementById('panel-config');
    if (panelConfig) panelConfig.style.display = 'none';

    // Mostrar panel de quiz (lo reutilizamos para el ejercicio)
    const panelQuiz = document.getElementById('panel-quiz');
    if (panelQuiz) {
      panelQuiz.style.display = 'block';
      panelQuiz.style.opacity = '1';
      panelQuiz.style.visibility = 'visible';
      renderizarEjercicio(ejercicio, categoria);
    }
  }

  // ─────────────────────────────────────────────────────────────
  // RENDERIZAR EJERCICIO
  // ─────────────────────────────────────────────────────────────
  function renderizarEjercicio(ejercicio, categoria) {
    const panelQuiz = document.getElementById('panel-quiz');
    
    // Construir HTML según el tipo de ejercicio
    let contenidoHTML = '';
    
    if (ejercicio.codigo) {
      // Ejercicio de PHP con código
      contenidoHTML = renderizarEjercicioPHP(ejercicio);
    } else if (ejercicio.preguntas) {
      // Ejercicio de Laravel/MongoDB con preguntas
      contenidoHTML = renderizarEjercicioComandos(ejercicio, categoria);
    }

    panelQuiz.innerHTML = `
      <div class="quiz-meta">
        <span class="quiz-counter" id="quiz-counter">${ejercicio.titulo}</span>
        <button class="btn-volver" onclick="volverACategoria()" style="background: transparent; border: 1px solid rgba(255,255,255,0.2); color: var(--muted); padding: 0.5rem 1rem; border-radius: 0.375rem; cursor: pointer; font-family: var(--font-m); font-size: 0.875rem;">
          ← Volver
        </button>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" id="progress-fill" style="width:0%"></div>
      </div>
      ${contenidoHTML}
    `;
    
    // Actualizar progreso después de renderizar
    actualizarBarraProgreso();
  }

  // ─────────────────────────────────────────────────────────────
  // RENDERIZAR EJERCICIO PHP (con código)
  // ─────────────────────────────────────────────────────────────
  function renderizarEjercicioPHP(ejercicio) {
    return `
      <div class="q-card">
        <div class="q-body">
          <p class="q-text" style="margin-bottom: 1rem;">${ejercicio.descripcion}</p>
          
          <div class="code-block" style="background: rgba(0,0,0,0.4); padding: 1.5rem; border-radius: 0.5rem; margin-bottom: 1.5rem; border: 1px solid rgba(255,255,255,0.1);">
            <pre style="margin: 0; white-space: pre; font-family: 'IBM Plex Mono', monospace; font-size: 0.875rem; line-height: 1.6; color: #e0e0e0;">${ejercicio.codigo}</pre>
          </div>

          <div style="background: rgba(255,255,255,0.02); padding: 1.5rem; border-radius: 0.5rem; border: 1px solid rgba(255,255,255,0.1);">
            <p style="font-family: var(--font-m); font-size: 0.75rem; color: var(--accent-bright); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1.25rem; font-weight: 700;">Completa los huecos numerados:</p>
            ${ejercicio.huecos.map((hueco) => `
              <div style="margin-bottom: 1.25rem; padding-bottom: 1.25rem; border-bottom: 1px solid rgba(255,255,255,0.05);" id="hueco-container-${hueco.num}">
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                  <span style="background: var(--accent-bg); color: var(--accent-bright); width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; flex-shrink: 0;">${hueco.num}</span>
                  <span style="font-size: 0.875rem; color: var(--text-2); flex: 1;">Hueco ${hueco.num}</span>
                </div>
                <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
                  <input 
                    type="text" 
                    id="input-${hueco.num}" 
                    data-respuesta="${hueco.respuesta}"
                    data-explicacion="${hueco.explicacion}"
                    style="flex: 1; padding: 0.75rem; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); border-radius: 0.375rem; color: var(--text); font-family: var(--font-m); font-size: 0.875rem;"
                    placeholder="Escribe tu respuesta..."
                  />
                  <button 
                    onclick="verificarHueco(${hueco.num})"
                    style="padding: 0.75rem 1.25rem; background: var(--accent-bg); border: 1px solid var(--accent); color: var(--accent-bright); border-radius: 0.375rem; cursor: pointer; font-family: var(--font-m); font-size: 0.875rem; font-weight: 600; white-space: nowrap; transition: all 0.2s;"
                    onmouseover="this.style.background='var(--accent)'; this.style.color='#000';"
                    onmouseout="this.style.background='var(--accent-bg)'; this.style.color='var(--accent-bright)';"
                  >
                    Verificar
                  </button>
                </div>
                <div id="feedback-${hueco.num}" style="margin-top: 0.75rem; display: none;"></div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // ─────────────────────────────────────────────────────────────
  // RENDERIZAR EJERCICIO COMANDOS (Laravel/MongoDB)
  // ─────────────────────────────────────────────────────────────
  function renderizarEjercicioComandos(ejercicio, categoria) {
    return `
      <div class="q-card">
        <div class="q-body">
          <p class="q-text" style="margin-bottom: 1rem;">${ejercicio.descripcion}</p>
          
          ${ejercicio.codigo ? `<div class="code-block" style="background: rgba(0,0,0,0.4); padding: 1.5rem; border-radius: 0.5rem; margin-bottom: 1.5rem; border: 1px solid rgba(255,255,255,0.1);">
            <pre style="margin: 0; white-space: pre; font-family: 'IBM Plex Mono', monospace; font-size: 0.875rem; line-height: 1.6; color: #e0e0e0;">${ejercicio.codigo}</pre>
          </div>` : ''}

          <div style="background: rgba(255,255,255,0.02); padding: 1.5rem; border-radius: 0.5rem; border: 1px solid rgba(255,255,255,0.1);">
            <p style="font-family: var(--font-m); font-size: 0.75rem; color: var(--accent-bright); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1.25rem; font-weight: 700;">
              Completa los huecos numerados:
            </p>
            ${ejercicio.huecos.map((hueco) => `
              <div style="margin-bottom: 1.25rem; padding-bottom: 1.25rem; border-bottom: 1px solid rgba(255,255,255,0.05);" id="hueco-container-${hueco.num}">
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                  <span style="background: var(--accent-bg); color: var(--accent-bright); width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; flex-shrink: 0;">${hueco.num}</span>
                  <span style="font-size: 0.875rem; color: var(--text-2); flex: 1;">Hueco ${hueco.num}</span>
                </div>
                <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
                  <input 
                    type="text" 
                    id="input-${hueco.num}" 
                    data-respuesta="${hueco.respuesta}"
                    data-explicacion="${hueco.explicacion}"
                    style="flex: 1; padding: 0.75rem; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); border-radius: 0.375rem; color: var(--text); font-family: var(--font-m); font-size: 0.875rem;"
                    placeholder="Escribe tu respuesta..."
                  />
                  <button 
                    onclick="verificarHueco(${hueco.num})"
                    style="padding: 0.75rem 1.25rem; background: var(--accent-bg); border: 1px solid var(--accent); color: var(--accent-bright); border-radius: 0.375rem; cursor: pointer; font-family: var(--font-m); font-size: 0.875rem; font-weight: 600; white-space: nowrap; transition: all 0.2s;"
                    onmouseover="this.style.background='var(--accent)'; this.style.color='#000';"
                    onmouseout="this.style.background='var(--accent-bg)'; this.style.color='var(--accent-bright)';"
                  >
                    Verificar
                  </button>
                </div>
                <div id="feedback-${hueco.num}" style="margin-top: 0.75rem; display: none;"></div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // ─────────────────────────────────────────────────────────────
  // VERIFICAR HUECO INDIVIDUAL
  // ─────────────────────────────────────────────────────────────
  window.verificarHueco = function(num) {
    const input = document.getElementById(`input-${num}`);
    const feedbackDiv = document.getElementById(`feedback-${num}`);
    const container = document.getElementById(`hueco-container-${num}`);
    
    if (!input || !feedbackDiv) return;
    
    const respuestaUsuario = input.value.trim();
    const respuestaCorrecta = input.dataset.respuesta.trim();
    const explicacion = input.dataset.explicacion;
    
    // Normalizar: quitar comillas, tildes, espacios extra
    const normalizar = (str) => {
      return str
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // quitar tildes
        .replace(/['"]/g, '') // quitar comillas simples y dobles
        .replace(/\s+/g, ' ') // espacios múltiples a uno
        .trim();
    };
    
    // Comparar normalizando ambas respuestas
    const esCorrecta = normalizar(respuestaUsuario) === normalizar(respuestaCorrecta);
    
    if (esCorrecta) {
      // CORRECTO
      input.style.borderColor = '#6ee7a0';
      input.style.background = 'rgba(60, 210, 100, 0.1)';
      
      // Añadir a completados y actualizar progreso
      huecosCompletados.add(num);
      actualizarBarraProgreso();
      
      feedbackDiv.innerHTML = `
        <div style="padding: 0.75rem; background: rgba(60, 210, 100, 0.1); border-left: 3px solid #6ee7a0; border-radius: 0.375rem;">
          <div style="font-family: var(--font-m); font-size: 0.8rem; color: #6ee7a0; margin-bottom: 0.25rem; font-weight: 600;">
            ✓ ¡Correcto!
          </div>
          <div style="font-size: 0.875rem; color: var(--text-2); line-height: 1.5;">
            ${explicacion}
          </div>
        </div>
      `;
    } else {
      // INCORRECTO
      input.style.borderColor = '#f87b6a';
      input.style.background = 'rgba(240, 80, 60, 0.1)';
      
      // Quitar de completados si estaba y actualizar progreso
      huecosCompletados.delete(num);
      actualizarBarraProgreso();
      
      feedbackDiv.innerHTML = `
        <div style="padding: 0.75rem; background: rgba(240, 80, 60, 0.1); border-left: 3px solid #f87b6a; border-radius: 0.375rem;">
          <div style="font-family: var(--font-m); font-size: 0.8rem; color: #f87b6a; margin-bottom: 0.5rem; font-weight: 600;">
            ✗ Incorrecto
          </div>
          <div style="font-size: 0.875rem; color: var(--text-2); margin-bottom: 0.5rem;">
            <strong>Tu respuesta:</strong> <code style="background: rgba(0,0,0,0.3); padding: 2px 6px; border-radius: 3px;">${respuestaUsuario || '(vacío)'}</code>
          </div>
          <div style="font-size: 0.875rem; color: var(--text-2); margin-bottom: 0.5rem;">
            <strong>Respuesta correcta:</strong> <code style="background: rgba(0,0,0,0.3); padding: 2px 6px; border-radius: 3px; color: #6ee7a0;">${respuestaCorrecta}</code>
          </div>
          <div style="font-size: 0.875rem; color: var(--text-2); line-height: 1.5; padding-top: 0.5rem; border-top: 1px solid rgba(255,255,255,0.05);">
            ${explicacion}
          </div>
        </div>
      `;
    }
    
    feedbackDiv.style.display = 'block';
  };

  // ─────────────────────────────────────────────────────────────
  // ACTUALIZAR BARRA DE PROGRESO
  // ─────────────────────────────────────────────────────────────
  function actualizarBarraProgreso() {
    const progressFill = document.getElementById('progress-fill');
    if (!progressFill) return;
    
    if (totalHuecos === 0) {
      progressFill.style.width = '0%';
      return;
    }
    
    const porcentaje = (huecosCompletados.size / totalHuecos) * 100;
    progressFill.style.width = `${porcentaje}%`;
    
    // También actualizar el contador si existe
    const quizCounter = document.getElementById('quiz-counter');
    if (quizCounter && ejercicioActual) {
      quizCounter.textContent = `${ejercicioActual.ejercicio.titulo} - ${huecosCompletados.size}/${totalHuecos} completados`;
    }
  }

  // ─────────────────────────────────────────────────────────────
  // VOLVER A CATEGORÍA
  // ─────────────────────────────────────────────────────────────
  window.volverACategoria = function() {
    const panelConfig = document.getElementById('panel-config');
    const panelQuiz = document.getElementById('panel-quiz');
    
    if (panelConfig) panelConfig.style.display = 'block';
    if (panelQuiz) panelQuiz.style.display = 'none';
    
    // Reiniciar progreso
    huecosCompletados.clear();
    totalHuecos = 0;
    ejercicioActual = null;
  };

})();
