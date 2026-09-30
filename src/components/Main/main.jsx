import "./Main.css";

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <h1>criamos sites que funcionam</h1>
        <p>
          layouts responsivos, rapidos e acessiveis para o seu negocio crescer
        </p>
        <div className="hero-buttons">
          <a href="#orcamento" className="btn-primary">
            peça um orçamento
          </a>
          <a href="portfolio" className="btn-secondary">
            ver portifolio
          </a>
        </div>
      </section>
      <section className= 'servico'>
        <h2>nossos serviços</h2>
        <div className= 'servicos-grid'>
            <div className= 'servicos-card'>
              <span>🤢</span>
              <h3>design de interface</h3>
              <p>telas claras, pensadas para o usuarios</p>
            </div>
            <div className= 'serviso-card'>
              <span>😍</span>
              <h3>responsividade</h3>
              <p>o mesmo site em qualquer tela</p>
              <div></div>
            </div>
        </div>
      </section>
    </main>
    
    
  );
}

export default Main;
