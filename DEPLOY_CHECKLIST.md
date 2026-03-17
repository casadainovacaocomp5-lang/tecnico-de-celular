# ✅ Checklist de Deploy no Netlify

## Pré-Deploy Local

- [ ] **Build funciona localmente**
  ```bash
  cd frontend
  npm install
  npm run build
  npm start
  ```

- [ ] **Sem erros de lint**
  ```bash
  npm run lint
  ```

- [ ] **Variáveis de ambiente documentadas**
  - [ ] `.env.example` existe e está atualizado
  - [ ] Todas as variáveis necessárias estão listadas

- [ ] **Arquivos de configuração presentes**
  - [ ] ✅ `netlify.toml` - Configuração do Netlify
  - [ ] ✅ `frontend/.env.example` - Template de ambiente
  - [ ] ✅ `.gitignore` - Arquivos ignorados

- [ ] **Código pronto**
  - [ ] Nenhuma chave privada no código
  - [ ] APIs apontam para produção (se houver)
  - [ ] Console sem erros warnings

## Git & GitHub

- [ ] **Repositório Git inicializado**
  ```bash
  git status
  ```

- [ ] **Commits feitos**
  ```bash
  git log
  ```

- [ ] **Enviado para GitHub**
  ```bash
  git push origin main
  ```

- [ ] **Branch protegido (opcional mas recomendado)**
  - Evitar pushes diretos em `main`
  - Usar Pull Requests para revisar código

## Configuração no Netlify

- [ ] **Conta Netlify criada**
  - [ ] Acesse https://app.netlify.com

- [ ] **Repositório conectado**
  - [ ] Site criado a partir do repositório Git

- [ ] **Build settings corretos**
  - [ ] Base directory: (vazio ou `frontend`)
  - [ ] Build command: `npm run build`
  - [ ] Publish directory: `.next/standalone`

- [ ] **Variáveis de ambiente configuradas**
  - [ ] `NEXT_PUBLIC_API_URL`
  - [ ] `NEXT_PUBLIC_API_KEY`
  - [ ] `NEXT_PUBLIC_ENV` = `production`

- [ ] **Domínio configurado**
  - [ ] Domínio customizado (opcional)
  - [ ] HTTPS habilitado (automático)

## Pós-Deploy

- [ ] **Site acessível**
  - [ ] URL do Netlify funciona
  - [ ] Domínio customizado funciona (se configurado)

- [ ] **Verificar funcionalidades**
  - [ ] Páginas carregam corretamente
  - [ ] Componentes renderizam
  - [ ] API conecta se necessário
  - [ ] Sem erros no console do navegador

- [ ] **Performance verificada**
  - [ ] Usar Lighthouse do DevTools
  - [ ] Usar PageSpeed Insights

- [ ] **Logs monitorados**
  - [ ] Verificar deploy logs no Netlify
  - [ ] Sem erros na build

## Manutenção Contínua

- [ ] **Auto-deploy habilitado**
  - [ ] Novo push em `main` = auto-deploy

- [ ] **Backups** (se aplicável)
  - [ ] Banco de dados fazer backup regular

- [ ] **Monitoramento**
  - [ ] Analytics do Netlify ativado
  - [ ] Alertas de erro configurados

- [ ] **Atualizações**
  - [ ] Manter dependências atualizadas
  - [ ] Testar upgrades antes de deploy

---

## Comandos Rápidos

```bash
# Verificar build
npm run build

# Verificar lint
npm run lint

# Iniciar servidor local
npm start

# Deploy com Netlify CLI
netlify deploy --prod

# Ver logs de deploy
netlify logs
```

## Contato & Suporte

- **Documentação Netlify**: https://docs.netlify.com
- **Fórum Netlify**: https://community.netlify.com
- **Status Page**: https://www.netlifystatus.com
