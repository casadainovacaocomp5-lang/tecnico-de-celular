'use client';

import { useState, useEffect } from 'react';
import { getTechnicians } from '../../services/api';
import TechnicianCard from '../../components/TechnicianCard';
import { FiSearch } from 'react-icons/fi';

export default function Tecnicos() {
  const [technicians, setTechnicians] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ city: '', service: '', min_rating: '', sort_by: '' });

  useEffect(() => {
    loadTechnicians();
  }, [filters]);

  const loadTechnicians = async () => {
    try {
      const response = await getTechnicians(filters);
      setTechnicians(response.data);
    } catch (error) {
      console.error('Erro ao carregar técnicos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Encontre Técnicos</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid md:grid-cols-4 gap-4">
          <input
            type="text"
            name="city"
            placeholder="Cidade"
            value={filters.city}
            onChange={handleFilterChange}
            className="px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="service"
            placeholder="Serviço"
            value={filters.service}
            onChange={handleFilterChange}
            className="px-4 py-2 border rounded-lg"
          />
          <select
            name="min_rating"
            value={filters.min_rating}
            onChange={handleFilterChange}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="">Avaliação mínima</option>
            <option value="4">4+ estrelas</option>
            <option value="3">3+ estrelas</option>
          </select>
          <select
            name="sort_by"
            value={filters.sort_by}
            onChange={handleFilterChange}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="">Ordenar por</option>
            <option value="rating">Melhor avaliação</option>
            <option value="price_asc">Menor preço</option>
            <option value="price_desc">Maior preço</option>
          </select>
        </div>
      </div>

      {loading ? (
        <p className="text-center">Carregando...</p>
      ) : technicians.length === 0 ? (
        <p className="text-center text-gray-600">Nenhum técnico encontrado</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicians.map((tech) => (
            <TechnicianCard key={tech.id} technician={tech} />
          ))}
        </div>
      )}
    </div>
  );
}
