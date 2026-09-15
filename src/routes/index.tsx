import { createFileRoute } from "@tanstack/react-router";
import {
  Home,
  User,
  Camera,
  Images,
  MessageCircleHeart,
  Mail,
  CalendarCheck,
  Instagram,
  Award,
  Heart,
  Star,
  ChevronDown,
  Baby,
  Cake,
  Users,
  Flower2,
  Phone,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

import photographer from "@/assets/photographer.jpg";
import baby1 from "@/assets/baby-1.jpg";
import baby2 from "@/assets/baby-2.jpg";
import baby3 from "@/assets/baby-3.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lidy Maria Fotografia — Fotografia Infantil em Brasília" },
      {
        name: "description",
        content:
          "Ensaios fotográficos de newborn, bebês, smash the cake e família em Brasília. Uma experiência leve e acolhedora para eternizar a história da sua família.",
      },
      {
        property: "og:title",
        content: "Lidy Maria Fotografia — Fotografia Infantil em Brasília",
      },
      {
        property: "og:description",
        content:
          "Ensaios de newborn, bebês, smash the cake e família em Brasília. Eternize as conexões verdadeiras da sua família.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const navItems = [
  { id: "inicio", label: "Início", icon: Home },
  { id: "sobre", label: "Sobre", icon: User },
  { id: "servicos", label: "Serviços", icon: Camera },
  { id: "portfolio", label: "Portfólio", icon: Images },
  { id: "depoimentos", label: "Depoimentos", icon: MessageCircleHeart },
  { id: "contato", label: "Contato", icon: Mail },
];

const badges = [
  { icon: Award, title: "11+ Anos", sub: "Especialista Infantil" },
  { icon: Heart, title: "+2K Famílias", sub: "Histórias Felizes" },
  { icon: Camera, title: "Ensaios Únicos", sub: "Newborn & Família" },
  { icon: Star, title: "Nota 5.0 ★", sub: "Amor & Cuidado" },
];

const services = [
  {
    icon: Baby,
    title: "Newborn",
    text: "Os primeiros dias do seu bebê registrados com toda a delicadeza e segurança que esse momento pede.",
  },
  {
    icon: Heart,
    title: "Acompanhamento Mensal",
    text: "Cada mês uma fase nova. Acompanhe o crescimento do seu bebê do 1º ao 12º mês em ensaios temáticos.",
  },
  {
    icon: Cake,
    title: "Smash the Cake",
    text: "A festa do primeiro ano com direito a bolo, bagunça e sorrisos que ficam para sempre na memória.",
  },
  {
    icon: Users,
    title: "Família & Gestante",
    text: "A espera e o encontro. Ensaios que celebram o amor que cresce dentro e fora da barriga.",
  },
];

const portfolio = [
  { src: portfolio1, alt: "Recém-nascido dormindo embrulhado em manta de tricô bege", label: "Newborn" },
  { src: portfolio2, alt: "Família ao pôr do sol no campo com a filha no colo", label: "Família" },
  { src: portfolio3, alt: "Bebê sorrindo em ensaio smash the cake com balões dourados", label: "Smash the Cake" },
  { src: portfolio4, alt: "Gestante de vestido longo creme em estúdio", label: "Gestante" },
  { src: baby2, alt: "Bebê com chantilly no rosto sorrindo no ensaio de aniversário", label: "Aniversário" },
  { src: baby3, alt: "Bebê de vestido rosa sentada entre flores", label: "Mêsversário" },
];

const testimonials = [
  {
    name: "Mariana S.",
    role: "Mãe da Alice",
    text: "A Lidy transformou o ensaio da minha filha em um momento mágico. A paciência e o carinho com os bebês são indescritíveis. Chorei ao ver as fotos!",
  },
  {
    name: "Fernanda & Rafael",
    role: "Pais do Theo",
    text: "Do ensaio gestante ao smash the cake, cada etapa foi perfeita. Profissional impecável, estúdio lindo e resultado além do que imaginávamos.",
  },
  {
    name: "Juliana M.",
    role: "Mãe do Benício",
    text: "Fizemos o acompanhamento mensal e foi a melhor decisão. Hoje temos um ano inteiro de memórias lindas. Recomendo de olhos fechados!",
  },
];

