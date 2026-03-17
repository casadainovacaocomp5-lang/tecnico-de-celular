'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getTechnicianById } from '../../../services/api';
import { FiStar, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { useAuth } from '../../../contexts/AuthContext';

export default function TechnicianProfile() {
  const { id } = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const [technician, setTechnician] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTechnician();
  }, [id]);

  const loadTechnician = async () => {
    try {
      const response = await getTechnicianById(id);
      setTechnician(response.data);
    } catch (error) {
      console.error('Erro ao carregar técnico:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRequestRepair = () => {
    if (!user) {
      router.push('/login');
      return;
    }
    router.push(`/pedido/novo?technician_id=${id}`);
  };

  if (loading) return <div className="container mx-auto px-4 py-8">Carregando...</div>;
  if (!technician) return <div className="container mx-auto px-4 py-8">Técnico não encontrado</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex items-start gap-6">
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-5xl">
            {technician.photo ? (
              <img src={`http://localhost:5000/uploads/${technician.photo}`} 
                   alt={technician.name} 
                   className="w-full h-full rounded-full object-cover" />
            ) : (
              '👤'
            )}
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{technician.name}</h1>
            
            <div className="flex items-center gap-4 text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <FiMapPin />
                <span>{technician.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone />
                <span>{technician.phone}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-yellow-500 text-xl">
                <FiStar fill="currentColor" />
                <span className="font-bold">{technician.average_rating || 0}</span>
              </div>
              <span className="text-gray-600">({technician.total_services} serviços realizados)</span>
            </div>

            <p className="text-gray-700 mb-6">{technician.description}</p>

            <button
              onClick={handleRequestRepair}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600"
            >
              Solicitar Conserto
            </button>
          </div>
        </div>
      </div>

      {technician.services && technician.services.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Serviços Oferecidos</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {technician.services.map((service) => (
              <div key={service.id} className="border rounded-lg p-4">
                <h3 className="font-bold text-lg">{service.name}</h3>
                <p className="text-gray-600 mb-2">{service.description}</p>
                <p className="text-primary font-bold text-xl">R$ {service.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {technician.reviews && technician.reviews.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Avaliações</h2>
          <div className="space-y-4">
            {technician.reviews.map((review) => (
              <div key={review.id} className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} fill={i < review.rating ? 'currentColor' : 'none'} />
                    ))}
                  </div>
                  <span className="font-semibold">{review.client_name}</span>
                  <span className="text-gray-500 text-sm">
                    {new Date(review.created_at).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
