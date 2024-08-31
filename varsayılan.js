function convertTemperature(celcius, decimalPlaces = 1){
    const fahrenheit = celcius * 1.8 + 32;
    return fahrenheit.toFixed(decimalPlaces);
}

console.log(convertTemperature(21));