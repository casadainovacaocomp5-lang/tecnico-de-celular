// Dados mockados
const mockTechnicians = [
  {
    id: 1,
    name: "Carlos Silva",
    city: "São Paulo",
    photo: null,
    description: "Especialista em iPhone e Samsung com 10 anos de experiência",
    specialties: ["Troca de Tela", "Troca de Bateria", "Reparo de Placa"],
    average_price: 150,
    average_rating: 4.8,
    total_services: 245,
    phone: "(11) 98765-4321",
    email: "carlos@email.com",
    services: [
      { id: 1, name: "Troca de Tela", description: "Tela original com garantia", price: 200 },
      { id: 2, name: "Troca de Bateria", description: "Bateria de alta qualidade", price: 120 }
    ],
    reviews: [
      { id: 1, rating: 5, comment: "Excelente profissional!", client_name: "João", created_at: new Date() },
      { id: 2, rating: 4, comment: "Muito bom serviço", client_name: "Maria", created_at: new Date() }
    ]
  },
  {
    id: 2,
    name: "Ana Santos",
    city: "Rio de Janeiro",
    photo: null,
    description: "Técnica especializada em Xiaomi e Motorola",
    specialties: ["Troca de Tela", "Conector de Carga", "Câmera"],
    average_price: 130,
    average_rating: 4.9,
    total_services: 189,
    phone: "(21) 97654-3210",
    email: "ana@email.com",
    services: [
      { id: 3, name: "Troca de Tela", description: "Instalação rápida", price: 180 }
    ],
    reviews: []
  },
  {
    id: 3,
    name: "Pedro Costa",
    city: "São Paulo",
    photo: null,
    description: "Especialista em todos os modelos de celular",
    specialties: ["Troca de Tela", "Troca de Bateria", "Software"],
    average_price: 140,
    average_rating: 4.7,
    total_services: 312,
    phone: "(11) 96543-2109",
    email: "pedro@email.com",
    services: [],
    reviews: []
  }
];

let mockUsers = [
  { id: 1, name: "Cliente Teste", email: "cliente@teste.com", password: "123456", user_type: "client", city: "São Paulo", phone: "(11) 99999-9999" },
  { id: 2, name: "Técnico Teste", email: "tecnico@teste.com", password: "123456", user_type: "technician", city: "São Paulo", phone: "(11) 88888-8888" }
];

let mockRequests = [
  {
    id: 1,
    client_id: 1,
    technician_id: 1,
    service_type: "Troca de Tela",
    description: "iPhone 12 com tela quebrada",
    photo: null,
    status: "completed",
    technician_name: "Carlos Silva",
    technician_phone: "(11) 98765-4321",
    created_at: new Date()
  }
];

// Simular delay de rede
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Auth
export const register = async (data) => {
  await delay(500);
  const newUser = { id: mockUsers.length + 1, ...data };
  mockUsers.push(newUser);
  const token = 'mock_token_' + newUser.id;
  localStorage.setItem('mockUser', JSON.stringify(newUser));
  return { data: { user: newUser, token } };
};

export const login = async (data) => {
  await delay(500);
  const user = mockUsers.find(u => u.email === data.email && u.password === data.password);
  if (!user) throw new Error('Credenciais inválidas');
  const token = 'mock_token_' + user.id;
  localStorage.setItem('mockUser', JSON.stringify(user));
  return { data: { user, token } };
};

export const getProfile = async () => {
  await delay(300);
  const user = JSON.parse(localStorage.getItem('mockUser') || '{}');
  return { data: user };
};

// Technicians
export const getTechnicians = async (params = {}) => {
  await delay(500);
  let filtered = [...mockTechnicians];
  
  if (params.city) {
    filtered = filtered.filter(t => t.city.toLowerCase().includes(params.city.toLowerCase()));
  }
  if (params.service) {
    filtered = filtered.filter(t => t.specialties.includes(params.service));
  }
  if (params.min_rating) {
    filtered = filtered.filter(t => t.average_rating >= parseFloat(params.min_rating));
  }
  
  if (params.sort_by === 'price_asc') {
    filtered.sort((a, b) => a.average_price - b.average_price);
  } else if (params.sort_by === 'rating') {
    filtered.sort((a, b) => b.average_rating - a.average_rating);
  }
  
  return { data: filtered };
};

export const getTechnicianById = async (id) => {
  await delay(500);
  const tech = mockTechnicians.find(t => t.id === parseInt(id));
  return { data: tech };
};

export const updateTechnician = async (data) => {
  await delay(500);
  return { data: { message: 'Perfil atualizado' } };
};

export const addService = async (data) => {
  await delay(500);
  return { data: { id: Date.now(), ...data } };
};

// Repairs
export const createRepairRequest = async (data) => {
  await delay(500);
  const newRequest = {
    id: mockRequests.length + 1,
    ...data,
    status: 'pending',
    created_at: new Date()
  };
  mockRequests.push(newRequest);
  return { data: newRequest };
};

export const getClientRequests = async () => {
  await delay(500);
  return { data: mockRequests };
};

export const getTechnicianRequests = async () => {
  await delay(500);
  return { data: mockRequests };
};

export const getRequestById = async (id) => {
  await delay(500);
  const request = mockRequests.find(r => r.id === parseInt(id));
  return { data: request };
};

export const updateRequestStatus = async (id, status) => {
  await delay(500);
  const request = mockRequests.find(r => r.id === parseInt(id));
  if (request) request.status = status;
  return { data: request };
};

// Reviews
export const createReview = async (data) => {
  await delay(500);
  return { data: { id: Date.now(), ...data } };
};

export const getTechnicianReviews = async (technicianId) => {
  await delay(500);
  const tech = mockTechnicians.find(t => t.id === parseInt(technicianId));
  return { data: tech?.reviews || [] };
};

export default {
  register,
  login,
  getProfile,
  getTechnicians,
  getTechnicianById,
  updateTechnician,
  addService,
  createRepairRequest,
  getClientRequests,
  getTechnicianRequests,
  getRequestById,
  updateRequestStatus,
  createReview,
  getTechnicianReviews
};
