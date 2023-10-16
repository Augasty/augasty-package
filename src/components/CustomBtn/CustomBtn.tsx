import React from "react";


interface customBtnProps {
  id?: any;
  value?: string | undefined;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  onClick?: (event: any) => void;
  label?: string;
}


const CustomBtn: React.FC<customBtnProps> = ({
  id = "",
  value = "",
  type,
  className = "",
  onClick,
  label = "",
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label> :
      <button type={type} className={className} onClick={onClick} id={id}>
        {value}
      </button>
    </div>
  );
};

export default CustomBtn