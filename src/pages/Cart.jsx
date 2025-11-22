import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Notification from '../components/Notification';
import CartModal from '../components/CartModal';

export default function Cart() {
  const { cart, removeFromCart, clearCart, user } = useApp();
  const total = cart.reduce((s,i)=>s+i.price,0);

  const checkout = () => {
    if (!user) return window.notify('Faça login para finalizar', 'warning');
    alert(`Compra simulada: R$ ${total.toFixed(2)}`);
    clearCart();
    window.notify('Compra realizada!', 'success');
  };

  return (
    <>
      <Navbar />
      <Notification />
      <CartModal />
      <div className="container">
        <h2 className="page-title">Seu Carrinho</h2>
        {cart.length === 0 ? (
          <div className="empty-cart">
            <i className="fas fa-shopping-cart" style={{fontSize:'5rem', opacity:0.3}}></i>
            <h3>Seu carrinho está vazio</h3>
            <Link to="/products" className="btn btn-primary">Ir para Produtos</Link>
          </div>
        ) : (
          <div className="cart-page">
            <div className="cart-items-list">
              {cart.map((item,i)=>(
                <div key={i} className="cart-item">
                  <div><strong>{item.name}</strong> – R$ {item.price.toFixed(2)}/mês</div>
                  <button onClick={()=>removeFromCart(i)} style={{background:'none',border:'none',color:'var(--danger)'}}>Remover</button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="cart-total-big">Total Mensal: <strong>R$ {total.toFixed(2)}</strong></div>
              <button onClick={checkout} className="btn btn-primary full-width large-btn">
                Finalizar Compra e Provisionar Servidores
              </button>
              <Link to="/products" className="continue-shopping">← Continuar Comprando</Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}