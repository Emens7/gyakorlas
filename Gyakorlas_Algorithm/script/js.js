//Feladatok

//1. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legkisebb elemét!

const number1 = [23, 765, 8888, 563, 245, 9876, 4, 77];

 const minNumbers = (num) => {
     let minNumber = num[0];
    for (let i = 1; i < num.length; i += 1) {
        if(minNumber > num[i]) {
            minNumber = num[i];
        }
    }
    return minNumber;
 }

 console.log(minNumbers(number1));

//2. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legnagyobb elemét!

 const maxNumbers = (num) => {
     let maxNumber = [0];
     for (let i = 0; i < num.length; i += 1) {
         if (maxNumber < num[i]) {
             maxNumber = num[i];
         }
     }
     return maxNumber;
 }

 console.log(maxNumbers(number1));

//3. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb átlagát!

const avg = (num) => {
    let sum = 0;
    for (let i = 0; i < num.length; i += 1) {

        sum = sum + num[i];
    }

    const avgSum = sum / num.length;

    return avgSum;
}

console.log(avg(number1));

//4. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb összegét!

const sumFull = (num) => {
    let sum = 0;
    for (let i = 0; i < num.length; i += 1) {
        sum = sum + num[i];
    }
    return sum;
}
console.log(sumFull(number1));

//5. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb páros elemeinek a számát!

const evenNumbers = (num) => {
    let evenNumber = 0;
    for (let i = 0; i < num.length; i += 1) {
        if ( num[i] % 2 == 0) {
            evenNumber ++;
        }
    }
    return evenNumber;
}
console.log(evenNumbers(number1));

//6. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb második legkisebb elemét!

const minNumbersSecond = (num) => {
    let min = num[0];
    let min2 = num[1];

    if (min2 < min) {
        let temp = min2;
        min2 = min;
        min = temp;
    }
    
    for ( let i = 0; i < num.length; i += 1) {
        if (min > num[i]) {
            min2 = min;
            min = num[i];
        } else if (min2 > num[i])
        {
           min2 = num[i];
        }
    }
    return min2;
}

console.log(minNumbersSecond(number1));

//7. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb harmadik legnagyobb elemét!
   
let bubbleSort = (num) => {  
    let len = num.length;    
    for (let i = 0; i < len; i++) { 
             for (let j = 0; j < len; j++) {           
                  if (num[j] > num[j + 1]) {                
                      let tmp = num[j];                
                      num[j] = num[j + 1];                
                      num[j + 1] = tmp;            
                    }        
                }    
            }    
            return num;
        };   
const maxNumberThird = (num) => {
    let sortedArr = bubbleSort(num);

    return sortedArr[sortedArr.length - 3];
}  

console.log(maxNumberThird(number1));
//8. Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot, egyéb iterálható elemet nem tartalmaz) tartalmazza-e a 23-as számot! Használj lineáris keresést!

const num23 = (num) => {
    for (let i = 0; i < num.length; i += 1 ) {
        //console.log(num[i])
        if (num[i] == 23) {
            return true;
        }
    }
    return false;
}
console.log(num23(number1));

//9. Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, csak egész számokat tartalmazó tömb tartalmazza-e a 23-as számot! Használj logaritmikus keresést! Nézz utána mi az, milyen feltételei vannak, és hogyan valósítható meg!

const sortedArray = [4, 12, 23, 44, 156, 2020, 12008];

const binarySearch = (num, value) => {
    let minIndex = 0;
    let maxIndex = num.length-1;
    
    
    while(minIndex <= maxIndex) {
        let midIndex = Math.floor( (minIndex + maxIndex) / 2);
        if (num[midIndex] < value) {
            minIndex = midIndex + 1;
        } else if (num[midIndex] > value) {
            maxIndex = midIndex -1;
        } else {
            return true;
        }
    }
    return false;
}

console.log(binarySearch(sortedArray, 51));

//10. Írd ki, hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot nem tartalmaz) hányszor tartalmazza a 23-as számot!

const numNumber = (num) => {
    let numNumbers = 0;
    for (let i = 0; i < num.length; i += 1) {
        if (num[i] == 23) {
            numNumbers ++;
        }
    }
    return numNumbers;
}

console.log(numNumber(number1));

//11. Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú, csak lebegőpontos számokat tartalmazó tömb elemeit növekvő sorrendbe! Írasd ki a rendezett tömböt!

let bubbleSort1 = (num) => {  
    let len = num.length;    
    for (let i = 0; i < len; i++) { 
             for (let j = 0; j < len; j++) {           
                  if (num[j] > num[j + 1]) {                
                      let temp = num[j];                
                      num[j] = num[j + 1];                
                      num[j + 1] = temp;            
                    }        
                }    
            }    
            return num;
        };   

 console.log(bubbleSort1(number1));       

//12. Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú, beágyazott tömb, és objektum kivételével bármilyen típusú elemeket tartalmazó tömb elemeit csökkenő sorrendbe! A nem szám típusú elemeket rakd a tömb végére az eredeti sorrendbe. Írasd ki a rendezett tömböt!

