import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Notification from '../components/Notification';
import LoginModal from '../components/LoginModal';
import CartModal from '../components/CartModal';

export default function Home() {
  return (
    <>
      <Navbar />
      <Notification />
      <LoginModal />
      <CartModal />

      <div className="container">
        <section className="hero">
          <h1>Hospedagem de Alto Desempenho</h1>
          <p>Servidores dedicados, VMs escaláveis e processamento de dados em nuvem para o seu negócio</p>
          <div className="hero-buttons">
            <a href="/products" className="btn btn-primary">Ver Planos</a>
            <a href="/tutorial" className="btn btn-outline">Como Começar</a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}