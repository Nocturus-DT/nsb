import { useState } from 'react';
import './LoginPage.css'; // CSS logo abaixo

export default function LoginPage() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  return (
    <div className="login-page-container">
      <div className={`container ${isSignUpMode ? 'right-panel-active' : ''}`} id="container">
        
        {/* Sign Up Form */}
        <div className="form-container sign-up-container">
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <h1>Criar Conta</h1>
            <div className="social-container">
              <button type="button" className="social"><i className="fab fa-facebook-f"></i></button>
              <button type="button" className="social"><i className="fab fa-google-plus-g"></i></button>
              <button type="button" className="social"><i className="fab fa-linkedin-in"></i></button>
            </div>
            <span>ou use seu e-mail para registro</span>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button className="login-btn">Cadastrar</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in-container">
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <h1>Entrar</h1>
            <div className="social-container">
              <button type="button" className="social"><i className="fab fa-facebook-f"></i></button>
              <button type="button" className="social"><i className="fab fa-google-plus-g"></i></button>
              <button type="button" className="social"><i className="fab fa-linkedin-in"></i></button>
            </div>
            <span>ou use sua conta</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <a href="#">Esqueceu sua senha?</a>
            <button className="login-btn">Entrar</button>
          </form>
        </div>

        {/* Overlay */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Já tem conta?</h1>
              <p>Entre com seus dados e continue sua jornada</p>
              <button className="ghost" onClick={() => setIsSignUpMode(false)}>
                Entrar
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Bem-vindo de volta!</h1>
              <p>Ainda não tem conta? Cadastre-se agora</p>
              <button className="ghost" onClick={() => setIsSignUpMode(true)}>
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}