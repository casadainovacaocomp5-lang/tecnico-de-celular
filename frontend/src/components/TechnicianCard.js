'use client';

import Link from 'next/link';
import { FiStar, FiMapPin, FiUser } from 'react-icons/fi';

export default function TechnicianCard({ technician }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-3xl">
          {technician.photo ? (
            <img src={`http://localhost:5000/uploads/${technician.photo}`} 
                 alt={technician.name} 
                 className="w-full h-full rounded-full object-cover" />
          ) : (
            <FiUser />
          )}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold">{technician.name}</h3>
          
          <div className="flex items-center gap-2 text-gray-600 mt-1">
            <FiMapPin size={16} />
            <span>{technician.city}</span>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-1 text-yellow-500">
              <FiStar fill="currentColor" />
              <span className="font-semibold">{technician.average_rating || 0}</span>
            </div>
            <span className="text-gray-500">({technician.total_services} serviços)</span>
          </div>

          {technician.specialties && technician.specialties.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {technician.specialties.slice(0, 3).map((spec, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {spec}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold text-primary">
              R$ {technician.average_price || '0,00'}
            </span>
            <Link href={`/tecnicos/${technician.id}`} 
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Ver Perfil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
