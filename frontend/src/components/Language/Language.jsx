import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import UzbekImage from "../../assets/images/uzbek.png";
import RussianImage from "../../assets/images/russian.png";
import EnglishImage from "../../assets/images/english.png";
import { Image } from "@chakra-ui/react";

function Language() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { i18n } = useTranslation();
  const initialLanguage =
    typeof window !== "undefined"
      ? localStorage.getItem("language") || UzbekImage
      : "ru";
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      i18n &&
      typeof i18n.changeLanguage === "function"
    ) {
      i18n.changeLanguage(selectedLanguage);
      localStorage.setItem("language", selectedLanguage);
    } else {
      console.error("i18n object or changeLanguage method is not available.");
    }
  }, [selectedLanguage, i18n]);

  const onChangeLanguage = (value) => {
    setSelectedLanguage(value);
  };

  console.log(selectedLanguage);

  return (
    <div className="custom-dropdown" onClick={toggleMenu}>
      <button className="custom-dropdown-toggle">
        <Image {...css.image} src={selectedLanguage} />
      </button>
      {isMenuOpen && (
        <div className="custom-dropdown-menu">
          <div
            className="custom-dropdown-item"
            onClick={() => onChangeLanguage(UzbekImage)}>
            <Image {...css.image} src={UzbekImage} />
          </div>
          <div
            className="custom-dropdown-item"
            onClick={() => onChangeLanguage(RussianImage)}>
            <Image {...css.image} src={RussianImage} />
          </div>
          <div
            className="custom-dropdown-item"
            onClick={() => onChangeLanguage(EnglishImage)}>
            <Image {...css.image} src={EnglishImage} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Language;

const css = {
  image: {
    width: "25px",
    height: "25px",
  },
};
