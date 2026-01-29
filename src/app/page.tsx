import Image from "next/image";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-text">
          <h1>Luiz Maranhão</h1>
          <h2>Desenvolvedor Front-end</h2>
          <p>
            Crio interfaces modernas, rápidas e elegantes usando React, Next.js e
            boas práticas de UI/UX.
          </p>
        </div>

        <div className="hero-image">
          <Image
            src="/profile.png"
            alt="Luiz Maranhão"
            width={260}
            height={260}
          />
        </div>
      </section>
    </main>
  );
}

