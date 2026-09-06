import { Map, LayoutDashboard, ShieldCheck, Trophy } from 'lucide-react';

interface HeaderProps {
  activeTab: 'map' | 'dashboard';
  onTabChange: (tab: 'map' | 'dashboard') => void;
  userRole: 'CITIZEN' | 'INSTRUCTOR' | 'ADMIN';
  onRoleChange: (role: 'CITIZEN' | 'INSTRUCTOR' | 'ADMIN') => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  userRole,
  onRoleChange,
}) => {
  return (
    <header
      style={{
        background: '#0f172a',
        borderBottom: '1px solid #334155',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #0284c7, #10b981)',
            padding: '8px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Trophy size={24} color="white" />
        </div>
        <div>
          <h1 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: '#f8fafc' }}>
            Bogotá GIS & Deporte
          </h1>
          <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>
            Plataforma de Gestión Urbana y Escenarios Recreativos
          </p>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          background: '#1e293b',
          padding: '4px',
          borderRadius: '10px',
          border: '1px solid #334155',
        }}
      >
        <button
          onClick={() => onTabChange('map')}
          style={{
            padding: '8px 16px',
            background: activeTab === 'map' ? '#0284c7' : 'transparent',
            color: activeTab === 'map' ? 'white' : '#94a3b8',
            border: 'none',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <Map size={16} /> Mapa GIS Interactivo
        </button>
        <button
          onClick={() => onTabChange('dashboard')}
          style={{
            padding: '8px 16px',
            background: activeTab === 'dashboard' ? '#0284c7' : 'transparent',
            color: activeTab === 'dashboard' ? 'white' : '#94a3b8',
            border: 'none',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <LayoutDashboard size={16} /> Dashboard Urbano
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <ShieldCheck size={18} color="#10b981" />
        <span style={{ fontSize: '12px', color: '#94a3b8' }}>Rol de Usuario:</span>
        <select
          value={userRole}
          onChange={(e) => onRoleChange(e.target.value as any)}
          style={{
            padding: '6px 12px',
            background: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '8px',
            color: '#38bdf8',
            fontSize: '12px',
            fontWeight: 600,
          }}
        >
          <option value="CITIZEN">👤 Ciudadano</option>
          <option value="INSTRUCTOR">🏃 Instructor Deportivo</option>
          <option value="ADMIN">🛡️ Administrador IDRD</option>
        </select>
      </div>
    </header>
  );
};
