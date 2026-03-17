#!/usr/bin/env node
/**
 * Script de Validação para Deploy no Netlify
 * Verifica se tudo está configurado corretamente
 */

const fs = require('fs');
const path = require('path');

const SITE_DIR = path.join(__dirname, 'site');

console.log('🔍 Verificando configuração para Netlify Deploy...\n');

let errors = 0;
let warnings = 0;
let success = 0;

// Função auxiliar
function check(condition, message, type = 'success') {
  if (condition) {
    console.log(`✅ ${message}`);
    success++;
  } else {
    console.log(`❌ ${message}`);
    errors++;
  }
}

function warn(condition, message) {
  if (!condition) {
    console.log(`⚠️  ${message}`);
    warnings++;
  }
}

// Verificações
console.log('📁 Verificando estrutura de arquivos:\n');

// Arquivos principais
check(fs.existsSync(path.join(SITE_DIR, 'index.html')), 'index.html existe');
check(fs.existsSync(path.join(SITE_DIR, 'servicos.html')), 'servicos.html existe');
check(fs.existsSync(path.join(SITE_DIR, '_redirects')), '_redirects existe');
check(fs.existsSync(path.join(SITE_DIR, 'css', 'style.css')), 'css/style.css existe');

// JavaScript
console.log('\n📝 Verificando JavaScript:\n');
check(fs.existsSync(path.join(SITE_DIR, 'js', 'auth.js')), 'js/auth.js existe');
check(fs.existsSync(path.join(SITE_DIR, 'js', 'data-manager.js')), 'js/data-manager.js existe');
check(fs.existsSync(path.join(SITE_DIR, 'js', 'ui-components.js')), 'js/ui-components.js existe');
check(fs.existsSync(path.join(SITE_DIR, 'js', 'app.js')), 'js/app.js existe');

// Páginas HTML
console.log('\n📄 Verificando páginas:\n');
const pages = ['login.html', 'cadastro.html', 'tecnicos.html', 'tecnico-perfil.html'];
pages.forEach(page => {
  check(fs.existsSync(path.join(SITE_DIR, 'pages', page)), `pages/${page} existe`);
});

// Configuração Netlify
console.log('\n⚙️  Verificando configuração Netlify:\n');
check(fs.existsSync(path.join(__dirname, 'netlify.toml')), 'netlify.toml existe');
check(fs.existsSync(path.join(__dirname, '.gitignore')), '.gitignore existe');

// Verificações de conteúdo
console.log('\n🔎 Verificando conteúdo dos arquivos:\n');

try {
  const indexContent = fs.readFileSync(path.join(SITE_DIR, 'index.html'), 'utf8');
  check(indexContent.includes('js/auth.js'), 'index.html importa auth.js');
  check(indexContent.includes('js/data-manager.js'), 'index.html importa data-manager.js');
  check(indexContent.includes('js/ui-components.js'), 'index.html importa ui-components.js');
  check(indexContent.includes('js/app.js'), 'index.html importa app.js');
  check(indexContent.includes('css/style.css'), 'index.html importa style.css');
} catch (e) {
  console.log(`❌ Erro ao ler index.html: ${e.message}`);
  errors++;
}

try {
  const netifyContent = fs.readFileSync(path.join(__dirname, 'netlify.toml'), 'utf8');
  check(netifyContent.includes('base = "site"'), 'netlify.toml: base = "site"');
  check(netifyContent.includes('[[redirects]]'), 'netlify.toml tem redirects configurados');
} catch (e) {
  console.log(`❌ Erro ao ler netlify.toml: ${e.message}`);
  errors++;
}

try {
  const redirectsContent = fs.readFileSync(path.join(SITE_DIR, '_redirects'), 'utf8');
  check(redirectsContent.includes('/index.html'), '_redirects redireciona para /index.html');
} catch (e) {
  console.log(`❌ Erro ao ler _redirects: ${e.message}`);
  errors++;
}

// Git
console.log('\n📦 Verificando Git:\n');
check(fs.existsSync(path.join(__dirname, '.git')), '.git inicializado (ou inicialize com: git init)');

// Resumo
console.log('\n' + '='.repeat(50));
console.log(`\n📊 RESULTADO:\n`);
console.log(`✅ Sucesso: ${success}`);
console.log(`⚠️  Avisos: ${warnings}`);
console.log(`❌ Erros: ${errors}`);
console.log('\n' + '='.repeat(50) + '\n');

if (errors === 0) {
  console.log('🎉 TUDO PRONTO PARA DEPLOY NO NETLIFY!\n');
  console.log('Próximos passos:');
  console.log('1. git add .');
  console.log('2. git commit -m "Deploy ready"');
  console.log('3. Arraste site/ para https://app.netlify.com');
  console.log('\nOu use GitHub + Netlify para auto-deploy!');
  process.exit(0);
} else {
  console.log('❌ Corrija os erros acima antes de fazer deploy.\n');
  process.exit(1);
}
