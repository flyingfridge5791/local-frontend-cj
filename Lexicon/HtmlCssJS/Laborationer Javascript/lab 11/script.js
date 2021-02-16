


// -------------------------------- funktion för att få fram dag i textformat-------------------
const dayFunc = function(dateInput) {
    let day = dateInput.getDay();
    switch(day) {
        case 1: 
            day = "Måndag"
            return day;
        case 2:
            day = "Tisdag"
            return day;
        case 3:
            day = "Onsdag"
            return day;
        case 4:
            day = "Torsdag"
            return day;
        case 5:
            day = "Fredag"
            return day;
        case 6:
            day = "Lördag"
            return day;
        case 7:
            day = "Söndag";
            return day;
        default:
            day = "That day does not exist, potential erasure of celestial body Tellus. Scanning for remaining civilization."
            return day;
    }
}

// -----------------funktion för att få fram månad i textformat ----------------------

const monthFunc = function(dateInput) {
    let month = dateInput.getMonth();
    switch(month) {
        case 1:
            month = "Januari"
            return month;
        case 2:
            month = "Februari"
            return month;
        case 3:
            month = "Mars"
            return month;
        case 4:
            month = "April"
            return month;
        case 5:
            month = "Maj"
            return month;
        case 6:
            month = "Juni"
            return month;
        case 7:
            month = "Juli"
            return month;
        case 8:
            month = "Augusti"
            return month;
        case 9:
            month = "September"
            return month;
        case 10:
            month = "Oktober"
            return month;
        case 11:
            month = "November"
            return month;
        case 12:
            month = "December"
            return month;
    }
}


const topLeftHide = function(number) {
    if (number == '1' ||
        number == '2' ||
        number == '3' ||
        number == '7') {
            return 'hide';
    }
}


const numberCreator = function(containerDiv, number)  {

    containerDiv.innerHTML = 
    `
    <span class=" ${(number == '1' || number == '4') ? 'hide' : '' } numberPart numberPartTop "></span>
    <span class=" ${topLeftHide(number)} numberPart numberPartTopLeft "></span>
    <span class="numberPart numberPartTopRight "></span>
    <span class="numberPart numberPartMiddleTop "></span>
    <span class="numberPart numberPartMiddleBot "></span>
    <span class="numberPart numberPartBot "></span>
    <span class="numberPart numberPartBotLeft "></span>
    <span class="numberPart numberPartBotRight "></span>
    `


    // NEDANSTÅENDE UTKOMMENTERAT ÄR EXEMPEL PÅ HUR DET GJORDES FÖRST OCH TVÅ ANDRA ALTERNATIV TILL HUR DET GÅR ATT LÖSAS
    //-----DENNA BLEV UTBYTT AV IF-MOJÄNGEN I numberPartTop SPANEN OVANFÖR-----

    // if (number == '1' ||
    //      number == '4') {
    //     containerDiv.querySelector(".numberPartTop").classList.add("hide");
    // }else {
    //     containerDiv.querySelector(".numberPartTop").classList.remove("hide");
    // }

    // -----DENNA BLEV UTBYTT AV FUNKTIONEN topLeftHide() I numberPartTopLeft SPANEN OVANFÖR----
    
    // if (number == '1' ||
    //      number == '2' ||
    //       number == '3' ||
    //        number == '7') {
    //     containerDiv.querySelector(".numberPartTopLeft").classList.add("hide");
    // }else {
    //     containerDiv.querySelector(".numberPartTopLeft").classList.remove("hide");
    // }

    // ---------------------------------------------------------------------------------------------------
    
    if (number == '5' ||
         number == '6') {
        containerDiv.querySelector(".numberPartTopRight").classList.add("hide");
    }else {
        containerDiv.querySelector(".numberPartTopRight").classList.remove("hide");
    }
    
    

    if (number == '1' ||
         number == '7' ||
          number == '0') {
        containerDiv.querySelector(".numberPartMiddleTop").classList.add("hide");
    }else {
        containerDiv.querySelector(".numberPartMiddleTop").classList.remove("hide");
    }
    
    if (number == '1' ||
         number == '7' ||
          number == '0') {
        containerDiv.querySelector(".numberPartMiddleBot").classList.add("hide");
    }else {
        containerDiv.querySelector(".numberPartMiddleBot").classList.remove("hide");
    }
    
    if (number == '1' ||
         number == '3' ||
          number == '4' ||
           number == '5' ||
            number == '7' ||
             number == '9') {
        containerDiv.querySelector(".numberPartBotLeft").classList.add("hide");
    }else {
        containerDiv.querySelector(".numberPartBotLeft").classList.remove("hide");
    }
    
    if (number == '1' ||
         number == '4' ||
           number == '7' ||
            number == '9') {
        containerDiv.querySelector(".numberPartBot").classList.add("hide");
    }else {
        containerDiv.querySelector(".numberPartBot").classList.remove("hide");
    }
    
    if (number == '2') {
        containerDiv.querySelector(".numberPartBotRight").classList.add("hide");
    }else {
        containerDiv.querySelector(".numberPartBotRight").classList.remove("hide");
    }           
}

