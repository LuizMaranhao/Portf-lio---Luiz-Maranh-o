const projects = [
  {
    title: "Simulador Parquímetro",
    description: "Aplicativo de simulação de parquímetro com Next.js e SCSS.",
    repo: "https://github.com/LuizMaranhao/simulador-parquimetro",
  },
  {
    title: "Nightfall Atelier",
    description: "Jogo estilo Survivor feito com JavaScript e Canvas.",
    repo: "https://github.com/LuizMaranhao/Nightfall-Atelier",
  },
  {
    title: "Meu Portal Viagens",
    description: "Portal responsivo de viagens com interface e lógica web.",
    repo: "https://github.com/LuizMaranhao/meu-portal-viagens",
  },
];

export default function Projects() {
  return (
    <section>
      {projects.map((p) => (
        <div key={p.repo} className="project-card">
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <a href={p.repo} target="_blank" rel="noopener noreferrer">
            Ver código
          </a>
        </div>
      ))}
    </section>
  );
}
