/**
 * Sistema de Autenticação - Gerenciamento de Login/Registro
 * Usa localStorage para persistência
 */

class AuthSystem {
  constructor() {
    this.users = this.loadUsers();
    this.currentUser = this.loadCurrentUser();
  }

  /**
   * Carrega usuários do localStorage
   */
  loadUsers() {
    const saved = localStorage.getItem('users');
    return saved ? JSON.parse(saved) : [];
  }

  /**
   * Carrega usuário logado do localStorage
   */
  loadCurrentUser() {
    const saved = localStorage.getItem('currentUser');
    return saved ? JSON.parse(saved) : null;
  }

  /**
   * Salva usuários no localStorage
   */
  saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  /**
   * Salva usuário logado no localStorage
   */
  saveCurrentUser() {
    if (this.currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    } else {
      localStorage.removeItem('currentUser');
    }
  }

  /**
   * Registra novo usuário
   */
  register(userData) {
    // Validar se email já existe
    if (this.users.some(u => u.email === userData.email)) {
      return { success: false, message: 'Email já registrado!' };
    }

    // Validar campos obrigatórios
    if (!userData.email || !userData.password || !userData.name) {
      return { success: false, message: 'Preencha todos os campos!' };
    }

    // Validar senha
    if (userData.password.length < 6) {
      return { success: false, message: 'Senha deve ter pelo menos 6 caracteres!' };
    }

    // Criar novo usuário
    const newUser = {
      id: Date.now(),
      ...userData,
      createdAt: new Date().toISOString(),
      role: userData.role || 'client',
      profileComplete: false
    };

    this.users.push(newUser);
    this.saveUsers();

    // Auto-login após registro
    this.currentUser = { ...newUser };
    delete this.currentUser.password;
    this.saveCurrentUser();

    return { success: true, user: this.currentUser };
  }

  /**
   * Faz login do usuário
   */
  login(email, password) {
    const user = this.users.find(u => u.email === email && u.password === password);

    if (!user) {
      return { success: false, message: 'Email ou senha inválidos!' };
    }

    this.currentUser = { ...user };
    delete this.currentUser.password;
    this.saveCurrentUser();

    return { success: true, user: this.currentUser };
  }

  /**
   * Faz logout do usuário
   */
  logout() {
    this.currentUser = null;
    this.saveCurrentUser();
    return { success: true };
  }

  /**
   * Atualiza perfil do usuário
   */
  updateProfile(updates) {
    if (!this.currentUser) {
      return { success: false, message: 'Usuário não autenticado!' };
    }

    const userIndex = this.users.findIndex(u => u.id === this.currentUser.id);
    if (userIndex === -1) {
      return { success: false, message: 'Usuário não encontrado!' };
    }

    // Atualizar no array
    this.users[userIndex] = { ...this.users[userIndex], ...updates };
    this.saveUsers();

    // Atualizar usuário atual
    this.currentUser = { ...this.users[userIndex] };
    delete this.currentUser.password;
    this.saveCurrentUser();

    return { success: true, user: this.currentUser };
  }

  /**
   * Obtém usuário atual
   */
  getCurrentUser() {
    return this.currentUser;
  }

  /**
   * Verifica se usuário está autenticado
   */
  isAuthenticated() {
    return this.currentUser !== null;
  }

  /**
   * Obtém usuário por ID (público)
   */
  getUserById(id) {
    const user = this.users.find(u => u.id === parseInt(id));
    if (user) {
      const { password, ...publicUser } = user;
      return publicUser;
    }
    return null;
  }
}

// Instância global
const auth = new AuthSystem();
