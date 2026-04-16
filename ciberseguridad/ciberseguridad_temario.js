// ciberseguridad_temario.js
// Configuración de PDFs del temario Ciberseguridad

const TEMARIO_CIBERSEGURIDAD = [
  {
    uf: 'UF1',
    title: 'Seguridad pasiva',
    filename: 'UAX274_UF1_01PDF_ApliMedSegPas.pdf',
    pages: '~154 páginas',
    icon: 'PDF'
  },
  {
    uf: 'UF2',
    title: 'Gestión de dispositivos de almacenamiento',
    filename: 'UAX274_UF2_01PDF_GestionDispAlmacen.pdf',
    pages: '~117 páginas',
    icon: 'PDF'
  },
  {
    uf: 'UF3',
    title: 'Gestión de copias de seguridad',
    filename: 'UAX274_UF3_01PDF_GestCopiasSeg.pdf',
    pages: '~98 páginas',
    icon: 'PDF'
  },
  {
    uf: 'UF4',
    title: 'Seguridad activa',
    filename: 'UAX274_UF4_01PDF_SeguridadActiva.pdf',
    pages: '~147 páginas',
    icon: 'PDF'
  },
  {
    uf: 'UF5',
    title: 'Seguridad activa en redes',
    filename: 'UAX274_UF5_01PDF_SegActivaRedes.pdf',
    pages: '~136 páginas',
    icon: 'PDF'
  },
  {
    uf: 'UF6',
    title: 'Aseguramiento de la privacidad',
    filename: 'UAX274_UF6_01PDF_AseguramientoPrivacidad.pdf',
    pages: '~125 páginas',
    icon: 'PDF'
  },
  {
    uf: 'UF7',
    title: 'Criptografía',
    filename: 'UAX274_UF7_01PDF_Criptografia.pdf',
    pages: '~112 páginas',
    icon: 'PDF'
  },
  {
    uf: 'UF8',
    title: 'Cumplimiento de normas de seguridad',
    filename: 'UAX274_UF8_01PDF_CumpNormasSeguridad.pdf',
    pages: '~89 páginas',
    icon: 'PDF'
  }
];

const APUNTES_PROFESOR = [
  {
    title: 'Resumen UF1',
    filename: 'Resumen_UF1.pdf',
    pages: '~42 páginas'
  },
  {
    title: 'Resumen UF2-UF3',
    filename: 'Resumen_UF2_UF3.pdf',
    pages: '~48 páginas'
  }
];

// Renderizar el temario en el DOM
function renderTemario() {
  const temarioGrid = document.getElementById('temario-grid');
  if (!temarioGrid) return;

  temarioGrid.innerHTML = '';

  // Renderizar temario oficial
  TEMARIO_CIBERSEGURIDAD.forEach(item => {
    const temarioItem = document.createElement('a');
    temarioItem.className = 'temario-item';
    temarioItem.href = `temario/${item.filename}`;
    temarioItem.target = '_blank';
    
    temarioItem.innerHTML = `
      <div class="temario-icon">${item.icon}</div>
      <div class="temario-content">
        <div class="temario-uf">${item.uf}</div>
        <div class="temario-title">${item.title}</div>
        <div class="temario-pages">${item.pages}</div>
      </div>
      <div class="temario-arrow">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
        </svg>
      </div>
    `;
    
    temarioGrid.appendChild(temarioItem);
  });

  // Añadir sección de Apuntes del Profesor
  const apuntesItem = document.createElement('div');
  apuntesItem.className = 'temario-item temario-expandable';
  apuntesItem.innerHTML = `
    <div class="temario-icon temario-icon-profesor">
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    </div>
    <div class="temario-content">
      <div class="temario-uf" style="color: #A3E635;">Extras</div>
      <div class="temario-title">Apuntes del Profesor</div>
      <div class="temario-pages">${APUNTES_PROFESOR.length} documentos</div>
    </div>
    <div class="temario-arrow">
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
      </svg>
    </div>
  `;
  
  // Crear contenedor expandible para los apuntes
  const apuntesExpanded = document.createElement('div');
  apuntesExpanded.className = 'temario-expanded';
  apuntesExpanded.style.display = 'none';
  
  APUNTES_PROFESOR.forEach(apunte => {
    const apunteLink = document.createElement('a');
    apunteLink.className = 'temario-item-small';
    apunteLink.href = `temario/${apunte.filename}`;
    apunteLink.target = '_blank';
    
    apunteLink.innerHTML = `
      <div class="temario-icon-small">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
        </svg>
      </div>
      <div class="temario-content-small">
        <div class="temario-title-small">${apunte.title}</div>
        <div class="temario-pages-small">${apunte.pages}</div>
      </div>
      <div class="temario-arrow-small">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
        </svg>
      </div>
    `;
    
    apuntesExpanded.appendChild(apunteLink);
  });
  
  // Click handler para expandir/contraer
  apuntesItem.addEventListener('click', (e) => {
    e.preventDefault();
    const isExpanded = apuntesExpanded.style.display === 'block';
    apuntesExpanded.style.display = isExpanded ? 'none' : 'block';
    apuntesItem.classList.toggle('expanded');
  });
  
  temarioGrid.appendChild(apuntesItem);
  temarioGrid.appendChild(apuntesExpanded);
}

// Ejecutar al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  renderTemario();
});
