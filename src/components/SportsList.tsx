import React from 'react';
import { sports } from '../data';
import { Medal, Snowflake, Droplet, Ribbon, Music, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SportsList: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'medal': return <Medal className="text-red-500 h-8 w-8" />;
      case 'snowflake': return <Snowflake className="text-red-500 h-8 w-8" />;
      case 'droplet': return <Droplet className="text-red-500 h-8 w-8" />;
      case 'ribbon': return <Ribbon className="text-red-500 h-8 w-8" />;
      case 'music': return <Music className="text-red-500 h-8 w-8" />;
      case 'circle': return <Circle className="text-red-500 h-8 w-8" />;
      default: return <Medal className="text-red-500 h-8 w-8" />;
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Deportes que Cubrimos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Diseñamos para una amplia variedad de disciplinas deportivas, asegurando que cada traje esté optimizado para los requisitos específicos de cada deporte.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sports.map((sport) => (
            <Link 
              to={`/sports/${sport.name.toLowerCase().replace(/\s+/g, '-')}`}
              key={sport.id}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group hover:border-red-500 border-2 border-transparent"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-6 mx-auto group-hover:bg-red-100 transition-colors">
                {getIcon(sport.icon)}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 group-hover:text-red-600 transition-colors">
                {sport.name}
              </h3>
              <p className="text-gray-600 text-center">
                {sport.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/sports" 
            className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
          >
            Ver todos los deportes
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SportsList;