import { MetaFunction } from "@remix-run/node";
import { Theme, useTheme } from "remix-themes";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [, setTheme] = useTheme();
  return (
    <div>
      <div className="text-lg text-lime-400">Welcome to Remix</div>
      <div className="mt-8 ml-8 text-black dark:text-white">Hello</div>
      <Button variant="outline" onClick={() => setTheme(Theme.LIGHT)}>
        Light
      </Button>
      <Button variant="outline" onClick={() => setTheme(Theme.DARK)}>
        Dark
      </Button>
    </div>
  );
}
