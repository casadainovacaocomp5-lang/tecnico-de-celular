# 🎯 Técnico Ideal - Guia de Uso

## O que é?

A página **Técnico Ideal** (`tecnico-ideal.html`) ajuda o cliente a encontrar o melhor técnico baseado em seus critérios específicos.

## Como Acessar?

### Opção 1: Clicando em "Técnicos Especializados"
1. Acesse `index.html`
2. Clique no card "Técnicos Especializados" na seção de features
3. Será redirecionado para `tecnico-ideal.html`

### Opção 2: Direto pela URL
- Acesse: `tecnico-ideal.html`

## Como Funciona?

### Passo 1: Preencher Filtros
```
┌─────────────────────────────────────┐
│ Encontre seu Técnico Ideal          │
├─────────────────────────────────────┤
│ Serviço: [Troca de Bateria ▼]       │
│ Cidade: [São Paulo        ]         │
│ Avaliação: [4+ ⭐ ▼]                │
│ Preço Máximo: [150        ]         │
│ [🔍 Buscar Técnico Ideal]           │
└─────────────────────────────────────┘
```

### Passo 2: Resultado
O sistema mostra:
1. **Técnico Ideal** (com melhor avaliação)
   - Foto
   - Nome
   - Avaliação
   - Preço
   - Cidade
   - Botão "Solicitar Serviço"

2. **Outras Opções** (se houver mais técnicos)
   - Cards com outros técnicos que atendem aos critérios

## Filtros Disponíveis

### 1. Serviço (Obrigatório)
- Troca de Tela
- Troca de Bateria
- Conector de Carga
- Reparo de Placa
- Câmera
- Alto-falante
- Software
- Placa Mãe

### 2. Cidade (Opcional)
- Digite o nome da cidade
- Busca parcial (ex: "São" encontra "São Paulo")

### 3. Avaliação Mínima (Opcional)
- Qualquer uma
- 4.5+ ⭐
- 4+ ⭐
- 3.5+ ⭐

### 4. Preço Máximo (Opcional)
- Digite o valor máximo que quer pagar
- Exemplo: 150

## Exemplo Prático

### Cenário: Cliente quer trocar bateria em São Paulo com orçamento de R$ 140

1. **Acessa** `tecnico-ideal.html`
2. **Preenche:**
   - Serviço: "Troca de Bateria"
   - Cidade: "São Paulo"
   - Avaliação: "Qualquer uma"
   - Preço Máximo: "140"
3. **Clica** em "🔍 Buscar Técnico Ideal"
4. **Resultado:**
   - **Técnico Ideal:** Pedro Costa
     - ⭐ 4.7
     - R$ 140
     - São Paulo
   - **Outras Opções:**
     - Carlos Silva (R$ 150 - acima do orçamento, não aparece)
     - Beatriz Costa (R$ 160 - acima do orçamento, não aparece)

## Algoritmo de Seleção

O sistema seleciona o técnico ideal baseado em:

1. **Filtro por Serviço** (obrigatório)
   - Técnico deve fazer o serviço solicitado

2. **Filtro por Cidade** (opcional)
   - Se preenchido, técnico deve estar na cidade

3. **Filtro por Avaliação** (opcional)
   - Se preenchido, avaliação deve ser >= valor

4. **Filtro por Preço** (opcional)
   - Se preenchido, preço deve ser <= valor

5. **Ordenação**
   - Técnicos são ordenados por avaliação (maior primeiro)
   - O primeiro é o "Técnico Ideal"

## Exemplo de Resultado

```
┌─────────────────────────────────────────┐
│         ✨ Seu Técnico Ideal            │
│                                         │
│              👩🔧                        │
│          Juliana Lima                   │
│                                         │
│  ⭐ 4.9  │  R$ 125  │  📍 Curitiba  │  │
│                                         │
│  [Solicitar Serviço]                    │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│         Outras Opções                   │
├─────────────────────────────────────────┤
│ ┌──────────┐  ┌──────────┐  ┌──────────┐│
│ │ 👨🔧     │  │ 👩🔧     │  │ 👨🔧     ││
│ │ Carlos   │  │ Fernanda │  │ Camila   ││
│ │ ⭐ 4.8   │  │ ⭐ 4.8   │  │ ⭐ 4.8   ││
│ │ R$ 150   │  │ R$ 130   │  │ R$ 140   ││
│ │[Solicitar]│  │[Solicitar]│  │[Solicitar]││
│ └──────────┘  └──────────┘  └──────────┘│
└─────────────────────────────────────────┘
```

## Recursos

✅ Filtro por serviço (obrigatório)
✅ Filtro por cidade (opcional)
✅ Filtro por avaliação (opcional)
✅ Filtro por preço (opcional)
✅ Mostra técnico com melhor avaliação
✅ Mostra outras opções disponíveis
✅ Validação de login ao solicitar
✅ Design responsivo
✅ Animações suaves

## Dicas

1. **Deixe os filtros em branco** para ver todas as opções
2. **Defina um preço máximo** para encontrar técnicos mais baratos
3. **Aumente a avaliação mínima** para técnicos mais experientes
4. **Especifique a cidade** para técnicos mais próximos

## Fluxo Completo

```
index.html
    ↓ (Clica em "Técnicos Especializados")
tecnico-ideal.html
    ↓ (Preenche filtros)
    ↓ (Clica em "Buscar")
    ↓ (Vê técnico ideal)
    ↓ (Clica em "Solicitar Serviço")
    ↓ (Valida login)
    ✅ Solicitação enviada!
```

## Integração com Outras Páginas

- **index.html** → Link no card "Técnicos Especializados"
- **servicos.html** → Pode adicionar link
- **pages/tecnicos.html** → Página alternativa com mais filtros
- **servico-detalhes.html** → Página com técnicos por serviço

## Próximas Melhorias

- [ ] Salvar filtros favoritos
- [ ] Histórico de buscas
- [ ] Comparar técnicos
- [ ] Agendamento direto
- [ ] Chat com técnico
