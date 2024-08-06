import React from "react";
import { inputPropsType } from "./inputPropsType";

const InputField = (props: inputPropsType) => {
  return (
    <input
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onClick={props.onClick}
      onChange={props.onChange}
    />
  );
};

export default InputField;
