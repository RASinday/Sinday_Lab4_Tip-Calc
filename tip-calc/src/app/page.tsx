"use client";

import React, { useState } from "react";
import CalculatorField from "../../components/CalculatorField";
import TipPercentageSelector from "../../components/TipPercentageSelector";
import CalculationResults from "../../components/CalculationResults";
import { computeTipAndTotal } from "../../utils/tipCalculator";

export default function TipCalculatorApp() {
  const [billAmount, setBillAmount] = useState("");
  const [peopleCount, setPeopleCount] = useState("");
  const [selectedPercentage, setSelectedPercentage] = useState<number | undefined>(undefined);
  const [customPercentage, setCustomPercentage] = useState("");

  const currentTipPercentage = customPercentage ? parseFloat(customPercentage) || 0 : selectedPercentage ?? 0;
  const { tipPerPerson, totalPerPerson } = computeTipAndTotal(
    billAmount,
    peopleCount,
    currentTipPercentage
  );

  const canReset = 
    billAmount === "" &&
    peopleCount === "" &&
    selectedPercentage === undefined &&
    customPercentage === "";

  const resetCalculator = () => {
    setBillAmount("");
    setPeopleCount("");
    setSelectedPercentage(undefined);
    setCustomPercentage("");
  };

  return (
    <main className="calculator-app">
      <div className="app-container">
        <div className="logo-section">
          <h1 className="app-title">SPLI<br/>TTER</h1>
        </div>
        <section className="calculator-interface">
          <div className="input-section">
            <CalculatorField
              label="Bill Total"
              icon="/images/icon-dollar.svg"
              value={billAmount}
              allowDecimal={true}
              allowZeroValue={true}
              onValueChange={setBillAmount}
              placeholderText="0"
              customClass="text-right"
            />
            
            <TipPercentageSelector
              activePercentage={selectedPercentage}
              onPercentageChange={setSelectedPercentage}
              customPercentage={customPercentage}
              onCustomPercentageChange={setCustomPercentage}
            />
            
            <CalculatorField
              label="Number of People"
              icon="/images/icon-person.svg"
              value={peopleCount}
              allowDecimal={false}
              allowZeroValue={false}
              onValueChange={setPeopleCount}
              placeholderText="0"
              customClass="text-right"
            />
          </div>
          
          <CalculationResults
            tipPerPerson={tipPerPerson}
            totalPerPerson={totalPerPerson}
            onResetCalculation={resetCalculator}
            isResetActive={canReset}
          />
        </section>
      </div>
    </main>
  );
}