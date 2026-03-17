// Dados mockados
const tecnicos = [
    {
        id: 1,
        nome: "Carlos Silva",
        cidade: "São Paulo",
        especialidades: ["Troca de Tela", "Troca de Bateria", "Reparo de Placa"],
        preco: 150,
        avaliacao: 4.8,
        servicos: 245,
        telefone: "(11) 98765-4321"
    },
    {
        id: 2,
        nome: "Ana Santos",
        cidade: "Rio de Janeiro",
        especialidades: ["Troca de Tela", "Conector de Carga", "Câmera"],
        preco: 130,
        avaliacao: 4.9,
        servicos: 189,
        telefone: "(21) 97654-3210"
    },
    {
        id: 3,
        nome: "Pedro Costa",
        cidade: "São Paulo",
        especialidades: ["Troca de Tela", "Troca de Bateria", "Software"],
        preco: 140,
        avaliacao: 4.7,
        servicos: 312,
        telefone: "(11) 96543-2109"
    },
    {
        id: 4,
        nome: "Maria Oliveira",
        cidade: "Belo Horizonte",
        especialidades: ["Troca de Tela", "Bateria", "Placa Mãe"],
        preco: 120,
        avaliacao: 4.6,
        servicos: 156,
        telefone: "(31) 95432-1098"
    },
    {
        id: 5,
        nome: "João Ferreira",
        cidade: "Brasília",
        especialidades: ["Troca de Tela", "Câmera", "Alto-falante"],
        preco: 135,
        avaliacao: 4.8,
        servicos: 198,
        telefone: "(61) 94321-0987"
    },
    {
        id: 6,
        nome: "Juliana Lima",
        cidade: "Curitiba",
        especialidades: ["Troca de Tela", "Bateria", "Conector de Carga"],
        preco: 125,
        avaliacao: 4.9,
        servicos: 223,
        telefone: "(41) 93210-9876"
    },
    {
        id: 7,
        nome: "Roberto Alves",
        cidade: "Salvador",
        especialidades: ["Troca de Tela", "Reparo de Placa", "Software"],
        preco: 145,
        avaliacao: 4.7,
        servicos: 167,
        telefone: "(71) 92109-8765"
    },
    {
        id: 8,
        nome: "Fernanda Souza",
        cidade: "Fortaleza",
        especialidades: ["Troca de Tela", "Bateria", "Câmera"],
        preco: 130,
        avaliacao: 4.8,
        servicos: 201,
        telefone: "(85) 91098-7654"
    },
    {
        id: 9,
        nome: "Lucas Martins",
        cidade: "Brasília",
        especialidades: ["Alto-falante", "Conector de Carga", "Câmera"],
        preco: 125,
        avaliacao: 4.6,
        servicos: 134,
        telefone: "(61) 98765-4321"
    },
    {
        id: 10,
        nome: "Beatriz Costa",
        cidade: "São Paulo",
        especialidades: ["Troca de Bateria", "Reparo de Placa", "Software"],
        preco: 160,
        avaliacao: 4.9,
        servicos: 289,
        telefone: "(11) 97654-3210"
    },
    {
        id: 11,
        nome: "Felipe Santos",
        cidade: "Rio de Janeiro",
        especialidades: ["Conector de Carga", "Alto-falante", "Câmera"],
        preco: 135,
        avaliacao: 4.7,
        servicos: 156,
        telefone: "(21) 96543-2109"
    },
    {
        id: 12,
        nome: "Camila Rocha",
        cidade: "Belo Horizonte",
        especialidades: ["Troca de Tela", "Bateria", "Software"],
        preco: 140,
        avaliacao: 4.8,
        servicos: 267,
        telefone: "(31) 95432-1098"
    }
];

// Usuários mockados
const usuarios = [
    { email: "cliente@teste.com", senha: "123456", tipo: "cliente", nome: "Cliente Teste" },
    { email: "tecnico@teste.com", senha: "123456", tipo: "tecnico", nome: "Técnico Teste" }
];

// Funções auxiliares
function salvarLocalStorage(chave, valor) {
    localStorage.setItem(chave, JSON.stringify(valor));
}

function obterLocalStorage(chave) {
    const item = localStorage.getItem(chave);
    return item ? JSON.parse(item) : null;
}

function usuarioLogado() {
    return obterLocalStorage('usuario');
}

function logout() {
    localStorage.removeItem('usuario');
    window.location.href = '../index.html';
}

function buscarTecnicos() {
    const cidade = document.getElementById('searchCity').value;
    const servico = document.getElementById('searchService')?.value || '';
    const params = new URLSearchParams();
    
    if (cidade) params.append('cidade', cidade);
    if (servico) params.append('servico', servico);
    
    window.location.href = `pages/tecnicos.html?${params.toString()}`;
}

// Atualizar header baseado no login
function atualizarHeader() {
    const usuario = usuarioLogado();
    const navLinks = document.querySelector('.nav-links');
    
    if (usuario && navLinks) {
        navLinks.innerHTML = `
            <a href="${window.location.pathname.includes('pages') ? '' : 'pages/'}tecnicos.html">Técnicos</a>
            <a href="${window.location.pathname.includes('pages') ? '' : 'pages/'}dashboard-${usuario.tipo}.html">Dashboard</a>
            <button onclick="logout()" class="btn-primary">Sair</button>
        `;
    }
}

// Executar ao carregar
document.addEventListener('DOMContentLoaded', atualizarHeader);
