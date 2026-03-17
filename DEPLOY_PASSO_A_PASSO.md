# 🎯 Fazer Deploy no Netlify - Passo a Passo

> **Tempo necessário**: 2-5 minutos  
> **Dificuldade**: Muito Fácil ✨

---

## 🚀 O Jeito Mais Fácil (Recomendado)

### Método 1: Drag & Drop - Sem GitHub

**Melhor para**: Testes rápidos, primeira vez, sem versionamento

#### Passo 1: Prepeare a Pasta
```bash
# Navegue até o projeto
cd "c:\tecnico de celular"

# Copie ou comprima a pasta site/ para fácil upload
# Você pode usar: Ctrl+C na pasta site/ → Ctrl+V em outro lugar
```

#### Passo 2: Acesse Netlify
1. Abra: https://app.netlify.com
2. **Crie conta** (se ainda não tem)
   - Use Google, GitHub ou email

#### Passo 3: Deploy Drag & Drop
```
Na página principal do Netlify:

┌─────────────────────────────────────────┐
│  Drag and drop your site folder here    │
│                                         │
│            ⬇️  ARRASTAR AQUI  ⬇️        │
│                                         │
│    Ou clique para selecionar pasta      │
└─────────────────────────────────────────┘
```

**Ação:**
1. Clique em "Deploy manually" (se não aparecer acima)
2. **ARRASTE a pasta `site/` para a área vermelha**
3. Pronto! Deploy começará automaticamente

#### Passo 4: Aguarde Upload
```
📤 Enviando arquivos...
  ✓ index.html
  ✓ servicos.html
  ✓ css/style.css
  ✓ js/auth.js
  ✓ js/data-manager.js
  ✓ js/ui-components.js
  ✓ js/app.js
  ✓ pages/...
  
⏳ Processando...
   10% ████░░░░░░░░░░░
   50% ████████████░░░░░░░
   100% █████████████████████

✅ Deploy completo!
```

#### Passo 5: Seu Site Está Online! 🎉

Você receberá um URL como:
```
https://seu-site-aleatorio.netlify.app
```

↪️ **Abra esse link no navegador!**

---

## 🔗 Método 2: Com GitHub (Auto-Deploy)

**Melhor para**: Desenvolvimento contínuo, versionamento, deploy automático

### Parte A: GitHub

#### 1. Criar Repositório
```bash
cd "c:\tecnico de celular"

# Inicializar git
git init
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Adicionar todos os arquivos
git add .

# Primeiro commit
git commit -m "CelularTech - HTML/CSS/JavaScript puro"
```

#### 2. Criar Repositório no GitHub
1. Abra: https://github.com/new
2. Nome do repositório: `celular-tech` (ou qualquer nome)
3. Clique em "Create repository"

#### 3. Upload para GitHub
```bash
# Copie o comando do GitHub (ex:)
git remote add origin https://github.com/seu-usuario/celular-tech.git
git branch -M main
git push -u origin main
```

💡 Verifique em: https://github.com/seu-usuario/celular-tech

### Parte B: Netlify

#### 1. Conectar Netlify ao GitHub
1. Abra: https://app.netlify.com
2. Clique em "New site from Git"

#### 2. Escolher GitHub
```
┌─────────────────────────────┐
│  Connect to a Git provider  │
│  ┌─────────────────────┐   │
│  │  🐙 GitHub          │   │
│  │  GitLab             │   │
│  │  Bitbucket          │   │
│  └─────────────────────┘   │
└─────────────────────────────┘
```

Clique em "GitHub"

#### 3. Selecionar Repositório
1. Busque: `celular-tech`
2. Clique no seu repositório

#### 4. Configurações de Deploy
```
┌──────────────────────────────┐
│ Build settings:              │
│ ────────────────────────────│
│ Base directory: site         │ ← JÁ VÊEM PRONTO!
│ Build command: (vazio)      │
│ Publish directory: .        │
└──────────────────────────────┘
```

**Não mude nada - deixe como está!**

#### 5. Deploy
Clique em "Deploy site"

