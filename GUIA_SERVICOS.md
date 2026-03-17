# 🔧 Guia de Uso - Página de Serviços

## Como Funciona

### Fluxo de Navegação

```
index.html (Página Inicial)
    ↓
Clica em um serviço (ex: "Troca de Bateria")
    ↓
servico-detalhes.html?servico=Troca de Bateria
    ↓
Mostra técnicos especializados nesse serviço
    ↓
Clica em "Solicitar Serviço"
    ↓
Valida login e confirma solicitação
```

## Páginas Principais

### 1. index.html (Página Inicial)
- 6 botões de serviços populares
- Cada botão redireciona para `servico-detalhes.html`
- Exemplo: Clica em "Troca de Bateria" → vai para `servico-detalhes.html?servico=Troca de Bateria`

### 2. servicos.html (Página de Serviços)
- 8 botões com todos os serviços disponíveis
- Cada botão redireciona para `servico-detalhes.html`
- Interface simples e direta

### 3. servico-detalhes.html (NOVA - Página de Detalhes)
- Recebe o serviço via URL: `?servico=Troca de Bateria`
- Filtra técnicos que fazem esse serviço
- Mostra:
  - Nome do serviço em destaque
  - Descrição do serviço
  - Lista de técnicos especializados
  - Preço de cada técnico
  - Avaliação (estrelas)
  - Botão "Solicitar Serviço"

## Serviços Disponíveis

1. **Troca de Tela** - Substituição de tela quebrada
2. **Troca de Bateria** - Troca de bateria com diagnóstico
3. **Conector de Carga** - Reparo do conector
4. **Reparo de Placa** - Reparo de placa-mãe
5. **Câmera** - Reparo de câmera
6. **Alto-falante** - Reparo de áudio
7. **Software** - Limpeza e otimização
8. **Placa Mãe** - Reparo especializado

## Exemplo Prático

### Cenário: Cliente quer trocar bateria

1. **Passo 1:** Acessa `index.html`
2. **Passo 2:** Clica no botão "Troca de Bateria"
3. **Passo 3:** É redirecionado para `servico-detalhes.html?servico=Troca de Bateria`
4. **Passo 4:** Vê a página com:
   - Título: "Troca de Bateria"
   - Descrição: "Troca de bateria com diagnóstico completo do aparelho"
   - Lista de técnicos que fazem bateria:
     - Carlos Silva - São Paulo - R$ 150 - ⭐ 4.8
     - Pedro Costa - São Paulo - R$ 140 - ⭐ 4.7
     - Maria Oliveira - Belo Horizonte - R$ 120 - ⭐ 4.6
     - Juliana Lima - Curitiba - R$ 125 - ⭐ 4.9
     - Fernanda Souza - Fortaleza - R$ 130 - ⭐ 4.8
     - Camila Rocha - Belo Horizonte - R$ 140 - ⭐ 4.8
5. **Passo 5:** Clica em "Solicitar Serviço" de um técnico
6. **Passo 6:** Se não estiver logado, é redirecionado para login
7. **Passo 7:** Após login, recebe confirmação da solicitação

## Técnicos por Serviço

### Troca de Tela (6 técnicos)
- Carlos Silva, Pedro Costa, Maria Oliveira, João Ferreira, Juliana Lima, Roberto Alves, Fernanda Souza, Camila Rocha

### Troca de Bateria (6 técnicos)
- Carlos Silva, Pedro Costa, Maria Oliveira, Juliana Lima, Fernanda Souza, Camila Rocha

### Conector de Carga (4 técnicos)
- Ana Santos, Juliana Lima, Lucas Martins, Felipe Santos

### Reparo de Placa (4 técnicos)
- Carlos Silva, Roberto Alves, Beatriz Costa

### Câmera (5 técnicos)
- Ana Santos, João Ferreira, Fernanda Souza, Lucas Martins, Felipe Santos

### Alto-falante (3 técnicos)
- João Ferreira, Lucas Martins, Felipe Santos

### Software (4 técnicos)
- Pedro Costa, Roberto Alves, Beatriz Costa, Camila Rocha

### Placa Mãe (1 técnico)
- Maria Oliveira

## Recursos

✅ Filtro automático de técnicos por serviço
✅ Mostra preço de cada técnico
✅ Mostra avaliação (estrelas)
✅ Mostra cidade do técnico
✅ Botão "Voltar aos Serviços"
✅ Validação de login
✅ Animações suaves
✅ Design responsivo para celular

## URLs Importantes

- `index.html` - Página inicial
- `servicos.html` - Lista de serviços
- `servico-detalhes.html?servico=Troca de Tela` - Detalhes de um serviço
- `servico-detalhes.html?servico=Troca de Bateria` - Detalhes de outro serviço
- `pages/tecnicos.html` - Lista completa de técnicos
- `pages/login.html` - Login

## Dicas

1. **Para adicionar novo serviço:**
   - Adicione em `index.html` (services-grid)
   - Adicione em `servicos.html` (servicos-buttons)
   - Adicione em `servico-detalhes.html` (descricoes object)
   - Adicione especialidade aos técnicos em `servico-detalhes.html`

2. **Para adicionar novo técnico:**
   - Adicione em `servico-detalhes.html` (array tecnicos)
   - Adicione em `pages/tecnicos.html` (array tecnicos)
   - Adicione em `js/app.js` (array tecnicos)

3. **Para mudar preço de um técnico:**
   - Edite a propriedade `preco` no array de técnicos

4. **Para mudar avaliação:**
   - Edite a propriedade `avaliacao` no array de técnicos
