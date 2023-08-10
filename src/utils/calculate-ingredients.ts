export const calculateIngredients = (
  pizzaNum: number,
  weightPerPizza: number,
  hydration: number,
  saltPercentage: number,
) => {
  const totalPercentage = 100 + hydration + saltPercentage;
  const totalWeight = pizzaNum * weightPerPizza;

  const flourWeight = (100 / totalPercentage) * totalWeight;
  const waterWeight = (hydration / totalPercentage) * totalWeight;
  const saltWeight = (saltPercentage / totalPercentage) * totalWeight;

  return {
    flourWeight,
    waterWeight,
    saltWeight,
    totalWeight,
  };
};
