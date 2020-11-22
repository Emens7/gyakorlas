const btnSubmit = document.querySelector('.submit');

const feet = document.querySelector('.numberTypeFeet');

const inch = document.querySelector('.numberTypeInch');

const resultValue = document.querySelector('.resultValue');

const deleteValue = document.querySelector('.deleteValue');

function feetCm () {
    const result = conversionFeetCm(feet.value, inch.value);
    resultValue.innerText = result + ' cm';
}

function conversionFeetCm (feet, inch) {
     const cm = feet * 30.48 + inch * 2.54;
     return cm;
}

function del() {
    feet.value = '';
    inch.value = '';
    resultValue.innerText = '';
}

btnSubmit.addEventListener('click', feetCm);

deleteValue.addEventListener('click', del);


