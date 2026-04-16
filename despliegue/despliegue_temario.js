// despliegue_temario.js
// Configuración de PDFs del temario Despliegue de Aplicaciones Web

const TEMARIO_DESPLIEGUE = [
  {
    uf: 'UF1',
    title: 'Implantación de arquitecturas web',
    filename: 'UAX018_UF1_01PDF_Servicios.pdf',
    pages: '~168 páginas',
    icon: 'PDF'
  },
  {
    uf: 'UF2',
    title: 'Administración de servidores de aplicaciones',
    filename: 'UAX018_UF2_01PDF_Servidores.pdf',
    pages: '~197 páginas',
    icon: 'PDF'
  },
  {
    uf: 'UF3',
    title: 'Implantación de aplicaciones web en servidores de aplicaciones',
    filename: 'UAX018_UF3_01PDF_Aplicaciones.pdf',
    pages: '~134 páginas',
    icon: 'PDF'
  },
  {
    uf: 'UF4',
    title: 'Administración de servidores de transferencia de archivos',
    filename: 'UAX018_UF4_01PDF_Datos.pdf',
    pages: '~139 páginas',
    icon: 'PDF'
  },
  {
    uf: 'UF5',
    title: 'Servicios de red implicados en el despliegue de una aplicación web',
    filename: 'UAX018_UF5_01PDF_Documentacion.pdf',
    pages: '~141 páginas',
    icon: 'PDF'
  }
];

// Renderizar el temario en el DOM
function renderTemario() {
  const temarioGrid = document.getElementById('temario-grid');
  if (!temarioGrid) return;

  temarioGrid.innerHTML = '';

  TEMARIO_DESPLIEGUE.forEach(item => {
    const temarioItem = document.createElement('a');
    temarioItem.className = 'temario-item';
    temarioItem.href = `Temario/${item.filename}`;
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
