'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { getClientRequests, createReview } from '../../../services/api';
import { useRouter } from 'next/navigation';

export default function ClientDashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewModal, setReviewModal] = useState(null);
  const [reviewData, setReviewData] = useState({ rating: 5, comment: '' });

  useEffect(() => {
    if (!user || user.user_type !== 'client') {
      router.push('/login');
      return;
    }
    loadRequests();
  }, [user]);

  const loadRequests = async () => {
    try {
      const response = await getClientRequests();
      setRequests(response.data);
    } catch (error) {
      console.error('Erro ao carregar pedidos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      await createReview({ ...reviewData, repair_request_id: reviewModal });
      setReviewModal(null);
      setReviewData({ rating: 5, comment: '' });
      loadRequests();
      alert('Avaliação enviada com sucesso!');
    } catch (error) {
      alert('Erro ao enviar avaliação');
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
      <h1 className="text-4xl font-bold mb-8">Meus Pedidos</h1>

      {requests.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-600 mb-4">Você ainda não fez nenhum pedido</p>
          <a href="/tecnicos" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Encontrar Técnicos
          </a>
        </div>
      ) : (
        <div className="space-y-4">
          {requests.map((request) => (
            <div key={request.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{request.service_type}</h3>
                  <p className="text-gray-600">Técnico: {request.technician_name || 'Aguardando'}</p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(request.status)}`}>
                  {getStatusText(request.status)}
                </span>
              </div>
              
              <p className="text-gray-700 mb-4">{request.description}</p>
              
              <div className="text-sm text-gray-500">
                Criado em: {new Date(request.created_at).toLocaleDateString()}
              </div>

              {request.status === 'completed' && (
                <button
                  onClick={() => setReviewModal(request.id)}
                  className="mt-4 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  Avaliar Técnico
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {reviewModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Avaliar Técnico</h2>
            <form onSubmit={handleSubmitReview}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Nota (1-5)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={reviewData.rating}
                  onChange={(e) => setReviewData({ ...reviewData, rating: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Comentário</label>
                <textarea
                  value={reviewData.comment}
                  onChange={(e) => setReviewData({ ...reviewData, comment: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="flex gap-2">
                <button type="submit" className="flex-1 bg-primary text-white py-2 rounded-lg hover:bg-blue-600">
                  Enviar
                </button>
                <button
                  type="button"
                  onClick={() => setReviewModal(null)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
