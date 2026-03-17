'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { getTechnicianRequests, updateRequestStatus } from '../../../services/api';
import { useRouter } from 'next/navigation';

export default function TechnicianDashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || user.user_type !== 'technician') {
      router.push('/login');
      return;
    }
    loadRequests();
  }, [user]);

  const loadRequests = async () => {
    try {
      const response = await getTechnicianRequests();
      setRequests(response.data);
    } catch (error) {
      console.error('Erro ao carregar pedidos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (requestId, newStatus) => {
    try {
      await updateRequestStatus(requestId, newStatus);
      loadRequests();
      alert('Status atualizado com sucesso!');
    } catch (error) {
      alert('Erro ao atualizar status');
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      accepted: 'bg-blue-100 text-blue-800',
      in_progress: 'bg-purple-100 text-purple-800',
      completed: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusText = (status) => {
    const texts = {
      pending: 'Pendente',
      accepted: 'Aceito',
      in_progress: 'Em Andamento',
      completed: 'Concluído',
      rejected: 'Recusado'
    };
    return texts[status] || status;
  };

  if (loading) return <div className="container mx-auto px-4 py-8">Carregando...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Pedidos Recebidos</h1>

      {requests.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-600">Você ainda não recebeu nenhum pedido</p>
        </div>
      ) : (
        <div className="space-y-4">
          {requests.map((request) => (
            <div key={request.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{request.service_type}</h3>
                  <p className="text-gray-600">Cliente: {request.client_name}</p>
                  <p className="text-gray-600">Telefone: {request.client_phone}</p>
                  <p className="text-gray-600">Cidade: {request.client_city}</p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(request.status)}`}>
                  {getStatusText(request.status)}
                </span>
              </div>
              
              <p className="text-gray-700 mb-4">{request.description}</p>
              
              {request.photo && (
                <img 
                  src={`http://localhost:5000/uploads/${request.photo}`} 
                  alt="Foto do aparelho" 
                  className="w-48 h-48 object-cover rounded-lg mb-4"
                />
              )}
              
              <div className="text-sm text-gray-500 mb-4">
                Criado em: {new Date(request.created_at).toLocaleDateString()}
              </div>

              {request.status === 'pending' && (
                <div className="flex gap-2">
                  <button
                    onClick={() => handleStatusChange(request.id, 'accepted')}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  >
                    Aceitar
                  </button>
                  <button
                    onClick={() => handleStatusChange(request.id, 'rejected')}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Recusar
                  </button>
                </div>
              )}

              {request.status === 'accepted' && (
                <button
                  onClick={() => handleStatusChange(request.id, 'in_progress')}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Iniciar Serviço
                </button>
              )}

              {request.status === 'in_progress' && (
                <button
                  onClick={() => handleStatusChange(request.id, 'completed')}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  Marcar como Concluído
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
