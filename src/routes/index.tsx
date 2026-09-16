import { createFileRoute } from "@tanstack/react-router";
import {
  Home,
  User,
  Camera,
  Images,
  Film,
  Mail,
  Rows4,
  ClipboardPenLine,
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
  Play,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ArrowUp,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";


import photographer from "@/assets/photographer.jpg";
import baby1 from "@/assets/baby-1.jpg";
import baby2 from "@/assets/baby-2.jpg";
import baby3 from "@/assets/baby-3.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import moment1 from "@/assets/moment-1.jpg";
import moment2 from "@/assets/moment-2.jpg";
import moment3 from "@/assets/moment-3.jpg";
import moment4 from "@/assets/moment-4.jpg";
import moment5 from "@/assets/moment-5.jpg";
import moment6 from "@/assets/moment-6.jpg";
import familia1 from "@/assets/familia/familia1.jpg";
import familia2 from "@/assets/familia/familia2.jpg";
import familia3 from "@/assets/familia/familia3.jpg";
import familia4 from "@/assets/familia/familia4.jpg";
import smash1 from "@/assets/smashthecake/smash1.jpg";
import smash2 from "@/assets/smashthecake/smash2.jpg";
import smash3 from "@/assets/smashthecake/smash3.jpg";
import smash4 from "@/assets/smashthecake/smash4.jpg";
import smash5 from "@/assets/smashthecake/smash5.jpg";
import smash6 from "@/assets/smashthecake/smash6.jpg";
import smash7 from "@/assets/smashthecake/smash7.jpg";
import aniversario1 from "@/assets/aniversario/aniversario1.jpg";
import aniversario2 from "@/assets/aniversario/aniversario2.jpg";
import aniversario3 from "@/assets/aniversario/aniversario3.jpg";
import aniversario4 from "@/assets/aniversario/aniversario4.jpg";
import aniversario5 from "@/assets/aniversario/aniversario5.jpg";
import clean1 from "@/assets/ensaioclean/clean1.jpg";
import clean2 from "@/assets/ensaioclean/clean2.jpg";
import clean3 from "@/assets/ensaioclean/clean3.jpg";
import clean4 from "@/assets/ensaioclean/clean4.jpg";
import clean5 from "@/assets/ensaioclean/clean5.jpg";



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
  { id: "depoimentos", label: "Depoimentos", icon: ClipboardPenLine },
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

type GalleryPhoto = { src: string; alt: string };

const portfolio: {
  src: string;
  alt: string;
  label: string;
  description: string;
  gallery: GalleryPhoto[];
}[] = [
  {
    src: portfolio1,
    alt: "Recém-nascido dormindo embrulhado em manta de tricô bege",
    label: "Newborn",
    description: "Os primeiros dias em fotos delicadas e seguras.",
    gallery: [
      { src: portfolio1, alt: "Recém-nascido dormindo embrulhado em manta de tricô bege" },
      { src: moment1, alt: "Mãe segurando recém-nascido no estúdio" },
      { src: baby1, alt: "Bebê sorrindo com coroa de flores" },
      { src: moment5, alt: "Bebê entre flores claras" },
      { src: baby3, alt: "Bebê de vestido rosa entre flores" },
      { src: portfolio4, alt: "Cenário creme de estúdio newborn" },
    ],
  },
  {
    src: familia1,
    alt: "Família ao pôr do sol no campo com a filha no colo",
    label: "Família",
    description: "Ensaios cheios de brincadeira e afeto.",
    gallery: [
      { src: familia1, alt: "Família ao pôr do sol no campo com a filha no colo" },
      { src: familia2, alt: "Pai erguendo a filha que sorri ao pôr do sol" },
      { src: familia3, alt: "Família de mãos dadas caminhando ao pôr do sol" },
      { src: familia4, alt: "Criança sorrindo em ensaio ao ar livre" },
    ],
  },
  {
    src: smash2,
    alt: "Bebê sorrindo em ensaio smash the cake com balões dourados",
    label: "Smash the Cake",
    description: "Bolo, bagunça e muita risada no primeiro ano.",
    gallery: [
      { src: smash1, alt: "Bebê sorrindo em ensaio smash the cake com balões dourados" },
      { src: smash2, alt: "Bebê mergulhando as mãos no bolo" },
      { src: smash3, alt: "Bebê com chantilly no rosto sorrindo" },
      { src: smash4, alt: "Bebê com coroa de flores no cenário de festa" },
      { src: smash5, alt: "Bebê sorrindo em cenário decorado" },
      { src: smash6, alt: "Bebê de vestido rosa no cenário do bolo" },
      { src: smash7, alt: "Bebê de vestido rosa no cenário do bolo" },
    ],
  },
  {
    src: portfolio4,
    alt: "Gestante de vestido longo creme em estúdio",
    label: "Gestante",
    description: "A espera registrada com leveza e elegância.",
    gallery: [
      { src: portfolio4, alt: "Gestante de vestido longo creme em estúdio" },
      { src: moment4, alt: "Casal abraçando a barriga da gestante ao pôr do sol" },
      { src: portfolio2, alt: "Gestante com a família no campo" },
      { src: moment6, alt: "Casal caminhando de mãos dadas ao pôr do sol" },
      { src: moment1, alt: "Mãe com o bebê logo após o nascimento" },
      { src: portfolio1, alt: "Detalhes delicados do enxoval do bebê" },
    ],
  },
  {
    src: aniversario2,
    alt: "Bebê com chantilly no rosto sorrindo no ensaio de aniversário",
    label: "Aniversário",
    description: "A festa do seu pequeno contada em imagens.",
    gallery: [
      { src: aniversario2, alt: "Bebê com chantilly no rosto sorrindo" },
      { src: aniversario1, alt: "Bebê entre balões dourados" },
      { src: aniversario3, alt: "Bebê mergulhando as mãos no bolo" },
      { src: aniversario4, alt: "Bebê sorrindo com coroa de flores" },
      { src: aniversario5, alt: "Bebê entre flores claras" },
    ],
  },
  {
    src: clean1,
    alt: "Bebê de vestido rosa sentada entre flores",
    label: "Ensaio Clean",
    description: "Cada mês uma fase nova para guardar para sempre.",
    gallery: [
      { src: clean2, alt: "Bebê de vestido rosa sentada entre flores" },
      { src: clean1, alt: "Bebê sorrindo com coroa de flores" },
      { src: clean3, alt: "Bebê sorrindo no cenário temático" },
      { src: clean4, alt: "Bebê no colo da mãe no estúdio" },
      { src: clean5, alt: "Bebê dormindo em manta de tricô" },
    ],
  },
];


const moments: { src: string; alt: string; label: string; video?: string }[] = [
  {
    src: moment1,
    alt: "Mãe segurando recém-nascido embrulhado em manta bege no estúdio",
    label: "Newborn",
  },
  {
    src: moment2,
    alt: "Pai erguendo filha pequena que sorri ao pôr do sol",
    label: "Família",
    // video: "https://exemplo.com/video-familia.mp4",
  },
  {
    src: moment3,
    alt: "Bebê mergulhando as mãos no bolo do smash the cake",
    label: "Smash the Cake",
  },
  {
    src: moment4,
    alt: "Casal abraçando a barriga de gestante no campo ao pôr do sol",
    label: "Gestante",
  },
  {
    src: moment5,
    alt: "Bebê sorrindo com coroa de flores entre flores claras",
    label: "Mêsversário",
  },
  {
    src: moment6,
    alt: "Família de mãos dadas caminhando ao pôr do sol",
    label: "Externo",
    // video: "https://exemplo.com/video-externo.mp4",
  },
];

function Sidebar({
  open,
  onClose,
  active,
}: {
  open: boolean;
  onClose: () => void;
  active: string;
}) {
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
            <p className="font-['Great_Vibes'] text-4xl text-[#332418] tracking-wide leading-none flex items-center justify-center gap-1">
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
        {navItems.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={onClose}
            aria-current={active === id ? "true" : undefined}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-300 ${
              active === id
                ? "translate-x-1 bg-primary font-medium text-primary-foreground"
                : "text-muted-foreground hover:translate-x-1 hover:bg-accent hover:text-accent-foreground"
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
          href="https://www.instagram.com/lidymariafotografia/"
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

const WHATSAPP_URL =
  "https://wa.me/5561982120988?text=Ol%C3%A1%20Lidy!%20Quero%20agendar%20um%20ensaio%20fotogr%C3%A1fico.";

type GalleryState = { index: number; photo: number } | null;

function GalleryLightbox({
  state,
  onClose,
  onChange,
}: {
  state: NonNullable<GalleryState>;
  onClose: () => void;
  onChange: (next: GalleryState) => void;
}) {
  const album = portfolio[state.index]!;
  const total = album.gallery.length;

  const go = useCallback(
    (step: number) =>
      onChange({
        index: state.index,
        photo: (state.photo + step + total) % total,
      }),
    [onChange, state.index, state.photo, total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [go, onClose]);

  const current = album.gallery[state.photo]!;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Galeria ${album.label}`}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl rounded-3xl bg-card p-4 shadow-2xl sm:p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-script text-3xl text-gold">{album.label}</p>
            <p className="text-xs text-muted-foreground">
              {album.description} · {state.photo + 1} de {total}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar galeria"
            className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="relative mt-4 overflow-hidden rounded-2xl bg-secondary/60">
          <img
            key={current.src + state.photo}
            src={current.src}
            alt={current.alt}
            className="mx-auto max-h-[60vh] w-full animate-in fade-in object-contain duration-300"
          />
          <button
            onClick={() => go(-1)}
            aria-label="Foto anterior"
            className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-card/90 p-2 text-foreground shadow-md transition-transform hover:scale-110"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Próxima foto"
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-card/90 p-2 text-foreground shadow-md transition-transform hover:scale-110"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 grid grid-cols-6 gap-2">
          {album.gallery.map((photo, i) => (
            <button
              key={photo.src + i}
              onClick={() => onChange({ index: state.index, photo: i })}
              aria-label={`Ver foto ${i + 1}`}
              className={`overflow-hidden rounded-lg border-2 transition-all ${
                i === state.photo
                  ? "border-gold opacity-100"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={photo.src}
                alt=""
                className="aspect-square w-full object-cover"
              />
            </button>
          ))}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          <MessageCircle className="h-4 w-4" />
          Quero um ensaio {album.label}
        </a>
      </div>
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [gallery, setGallery] = useState<GalleryState>(null);
  const [active, setActive] = useState("inicio");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-10% 0px -40% 0px" },
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        active={active}
      />

      {gallery ? (
        <GalleryLightbox
          state={gallery}
          onClose={() => setGallery(null)}
          onChange={setGallery}
        />
      ) : null}

      {/* botão flutuante do WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed right-5 bottom-5 z-40 flex items-center gap-2 rounded-full bg-[#11c258] px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_-8px_var(--gold)] transition-transform hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
        className={`fixed right-5 bottom-24 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-all duration-300 ${
          showTop ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ArrowUp className="h-4 w-4" />
      </button>


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
                  href="https://wa.me/5561982120988?text=Ol%C3%A1%20Lidy!%20Quero%20agendar%20um%20ensaio%20fotogr%C3%A1fico."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-8px_var(--gold)] transition-transform hover:scale-[1.03]"
                >
                  <Phone className="h-4 w-4" />
                  Agendar pelo WhatsApp
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
                src={photographer}
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
              {portfolio.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setGallery({ index, photo: 0 })}
                  aria-label={`Abrir galeria de ${item.label}`}
                  className="group relative overflow-hidden rounded-2xl text-left shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl focus:ring-2 focus:ring-gold focus:outline-none"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    width={768}
                    height={960}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-script text-2xl text-card">
                      {item.label}
                    </span>
                    <span className="mt-1 text-[11px] text-card/80">
                      {item.description}
                    </span>
                    <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-card/90 px-3 py-1.5 text-[11px] font-semibold text-foreground">
                      <Images className="h-3 w-3 text-gold" />
                      Ver fotos
                    </span>
                  </span>
                  <span className="absolute top-3 right-3 rounded-full bg-card/85 px-2.5 py-1 text-[10px] font-medium text-foreground backdrop-blur-sm transition-opacity group-hover:opacity-0">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* MOMENTOS (fotos e vídeos) */}
        <section
          id="Depoimentos"
          className="scroll-mt-8 bg-secondary/60 px-6 py-24 lg:px-16"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-xs font-medium tracking-[0.35em] text-gold">
                REGISTROS DO DIA A DIA
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
                Depoimentos
              </h2>
              <p className="mt-3 font-script text-3xl text-gold">
                histórias em fotos e vídeos
              </p>
              <div className="leaf-divider" />
            </div>

            <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
              {moments.map(({ src, alt, label, video }) => (
                <figure
                  key={label}
                  className="group relative overflow-hidden rounded-2xl shadow-sm"
                >
                  {video ? (
                    <video
                      src={video}
                      poster={src}
                      controls
                      playsInline
                      preload="none"
                      className="aspect-[4/5] w-full object-cover"
                    />
                  ) : (
                    <img
                      src={src}
                      alt={alt}
                      loading="lazy"
                      width={768}
                      height={960}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <figcaption className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-card/85 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm">
                    {video ? <Play className="h-3 w-3 text-gold" /> : null}
                    {label}
                  </figcaption>
                </figure>
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
                href="https://wa.me/5561982120988?text=Ol%C3%A1%20Lidy!%20Quero%20agendar%20um%20ensaio%20fotogr%C3%A1fico."
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-8px_var(--gold)] transition-transform hover:scale-[1.03] sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                Chamar no WhatsApp
              </a>
              <a
                href="https://www.instagram.com/lidymariafotografia/"
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
                (61) 98212-0988
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
