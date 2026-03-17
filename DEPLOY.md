# 🚀 Guia de Deploy no Netlify

## Pré-requisitos
- Conta no [Netlify](https://netlify.com)
- Repositório no GitHub/GitLab/Bitbucket
- Node.js 18+ instalado lokalmente

## Passo 1: Preparar o Repositório

```bash
# Certifique-se que está na raiz do projeto
cd "c:\tecnico de celular"

# Verifique se o git está inicializado
git status

# Se não estiver, inicie o git
git init
git add .
git commit -m "Initial commit"
```

## Passo 2: Push para GitHub

```bash
# Crie um repositório no GitHub

# Adicione o remote
git remote add origin https://github.com/seu-usuario/seu-repositorio.git

# Push para o GitHub
git branch -M main
git push -u origin main
```

## Passo 3: Configurar Deploy no Netlify

### Opção A: Via Interface do Netlify

1. Acesse [app.netlify.com](https://app.netlify.com)
2. Clique em "New site from Git"
3. Selecione seu repositório
4. Verifique as configurações:
   - **Base directory**: deixe em branco (raiz do projeto)
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Adicione as variáveis de ambiente:
   - Vá para "Site settings" > "Build & deploy" > "Environment"
   - Clique em "Add environment variables"
   - Adicione as variáveis do `.env.example`
6. Clique em "Deploy"

### Opção B: Via Netlify CLI

```bash
# Instale o Netlify CLI globalmente
npm install -g netlify-cli

# Faça login
netlify login

# Inicialize o projeto
netlify init

# Durante a inicialização:
# - Selecione "Create & configure a new site"
# - Nome do site (ex: celular-tech)
# - Build command: npm run build
# - Publish directory: .next

# Deploy
netlify deploy --prod
```

## Variáveis de Ambiente

No Netlify, configure as seguintes variáveis via "Site settings":

| Variável | Valor | Tipo |
|----------|-------|------|
| `NEXT_PUBLIC_API_URL` | URL da sua API backend | Production |
| `NEXT_PUBLIC_API_KEY` | Chave da API | Production |
| `NEXT_PUBLIC_ENV` | `production` | Production |

## Arquivos Importantes

- **netlify.toml**: Configuração principal do Netlify
- **.env.example**: Template de variáveis de ambiente
- **.gitignore**: Arquivos não versionados (inclui .env)

## Verificações Antes do Deploy

- [ ] Remova dados sensíveis do código
- [ ] Todas as variáveis de ambiente estão documentadas em `.env.example`
- [ ] O build funciona localmente: `npm run build && npm start`
- [ ] Todos os arquivos foram commitados no Git
- [ ] Não há erros de lint: `npm run lint`

## Troubleshooting

### Build falha com erro de dependências
```bash
cd frontend
npm install
npm run build
```

### Variáveis de ambiente não carregam
- Verifique se começam com `NEXT_PUBLIC_` (para variáveis acessíveis no frontend)
- Redeploy após adicionar variáveis

### Rotas não funcionam
- O `netlify.toml` já configura redirects para Next.js
- Verifique se o diretório de publicação está como `.next`

## Monitoramento

Após o deploy:
1. Acesse o domínio do Netlify
2. Verifique os logs de build em "Deploys" > "Build logs"
3. Use o Netlify Analytics para rastrear performance
4. Configure alertas de erro em Site settings

## Documentação

- [Netlify Next.js Guide](https://docs.netlify.com/frameworks/next-js/overview/)
- [Netlify Environment Variables](https://docs.netlify.com/configure-builds/environment-variables/)
- [Netlify Redirects & Rewrites](https://docs.netlify.com/routing/redirects/)
