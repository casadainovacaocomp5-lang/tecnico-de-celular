# 📱 CelularTech - Plataforma de Técnicos de Celular

Marketplace completo para conectar clientes com técnicos especializados em conserto de smartphones.

## 🚀 Tecnologias

- HTML5
- CSS3 (Design moderno e responsivo)
- JavaScript Vanilla
- LocalStorage (dados persistentes)

## 📁 Estrutura

```
site/
├── index.html              # Página inicial
├── servicos.html           # Página de serviços com filtro
├── css/
│   └── style.css          # Estilos
├── js/
│   └── app.js             # JavaScript principal
└── pages/
    ├── login.html         # Login
    ├── cadastro.html      # Cadastro
    ├── tecnicos.html      # Lista de técnicos
    ├── tecnico-perfil.html # Perfil do técnico
    ├── dashboard-cliente.html
    └── dashboard-tecnico.html
```

## ⚙️ Como Usar

### Opção 1: Live Server (VS Code)
1. Instale a extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

### Opção 2: Abrir diretamente
1. Navegue até a pasta `site`
2. Abra `index.html` no navegador

## 📋 Funcionalidades

### Para Clientes:
✅ Cadastro e login  
✅ Buscar técnicos por cidade, serviço e avaliação  
✅ Filtrar por serviço específico (Troca de Tela, Bateria, etc)  
✅ Ver perfil completo do técnico  
✅ Solicitar conserto  
✅ Acompanhar status do pedido  
✅ Avaliar técnico após conclusão  

### Para Técnicos:
✅ Cadastro e login  
✅ Perfil com especialidades e serviços  
✅ Receber pedidos de conserto  
✅ Aceitar/recusar pedidos  
✅ Atualizar status do serviço  
✅ Ver avaliações recebidas  

### Página de Serviços:
✅ Botões interativos para cada serviço  
✅ Filtro automático de técnicos por serviço  
✅ Animações ao carregar técnicos  
✅ Exibição de avaliações e especialidades  
✅ Botão "Solicitar Serviço" com validação de login  

## 🧪 Dados de Teste

**Cliente:**
- Email: cliente@teste.com
- Senha: 123456

**Técnico:**
- Email: tecnico@teste.com
- Senha: 123456

## 👨‍💼 Técnicos Disponíveis (12 profissionais)

1. **Carlos Silva** - São Paulo - R$ 150 - ⭐ 4.8
2. **Ana Santos** - Rio de Janeiro - R$ 130 - ⭐ 4.9
3. **Pedro Costa** - São Paulo - R$ 140 - ⭐ 4.7
4. **Maria Oliveira** - Belo Horizonte - R$ 120 - ⭐ 4.6
5. **João Ferreira** - Brasília - R$ 135 - ⭐ 4.8
6. **Juliana Lima** - Curitiba - R$ 125 - ⭐ 4.9
7. **Roberto Alves** - Salvador - R$ 145 - ⭐ 4.7
8. **Fernanda Souza** - Fortaleza - R$ 130 - ⭐ 4.8
9. **Lucas Martins** - Brasília - R$ 125 - ⭐ 4.6
10. **Beatriz Costa** - São Paulo - R$ 160 - ⭐ 4.9
11. **Felipe Santos** - Rio de Janeiro - R$ 135 - ⭐ 4.7
12. **Camila Rocha** - Belo Horizonte - R$ 140 - ⭐ 4.8

## 🎨 Páginas

- `index.html` - Página inicial com busca
- `servicos.html` - Página de serviços com filtro interativo
- `pages/cadastro.html` - Cadastro de usuário
- `pages/login.html` - Login
- `pages/tecnicos.html` - Lista de técnicos com filtros avançados
- `pages/tecnico-perfil.html` - Perfil do técnico
- `pages/dashboard-cliente.html` - Dashboard do cliente
- `pages/dashboard-tecnico.html` - Dashboard do técnico

## 🔧 Serviços Disponíveis

- Troca de Tela
- Troca de Bateria
- Conector de Carga
- Reparo de Placa
- Câmera
- Alto-falante
- Software
- Placa Mãe

## 💾 Armazenamento

Todos os dados são salvos no **localStorage** do navegador:
- Usuários cadastrados
- Sessão de login
- Pedidos de conserto
- Avaliações

## 🎨 Personalização

Edite `css/style.css` para mudar cores:
```css
.btn-primary { background: #3B82F6; } /* Azul */
.btn-secondary { background: #10B981; } /* Verde */
```

## ✨ Recursos Especiais

### Página de Serviços (servicos.html)
- Botões interativos para cada serviço
- Filtro automático de técnicos
- Animações suaves ao carregar
- Cards com informações completas do técnico
- Avaliações em tempo real

### Filtros Avançados (tecnicos.html)
- Filtrar por cidade
- Filtrar por serviço
- Filtrar por avaliação mínima
- Ordenar por: avaliação, preço (menor/maior)

### Sistema de Avaliações
- Estrelas de avaliação
- Número de serviços realizados
- Comentários de clientes

## 📝 Notas

- Funciona 100% offline
- Sem necessidade de servidor
- Dados persistem no navegador
- Perfeito para demonstração
- Interface responsiva para celular
- Animações suaves e modernas

## 📄 Licença

Livre para uso educacional e comercial.

## 🎯 Próximas Melhorias

- [ ] Integração com API de pagamento
- [ ] Sistema de chat em tempo real
- [ ] Agendamento de serviços
- [ ] Notificações push
- [ ] Integração com Google Maps
- [ ] Sistema de avaliação com fotos
