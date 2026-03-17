/**
 * ============================================
 * APP PRINCIPAL - CelularTech
 * Gerenciador central da aplicação
 * ============================================
 */

// Sistema de notificações
const Notifications = {
  show(message, type = 'info') {
    UIComponents.showAlert(message, type);
  },
  success(message) {
    this.show(message, 'success');
  },
  error(message) {
    this.show(message, 'error');
  },
  warning(message) {
    this.show(message, 'warning');
  }
};

// Sistema de navegação
const Router = {
  redirect(path) {
    window.location.href = path;
  },
  
  redirectIfNotAuth() {
    if (!auth.isAuthenticated()) {
      this.redirect('pages/login.html');
    }
  },

  redirectIfAuth(path) {
    if (auth.isAuthenticated()) {
      this.redirect(path);
    }
  },

  getQueryParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
  }
};

/**
 * ============================================
 * FUNÇÕES GLOBAIS DA APLICAÇÃO
 * ============================================
 */

/**
 * Atualiza o header com informações do usuário
 */
function updateHeader() {
  const user = auth.getCurrentUser();
  const navLinks = document.querySelector('.nav-links');
  
  if (!navLinks) return;

  if (user) {
    navLinks.innerHTML = `
      <a href="${isInPages() ? '' : 'pages/'}servicos.html">Serviços</a>
      <a href="${isInPages() ? '' : 'pages/'}tecnicos.html">Técnicos</a>
      <a href="${isInPages() ? '' : 'pages/'}dashboard-${user.role}.html">Dashboard</a>
      <span class="user-name">👤 ${user.name}</span>
      <button onclick="logoutUser()" class="btn-primary">Sair</button>
    `;
  } else {
    navLinks.innerHTML = `
      <a href="index.html">Início</a>
      <a href="servicos.html">Serviços</a>
      <a href="pages/tecnicos.html">Técnicos</a>
      <a href="pages/login.html">Entrar</a>
      <a href="pages/cadastro.html" class="btn-primary">Cadastrar</a>
    `;
  }
}

/**
 * Verifica se está em pasta pages
 */
function isInPages() {
  return window.location.pathname.includes('/pages/');
}

/**
 * Faz logout do usuário
 */
function logoutUser() {
  auth.logout();
  Notifications.success('Logout realizado com sucesso!');
  setTimeout(() => {
    Router.redirect(isInPages() ? '../index.html' : 'index.html');
  }, 1000);
}

/**
 * Busca técnicos baseado em filtros
 */
function buscarTecnicos() {
  const city = document.getElementById('searchCity')?.value || '';
  const service = document.getElementById('searchService')?.value || '';
  
  const params = new URLSearchParams();
  if (city) params.append('cidade', city);
  if (service) params.append('servico', service);
  
  const baseUrl = isInPages() ? '../' : '';
  Router.redirect(`${baseUrl}pages/tecnicos.html?${params.toString()}`);
}

/**
 * Carrega e exibe técnicos na página
 */
function loadTechnicians(container, filteredTechs = null) {
  const containerEl = document.querySelector(container);
  if (!containerEl) return;

  const techs = filteredTechs || dataManager.technicians;
  
  if (techs.length === 0) {
    containerEl.innerHTML = '<p class="no-results">Nenhum técnico encontrado</p>';
    return;
  }

  containerEl.innerHTML = '';
  techs.forEach(tech => {
    containerEl.appendChild(UIComponents.createTechnicianCard(tech));
  });
}

/**
 * Carrega e exibe serviços
 */
function loadServices(container) {
  const containerEl = document.querySelector(container);
  if (!containerEl) return;

  containerEl.innerHTML = '';
  dataManager.services.forEach(service => {
    containerEl.appendChild(UIComponents.createServiceCard(service));
  });
}

/**
 * Inicializa buscas com autocompletar de cidades
 */
