import { useTranslation } from "react-i18next";
import { LOCALE } from "./constants";
import { Button } from "../ui/button";

const LanguageSwitch = () => {
  const { i18n } = useTranslation("common");

  const currentLng = i18n.language;

  const changeLocaleHandler = () => {
    i18n.changeLanguage(currentLng === LOCALE.en ? LOCALE.pl : LOCALE.en);
  };

  return (
    <div>
      <Button variant="outline" onClick={changeLocaleHandler}>
        {currentLng === "en"
          ? LOCALE.pl.toUpperCase()
          : LOCALE.en.toUpperCase()}
      </Button>
    </div>
  );
};

export default LanguageSwitch;
