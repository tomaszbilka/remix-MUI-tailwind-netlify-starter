import { MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { Theme, useTheme } from "remix-themes";
import LanguageSwitch from "~/components/languageSwitch";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [, setTheme] = useTheme();
  const { t } = useTranslation();

  return (
    <div>
      <div className="py-8 mx-4">
        <LanguageSwitch />
      </div>
      <p className="my-2 mx-2 text-xl">{t("test")}</p>
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
