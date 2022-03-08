import styled, { css } from "styled-components";

interface Props {
  variant: "primary" | "secondary";
}

const Button: any = styled.button`
  padding: 0.375rem 1rem;

  font-family: inherit;
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
  text-decoration: none;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;

  border-radius: 0.25rem;
  background-color: transparent;
  border: 1px solid;
  outline: none;

  cursor: pointer;

  ${(props: any) =>
    props.variant === "primary" &&
    css`
      background-color: rgb(82, 95, 255);
      border-color: rgb(82, 95, 255);
      color: white;

      &:hover {
        background-color: rgb(34, 26, 178);
        border-color: rgb(34, 26, 178);
      }
    `}

  ${(props: any) =>
    props.variant === "secondary" &&
    css`
      background-color: transparent;
      border-color: rgb(0, 15, 51);
      color: rgb(0, 15, 51);

      &:hover {
        color: rgb(105, 107, 116);
        border-color: rgb(105, 107, 116);
      }
    `}
`;
export default Button;
