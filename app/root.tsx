import "~/styles/tailwind.css";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import { themeSessionResolver } from "./sessions.server";
import { LoaderFunctionArgs } from "@remix-run/node";
import clsx from "clsx";

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

export function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();
  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body id="app">
        <main className="bg-white dark:bg-zinc-900 min-h-screen">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
}
