import React from "react";
import { CalculationResultsProps } from "../types/index";

const CalculationResults: React.FC<CalculationResultsProps> = ({
  tipPerPerson = "0.00",
  totalPerPerson = "0.00",
  onResetCalculation,
  isResetActive = false,
}) => {
  return (
    <section className="results-panel">
      <div className="results-content">
        <div className="result-item">
          <div className="result-label">
            <span className="label-main">Tip Amount</span>
            <span className="label-sub">/ person</span>
          </div>
          <div className="result-value" aria-live="polite">
            ${tipPerPerson}
          </div>
        </div>
        <div className="result-item">
          <div className="result-label">
            <span className="label-main">Total Amount</span>
            <span className="label-sub">/ person</span>
          </div>
          <div className="result-value" aria-live="polite">
            ${totalPerPerson}
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={onResetCalculation}
        disabled={isResetActive}
        className="reset-btn"
      >
        RESET
      </button>
    </section>
  );
};

export default CalculationResults;