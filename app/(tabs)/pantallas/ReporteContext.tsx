import React, { createContext, useContext, useState } from 'react';

type Reporte = {
  id: number;
  titulo: string;
  descripcion?: string;
  ubicacion: string;       
  coordenadas?: { lat: number; lng: number };
  usuario: string;
  imagen: string;
  fecha?: string;
};

type ReportesContextType = {
  reportes: Reporte[];
  agregarReporte: (nuevo: Omit<Reporte, 'id'>) => void;
};

const ReportesContext = createContext<ReportesContextType | undefined>(undefined);

export default function ReporteContext({ children }: { children: React.ReactNode }){
    const [reportes, setReportes] = useState<Reporte[]>([{
      id: 1,
      titulo: "Basura en la calle",
      ubicacion: "20.659699, -103.349609",
      coordenadas: { lat: 20.659699, lng: -103.349609 },
      descripcion: "Hay un monton de basura acumulada por la calle",
      usuario: "Sofía Ramírez",
      imagen: "Basura.png",
      fecha: "2025-12-07"
    },

    {
      id: 2,
      titulo: "Agua Residual",
      descripcion: "Hay muchos charcos de agua sucia por las calles",
      ubicacion: "Miguel de Legaspy",
      usuario: "Enrique Segoviano",
      imagen: "AguaSucia.jpg",
      fecha: "2025-12-06",
    },
])

const agregarReporte = (nuevo: Omit<Reporte, 'id'>) => {
    setReportes(prev => [{
      ...nuevo,
      id: Math.max(...prev.map(r => r.id), 0) + 1,
      fecha: new Date().toISOString().split('T')[0],
    }, ...prev]); // nuevo arriba
  };

  return (
    <ReportesContext.Provider value={{ reportes, agregarReporte }}>
      {children}
    </ReportesContext.Provider>
  );
}

export const useReportes = () => {
  const context = useContext(ReportesContext);
  if (!context) throw new Error('useReportes debe usarse dentro de ReportesProvider');
  return context;
};

