'use client';

import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';
import { FiUser, FiLogOut } from 'react-icons/fi';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          CelularTech
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/tecnicos" className="hover:text-primary">
            Encontrar Técnicos
          </Link>

          {user ? (
            <>
              <Link href={user.user_type === 'technician' ? '/dashboard/tecnico' : '/dashboard/cliente'} 
                    className="hover:text-primary flex items-center gap-2">
                <FiUser /> Dashboard
              </Link>
              <button onClick={logout} className="hover:text-red-500 flex items-center gap-2">
                <FiLogOut /> Sair
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-primary">
                Entrar
              </Link>
              <Link href="/cadastro" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Cadastrar
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
