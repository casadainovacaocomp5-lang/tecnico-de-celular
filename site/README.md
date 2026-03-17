# 🔧 CelularTech - HTML/CSS/JavaScript Puro

> Plataforma de marketplace para conectar clientes com técnicos especializados em conserto de smartphones

**Versão**: 2.0 (100% HTML, CSS e JavaScript - Sem dependências)

## ✨ Características

- ✅ **Sem Backend**: Funciona completamente no navegador
- ✅ **Sem Node.js/npm**: Apenas HTML, CSS e JavaScript puro
- ✅ **Dados Locais**: Usa localStorage para persistência
- ✅ **Autenticação**: Sistema de registro e login
- ✅ **Busca e Filtros**: Encontre técnicos por cidade, serviço, preço
- ✅ **Responsive**: Funciona em todos os dispositivos
- ✅ **Modular**: Código bem organizado e reutilizável

## 🗂️ Estrutura do Projeto

```
site/
├── index.html              # Página inicial
├── servicos.html           # Lista de serviços
├── css/
│   └── style.css          # Estilos globais
├── js/
│   ├── auth.js            # Sistema de autenticação
│   ├── data-manager.js    # Gerenciamento de dados
│   ├── ui-components.js   # Componentes reutilizáveis
│   └── app.js             # Lógica principal da aplicação
└── pages/
    ├── login.html         # Página de login
    ├── cadastro.html      # Página de registro
    ├── tecnicos.html      # Listagem de técnicos com filtros
    ├── tecnico-perfil.html # Perfil do técnico
    └── dashboard-client.html / dashboard-technician.html
```

## 🚀 Como Usar

### 1. Abrir Localmente
Nenhuma instalação necessária! Basta abrir o arquivo `index.html` no navegador:

```bash
# Windows
start site/index.html

# macOS
open site/index.html

# Linux
firefox site/index.html
```

### 2. Usando Live Server (Recomendado)
Para melhor experiência, use o Live Server (VS Code):

1. Instale a extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

### 3. Deploy
Você pode fazer deploy em qualquer servidor web:
- Netlify
- Vercel
- GitHub Pages
- Seu próprio servidor

Basta fazer upload da pasta `site/`.

## 📚 Arquitetura JavaScript

### `auth.js` - Sistema de Autenticação
Gerencia registro, login e sessão de usuários.

```javascript
// Registrar novo usuário
const result = auth.register({
  name: "João",
  email: "joao@email.com",
  password: "123456",
  role: "client" // ou "technician"
});

// Fazer login
const result = auth.login("joao@email.com", "123456");

// Logout
auth.logout();

// Obter usuário atual
const user = auth.getCurrentUser();

// Verificar se autenticado
if (auth.isAuthenticated()) {
  // ...
}
```

### `data-manager.js` - Gerenciamento de Dados
Centraliza todos os dados dos técnicos, serviços e solicitações.

```javascript
// Buscar técnicos com filtros
const techs = dataManager.searchTechnicians({
  city: "São Paulo",
  service: "Troca de Tela",
  minRating: 4.5,
  maxPrice: 150
});

// Obter cidades únicas
const cities = dataManager.getUniqueCities();

// Obter técnico por ID
const tech = dataManager.getTechnicianById(1);

// Criar solicitação de serviço
dataManager.createServiceRequest({
  clientId: 1,
  technicianId: 5,
  service: "Troca de Bateria",
  description: "Bateria não carrega",
  scheduledDate: "2024-03-20"
});
```

### `ui-components.js` - Componentes Reutilizáveis
Cria e gerencia componentes de UI.

```javascript
// Criar card de técnico
const card = UIComponents.createTechnicianCard(technician);
container.appendChild(card);

// Criar card de serviço
const serviceCard = UIComponents.createServiceCard(service);
container.appendChild(serviceCard);

// Mostrar alerta
UIComponents.showAlert("Operação bem-sucedida!", "success");

// Criar formulário
const form = UIComponents.createForm(
  [
    { name: "email", label: "Email", type: "email", required: true },
    { name: "message", label: "Mensagem", type: "textarea" }
  ],
  (formData) => {
    console.log("Dados:", formData);
  }
);
```

### `app.js` - Lógica Principal
Funções globais e controladores de página.

```javascript
// Sistema de notificações
Notifications.success("Sucesso!");
Notifications.error("Erro!");
Notifications.warning("Atenção!");

// Router de navegação
Router.redirect("pages/login.html");
Router.redirectIfNotAuth(); // Redireciona se não autenticado
const param = Router.getQueryParam("nome");

// Carregar técnicos
loadTechnicians("#container");

// Carregar serviços
loadServices("#container");

// Solicitar serviço
solicitarServico(technicianId);

// Carregar perfil do técnico
loadTechnicianProfile(technicianId);

// Atualizar header
updateHeader();
```

