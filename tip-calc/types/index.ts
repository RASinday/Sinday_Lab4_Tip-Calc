export interface CalculatorFieldProps {
  label: string;
  icon?: string;
  value: string;
  allowDecimal: boolean;
  allowZeroValue: boolean;
  onValueChange: (value: string) => void;
  customClass?: string;
  placeholderText?: string;
}

export interface PercentageButtonProps {
  value: number;
  isActive: boolean;
  onPercentageSelect: () => void;
}

export interface TipPercentageSelectorProps {
  activePercentage: number | undefined;
  onPercentageChange: (percentage: number | undefined) => void;
  customPercentage: string;
  onCustomPercentageChange: (value: string) => void;
}

export interface CalculationResultsProps {
  tipPerPerson: string;
  totalPerPerson: string;
  onResetCalculation?: () => void;
  isResetActive?: boolean;
}

export const percentageOptions = [5, 10, 15, 25, 50];