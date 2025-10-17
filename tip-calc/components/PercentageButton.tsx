import React from "react";
import { PercentageButtonProps } from "../types/index";

const PercentageButton: React.FC<PercentageButtonProps> = ({ 
  value, 
  isActive, 
  onPercentageSelect 
}) => (
  <button
    className={`percentage-btn ${isActive ? "btn-active" : "btn-inactive"}`}
    onClick={onPercentageSelect}
    type="button"
  >
    {value}%
  </button>
);

export default PercentageButton;