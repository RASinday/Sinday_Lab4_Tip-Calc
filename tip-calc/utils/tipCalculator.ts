export function computeTipAndTotal(
  billAmount: string,
  numberOfPeople: string,
  tipPercentage: number
): { tipPerPerson: string; totalPerPerson: string } {
  const billTotal = parseFloat(billAmount) || 0;
  const peopleCount = parseInt(numberOfPeople) || 0;
  const tipRate = tipPercentage || 0;

  if (billTotal <= 0 || peopleCount <= 0) {
    return { tipPerPerson: "0.00", totalPerPerson: "0.00" };
  }

  const tipAmountPerPerson = (billTotal * tipRate) / 100 / peopleCount;
  const totalAmountPerPerson = billTotal / peopleCount + tipAmountPerPerson;

  return {
    tipPerPerson: tipAmountPerPerson.toFixed(2),
    totalPerPerson: totalAmountPerPerson.toFixed(2),
  };
}