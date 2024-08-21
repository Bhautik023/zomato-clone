import React, { MouseEventHandler } from "react";

type buttonPropsTypes = {
  className: string;
  onClick?: MouseEventHandler;
  children: React.ReactNode;
}

const Button = (props: buttonPropsTypes) => {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.children}
    </button>
  );
};

export default Button;
