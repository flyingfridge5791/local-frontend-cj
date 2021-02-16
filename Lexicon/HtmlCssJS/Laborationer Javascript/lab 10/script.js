const cube = (höjd, bredd, längd) => {
    let volym = höjd * bredd * längd;
    console.log(`Kubens volym är : ${volym} kubik`);
}

cube(2, 2, 2);


const cirkel = function(diameter) {
    let area = (diameter / 2) * (diameter / 2) * Math.PI;
    console.log(`Cirkelns area är : ${area} kvadrat`);
}

cirkel(5);


