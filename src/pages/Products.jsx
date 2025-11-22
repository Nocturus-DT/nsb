import { useApp } from '../context/AppContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Notification from '../components/Notification';
import LoginModal from '../components/LoginModal';
import CartModal from '../components/CartModal';

const products = [
  { id: 1, name: 'VPS Básico', price: 49.90, cpu: '2 vCPU', ram: '4 GB', storage: '80 GB NVMe' },
  { id: 2, name: 'VPS Pro', price: 99.90, cpu: '4 vCPU', ram: '8 GB', storage: '160 GB NVMe' },
  { id: 3, name: 'Servidor Dedicado', price: 399.00, cpu: '16 vCPU', ram: '64 GB', storage: '2 TB NVMe' },
  { id: 4, name: 'Cloud GPU', price: 799.00, cpu: '8 vCPU + RTX 4090', ram: '32 GB', storage: '512 GB NVMe' },
];

export default function Products() {
  const { addToCart } = useApp();

  const handleAdd = (product) => {
    addToCart({ name: product.name, price: product.price });
    window.notify(`${product.name} adicionado ao carrinho! 🛒`, 'success');
  };

  return (
    <>
      <Navbar />
      <Notification />
      <LoginModal />
      <CartModal />

      <div className="container">
        <h2 className="page-title">Nossos Planos</h2>
        <div className="products-grid">
          {products.map(p => (
            <div key={p.id} className="product-card">
              <h3>{p.name}</h3>
              <div className="price">R$ {p.price.toFixed(2)}<small>/mês</small></div>
              <ul className="features">
                <li><i className="fas fa-microchip"></i> {p.cpu}</li>
                <li><i className="fas fa-memory"></i> {p.ram} RAM</li>
                <li><i className="fas fa-hdd"></i> {p.storage}</li>
              </ul>
              <button 
                className="btn btn-primary full-width" 
                onClick={() => handleAdd(p)}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}