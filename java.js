//---------------------------- Задание ----- 1 -----

//I способ
/*const isAdult = function(userAge) {
    if((typeof(userAge) !== "number") || (userAge <= 0)) {
        return null;
    } else if (userAge >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(isAdult(20));*/


//II способ
/*const isAdult = function(userAge) {
    if((typeof(userAge) !== "number") || (userAge <= 0)) {
        return null;
    }

    let age = 17;
    for(let i = 18; i <= userAge; i++) {
    age += i;
    return age;
    }   
}

!!isAdult(60);*/


//III способ
/*const isAdult = function(userAge) {
    if((typeof(userAge) !== "number") || (userAge <= 0)) {
        return null;
    }
    (userAge >= 18) ? console.log(true) : console.log(false);
}

isAdult(6);*/





//-------------------------- Задание ----- 2 -----
// I способ
/*const checkMultiplicity = function(num1, num2) {
    if((typeof(num1) !== 'number') || (typeof(num2) !== 'number')) {
        return null;
    } else if (num1 % num2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkMultiplicity(45,65));*/


// II способ
/*const checkMultiplicity = function(num1, num2) {
    if((typeof(num1) !== 'number') || (typeof(num2) !== 'number')) {
        return null;
    }
    (num1 % num2 === 0) ? console.log(true) : console.log(false); 
}

checkMultiplicity(25,'dhbhds');*/




//-------------------- Задание ----- 3 -----
// I способ
/*const possibilityExistTriangle = function(side1, side2, side3) {
    if((typeof(side1) !== 'number') || (typeof(side2) !== 'number') || (typeof(side3) !== 'number')) {
        return null;
    } else if(side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
        return true;
    } else {
        return false;
    }
}

console.log(possibilityExistTriangle(2, 3, 8));*/



// II способ
/*const possibilityExistTriangle = function(side1, side2, side3) {
    if((typeof(side1) !== 'number') || (typeof(side2) !== 'number') || (typeof(side3) !== 'number')) {
        return null;
    }
    (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) ? console.log(true) : console.log(false);
}

possibilityExistTriangle(2,7,2);*/



//--------------------- Задание  ----- 4 -----
/*const sumOddNumbers = function(randomNumber) {
    let sum = 0;

    if ((typeof(randomNumber) !== 'number') || (randomNumber < 1)) {
        return null;
    }
    
    for(let i = 1; i < randomNumber; i++) {
        if(i % 2 === 1) 
            sum += i;
        }
        return sum;
    }

console.log(sumOddNumbers(-4));*/



//--------------------- Задание ----- 5 -----
/*const checkPrimeNum = function(selectedNum) {
    if(typeof(selectedNum) !== 'number') {
        return null;
    } else if (selectedNum <= 1){ 
        return false;
    } else {
        for(let i = 2; i < selectedNum; i++) {
            if(selectedNum % i === 0) {
                return false;
            } 
        }
        return true;
    }
}

console.log(checkPrimeNum(5));*/