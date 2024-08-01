import './App.css'

function App() {
  return (
  <div className="App">
     <header className="header">
        <h1>Piloto de aeronaves</h1>
        
        <nav>
            <ul>
                <li><a href="#introducao">Introdução</a></li>
                <li><a href="#habilidades">Habilidades</a></li>
                <li><a href="#oportunidades">Oportunidades</a></li>
                <li><a href="#ferramentas">Ferramentas</a></li>
            </ul>
        </nav>
    </header>

    

    <section id="introducao" className="section">
        <div className="content" ><h2>Introdução sobre a Profissão Piloto</h2></div>
        <p>
            A profissão de piloto é uma das mais emocionantes e desafiadoras que existem. Ela não apenas oferece a oportunidade de explorar o mundo de uma perspectiva única, mas também exige uma combinação rara de habilidades técnicas e pessoais. Pilotos operam uma variedade de aeronaves, desde aviões comerciais até jatos privados e até helicópteros, desempenhando um papel crucial na segurança e eficiência do transporte aéreo. Com a capacidade de conectar pessoas e lugares ao redor do globo, ser piloto é uma experiência verdadeiramente enriquecedora e cheia de adrenalina.
        </p>
        <div class="image">
          <img src="https://flyeagle.com.br/files/blog/bannermobile_2106153150.png"></img>
        </div>
    </section>

    <section id="habilidades" className="section">
        <h2>Habilidades Necessárias</h2>
        <ul>
            <li><strong>Habilidade de Tomada de Decisão:</strong> Tomar decisões rápidas e precisas é vital, especialmente em situações de emergência.</li>
            <li><strong>Coordenação e Habilidade Manual:</strong> Operar os controles da aeronave exige uma excelente coordenação olho-mão.</li>
            <li><strong>Conhecimento Técnico:</strong> Entender os sistemas da aeronave e os princípios de voo é fundamental.</li>
            <li><strong>Capacidade de Trabalhar sob Pressão:</strong> Pilotos frequentemente enfrentam condições estressantes e devem manter a calma e a eficácia.</li>
            <li><strong>Comunicação Eficiente:</strong> A comunicação clara com a equipe de controle de tráfego aéreo e outros membros da tripulação é essencial.</li>
        </ul>

        <div class="image">
          <img src="https://blog.liberfly.com.br/wp-content/uploads/2023/02/piloto-aviao-1024x683.jpg"></img>
        </div>
        
    </section>

    <section id="oportunidades" className="section">
        <h2>Oportunidades de Carreira</h2>
        <ul>
            <li><strong>Piloto de Linha Aérea:</strong> Opera voos comerciais e é responsável pelo transporte seguro de passageiros e carga.</li>
            <li><strong>Piloto de Jato Privado:</strong> Voos exclusivos para clientes que buscam conforto e flexibilidade.</li>
            <li><strong>Piloto de Carga:</strong> Transporta mercadorias e produtos, essencial para o comércio global.</li>
            <li><strong>Piloto de Helicóptero:</strong> Realiza missões variadas, incluindo transporte, resgates e apoio a serviços de emergência.</li>
            <li><strong>Instrutor de Voo:</strong> Treina futuros pilotos, compartilhando conhecimento e experiência valiosos.</li>
        </ul>

        <div class="image">
          <img src="https://aeroin.net/wp-content/uploads/2022/04/FAB-Forca-Aerea-Brasileira-Piloto-Tenente-Instrutora-Voo-Helicoptero-Militar-H-50-Esquilo-22042601.jpeg"></img>
        </div>
    </section>

    <section id="ferramentas" className="section">
        <h2>Ferramentas e Tecnologias Utilizadas</h2>
        <ul>
            <li><strong>Sistemas de Navegação:</strong> GPS e sistemas de navegação avançados ajudam a manter a trajetória correta.</li>
            <li><strong>Instrumentos de Aviação:</strong> Incluem altímetros, indicadores de velocidade e outros equipamentos essenciais para o controle da aeronave.</li>
            <li><strong>Simuladores de Voo:</strong> Permitem o treinamento em cenários variados e ajudam a preparar os pilotos para situações reais.</li>
            <li><strong>Comunicações por Rádio:</strong> Mantêm contato constante com o controle de tráfego aéreo e outros aviões.</li>
            <li><strong>Software de Planejamento de Voo:</strong> Facilita o planejamento das rotas e a análise das condições meteorológicas.</li>
        </ul>

        <div class="image">
          <img src="https://cdn-cavok.nuneshost.com/wp-content/uploads/2021/12/f-35-sim-hypoxia-02-900x599-1.jpg"></img>
        </div>
    </section>
    <footer className="footer">
      <p>&copy; 2024 Piloto de aeronaves. Todos os direitos reservados.</p>
    </footer>
  </div>
);
}

export default App;