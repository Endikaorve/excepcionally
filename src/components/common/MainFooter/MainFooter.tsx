import styled, { css } from "styled-components";

import Button from "../../ui/atoms/Button/Button";

import logo from "../../../assets/images/logo.svg";

const MainFooter = () => (
  <Container>
    <Footer>
      <Menu>
        <MenuSection>
          <MenuLogoImage src={logo}></MenuLogoImage>
        </MenuSection>
        <MenuSection>
          <MenuTitle>Producto</MenuTitle>
          <MenuList>
            <MenuListItem>
              <MenuListItemLink>Por qué Genially</MenuListItemLink>
            </MenuListItem>
            <MenuListItem>
              <MenuListItemLink>Primeros pasos</MenuListItemLink>
            </MenuListItem>
            <MenuListItem>
              <MenuListItemLink>Tour de Genially</MenuListItemLink>
            </MenuListItem>
            <MenuListItem>
              <MenuListItemLink>Precios</MenuListItemLink>
            </MenuListItem>
          </MenuList>
        </MenuSection>
        <MenuSection>
          <MenuTitle>Para quién</MenuTitle>
          <MenuList>
            <MenuListItem>
              <MenuListItemLink>Empresas</MenuListItemLink>
            </MenuListItem>
            <MenuListItem>
              <MenuListItemLink>Educación</MenuListItemLink>
            </MenuListItem>
            <MenuListItem>
              <MenuListItemLink>Universidad</MenuListItemLink>
            </MenuListItem>
            <MenuListItem>
              <MenuListItemLink>Diseño</MenuListItemLink>
            </MenuListItem>
          </MenuList>
        </MenuSection>
        <MenuSection>
          <MenuTitle>Aprende</MenuTitle>
          <MenuList>
            <MenuListItem>
              <MenuListItemLink>Genially Academy</MenuListItemLink>
            </MenuListItem>
            <MenuListItem>
              <MenuListItemLink>Centro de ayuda</MenuListItemLink>
            </MenuListItem>
            <MenuListItem>
              <MenuListItemLink>Blog de Genially</MenuListItemLink>
            </MenuListItem>
          </MenuList>
        </MenuSection>
        <MenuSection>
          <MenuTitle>Compañía</MenuTitle>
          <MenuList>
            <MenuListItem>
              <MenuListItemLink>Quiénes somos</MenuListItemLink>
            </MenuListItem>
            <MenuListItem>
              <MenuListItemLink>Únete al equipo</MenuListItemLink>
            </MenuListItem>
            <MenuListItem>
              <MenuListItemLink>Contacto</MenuListItemLink>
            </MenuListItem>
            <MenuListItem>
              <MenuListItemLink>Estado del sistema</MenuListItemLink>
            </MenuListItem>
          </MenuList>
        </MenuSection>
      </Menu>

      <StartContainer>
        <StartWrapper>
          <StartText>
            Crear contenidos interactivos es fácil, muy fácil
          </StartText>
          <Button variant="primary" size="lg">
            Comenzar ahora
          </Button>
        </StartWrapper>
      </StartContainer>

      <BeforeDivider>
        <BeforeDividerLangs>
          English | Español | Français | Português
        </BeforeDividerLangs>
        <BeforeDividerRrss>⬤ ⬤ ⬤ ⬤ ⬤</BeforeDividerRrss>
      </BeforeDivider>
      <Divider></Divider>
      <AfterDivider>
        <AfterDividerCopyright>
          © 2022 Genially. All Rights Reserved. Hey ho, let’s Genially! 🤘
        </AfterDividerCopyright>
        <AfterDividerLegal>
          Privacidad Aviso legal Términos Cookies
        </AfterDividerLegal>
      </AfterDivider>
    </Footer>
  </Container>
);

const Container = styled.footer`
  width: 100vw;

  display: flex;
  justify-content: center;

  background-color: rgb(0, 15, 51);
  color: rgb(255, 255, 255);
`;

const Footer = styled.div`
  width: 100%;
  max-width: 76.5rem;

  padding: 4.5rem 1.5rem 2rem;

  display: flex;
  flex-direction: column;
`;

const Menu = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  @media (max-width: 768px) {
    margin: 0;
    flex-direction: column;
  }
`;

const MenuSection = styled.div`
  display: block;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const MenuLogoImage = styled.img`
  margin: 0 auto;
`;

const MenuTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.1px;
`;

const MenuList = styled.ul`
  margin-top: 0.75rem;
`;

const MenuListItem = styled.li`
  margin-top: 0.25rem;
  font-size: 15px;

  &:first-of-type {
    margin-top: 0;
  }
`;

const MenuListItemLink = styled.a``;

const StartContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`;

const StartWrapper = styled.div`
  width: fit-content;
  margin: 6rem auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StartText = styled.h4`
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: 0.2px;
`;

const BeforeDivider = styled.div`
  margin-bottom: 0.75rem;

  display: flex;
  justify-content: space-between;

  font-size: 12px;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const BeforeDividerLangs = styled.div``;

const BeforeDividerRrss = styled.div``;

const Divider = styled.div`
  height: 0.0625rem;
  width: 100%;
  background-color: rgb(255, 255, 255);
`;

const AfterDivider = styled.div`
  margin-top: 1.5rem;

  display: flex;
  justify-content: space-between;

  font-size: 12px;

  @media (max-width: 768px) {
    margin-top: 2rem;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const AfterDividerCopyright = styled.div``;

const AfterDividerLegal = styled.div``;

export default MainFooter;
