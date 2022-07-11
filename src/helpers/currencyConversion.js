const currencyConversion = (pennies) => {
    const rubles = pennies / 100;
    return rubles.toFixed(2);
}

export default currencyConversion;