function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex w-56 flex-col border-r border-border bg-card px-5 py-6 transition-transform duration-300 lg:translate-x-0 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col items-center gap-3 self-center">
          <div className="relative">
            <img
              src={photographer}
              alt="Lidy Maria, fotógrafa especialista em fotografia infantil"
              className="h-20 w-20 rounded-full border-2 border-gold object-cover"
              width={80}
              height={80}
            />
            <span className="absolute -right-0.5 -bottom-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[10px] text-primary-foreground">
              ✓
            </span>
          </div>
          <div className="text-center">
            <p className="font-script text-2xl leading-none text-foreground">
              Lidy Maria
            </p>
            <p className="mt-1 text-[10px] tracking-[0.35em] text-muted-foreground">
              FOTOGRAFIA
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-muted-foreground lg:hidden"
          aria-label="Fechar menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="mt-8 flex flex-col gap-1">
        {navItems.map(({ id, label, icon: Icon }, i) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={onClose}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
              i === 0
                ? "bg-primary font-medium text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        ))}
      </nav>

      <a
        href="#contato"
        onClick={onClose}
        className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-gold px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_var(--gold)] transition-transform hover:scale-[1.02]"
      >
        <CalendarCheck className="h-4 w-4" />
        Agendar Agora
      </a>

      <div className="mt-auto flex flex-col items-center gap-3 pt-8">
        <p className="text-[10px] tracking-[0.3em] text-muted-foreground">
          SIGA-ME
        </p>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram da Lidy Maria Fotografia"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
        >
          <Instagram className="h-4 w-4" />
        </a>
        <div className="mt-4 text-center text-[10px] leading-relaxed text-muted-foreground">
          <p>© 2026 Lidy Maria Fotografia</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </aside>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      <button
        onClick={() => setMenuOpen(true)}
        aria-label="Abrir menu"
        className="fixed top-4 left-4 z-40 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground shadow-sm lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      <main className="lg:pl-56">
        {/* HERO */}
        <section
          id="inicio"
          className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-20 lg:px-16"
        >
          {/* soft organic blobs */}
          <div
            aria-hidden
            className="absolute -top-24 -right-24 h-[34rem] w-[34rem] rounded-full bg-secondary opacity-70 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blush opacity-60 blur-3xl"
          />

          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium tracking-[0.35em] text-muted-foreground">
                MEMÓRIA AFETIVA <span className="text-gold">♥</span>
              </p>
              <h1 className="mt-4 font-display text-5xl leading-[1.05] font-bold text-balance md:text-6xl">
                Fotografia Infantil
              </h1>
              <p className="mt-2 font-script text-5xl text-gold md:text-6xl">
                Brasília
              </p>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Uma experiência leve, acolhedora e inesquecível para toda a
                família. Mais do que fotos, eternizo conexões verdadeiras que
                merecem ser lembradas para sempre.
              </p>

              <div className="mt-8 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-4">
                {badges.map(({ icon: Icon, title, sub }) => (
                  <div
                    key={title}
                    className="flex flex-col items-center gap-1 rounded-xl border border-border bg-card/80 px-2 py-3 text-center shadow-sm"
                  >
                    <Icon className="h-4 w-4 text-gold" />
                    <p className="text-xs font-semibold">{title}</p>
                    <p className="text-[10px] text-muted-foreground">{sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contato"
                  className="flex items-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-8px_var(--gold)] transition-transform hover:scale-[1.03]"
                >
                  Quero Registrar Minha História
                  <Camera className="h-4 w-4" />
                </a>
                <a
                  href="#portfolio"
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  Ver Portfólio
                  <ChevronDown className="h-4 w-4 -rotate-90" />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div
                aria-hidden
                className="absolute inset-6 rounded-[45%_55%_50%_50%/55%_45%_55%_45%] bg-secondary"
              />
              <img
                src={photographer}
                alt="Lidy Maria sorrindo e segurando sua câmera profissional"
                className="relative mx-auto aspect-[4/5] w-full max-w-sm rounded-[45%_55%_50%_50%/55%_45%_55%_45%] object-cover object-top shadow-2xl"
                width={1024}
                height={1280}
              />
              {/* baby photos strip */}
              <div className="absolute top-4 -right-2 hidden w-36 flex-col gap-3 md:flex lg:-right-6 lg:w-44">
                {[baby1, baby2, baby3].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={[
                      "Bebê sorrindo com coroa de flores",
                      "Bebê no ensaio smash the cake",
                      "Bebê de vestido rosa entre flores",
                    ][i]}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="aspect-[4/3] w-full rounded-2xl border-4 border-card object-cover shadow-lg"
                  />
                ))}
              </div>
            </div>
          </div>

          <a
            href="#sobre"
            className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-[10px] tracking-[0.3em] text-muted-foreground"
          >
            SOBRE MIM
            <ChevronDown className="h-4 w-4 animate-bounce text-gold" />
          </a>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="scroll-mt-8 px-6 py-24 lg:px-16">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <img
                src={portfolio2}
                alt="Família em ensaio externo ao pôr do sol"
                loading="lazy"
                width={768}
                height={960}
                className="w-full rounded-3xl object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -right-4 rounded-2xl bg-gold px-6 py-4 text-primary-foreground shadow-lg lg:-right-8">
                <p className="font-display text-3xl font-bold">11+</p>
                <p className="text-xs">anos de história</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-medium tracking-[0.35em] text-gold">
                SOBRE MIM
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold text-balance md:text-5xl">
                Prazer, sou a{" "}
                <span className="font-script text-5xl font-normal text-gold md:text-6xl">
                  Lidy
                </span>
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Há mais de uma década eu transformo momentos em memórias
                afetivas. Sou especialista em fotografia infantil e newborn em
                Brasília, e acredito que cada família carrega uma história
                única que merece ser contada com sensibilidade.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Meu estúdio foi pensado em cada detalhe para acolher você e seu
                bebê: cenários exclusivos, figurinos delicados e um ritmo que
                respeita o tempo de cada criança. Aqui, o ensaio é uma
                experiência de amor do começo ao fim.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Especialista em newborn com certificação em segurança",
                  "Cenários e figurinos exclusivos incluídos",
                  "Atendimento em estúdio ou externo em Brasília/DF",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Flower2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section
          id="servicos"
          className="scroll-mt-8 bg-secondary/60 px-6 py-24 lg:px-16"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-xs font-medium tracking-[0.35em] text-gold">
                O QUE EU FAÇO
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
                Serviços
              </h2>
              <p className="mt-3 font-script text-3xl text-gold">
                para cada fase do seu amor
              </p>
              <div className="leaf-divider" />
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFÓLIO */}
        <section id="portfolio" className="scroll-mt-8 px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-xs font-medium tracking-[0.35em] text-gold">
                HISTÓRIAS ETERNIZADAS
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
                Portfólio
              </h2>
              <p className="mt-3 font-script text-3xl text-gold">
                um pouquinho do meu olhar
              </p>
              <div className="leaf-divider" />
            </div>

            <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
              {portfolio.map(({ src, alt, label }) => (
                <figure
                  key={label}
                  className="group relative overflow-hidden rounded-2xl shadow-sm"
                >
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    width={768}
                    height={960}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/60 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="font-script text-2xl text-card">
                      {label}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section
          id="depoimentos"
          className="scroll-mt-8 bg-secondary/60 px-6 py-24 lg:px-16"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-xs font-medium tracking-[0.35em] text-gold">
                PALAVRA DE MÃE
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
                Depoimentos
              </h2>
              <p className="mt-3 font-script text-3xl text-gold">
                famílias que viraram amigas
              </p>
              <div className="leaf-divider" />
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {testimonials.map(({ name, role, text }) => (
                <blockquote
                  key={name}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground italic">
                    “{text}”
                  </p>
                  <footer className="mt-5 border-t border-border pt-4">
                    <p className="font-display font-semibold">{name}</p>
                    <p className="text-xs text-muted-foreground">{role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="scroll-mt-8 px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-8 shadow-xl md:p-14">
            <div className="text-center">
              <p className="text-xs font-medium tracking-[0.35em] text-gold">
                VAMOS CONVERSAR?
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold text-balance md:text-5xl">
                Agende o seu ensaio
              </h2>
              <p className="mt-3 font-script text-3xl text-gold">
                sua história merece ser lembrada
              </p>
              <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
                As vagas são limitadas para garantir dedicação total a cada
                família. Me chame no WhatsApp e vamos planejar juntos o ensaio
                dos seus sonhos.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://wa.me/5561999999999?text=Ol%C3%A1%20Lidy!%20Quero%20agendar%20um%20ensaio%20fotogr%C3%A1fico."
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-8px_var(--gold)] transition-transform hover:scale-[1.03] sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                Chamar no WhatsApp
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-border px-8 py-4 text-sm font-medium transition-colors hover:bg-accent sm:w-auto"
              >
                <Instagram className="h-4 w-4" />
                Ver Instagram
              </a>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:gap-10">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" />
                Brasília — DF
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                (61) 99999-9999
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" />
                contato@lidymaria.com.br
              </span>
            </div>
          </div>

          <p className="mt-10 text-center text-xs text-muted-foreground">
            © 2026 Lidy Maria Fotografia — Todos os direitos reservados.
          </p>
        </section>
      </main>
    </div>
  );
}
