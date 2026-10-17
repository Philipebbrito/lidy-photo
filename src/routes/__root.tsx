import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    if (error instanceof Error) {
      reportLovableError(error, { boundary: "tanstack_root_error_component" });
    }
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      /* Verificação do Google Search Console */
      {
        name: "google-site-verification",
        content: "I0TuXGlMNnzvwrybyjk94Vzd8jEUz0HNQwRvx6HwBUs",
      },

      /* SEO Principal */
      { title: "Lidy Maria Fotografia | Ensaios Fotográficos e Eventos" },
      {
        name: "description",
        content:
          "Fotografia profissional, ensaios fotográficos, gestão de eventos e registos inesquecíveis. Agende o seu ensaio.",
      },

      /* Open Graph / WhatsApp / Facebook */
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Lidy Maria Fotografia | Ensaios e Eventos" },
      {
        property: "og:description",
        content:
          "Fotografia profissional, ensaios fotográficos e cobertura de eventos. Entre em contacto para saber mais.",
      },
      { property: "og:url", content: "https://www.lidymariafotografia.com.br/" },
      {
        property: "og:image",
        content: "https://www.lidymariafotografia.com.br/og-image.png",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },

      /* Twitter / X */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Lidy Maria Fotografia | Ensaios e Eventos" },
      {
        name: "twitter:description",
        content:
          "Fotografia profissional, ensaios fotográficos e cobertura de eventos.",
      },
      {
        name: "twitter:image",
        content: "https://www.lidymariafotografia.com.br/og-image.png",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },

      /* Favicons Otimizados para o Google e Navegadores */
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "https://www.lidymariafotografia.com.br/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "https://www.lidymariafotografia.com.br/android-chrome-192x192.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "https://www.lidymariafotografia.com.br/apple-touch-icon.png",
      },

      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Pinyon+Script&family=Jost:ital,wght@0,300..600;1,300..600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}