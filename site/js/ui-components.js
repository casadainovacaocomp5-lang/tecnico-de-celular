/**
 * Componentes Reutilizáveis - Sistema de UI
 */

class UIComponents {
  /**
   * Cria card de técnico
   */
  static createTechnicianCard(technician, showDetails = true) {
    const starRating = '⭐'.repeat(Math.floor(technician.averageRating)) + 
                       (technician.averageRating % 1 >= 0.5 ? '⭐' : '');

    const card = document.createElement('div');
    card.className = 'technician-card';
    card.innerHTML = `
      <div class="tech-card-header">
        <img src="${technician.photo}" alt="${technician.name}" class="tech-avatar">
        <div class="tech-info-short">
          <h3>${technician.name}</h3>
          <p class="city">📍 ${technician.city}</p>
        </div>
      </div>
      
      <div class="tech-stats">
        <div class="stat">
          <span class="rating">${starRating}</span>
          <span class="value">${technician.averageRating}</span>
        </div>
        <div class="stat">
          <span class="label">Serviços</span>
          <span class="value">${technician.totalServices}</span>
        </div>
        <div class="stat">
          <span class="label">Preço</span>
          <span class="value">R$ ${technician.averagePrice}</span>
        </div>
      </div>

      <div class="tech-specialties">
        ${technician.specialties.map(s => `<span class="specialty-badge">${s}</span>`).join('')}
      </div>

      ${showDetails ? `
      <div class="tech-actions">
        <a href="tecnico-perfil.html?id=${technician.id}" class="btn-secondary">Ver Perfil</a>
        <button class="btn-primary" onclick="solicitarServico(${technician.id})">Solicitar</button>
      </div>
      ` : ''}
    `;

    return card;
  }

  /**
   * Cria card de serviço
   */
  static createServiceCard(service) {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `
      <div class="service-icon">${service.icon}</div>
      <h3>${service.name}</h3>
      <p>${service.description}</p>
      <a href="servico-detalhes.html?servico=${encodeURIComponent(service.name)}" class="link-more">Saiba mais →</a>
    `;
    return card;
  }

  /**
   * Cria aviso/alerta
   */
  static showAlert(message, type = 'info') {
    const alertId = 'alert-' + Date.now();
    const alert = document.createElement('div');
    alert.id = alertId;
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
      <div class="alert-content">
        <span>${message}</span>
        <button class="alert-close" onclick="this.parentElement.parentElement.remove()">✕</button>
      </div>
    `;

    document.body.appendChild(alert);

    setTimeout(() => {
      const elem = document.getElementById(alertId);
      if (elem) elem.remove();
    }, 5000);
  }

  /**
   * Cria modal de confirmação
   */
  static showConfirm(title, message, onConfirm, onCancel) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <h2>${title}</h2>
          <button class="modal-close">✕</button>
        </div>
        <div class="modal-body">
          <p>${message}</p>
        </div>
        <div class="modal-footer">
          <button class="btn-secondary" onclick="this.closest('.modal-overlay').remove(); ${onCancel || 'void(0)'}">Cancelar</button>
          <button class="btn-primary" onclick="this.closest('.modal-overlay').remove(); ${onConfirm}">Confirmar</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('.modal-close').onclick = () => {
      modal.remove();
      if (onCancel) eval(onCancel);
    };
  }

  /**
   * Cria form de página
   */
  static createForm(fields, onSubmit, submitLabel = 'Enviar') {
    const form = document.createElement('form');
    form.className = 'form';
    form.onsubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      onSubmit(Object.fromEntries(formData));
    };

    fields.forEach(field => {
      const group = document.createElement('div');
      group.className = 'form-group';

      const label = document.createElement('label');
      label.htmlFor = field.name;
      label.textContent = field.label;
      group.appendChild(label);

      let input;
      if (field.type === 'textarea') {
        input = document.createElement('textarea');
      } else {
        input = document.createElement('input');
        input.type = field.type || 'text';
      }

      input.name = field.name;
      input.id = field.name;
      input.required = field.required !== false;
      input.placeholder = field.placeholder || '';
      input.className = 'form-input';

      if (field.options) {
        const select = document.createElement('select');
        select.name = field.name;
        select.id = field.name;
        select.className = 'form-input';
        select.required = field.required !== false;

        field.options.forEach(opt => {
          const option = document.createElement('option');
          option.value = opt.value || opt;
          option.textContent = opt.label || opt;
          select.appendChild(option);
        });
        group.appendChild(select);
      } else {
        group.appendChild(input);
      }

      form.appendChild(group);
    });

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.className = 'btn-primary';
    submitBtn.textContent = submitLabel;
    form.appendChild(submitBtn);

    return form;
  }

  /**
   * Cria loader/spinner
   */
  static createLoader() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = '<span></span><span></span><span></span>';
    return loader;
  }

  /**
   * Carrega template HTML
   */
  static async loadTemplate(templateName, context = {}) {
    try {
      const response = await fetch(`/templates/${templateName}.html`);
      const html = await response.text();
      
      // Fazer replace de variáveis no template
      let rendered = html;
      Object.keys(context).forEach(key => {
        rendered = rendered.replace(new RegExp(`{{${key}}}`, 'g'), context[key]);
      });

      return rendered;
    } catch (error) {
      console.error(`Erro ao carregar template ${templateName}:`, error);
      return '';
    }
  }
}
