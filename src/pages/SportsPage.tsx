import React, { useEffect } from 'react';
import { sports } from '../data';
import { Medal, Snowflake, Droplet, Ribbon, Music, Circle } from 'lucide-react';

const SportsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Deportes | LeotardArt';
  }, []);

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'medal': return <Medal className="text-red-500 h-12 w-12" />;
      case 'snowflake': return <Snowflake className="text-red-500 h-12 w-12" />;
      case 'droplet': return <Droplet className="text-red-500 h-12 w-12" />;
      case 'ribbon': return <Ribbon className="text-red-500 h-12 w-12" />;
      case 'music': return <Music className="text-red-500 h-12 w-12" />;
      case 'circle': return <Circle className="text-red-500 h-12 w-12" />;
      default: return <Medal className="text-red-500 h-12 w-12" />;
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Deportes</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Especializados en crear leotardos para una amplia variedad de disciplinas deportivas, cada una con sus propios requisitos técnicos y estéticos.
          </p>
        </div>
      </div>

      {/* Sports Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sports.map((sport) => (
              <div key={sport.id} className="bg-gray-50 rounded-lg p-8 flex flex-col items-center md:items-start md:flex-row gap-6">
                <div className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-md flex-shrink-0">
                  {getIcon(sport.icon)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-center md:text-left">{sport.name}</h3>
                  <p className="text-gray-600 mb-4 text-center md:text-left">{sport.description}</p>
                  
                  <div className="bg-white p-4 rounded-md border border-gray-200">
                    <h4 className="font-semibold mb-2">Características específicas:</h4>
                    <ul className="text-gray-600 space-y-1 list-disc pl-5">
                      <li>Materiales optimizados para movimiento y flexibilidad</li>
                      <li>Diseños que realzan la elegancia de cada disciplina</li>
                      <li>Cumplimiento de normativas de competición</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Adaptación a Cada Disciplina</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Cada deporte tiene requisitos únicos que tenemos en cuenta al diseñar los leotardos, desde la flexibilidad hasta la resistencia al agua.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Consideraciones por Deporte</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-xl mb-3 flex items-center text-red-600">
                  <Medal className="mr-2 h-5 w-5" /> Gimnasia Artística y Rítmica
                </h4>
                <p className="text-gray-600 mb-2">
                  Los leotardos para gimnasia deben permitir total libertad de movimiento mientras mantienen un ajuste perfecto durante saltos y giros.
                </p>
                <p className="text-gray-600">
                  Utilizamos lycras de alta elasticidad con costuras planas para evitar molestias, y aplicamos cristales con técnicas especiales para garantizar que no se desprendan durante las rutinas.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-xl mb-3 flex items-center text-red-600">
                  <Snowflake className="mr-2 h-5 w-5" /> Patinaje Artístico
                </h4>
                <p className="text-gray-600 mb-2">
                  En el patinaje, los trajes deben resistir temperaturas frías mientras permiten movimientos amplios.
                </p>
                <p className="text-gray-600">
                  Combinamos capas de materiales térmicos con tejidos elásticos, y prestamos especial atención a los acabados para que resistan las caídas y el contacto con el hielo.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-xl mb-3 flex items-center text-red-600">
                  <Droplet className="mr-2 h-5 w-5" /> Natación Sincronizada
                </h4>
                <p className="text-gray-600 mb-2">
                  Los trajes para natación sincronizada deben ser resistentes al cloro y mantener su brillo bajo el agua.
                </p>
                <p className="text-gray-600">
                  Utilizamos materiales específicos para agua con tratamientos anti-cloro, y técnicas de aplicación de pedrería que resisten la inmersión prolongada y realzan los movimientos acuáticos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportsPage;