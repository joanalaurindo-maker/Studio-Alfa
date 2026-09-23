function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img
            className="logo-icon"
            src="..\..\src\assets\img\Alfa-romeu-logo.png"
            alt="logo"
          />
          <span className="logo-texto">Studio alfa</span>
        </div>
        <nav className="nav">
          <a href="#">Inicio</a>
          <a href="#">Serviços</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