let bubbleSortMin =  (num) => {  
    let len = num.length;    
    for (let i = 0; i < len; i++) { 
             for (let j = 0; j < len; j++) {           
                  if (num[j] < num[j + 1]) {                
                      let temp = num[j];                
                      num[j] = num[j + 1];                
                      num[j + 1] = temp;            
                    }        
                }    
            }    
            return num;
}
console.log(bubbleSortMin(number1));

//13. Adott egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb. A tömb elemeit rendezzük növekvő sorrendbe. Ezután a felhasználótól kérjünk be egy számot (addig kérjünk be értéket, míg valóban egy véges egész számot ad meg). A számot szúrjuk be a tömbbe úgy, hogy a tömb továbbra is rendezett maradjon, tehát a megfelelő indexű helyre kerüljön be a plusz elem.
//Írasd ki a rendezett tömböt!

const numArray = (a, b) => {
    return a - b;
}

number1.sort(numArray);

console.log(number1);

let szam;

do {
     szam = prompt("Írj be egy számot");

} while (
    !Number.isInteger(parseInt(szam))
)

szam = parseInt(szam);

const numArrayAdd = [];

for (let i = 0; i < number1.length; i += 1) {
    numArrayAdd.push(number1[i]);
    if (szam >= number1[i] && (i != number1.length - 1 && szam <= number1[i+1]) ) {
        numArrayAdd.push(szam);
    } else if (szam >= number1[i] && i == number1.length -1) {
        numArrayAdd.push(szam);
    }
}

console.log(numArrayAdd);

//14. Adott egy tömb, mely azonos darabú egész számot, és szöveget tartalmaz véletlenszerű sorrendben. Rendezzük úgy a tömböt, hogy minden szám után egy string következzen! Írasd ki a rendezett tömböt!

const arr = [4, 56, 426, "Ede", "Balaton", 2020, 972, "Ősz", "Tél", "Tavasz"];

const customSort = (arr) => {
    const numbers = [];
    const strings = [];

    const sortedArray = [];

    for ( let i = 0; i < arr.length; i += 1) {
        if(typeof arr[i] === 'number') {
            numbers.push(arr[i]);
        } else {
            strings.push(arr[i]);
        }

    }
    for (let i = 0; i < numbers.length; i += 1) {
        sortedArray.push(numbers[i]);
        sortedArray.push(strings[i]);
    }
    return sortedArray;
}
   
console.log(customSort(arr))

//15. Adott egy tetszőleges pozitív egész számokat tartalmazó tömb. Válogassuk szét külön egy even (páros), és odd (páratlan) nevezetű tömbbe a páros, és páratlan számokat! Írjuk ki a 2 tömböt!

const sortingNumber = (num) => {
    const even = [];
    const odd = [];

    for (let i = 0; i < num.length; i += 1) {
        if (num[i] % 2 == 0) {
            even.push(num[i]);
        } else {
            odd.push(num[i]);
        }
    }

    return [even, odd];
}

console.log(sortingNumber(number1))

//16. Adott két azonos elemszámú, csak egész számokat tartalmazó tömb. Külön tömbökbe készítsük el a két tömb: metszetét, unióját, különbségét, és descartes szorzatát. Írassuk ki az új tömböket!

//Metszet
const arrNum1 = [23, 56, 180, 95, 7, 8900, 55];

const arrNum2 = [2020, 67, 180, 11, 348, 12080, 55];

const arraySection = (arrNum1, arrNum2) => {
    const interSection = [];

    for (let i = 0; i < arrNum1.length; i += 1) {
        for (let j = 0; j < arrNum2.length; j += 1) {
            if (arrNum1[i] === arrNum2[j]) {
               interSection.push(arrNum1[i]); 
            }
        }
    }
    return interSection;
}

console.log(arraySection(arrNum1, arrNum2));

//Unio

const union = (arrNum1, arrNum2) => {
    const unions = [];

    for (let i = 0; i < arrNum1.length; i += 1) { 
         unions.push(arrNum1[i]);           
    }
    for (let j = 0; j < arrNum2.length; j += 1) {
         
         let exists = false;
         for (let k = 0; k < unions.length; k += 1) {
             if (arrNum2[j] == unions[k]) {
                exists = true;
             }
         } 
        
        if (!exists) {
            unions.push(arrNum2[j]);
        }
    }  

    return unions;
}

console.log(union(arrNum1, arrNum2));

//Különbség

const differnce = (arrNum1, arrNum2) => {
    const diff = [];

    for (let i = 0; i < arrNum1.length; i += 1) {
        let exists = false;
        for ( let j = 0; j < arrNum2.length; j += 1) {
            if ( arrNum1[i] === arrNum2[j]) {
                exists = true;
            }
        }
        if (!exists) {
            diff.push(arrNum1[i]);
        }
    }

    return diff;
}

console.log(differnce(arrNum1, arrNum2));

// Decartes szorzat

const decartes = (arrNum1, arrNum2) => {
    const cartesian = [];

    for ( let i = 0; i < arrNum1.length; i += 1) {
        for ( let j = 0; j < arrNum2.length; j += 1) {
            cartesian.push([arrNum1[i], arrNum2[j]]);
        }
    }
    return cartesian;
}

console.log(decartes(arrNum1, arrNum2));