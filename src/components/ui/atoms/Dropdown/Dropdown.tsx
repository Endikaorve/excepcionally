import styled, { css } from "styled-components";

import ChevronDownIcon from "../../../icons/Chevron/Chevron";
import listIcon from "../../../../assets/images/list-icon.svg";

const Dropdown = ({
  title,
  items,
  align = "left",
  showContent,
  handleTitleClick,
}: any) => {
  return (
    <Contaniner onClick={() => handleTitleClick("who")}>
      <Title>
        {title}
        <ChevronDownIcon />
      </Title>

      <Content isShown={showContent} align={align}>
        {items.map((item: any, index: number) => {
          const key: string = `dropdown-item-${title}-${index}`;

          if (item.isDivider) {
            return <Divider key={key} />;
          }

          return (
            <Item key={key} href={item.href}>
              {item.icon && <ItemIcon src={listIcon} alt="list-icon" />}
              {item.title}
            </Item>
          );
        })}
      </Content>
    </Contaniner>
  );
};

const Contaniner = styled.div`
  position: relative;
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  font-weight: 600;

  cursor: pointer;
`;

const Content: any = styled.div`
  min-width: 160px;

  position: absolute;
  top: 0;
  margin-top: 2rem;

  flex-direction: column;

  padding: 0.5rem;

  background-color: white;
  border-radius: 0.5rem;
  box-shadow: rgb(0 15 51 / 15%) 0px 0.75rem 2rem;

  opacity: 0;
  top: -30px;
  transition: 0.2s;
  z-index: -1;

  ${(props: any) =>
    props.isShown &&
    css`
      opacity: 1;
      top: 0;
      z-index: 1;
    `}

  ${(props: any) =>
    props.align === "left" &&
    css`
      left: 0;
      margin-left: -0.5rem;
    `}

  ${(props: any) =>
    props.align === "right" &&
    css`
      right: 0;
      margin-right: -0.5rem;
    `}
`;

const Divider = styled.div`
  height: 0.0625rem;
  width: 100%;
  margin: 0.25rem 0px;
  background-color: rgb(192, 194, 204);
`;

const Item = styled.a`
  padding: 0.375rem 0.5rem;

  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: 400;
  color: rgb(105, 107, 116);
  border-radius: 0.25rem;

  &:hover {
    background-color: rgb(242, 244, 252);
  }
`;

const ItemIcon = styled.img`
  height: 16px;
  width: 16px;
  margin-right: 0.75rem;
`;

export default Dropdown;
