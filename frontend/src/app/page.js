'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiSearch, FiSmartphone, FiStar, FiShield } from 'react-icons/fi';

export default function Home() {
  const [searchCity, setSearchCity] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/tecnicos?city=${searchCity}`);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Encontre o Melhor Técnico para seu Celular
          </h1>
          <p className="text-xl mb-8">
            Conectamos você com técnicos especializados em conserto de smartphones
          </p>

          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Digite sua cidade..."
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                className="flex-1 px-6 py-4 rounded-lg text-gray-800 text-lg"
              />
              <button type="submit" className="bg-secondary px-8 py-4 rounded-lg font-semibold hover:bg-green-600 flex items-center gap-2">
                <FiSearch /> Buscar
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a CelularTech?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiSmartphone className="text-primary text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Técnicos Especializados</h3>
              <p className="text-gray-600">
                Profissionais qualificados e experientes em conserto de smartphones
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiStar className="text-primary text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Avaliações Reais</h3>
              <p className="text-gray-600">
                Sistema de avaliações transparente para você escolher com confiança
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiShield className="text-primary text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Segurança Garantida</h3>
              <p className="text-gray-600">
                Plataforma segura para contratar serviços com tranquilidade
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Você é um técnico?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Cadastre-se e comece a receber solicitações de clientes hoje mesmo!
          </p>
          <a href="/cadastro" className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 inline-block">
            Cadastrar como Técnico
          </a>
        </div>
      </section>
    </div>
  );
}