const timeConvert = function(theTime) {
    if (theTime < 10){
        theTime = '0' + theTime;
    }
    return theTime;
}

const timeTicker = function() {

    let date = new Date();

    let hr = date.getHours().toString();
    let min = date.getMinutes().toString();
    let sec = date.getSeconds().toString();

    let partySec = date.getSeconds();
    let partyMin = date.getMinutes();

    hr = timeConvert(hr);
    min = timeConvert(min);
    sec = timeConvert(sec);

    numberCreator(h1 , hr[0])
    numberCreator(h2 , hr[1])
    numberCreator(m1 , min[0])
    numberCreator(m2 , min[1])
    numberCreator(s1 , sec[0])
    numberCreator(s2 , sec[1])

    if (partyMin%2 == '0'){

        if (partySec%2 == '0') {
            partyTime('yes');
        }else{
            partyTime('no')};

    }else{partyTime('no')};

}

const partyTime = function(yayOrNay) {

    var bkgrnd = document.querySelectorAll("div, body");
    for (i = 0; i < bkgrnd.length; i++) {
        bkgrnd[i].style.backgroundColor = yayOrNay === 'yes' ?  `black` : 'black';
        };

    var colonBkgrnd = document.querySelectorAll(".colonDot1, .colonDot2");
    for (index = 0; index < colonBkgrnd.length; index++) {
        let rgbRandom = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        colonBkgrnd[index].style.backgroundColor = `${(yayOrNay == 'yes')? rgbRandom : rgbRandom}`;   
    };

    var topColor = document.querySelectorAll("span:not(.hide).numberPartTop");
    for (i = 0; i < topColor.length; i++) {
        rgbRandom = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        topColor[i].style.borderTopColor = `${(yayOrNay == 'yes')? rgbRandom : rgbRandom}`
        };
    var topRightColor = document.querySelectorAll("span:not(.hide).numberPartTopRight");
    for (i = 0; i < topRightColor.length; i++) {
        rgbRandom = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        topRightColor[i].style.borderRightColor = `${(yayOrNay == 'yes')? rgbRandom : rgbRandom}`
        };
    var topLeftColor = document.querySelectorAll("span:not(.hide).numberPartTopLeft");
    for (i = 0; i < topLeftColor.length; i++) {
        rgbRandom = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        topLeftColor[i].style.borderLeftColor = `${(yayOrNay == 'yes')? rgbRandom : rgbRandom}`
        };
    var topMiddleColor = document.querySelectorAll("span:not(.hide).numberPartMiddleTop");
    for (i = 0; i < topMiddleColor.length; i++) {
        rgbRandom = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        topMiddleColor[i].style.borderBottomColor = `${(yayOrNay == 'yes')? rgbRandom : rgbRandom}`
        };
    var botMiddleColor = document.querySelectorAll("span:not(.hide).numberPartMiddleBot");
    for (i = 0; i < botMiddleColor.length; i++) {
        rgbRandom = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        botMiddleColor[i].style.borderTopColor = `${(yayOrNay == 'yes')? rgbRandom : rgbRandom}`
        };
    var botRightColor = document.querySelectorAll("span:not(.hide).numberPartBotRight");
    for (i = 0; i < botRightColor.length; i++) {
        rgbRandom = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        botRightColor[i].style.borderRightColor = `${(yayOrNay == 'yes')? rgbRandom : rgbRandom}`
        };
    var botColor = document.querySelectorAll("span:not(.hide).numberPartBot");
    for (i = 0; i < botColor.length; i++) {
        rgbRandom = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        botColor[i].style.borderBottomColor = `${(yayOrNay == 'yes')? rgbRandom : rgbRandom}`
        };
    var botLeftColor = document.querySelectorAll("span:not(.hide).numberPartBotLeft");
    for (i = 0; i < botLeftColor.length; i++) {
        rgbRandom = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        botLeftColor[i].style.borderLeftColor = `${(yayOrNay == 'yes')? rgbRandom : rgbRandom}`
        };
}

// ------------------------- FUNKTIONER ÖVER HÄR -----------------------------

let date = new Date();

let dayString = dayFunc(date);
let dateNr = date.getDate();
let month = monthFunc(date);
let year = date.getFullYear();



let h1 = document.querySelector("#h1");
let h2 = document.querySelector("#h2");
let m1 = document.querySelector("#m1");
let m2 = document.querySelector("#m2");
let s1 = document.querySelector("#s1");
let s2 = document.querySelector("#s2");

setInterval(timeTicker, 1000);

document.querySelector('#weekDay').innerHTML = `${dayString}`;

if (dateNr >= 1 && dateNr <= 2 || dateNr >= 21 && dateNr <= 22 || dateNr == 31) {
    document.querySelector('#dateDay').innerHTML = `${dateNr}:a`
}
else {
    document.querySelector('#dateDay').innerHTML = `${dateNr}:e`
}

document.querySelector('#monthString').innerHTML = `${month}`;

document.querySelector('#year').innerHTML = `${year}`;


