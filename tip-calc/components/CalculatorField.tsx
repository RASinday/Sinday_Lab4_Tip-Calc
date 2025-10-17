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

  return (
    <div className={`field-container`}>
      <label
        className="field-label"
        htmlFor={label}
      >
        {label}
      </label>
      <div
        className={`field-wrapper ${isActive ? "active-field" : ""} ${
          hasValidationError ? "error-field" : ""
        }`}
      >
        {hasValidationError && (
          <p className="error-message">{`Value cannot be zero`}</p>
        )}
        {icon && (
          <img src={icon} alt="field icon" className="field-icon" />
        )}
        <input
          className={`field-input ${customClass ?? ""}`}
          placeholder={placeholderText ?? "0"}
          value={value}
          onFocus={() => setIsActive(true)}
          onBlur={() => {
            setIsActive(false);
            validateOnBlur();
          }}
          onChange={processInputChange}
          type={allowDecimal ? "number" : "text"}
        />
      </div>
    </div>
  );
};

export default CalculatorField;