```
🔄 Building...
   ✓ Dependências instaladas
   ✓ Build executado
   ✓ Arquivos processados
   
📤 Deploying...
   ✓ Site online
   
✅ Live: https://seu-site.netlify.app
```

#### 6. Pronto! 🎉

Agora cada vez que você fizer push no GitHub:
```bash
git add .
git commit -m "Melhorias no site"
git push
```

**Netlify automaticamente faz deploy!** ⚡

---

## ⚙️ Após Deploy - Checklist

- [ ] Site abre sem erros (F12 → Console está limpo)
- [ ] Login funciona
- [ ] Registro funciona
- [ ] Busca de técnicos funciona
- [ ] Filtros funcionam
- [ ] Design é responsivo (teste no mobile)
- [ ] localStorage guarda dados

---

## 🎨 Customizar Domínio

### Opção 1: Netlify Subdomain (Grátis)
```
Padrão: seu-site-aleatorio.netlify.app
```

### Opção 2: Domínio Customizado (€/ano)

1. **Compre domínio** em:
   - GoDaddy
   - Namecheap
   - Registro.br (para .com.br)

2. **Configure no Netlify**:
   - Site settings → Domain management
   - Adicione domínio
   - Configure DNS (Netlify guia)

3. **Seu site em**: `seu-dominio.com`

---

## 🔍 Troubleshooting Rápido

### ❌ "Site não carrega"
**Solução:**
```
1. Abra console (F12)
2. Veja se tem erros JavaScript
3. Verifique Network tab
```

### ❌ "CSS não carrega"
**Solução:**
1. Limpe cache (Ctrl+Shift+R)
2. Verifique netlify.toml: `base = "site"`
3. Verifique link CSS em index.html

### ❌ "JavaScript mostra erro"
**Solução:**
1. F12 → Console
2. Leia o erro
3. Verifique se todos os .js estão em site/js/

### ❌ "Login não funciona"
**Solução:**
1. localStorage pode estar vazio
2. Tente registrar novo usuário
3. Ou use: teste@celular.com / 123456

---

## 📊 Monitorar Deploy

### Dashboard Netlify

Após deploy, você tem acesso a:

```
📊 Analíticos
   ├─ Visitors
   ├─ Bandwidth
   └─ Performance

🔍 Build logs
   ├─ Histórico de deploys
   ├─ Erros de build
   └─ Tempo de build

⚡ Environment
   ├─ Variáveis
   ├─ API keys
   └─ Configurações

🔐 Security
   ├─ HTTPS (automático)
   ├─ Certificado SSL
   └─ Headers de segurança
```

---

## 🎯 Próximos Passos

### Após Deploy Bem-Sucedido

1. **Compartilhar link**
   ```
   Seu site: https://seu-site.netlify.app
   GitHub: https://github.com/seu-usuario/seu-repo
   ```

2. **Melhorias futuras**
   - [ ] Backend em Node.js/Express
   - [ ] Banco de dados real
   - [ ] Sistema de pagamento
   - [ ] Chat em tempo real

3. **Domínio profissional**
   - [ ] Comprar domínio
   - [ ] Configurar DNS
   - [ ] Apontar para Netlify

---

## 📚 Documentação

- [Netlify Docs](https://docs.netlify.com/)
- [Deploy com Netlify](https://docs.netlify.com/site-deploys/overview/)
- [Configurar Domínio](https://docs.netlify.com/domains-https/custom-domains/)

---

## 🎊 Status Final

✅ **Seu site está ao vivo!**

**Features:**
- HTML/CSS/JS puro
- Sem dependências
- Deploy em minutos
- Grátis no Netlify
- HTTPS automático
- CDN global

---

**Parabéns! 🎉 Seu projeto está em produção!**

> Compartilhe seu link: https://seu-site.netlify.app

---

## 📞 Suporte

| Problema | Solução |
|----------|---------|
| Site não abre | F12 → Network, verifique URLs |
| CSS não carrega | Clear cache (Ctrl+Shift+R) |
| JavaScript erro | F12 → Console, leia erro |
| Deploy falha | Verifique netlify.toml |
| Domínio não funciona | Aguarde 24-48h de DNS |

---

**Desenvolvido com ❤️**

> Seu site está pronto para o mundo! 🌍