## 🔐 Autenticação & Dados

### Dados Armazenados (localStorage)

```javascript
// Usuários registrados
localStorage.getItem("users");

// Usuário atualmente logado
localStorage.getItem("currentUser");

// Técnicos
localStorage.getItem("technicians");

// Solicitações de serviço
localStorage.getItem("requests");
```

### Teste Rápido

Na página de login, você pode usar:
- **Email**: teste@celular.com
- **Senha**: 123456

Ou registre uma nova conta na página de cadastro.

## 🎨 CSS Personalizado

### Variáveis Root
Customize cores e estilos editando `:root` em `style.css`:

```css
:root {
    --primary: #3B82F6;          /* Cor principal (azul) */
    --secondary: #10B981;        /* Cor secundária (verde) */
    --danger: #EF4444;           /* Cor de erro (vermelho) */
    --radius: 12px;              /* Raio de bordas */
    --shadow: 0 2px 20px ...;    /* Sombras */
}
```

### Classes Úteis
```html
<!-- Botões -->
<button class="btn-primary">Primário</button>
<button class="btn-secondary">Secundário</button>
<button class="btn-danger">Deletar</button>

<!-- Alertas -->
<div class="alert alert-success">Success</div>
<div class="alert alert-error">Error</div>
<div class="alert alert-warning">Warning</div>

<!-- Cards e Grids -->
<div class="technician-card">...</div>
<div class="service-card">...</div>

<!-- Forms -->
<form class="form">
  <div class="form-group">
    <label>Campo</label>
    <input class="form-input">
  </div>
</form>
```

## 📱 Funcionalidades por Página

### 🏠 index.html
- Hero section com busca
- Destaque de serviços populares
- Estatísticas e features

### 🔐 pages/login.html
- Formulário de login
- Link para registro
- Sugestão de credenciais de teste

### 📝 pages/cadastro.html
- Registro de novo usuário
- Seleção de tipo de conta (cliente/técnico)
- Validações de senha

### 👨‍💼 pages/tecnicos.html
- Listagem de técnicos
- Filtros por: cidade, serviço, avaliação, preço
- Cards com informações e ações

### 🚪 pages/tecnico-perfil.html
- Perfil completo do técnico
- Avaliações e reviews
- Botão para solicitar serviço

### 📊 pages/dashboard-client.html
- Visualizar solicitações do cliente
- Histórico de serviços
- Perfil e configurações

### 🔧 pages/dashboard-technician.html
- Gerenciar disponibilidade
- Visualizar solicitações
- Gerenciar preços

## 🛠️ Desenvolvimento

### Adicionar Nova Página

1. Crie um novo `.html` em `pages/`
2. Importe os scripts necessários:
```html
<script src="../js/auth.js"></script>
<script src="../js/data-manager.js"></script>
<script src="../js/ui-components.js"></script>
<script src="../js/app.js"></script>
```

3. Use as funções globais disponíveis

### Adicionar Nova Funcionalidade

1. Adicione funções em `app.js` para lógica geral
2. Crie componentes em `ui-components.js` para UI
3. Adicione dados em `data-manager.js` se necessário

## 🌐 Deploy no Netlify

```bash
# 1. Prepare os arquivos
cd site/

# 2. Crie um novo site no Netlify
# Vá para: https://app.netlify.com

# 3. Faça drag-and-drop da pasta site/
# Ou conecte seu GitHub para deploy automático

# 4. Pronto! Seu site está online!
```

## 📊 Dados Iniciais

O projeto vem com 8 técnicos pré-cadastrados:
- Carlos Silva (São Paulo)
- Ana Santos (Rio de Janeiro)
- Pedro Costa (São Paulo)
- Maria Oliveira (Belo Horizonte)
- João Ferreira (Brasília)
- Juliana Lima (Curitiba)
- Roberto Alves (Salvador)
- Fernanda Souza (Fortaleza)

## 🔍 Troubleshooting

### "Usuário não encontrado" no login
- Verifique se registrou a conta primeiro
- Use a credencial de teste: teste@celular.com / 123456

### localStorage não funciona
- Verifique se o navegador permite localStorage
- Alguns navegadores em modo privado desabilitam

### Estilos não carregam
- Verifique se o caminho de `../css/style.css` está correto
- Limpe o cache do navegador (Ctrl+Shift+R)

### Técnicos não aparecem
- Verifique se `dataManager` foi inicializado
- Abra o console (F12) e veja se há erros

## 📝 Licença

Projeto educacional. Livre para usar e modificar.

## 🤝 Contribuições

Melhorias são bem-vindas! Sinta-se livre para:
- Reportar bugs
- Sugerir novas funcionalidades
- Melhorar o código e documentação

---

**Desenvolvido com ❤️ usando HTML, CSS e JavaScript Puro**

✨ Sem dependências, sem complexidade - Apenas código limpo e funcional!
