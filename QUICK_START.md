# 🚀 Quick Start - Deploy Netlify

## 3 Passos Rápidos

### 1️⃣ Preparar Localmente
```bash
cd frontend
npm install
npm run build
npm start
```

### 2️⃣ Enviar para GitHub
```bash
git add .
git commit -m "Prepare for Netlify deploy"
git push origin main
```

### 3️⃣ Deploy no Netlify

**Via Interface Web:**
1. Abra https://app.netlify.com
2. Clique "New site from Git"
3. Selecione seu repositório GitHub
4. Confirme as configurações:
   - Build: `npm run build`
   - Publish: `.next/standalone`
5. Adicione variáveis de ambiente (Production):
   ```
   NEXT_PUBLIC_API_URL = https://...
   NEXT_PUBLIC_API_KEY = ...
   NEXT_PUBLIC_ENV = production
   ```
6. Clique "Deploy site"

**Via CLI:**
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

## 📋 Arquivos Importantes

| Arquivo | Objetivo |
|---------|----------|
| `netlify.toml` | Configuração do Netlify |
| `frontend/.env.example` | Template de variáveis |
| `DEPLOY.md` | Guia completo |
| `DEPLOY_CHECKLIST.md` | Checklist pré-deploy |

## ⚙️ Configurações Pré-Configuradas

✅ Build Command: `npm run build`  
✅ Publish Directory: `.next/standalone`  
✅ Next.js Output: `standalone`  
✅ Headers de Segurança: Configurados  
✅ Cache Headers: Otimizados  

## ⚡ Links Úteis

- [Netlify Dashboard](https://app.netlify.com)
- [Netlify Next.js Guide](https://docs.netlify.com/frameworks/next-js/overview/)
- [Verificar Build Local](./verify-deploy.ps1)

## 🆘 Troubleshooting Rápido

| Problema | Solução |
|----------|---------|
| Build falha | Execute `npm run build` localmente e veja o erro |
| Variáveis não carregam | Redeploy após adicionar no Netlify |
| Rotas quebradas | Verifique `netlify.toml` redirects |
| Node version | Netlify usa Node 18+ por padrão |

---

**Status**: ✅ Pronto para deploySeu projeto está configurado e pronto para deploy no Netlify!
