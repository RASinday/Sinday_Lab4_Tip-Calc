import React from "react";
import { TipPercentageSelectorProps, percentageOptions } from "../types/index";
import PercentageButton from "./PercentageButton";
import CalculatorField from "./CalculatorField";

const TipPercentageSelector: React.FC<TipPercentageSelectorProps> = ({
  activePercentage,
  onPercentageChange,
  customPercentage,
  onCustomPercentageChange,
}) => {
  const selectPercentage = (percentage: number) => {
    if (onPercentageChange) onPercentageChange(percentage);
    if (onCustomPercentageChange) onCustomPercentageChange("");
  };

  const handleCustomPercentageInput = (value: string) => {
    if (onCustomPercentageChange) onCustomPercentageChange(value);
    if (onPercentageChange) onPercentageChange(undefined);
  };

  return (
    percentageOptions,
    selectPercentage,
    handleCustomPercentageInput,
    activePercentage,
    customPercentage
  };
};

export default TipPercentageSelectorLogic;