# 🚀 Deploy no Netlify - Guia Rápido

## ✅ Verificação Pré-Deploy

```bash
cd "c:\tecnico de celular"

# Verificar se todos os arquivos estão presentes
ls site/js/          # Deve ter: auth.js, data-manager.js, ui-components.js, app.js
ls site/css/         # Deve ter: style.css
ls site/pages/       # Deve ter: login.html, cadastro.html, tecnicos.html, etc
ls site/*.html       # Deve ter: index.html, servicos.html, _redirects
```

## 📋 Estrutura de Deploy

```
site/
├── index.html                 ← Página inicial
├── servicos.html             ← Serviços
├── _redirects                ← Configuração SPA (IMPORTANTE!)
├── css/
│   └── style.css
├── js/
│   ├── auth.js
│   ├── data-manager.js
│   ├── ui-components.js
│   └── app.js
└── pages/
    ├── login.html
    ├── cadastro.html
    ├── tecnicos.html
    └── ... outras páginas
```

## 🔧 Configuração Netlify

### 📄 netlify.toml (Já configurado!)
```toml
[build]
  base = "site"                              # Diretório a servir
  command = "echo 'No build needed'"         # Sem build necessário
  publish = "."                              # Publica o diretório inteiro

[[redirects]]
  from = "/*"
  to = "/index.html"                         # SPA fallback
  status = 200
```

### 📍 site/_redirects (Criado!)
```
/* /index.html 200
```

Isso garante que todas as rotas sejam tratadas pelo app JavaScript.

## 🚀 3 Formas de Fazer Deploy

### Opção 1: Drag & Drop (Mais Fácil - Sem GitHub)

1. Acesse https://app.netlify.com
2. Clique em "Deploy" → "Deploy manually"
3. **Arraste a pasta `site/` para a área de upload**
4. Pronto! Seu site está online!

**Vantagens:**
- ✅ Rápido
- ✅ Sem configuração
- ✅ Ideal para testes

**Desvantagens:**
- ❌ Sem versionamento
- ❌ Deploy manual cada vez

### Opção 2: GitHub + Netlify (Recomendado)

#### 1. Push para GitHub

```bash
# Dentro da pasta do projeto
cd "c:\tecnico de celular"

# Inicialize git (se ainda não feito)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
git init
git add .
git commit -m "Initial commit - CelularTech HTML/CSS/JS"

# Crie repositório no GitHub e faça push
git remote add origin https://github.com/seu-usuario/seu-repositorio.git
git branch -M main
git push -u origin main
```

#### 2. Conecte ao Netlify

1. Acesse https://app.netlify.com
2. Clique em "New site from Git"
3. Selecione GitHub
4. Escolha seu repositório
5. Configurações já vêm prontas (netlify.toml)
6. Clique em "Deploy"

**Vantagens:**
- ✅ Deploy automático on push
- ✅ Preview automático de PRs
- ✅ Histórico de versões
- ✅ Rollback fácil

### Opção 3: CLI Netlify

```bash
# Instalar Netlify CLI globalmente
npm install -g netlify-cli

# Login
netlify login

# Deploy a pasta site/
cd site
netlify deploy --prod
```

## ✨ O Que Já Está Configurado

- [x] `netlify.toml` - Configuração perfeita para SPA
- [x] `site/_redirects` - Redirect para SPA
- [x] `.gitignore` - Arquivos ignorados
- [x] `index.html` - Scripts na ordem correta
- [x] Todos os arquivos JS/CSS/HTML

## 🔍 Verificar Deployment Local

Antes de fazer deploy, teste localmente:

```bash
# Abra em um navegador local
# Windows: Abra Explorer e dê duplo-clique em site/index.html
# macOS: open site/index.html
# Linux: firefox site/index.html
```

### Testes Rápidos
- [ ] Página inicial carrega
- [ ] Links funcionam
- [ ] Busca redireciona corretamente
- [ ] Login/Cadastro funcionam
- [ ] localStorage armazena dados
- [ ] Design é responsivo (teste em mobile)

## 📊 Após Deploy

### Verificar Sucesso

1. **Acesse seu domínio** (ex: seu-site.netlify.app)
2. **Abra DevTools** (F12)
   - Verifique console por erros
   - Veja Network tab para arquivos carregando
3. **Teste funcionalidades:**
   - Login/Cadastro
   - Busca de técnicos
   - Filtros
4. **Lighthouse** (DevTools > Lighthouse)
   - Deve ter score 80+

### Se algo não funcionar

**Logo "CelularTech" não aparece?**
- [ ] Verifique se index.html tem script correto
- [ ] Abra console (F12) - deve estar vazio sem erros

**Técnicos não aparecem?**
- [ ] localStorage pode estar vazio
- [ ] Verifique se auth.js e data-manager.js carregaram
- [ ] Veja console para erros

**Links quebrados?**
- [ ] Verifique netlify.toml - deve ter redirect /*
- [ ] Teste direto: seu-site.netlify.app/pages/login.html

## 🎯 Configurações Avançadas (Opcional)

### Domínio Customizado

1. **Compre domínio** (GoDaddy, Namecheap, etc)
2. **No Netlify**: Site settings → Domain management
3. **Adicione domínio customizado**
4. **Configure DNS** conforme instruções Netlify

### Variáveis de Ambiente (Futuro)

Se integrar com API backend:

```bash
# No Netlify: Site settings → Build & deploy → Environment
NEXT_PUBLIC_API_URL=https://api.seu-site.com
NEXT_PUBLIC_API_KEY=sua-chave-secreta
```

### Notificações de Deploy

1. **GitHub integration** já ativo
2. **Email notifications** automáticas
3. **Slack** (integração opcional)

## 📝 Checklist Final

Antes fazer deploy:

- [ ] Git inicializado (`git status` funciona)
- [ ] netlify.toml existe na raiz
- [ ] site/_redirects existe
- [ ] site/js/ tem 4 arquivos JS
- [ ] site/css/style.css existe
- [ ] site/pages/ tem páginas HTML
- [ ] index.html tem todos os scripts
- [ ] Não há erros JavaScript (`npm run lint` deveria rodar)
- [ ] Design responsivo (teste em mobile)
- [ ] localStorage funciona (F12 → Application)

## 🎊 Deploy Feito?

Parabéns! 🎉

**Seu site está online!** Compartilhe o link:
```
https://seu-site.netlify.app
```

## 📚 Links Úteis

- [Netlify Docs](https://docs.netlify.com)
- [Netlify Status](https://www.netlifystatus.com)
- [Netlify Community](https://community.netlify.com)
- [Site Settings](https://app.netlify.com/sites/) → seu-site

## ❓ Troubleshooting

**"Netlify não encontra arquivo"**
```
→ Verifique netlify.toml: base = "site"
→ Cheque _redirects em site/
```

**"Console cheio de erros"**
```
→ Abra F12 → Console
→ Verifique se auth.js, data-manager.js carregaram
→ localStorage pode estar vazio no primeiro acesso
```

**"Estilo não carrega"**
```
→ Caminho CSS: css/style.css (relativo)
→ Limpe cache: Ctrl+Shift+R
```

---

**Tudo pronto para produção! 🚀**

Próximos passos:
1. Escolher método de deploy (drag-drop / GitHub / CLI)
2. Fazer deploy
3. Testar em produção
4. Adicionar domínio customizado (opcional)
5. Configurar alertas (opcional)

**Bom deployment! 🎯**
