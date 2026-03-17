#!/bin/bash
# Script de verificação pré-deploy

echo "🔍 Verificando projeto para deploy no Netlify..."
echo ""

# Verificar Node.js
echo "✓ Verificando Node.js..."
node --version
npm --version
echo ""

# Verificar dependências
echo "✓ Verificando dependências..."
cd frontend
npm list next react react-dom
echo ""

# Verificar build
echo "✓ Testando build..."
npm run build
if [ $? -eq 0 ]; then
    echo "✅ Build bem-sucedido!"
else
    echo "❌ Build falhou! Verifique os erros acima."
    exit 1
fi
echo ""

# Verificar lint
echo "✓ Verificando lint..."
npm run lint
echo ""

# Verificar arquivos de configuração
echo "✓ Verificando arquivos necessários..."
if [ -f "../netlify.toml" ]; then
    echo "✅ netlify.toml encontrado"
else
    echo "❌ netlify.toml não encontrado"
fi

if [ -f ".env.example" ]; then
    echo "✅ .env.example encontrado"
else
    echo "❌ .env.example não encontrado"
fi

if [ -f "../.gitignore" ]; then
    echo "✅ .gitignore encontrado"
else
    echo "❌ .gitignore não encontrado"
fi
echo ""

echo "✅ Verificação completa!"
echo ""
echo "Próximos passos:"
echo "1. Configure as variáveis de ambiente no Netlify"
echo "2. Faça push para o repositório Git"
echo "3. Conecte o repositório ao Netlify"
echo "4. Deploy será iniciado automaticamente"
