// const temperatures = [69, 82, 73, 64]; //0, 1, 2, 3

// console.log(temperatures.indexOf(20) > 0);

// console.log(temperatures.includes(50));

const temperatures = [
    {degrees: 69, isRecordTemp: false},
    {degrees: 82, isRecordTemp: true},
    {degrees: 73, isRecordTemp: false},
    {degrees: 64, isRecordTemp: false},
];

// const result = temperatures.some((temperature) => temperature.isRecordTemp === true);

const result = temperatures.every((temperature) => temperature.isRecordTemp);

console.log(result);