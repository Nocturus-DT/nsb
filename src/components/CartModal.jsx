// CartModal.jsx
import { useApp } from '../context/AppContext';

export default function CartModal() {
  const { cart, removeFromCart, clearCart, user } = useApp();

  const total = cart.reduce((s, i) => s + i.price, 0);

  const checkout = () => {
    if (!user) {
      window.notify('Faça login primeiro!', 'warning');
      document.getElementById('loginModal').showModal();
      return;
    }
    alert(`Compra simulada! Total: R$ ${total.toFixed(2)}`);
    clearCart();
    window.notify('Compra realizada com sucesso! 🎉', 'success');
    document.getElementById('cartModal').close();
  };

  return (
    <dialog id="cartModal" className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={() => document.getElementById('cartModal').close()}>×</button>
        <h2>Carrinho de Compras</h2>
        <div className="cart-items" id="cartItems">
          {cart.length === 0 ? <p style={{textAlign:'center', opacity:0.7}}>Carrinho vazio</p> :
            cart.map((item, i) => (
              <div key={i} className="cart-item">
                <div>
                  <strong>{item.name}</strong>
                  <p>R$ {item.price.toFixed(2)}/mês</p>
                </div>
                <button onClick={() => removeFromCart(i)} style={{background:'none',border:'none',color:'var(--danger)',fontSize:'1.5rem'}}>×</button>
              </div>
            ))
          }
        </div>
        {cart.length > 0 && (
          <>
            <div className="cart-total">Total: R$ <span>{total.toFixed(2)}</span></div>
            <button className="btn btn-primary full-width" onClick={checkout}>Finalizar Compra</button>
          </>
        )}
      </div>
    </dialog>
  );
}