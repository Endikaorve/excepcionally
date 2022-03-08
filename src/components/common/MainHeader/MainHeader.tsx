import { useState } from "react";

import logo from "../../../assets/images/logo.svg";

import Dropdown from "../../ui/atoms/Dropdown/Dropdown";
import Button from "../../ui/atoms/Button/Button";

interface HeaderMenuShowDropdownItems {
  who: boolean;
  create: boolean;
  language: boolean;
}

const dropdownContent = {
  who: {
    title: "Para quién",
    items: [
      {
        title: "Empresas",
        href: "/",
        icon: false,
      },
      {
        title: "Educación",
        href: "/",
        icon: false,
      },
      {
        title: "Universidad",
        href: "/",
        icon: false,
      },
      {
        title: "Diseño",
        href: "/",
        icon: false,
      },
    ],
    align: "left",
  },
  create: {
    title: "Crear",
    items: [
      {
        title: "Presentaciones",
        href: "/",
        icon: true,
      },
      {
        title: "Educación",
        href: "/",
        icon: true,
      },
      {
        title: "Universidad",
        href: "/",
        icon: true,
      },
      {
        isDivider: true,
      },
      {
        title: "Primeros pasos",
        href: "/",
        icon: false,
      },
    ],
    align: "left",
  },
  language: {
    title: "ES",
    items: [
      {
        title: "English",
        href: "/",
        icon: false,
      },
      {
        title: "Español",
        href: "/",
        icon: false,
      },
      {
        title: "Français",
        href: "/",
        icon: false,
      },
      {
        title: "Português",
        href: "/",
        icon: false,
      },
    ],
    align: "right",
  },
};

const MainHeader = () => {
  const [showDropdownContent, setShowDropdownContent] = useState<any>({
    who: false,
    create: false,
    language: false,
  });

  function handleClickMenuItem(selectedItem: "who" | "create" | "language") {
    const _showDropdownContent: any = { ...showDropdownContent };

    for (const i in _showDropdownContent) {
      if (i === selectedItem)
        _showDropdownContent[i] = !_showDropdownContent[i];
      else _showDropdownContent[i] = false;
    }

    setShowDropdownContent(_showDropdownContent);
  }
  return (
    <div className="main-header-wrapper">
      <header className="main-header">
        <div className="left-menu">
          <a href="/">
            <img src={logo} className="main-logo" alt="logo" />
          </a>
          <nav className="main-menu">
            <ul className="main-menu-list">
              <li className="main-menu-item">
                <Dropdown
                  title={dropdownContent.who.title}
                  items={dropdownContent.who.items}
                  align={dropdownContent.who.align}
                  showContent={showDropdownContent.who}
                  handleTitleClick={() => handleClickMenuItem("who")}
                />
              </li>

              <li className="main-menu-item">
                <Dropdown
                  title={dropdownContent.create.title}
                  items={dropdownContent.create.items}
                  align={dropdownContent.create.align}
                  showContent={showDropdownContent.create}
                  handleTitleClick={() => handleClickMenuItem("create")}
                />
              </li>

              <li className="main-menu-item">Por qué Genially</li>
              <li className="main-menu-item">Planes</li>
            </ul>
          </nav>
        </div>
        <div className="right-menu">
          <Button variant="secondary">Acceder</Button>
          <Button variant="primary">Regístrate</Button>

          <Dropdown
            title={dropdownContent.language.title}
            items={dropdownContent.language.items}
            align={dropdownContent.language.align}
            showContent={showDropdownContent.language}
            handleTitleClick={() => handleClickMenuItem("language")}
          />
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
