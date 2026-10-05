import "./Main.css";
import ServicoCard from "../ServicoCard/ServicoCard";

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
      <section className="servico">
        <h2>nossos serviços</h2>
        <div className="servicos-grid">
          <ServicoCard
            icone="🤢"
            titulo="Design de interface"
            descricao="Telas claras, pensadas para o usuário"
          />
           <ServicoCard
            icone=  "😍"
            titulo="responsividade"
            descricao="o mesmo site em qualquer tela"
          />
             <ServicoCard
            icone=  "👌"
            titulo="responsividade"
            descricao="o mesmo site em qualquer tela"
          />

        </div>
      </section>
    </main>
  );
}

export default Main;
