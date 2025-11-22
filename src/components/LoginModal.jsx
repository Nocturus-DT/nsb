import { useApp } from '../context/AppContext';

export default function LoginModal() {
  const { login } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.loginEmail.value;
    // const password = e.target.loginPassword.value;  ← removida (não usava mesmo)

    login({ email, name: email.split('@')[0] });
    window.notify('Login realizado com sucesso! 🎉', 'success');
    document.getElementById('loginModal').close();
  };

  return (
    <dialog id="loginModal" className="modal">
      {/* ... resto do código igual ... */}
      <form onSubmit={handleSubmit} className="login-form">
        {/* ... */}
      </form>
    </dialog>
  );
}