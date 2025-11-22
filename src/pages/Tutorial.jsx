import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Notification from '../components/Notification';
import LoginModal from '../components/LoginModal';
import CartModal from '../components/CartModal';

export default function Tutorial() {
  return (
    <>
      <Navbar />
      <Notification />
      <LoginModal />
      <CartModal />

      <div className="container">
        <h2 className="page-title">Como Começar em 5 Passos</h2>
        
        <div className="tutorial-steps">
          {[
            { num: 1, title: "Crie sua conta", desc: "Clique em Login e use Google, GitHub ou email/senha. Tudo salvo automaticamente." },
            { num: 2, title: "Escolha seu plano", desc: "Vá até Produtos e adicione ao carrinho o que precisar." },
            { num: 3, title: "Finalize a compra", desc: "Abra o carrinho e clique em Finalizar Compra (simulação)." },
            { num: 4, title: "Acesse o Dashboard", desc: "Após login, o Dashboard aparece com seus servidores." },
            { num: 5, title: "Gerencie tudo", desc: "Monitore uso, reinicie servidores e escale quando quiser." },
          ].map(step => (
            <div key={step.num} className="step">
              <div className="step-number">{step.num}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '3rem' }}>
          <Link to="/products" className="btn btn-primary">Começar Agora</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}