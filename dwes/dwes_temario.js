// dwes_temario.js
// Configuración de PDFs del temario DWES

const TEMARIO_DWES = [
  {
    uf: 'UF1',
    title: 'Introducción al lado servidor',
    filename: 'UAX017_UF1_01PDF_Introduccion.pdf',
    pages: '~102 páginas',
    icon: 'PDF'
  },
  {
    uf: 'UF2',
    title: 'PHP Básico',
    filename: 'UAX017_UF2_01PDF_PHP.pdf',
    pages: '~187 páginas',
    icon: 'PDF'
  },
  {
    uf: 'UF3',
    title: 'PHP Avanzado',
    filename: 'UAX017_UF3_01PDF_Avanzado.pdf',
    pages: '~145 páginas',
    icon: 'PDF'
  },
  {
    uf: 'UF4',
    title: 'Bases de datos con PHP',
    filename: 'UAX017_UF4_01PDF_Datos.pdf',
    pages: '~171 páginas',
    icon: 'PDF'
  },
  {
    uf: 'UF5',
    title: 'MVC y Frameworks',
    filename: 'UAX017_UF5_01PDF_Frameworks.pdf',
    pages: '~31 páginas',
    icon: 'PDF'
  },
  {
    uf: 'UF6',
    title: 'Servicios REST',
    filename: 'UAX017_UF6_01PDF_PHPII.pdf',
    pages: '~21 páginas',
    icon: 'PDF'
  },
  {
    uf: 'UF7',
    title: 'Laravel',
    filename: 'UAX017_UF7_01PDF_Servicios.pdf',
    pages: '~31 páginas',
    icon: 'PDF'
  },
  {
    uf: 'UF8',
    title: 'Apps Híbridas',
    filename: 'UAX017_UF8_01PDF_Hibridas.pdf',
    pages: '~32 páginas',
    icon: 'PDF'
  },
  {
    uf: 'UF9',
    title: 'Cloud Computing',
    filename: 'UAX017_UF9_01PDF_Nube.pdf',
    pages: '~36 páginas',
    icon: 'PDF'
  }
];

// Renderizar el temario en el DOM
function renderTemario() {
  const temarioGrid = document.getElementById('temario-grid');
  if (!temarioGrid) return;

  temarioGrid.innerHTML = '';

  TEMARIO_DWES.forEach(item => {
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
}

// Ejecutar al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  renderTemario();
});
