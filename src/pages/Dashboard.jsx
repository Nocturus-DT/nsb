import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Notification from '../components/Notification';
import LoginModal from '../components/LoginModal';
import CartModal from '../components/CartModal';

export default function Dashboard() {
  const { user } = useApp();

  if (!user) {
    return (
      <>
        <Navbar />
        <Notification />
        <LoginModal />
        <div className="container text-center" style={{ padding: '6rem 0' }}>
          <h2>Faça login para acessar o Dashboard</h2>
          <button 
            className="btn btn-primary" 
            style={{ marginTop: '2rem', padding: '1rem 2rem', fontSize: '1.2rem' }}
            onClick={() => document.getElementById('loginModal').showModal()}
          >
            Fazer Login
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Notification />
      <LoginModal />
      <CartModal />

      <div className="container">
        <h2 className="page-title">Bem-vindo, {user.name || user.email.split('@')[0]}!</h2>
        
        <div className="stats-grid">
          <div className="stat-card">
            <i className="fas fa-server"></i>
            <div className="stat-value">3</div>
            <p>Servidores Ativos</p>
          </div>
          <div className="stat-card">
            <i className="fas fa-chart-line"></i>
            <div className="stat-value">99.9%</div>
            <p>Uptime</p>
          </div>
          <div className="stat-card">
            <i className="fas fa-download"></i>
            <div className="stat-value">1.2 TB</div>
            <p>Tráfego</p>
          </div>
        </div>

        <h3 style={{ margin: '3rem 0 1.5rem' }}>Seus Servidores</h3>
        <div className="products-grid">
          {/* Aqui você pode mapear servidores reais no futuro */}
          <div className="product-card" style={{ textAlign: 'center', opacity: 0.6 }}>
            <i className="fas fa-server" style={{ fontSize: '4rem', marginBottom: '1rem' }}></i>
            <p>Nenhum servidor provisionado ainda</p>
            <Link to="/products" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              Contratar Agora
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}