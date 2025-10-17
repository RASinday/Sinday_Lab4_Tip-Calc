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
    <div className="tip-selector-container">
      <span className="tip-selector-label">
        Select Tip %
      </span>
      <div className="tip-options-grid">
        {percentageOptions.map((percentage) => (
          <PercentageButton
            key={percentage}
            value={percentage}
            isActive={activePercentage === percentage && customPercentage === ""}
            onPercentageSelect={() => selectPercentage(percentage)}
          />
        ))}
        <div className="custom-tip-container">
          <input
            type="text"
            placeholder="Custom"
            value={customPercentage}
            onChange={(e) => handleCustomPercentageInput(e.target.value)}
            className="custom-tip-input"
          />
        </div>
      </div>
    </div>
  );
};

export default TipPercentageSelector;