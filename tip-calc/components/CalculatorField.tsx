import React, { useState } from "react";
import { CalculatorFieldProps } from "../types/index";

const CalculatorField: React.FC<CalculatorFieldProps> = ({
  label,
  icon,
  value,
  allowDecimal,
  allowZeroValue,
  onValueChange,
  customClass,
  placeholderText,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [hasValidationError, setHasValidationError] = useState(false);

  const processInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let processedValue = e.target.value;

    if (allowDecimal) {
      processedValue = processedValue.replace(/[^0-9.]/g, "");
      const decimalParts = processedValue.split(".");
      if (decimalParts.length > 2) {
        processedValue = decimalParts[0] + "." + decimalParts.slice(1).join("");
      }
    } else {
      processedValue = processedValue.replace(/[^0-9]/g, "");
    }

    e.target.value = processedValue;
    setHasValidationError(false);
    onValueChange(processedValue);
  };

  const validateOnBlur = () => {
    const numericValue = value === "" ? 0 : parseFloat(value);
    if (!allowZeroValue && numericValue === 0) {
      setHasValidationError(true);
    } else {
      setHasValidationError(false);
    }
  };

  const handleFocus = () => setIsActive(true);
  const handleBlur = () => {
    setIsActive(false);
    validateOnBlur();
  };

  return {
    isActive,
    hasValidationError,
    processInputChange,
    handleFocus,
    handleBlur
  };
};

export default CalculatorField;