// JUNAYED HASAN

const calculateRemainingMoney = (totalMoney: number,cakeCost: number,donutCost: number): number => {
    const afterCake = totalMoney - cakeCost;
    if (afterCake < 0) {
        return afterCake;
    }
    return afterCake % donutCost;
};