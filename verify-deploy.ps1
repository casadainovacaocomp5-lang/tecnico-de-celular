# Script de verificação pré-deploy para Windows

Write-Host "🔍 Verificando projeto para deploy no Netlify..." -ForegroundColor Cyan
Write-Host ""

# Verificar Node.js
Write-Host "✓ Verificando Node.js..." -ForegroundColor Yellow
node --version
npm --version
Write-Host ""

# Verificar dependências
Write-Host "✓ Verificando dependências..." -ForegroundColor Yellow
cd frontend
npm list next react react-dom
Write-Host ""

# Verificar build
Write-Host "✓ Testando build..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build bem-sucedido!" -ForegroundColor Green
} else {
    Write-Host "❌ Build falhou! Verifique os erros acima." -ForegroundColor Red
    exit 1
}
Write-Host ""

# Verificar lint
Write-Host "✓ Verificando lint..." -ForegroundColor Yellow
npm run lint
Write-Host ""

# Verificar arquivos de configuração
Write-Host "✓ Verificando arquivos necessários..." -ForegroundColor Yellow
if (Test-Path "..\netlify.toml") {
    Write-Host "✅ netlify.toml encontrado" -ForegroundColor Green
} else {
    Write-Host "❌ netlify.toml não encontrado" -ForegroundColor Red
}

if (Test-Path ".env.example") {
    Write-Host "✅ .env.example encontrado" -ForegroundColor Green
} else {
    Write-Host "❌ .env.example não encontrado" -ForegroundColor Red
}

if (Test-Path "..\..gitignore") {
    Write-Host "✅ .gitignore encontrado" -ForegroundColor Green
} else {
    Write-Host "❌ .gitignore não encontrado" -ForegroundColor Red
}
Write-Host ""

Write-Host "✅ Verificação completa!" -ForegroundColor Green
Write-Host ""
Write-Host "Próximos passos:" -ForegroundColor Cyan
Write-Host "1. Configure as variáveis de ambiente no Netlify"
Write-Host "2. Faça push para o repositório Git"
Write-Host "3. Conecte o repositório ao Netlify"
Write-Host "4. Deploy será iniciado automaticamente"
