/**
 * Sistema de Gerenciamento de Dados de Técnicos e Serviços
 */

class DataManager {
  constructor() {
    this.technicians = this.initializeTechnicians();
    this.services = this.initializeServices();
    this.requests = this.loadRequests();
  }

  /**
   * Inicializa dados dos técnicos
   */
  initializeTechnicians() {
    const saved = localStorage.getItem('technicians');
    if (saved) return JSON.parse(saved);

    const technicians = [
      {
        id: 1,
        name: "Carlos Silva",
        city: "São Paulo",
        description: "Especialista em iPhone e Samsung com 10 anos de experiência",
        specialties: ["Troca de Tela", "Troca de Bateria", "Reparo de Placa"],
        averagePrice: 150,
        averageRating: 4.8,
        totalServices: 245,
        phone: "(11) 98765-4321",
        email: "carlos@email.com",
        photo: "https://via.placeholder.com/150?text=Carlos",
        reviews: [
          { id: 1, rating: 5, comment: "Excelente profissional!", author: "João", date: "2024-01-15" },
          { id: 2, rating: 4, comment: "Muito bom serviço", author: "Maria", date: "2024-01-10" }
        ]
      },
      {
        id: 2,
        name: "Ana Santos",
        city: "Rio de Janeiro",
        description: "Técnica especializada em Xiaomi e Motorola com 8 anos de experiência",
        specialties: ["Troca de Tela", "Conector de Carga", "Câmera"],
        averagePrice: 130,
        averageRating: 4.9,
        totalServices: 189,
        phone: "(21) 97654-3210",
        email: "ana@email.com",
        photo: "https://via.placeholder.com/150?text=Ana",
        reviews: []
      },
      {
        id: 3,
        name: "Pedro Costa",
        city: "São Paulo",
        description: "Especialista em reparos de software e hardware",
        specialties: ["Troca de Tela", "Troca de Bateria", "Software"],
        averagePrice: 140,
        averageRating: 4.7,
        totalServices: 312,
        phone: "(11) 96543-2109",
        email: "pedro@email.com",
        photo: "https://via.placeholder.com/150?text=Pedro",
        reviews: []
      },
      {
        id: 4,
        name: "Maria Oliveira",
        city: "Belo Horizonte",
        description: "Profissional de confiança com especialização em placas-mãe",
        specialties: ["Troca de Tela", "Bateria", "Placa Mãe"],
        averagePrice: 120,
        averageRating: 4.6,
        totalServices: 156,
        phone: "(31) 95432-1098",
        email: "maria@email.com",
        photo: "https://via.placeholder.com/150?text=Maria",
        reviews: []
      },
      {
        id: 5,
        name: "João Ferreira",
        city: "Brasília",
        description: "Técnico com experiência em múltiplas marcas de celular",
        specialties: ["Troca de Tela", "Câmera", "Alto-falante"],
        averagePrice: 135,
        averageRating: 4.8,
        totalServices: 198,
        phone: "(61) 94321-0987",
        email: "joao@email.com",
        photo: "https://via.placeholder.com/150?text=Joao",
        reviews: []
      },
      {
        id: 6,
        name: "Juliana Lima",
        city: "Curitiba",
        description: "Especialista em consertos rápidos e eficientes",
        specialties: ["Troca de Tela", "Bateria", "Conector de Carga"],
        averagePrice: 125,
        averageRating: 4.9,
        totalServices: 223,
        phone: "(41) 93210-9876",
        email: "juliana@email.com",
        photo: "https://via.placeholder.com/150?text=Juliana",
        reviews: []
      },
      {
        id: 7,
        name: "Roberto Alves",
        city: "Salvador",
        description: "Profissional com mais de 12 anos no mercado",
        specialties: ["Troca de Tela", "Reparo de Placa", "Software"],
        averagePrice: 145,
        averageRating: 4.7,
        totalServices: 167,
        phone: "(71) 92109-8765",
        email: "roberto@email.com",
        photo: "https://via.placeholder.com/150?text=Roberto",
        reviews: []
      },
      {
        id: 8,
        name: "Fernanda Souza",
        city: "Fortaleza",
        description: "Técnica renomada com ótimas avaliações",
        specialties: ["Troca de Tela", "Bateria", "Câmera"],
        averagePrice: 130,
        averageRating: 4.8,
        totalServices: 201,
        phone: "(85) 91098-7654",
        email: "fernanda@email.com",
        photo: "https://via.placeholder.com/150?text=Fernanda",
        reviews: []
      }
    ];

    localStorage.setItem('technicians', JSON.stringify(technicians));
    return technicians;
  }