function initializeSearch() {
  const searchCity = document.getElementById('searchCity');
  if (searchCity) {
    const cities = dataManager.getUniqueCities();
    // Adicionar sugestões de cidades
    searchCity.placeholder = `Ex: ${cities[0] || 'São Paulo'}`;
  }
}

/**
 * Solicita serviço de um técnico
 */
function solicitarServico(technicianId) {
  const user = auth.getCurrentUser();
  
  if (!user) {
    Notifications.warning('Faça login para solicitar serviço');
    setTimeout(() => Router.redirect(isInPages() ? 'login.html' : 'pages/login.html'), 1500);
    return;
  }

  const technician = dataManager.getTechnicianById(technicianId);
  if (!technician) {
    Notifications.error('Técnico não encontrado');
    return;
  }

  // Criar formulário para solicitar serviço
  const fields = [
    { name: 'service', label: 'Serviço Desejado', type: 'select', options: technician.specialties, required: true },
    { name: 'description', label: 'Descrição do Problema', type: 'textarea', required: true },
    { name: 'scheduledDate', label: 'Data Preferida', type: 'date', required: false }
  ];

  const form = UIComponents.createForm(fields, (formData) => {
    const request = dataManager.createServiceRequest({
      clientId: user.id,
      technicianId: technicianId,
      service: formData.service,
      description: formData.description,
      scheduledDate: formData.scheduledDate
    });

    Notifications.success('Serviço solicitado com sucesso!');
    console.log('Solicitação criada:', request);
    document.querySelector('.modal-overlay')?.remove();
  }, 'Confirmar Solicitação');

  // Mostrar modal com formulário
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <h2>Solicitar Serviço - ${technician.name}</h2>
        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">✕</button>
      </div>
      <div class="modal-body" id="modalForm"></div>
    </div>
  `;

  document.body.appendChild(modal);
  document.getElementById('modalForm').appendChild(form);
}

/**
 * Carrega perfil do técnico
 */
function loadTechnicianProfile(technicianId) {
  const technician = dataManager.getTechnicianById(technicianId);
  if (!technician) {
    Notifications.error('Técnico não encontrado');
    return;
  }

  const profileContainer = document.querySelector('.profile-container');
  if (profileContainer) {
    profileContainer.innerHTML = `
      <div class="tech-profile-header">
        <img src="${technician.photo}" alt="${technician.name}" class="profile-photo">
        <div class="profile-info">
          <h1>${technician.name}</h1>
          <p>${technician.description}</p>
          <p class="location">📍 ${technician.city}</p>
          <div class="profile-stats">
            <div>⭐ ${technician.averageRating}</div>
            <div>📊 ${technician.totalServices} serviços</div>
            <div>💰 R$ ${technician.averagePrice}</div>
          </div>
        </div>
      </div>

      <div class="tech-profile-content">
        <div class="specialties-section">
          <h2>Especialidades</h2>
          <div class="specialties-list">
            ${technician.specialties.map(s => `<span class="specialty-badge">${s}</span>`).join('')}
          </div>
        </div>

        <div class="contact-section">
          <h2>Contato</h2>
          <p>📱 ${technician.phone}</p>
          <p>✉️ ${technician.email}</p>
          <button class="btn-primary" onclick="solicitarServico(${technician.id})">Solicitar Serviço</button>
        </div>

        <div class="reviews-section">
          <h2>Avaliações (${technician.reviews.length})</h2>
          <div class="reviews-list">
            ${technician.reviews.map(review => `
              <div class="review-card">
                <div class="review-header">
                  <strong>${review.author}</strong>
                  <span class="rating">${'⭐'.repeat(review.rating)}</span>
                </div>
                <p>${review.comment}</p>
                <small>${new Date(review.date).toLocaleDateString('pt-BR')}</small>
              </div>
            `).join('') || '<p>Sem avaliações ainda</p>'}
          </div>
        </div>
      </div>
    `;
  }
}

// Inicialização ao carregar página
document.addEventListener('DOMContentLoaded', () => {
  updateHeader();
  initializeSearch();
});
