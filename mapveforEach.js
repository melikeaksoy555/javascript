const temperatures = [
    { degrees:69, isRecordTemp: false },
    { degrees:82, isRecordTemp: false },
    { degrees:73, isRecordTemp: false },
    { degrees:64, isRecordTemp: false },
];

// const newTemperatures = temperatures.map((temperature) => {
//     temperature.isHigh = true;
//     temperature.isRecordTemp = true;
//     return temperature;
// })

const newTemperatures = temperatures.map((temperature) =>
    temperature.degrees >= 70 ? {...temperature, isHigh : true } : temperature
);

newTemperatures.forEach((temperature) => {
    if(temperature.isHigh) {
        console.log(`Geçen hafta ${temperature.degrees} derece ile rekor sıcaklık yaşandı.`)
    }
});

// console.log(newTemperatures);

// .map daima yeni bir array döner. 
// .forEach elementler üzerinde dolaşır ve herhangi birşey döndürmez. 