  /**
   * Inicializa dados dos serviços
   */
  initializeServices() {
    return [
      { id: 1, name: "Troca de Tela", icon: "📱", description: "Troca de tela com garantia", popularity: 95 },
      { id: 2, name: "Troca de Bateria", icon: "🔋", description: "Troca de bateria e diagnóstico", popularity: 88 },
      { id: 3, name: "Conector de Carga", icon: "🔌", description: "Reparo ou troca de carregador", popularity: 75 },
      { id: 4, name: "Reparo de Placa", icon: "⚙️", description: "Reparo de placa-mãe", popularity: 65 },
      { id: 5, name: "Câmera", icon: "📷", description: "Reparo de câmera frontal/traseira", popularity: 70 },
      { id: 6, name: "Alto-falante", icon: "🔊", description: "Reparo de alto-falante", popularity: 60 },
      { id: 7, name: "Microfone", icon: "🎤", description: "Reparo de microfone", popularity: 55 },
      { id: 8, name: "Reparo de Software", icon: "💾", description: "Reparo de sistema operacional", popularity: 80 }
    ];
  }

  /**
   * Carrega requisições do localStorage
   */
  loadRequests() {
    const saved = localStorage.getItem('requests');
    return saved ? JSON.parse(saved) : [];
  }

  /**
   * Salva requisições no localStorage
   */
  saveRequests() {
    localStorage.setItem('requests', JSON.stringify(this.requests));
  }

  /**
   * Busca técnicos por filtros
   */
  searchTechnicians(filters = {}) {
    let results = [...this.technicians];

    if (filters.city) {
      results = results.filter(t => 
        t.city.toLowerCase().includes(filters.city.toLowerCase())
      );
    }

    if (filters.service) {
      results = results.filter(t => 
        t.specialties.some(s => s.toLowerCase().includes(filters.service.toLowerCase()))
      );
    }

    if (filters.minRating) {
      results = results.filter(t => t.averageRating >= filters.minRating);
    }

    if (filters.maxPrice) {
      results = results.filter(t => t.averagePrice <= filters.maxPrice);
    }

    // Ordenar por relevância/classificação
    if (filters.sortBy === 'rating') {
      results.sort((a, b) => b.averageRating - a.averageRating);
    } else if (filters.sortBy === 'price') {
      results.sort((a, b) => a.averagePrice - b.averagePrice);
    }

    return results;
  }

  /**
   * Obtém técnico por ID
   */
  getTechnicianById(id) {
    return this.technicians.find(t => t.id === parseInt(id));
  }

  /**
   * Cria nova solicitação de serviço
   */
  createServiceRequest(requestData) {
    const newRequest = {
      id: Date.now(),
      clientId: requestData.clientId,
      technicianId: requestData.technicianId,
      service: requestData.service,
      description: requestData.description,
      status: 'pending',
      createdAt: new Date().toISOString(),
      scheduledDate: requestData.scheduledDate || null,
      rating: null,
      review: null
    };

    this.requests.push(newRequest);
    this.saveRequests();

    return newRequest;
  }

  /**
   * Obtém requisições de um usuário
   */
  getUserRequests(userId) {
    return this.requests.filter(r => r.clientId === userId);
  }

  /**
   * Obtém cidades únicas
   */
  getUniqueCities() {
    return [...new Set(this.technicians.map(t => t.city))].sort();
  }

  /**
   * Obtém estatísticas
   */
  getStatistics() {
    return {
      totalTechnicians: this.technicians.length,
      totalServices: this.services.length,
      totalRequests: this.requests.length,
      averageRating: (this.technicians.reduce((sum, t) => sum + t.averageRating, 0) / this.technicians.length).toFixed(1),
      cities: this.getUniqueCities().length
    };
  }
}

// Instância global
const dataManager = new DataManager();
