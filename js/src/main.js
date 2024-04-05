"use strict";
const SELECTORS = {
    btnNumber: 'div.number-item',
    btnClear: 'clear',
    btnResult: 'result',
    btnOperator: 'div.operators-item',
    inpScreen: 'input'
};
const addToScreen = (value, isOperator = false) => {
    const screen = document.getElementById('input');
    if (screen === null) {
        return;
    }
    let currentValue = screen.innerHTML;
    currentValue += isOperator ? ` ${value} ` : value;
    screen.innerHTML = currentValue;
};
const clearScreen = () => {
    const screen = document.getElementById('input');
    if (screen === null) {
        return;
    }
    screen.innerText = '';
};
const isDecimalNumber = (num) => {
    if (typeof num === 'number') {
        num = num.toString();
    }
    return num.includes('.');
};
const getDecimalNumber = (num) => {
    let number = Number.parseFloat(num);
    return number.toFixed(5);
};
const execCalculate = (calculation) => {
    clearScreen();
    calculation = calculation.replaceAll('×', '*');
    calculation = calculation.replaceAll('÷', '/');
    try {
        let result = eval(calculation);
        if (isDecimalNumber(result)) {
            addToScreen(getDecimalNumber(result));
            return;
        }
        addToScreen(result);
    }
    catch (error) {
        addToScreen('Syntax error!!!');
        setTimeout(() => {
            clearScreen();
        }, 1000);
    }
};
const btnNumbers = document.querySelectorAll(SELECTORS.btnNumber);
const btnOperator = document.querySelectorAll(SELECTORS.btnOperator);
const btnClear = document.getElementById(SELECTORS.btnClear);
const btnResult = document.getElementById(SELECTORS.btnResult);
const screenInp = document.getElementById(SELECTORS.inpScreen);
btnNumbers.forEach(function (btnNumber) {
    btnNumber.addEventListener('click', function (e) {
        if (e.target instanceof Element === false) {
            return;
        }
        addToScreen(e.target.innerHTML);
    });
});
btnOperator.forEach(function (btnOp) {
    btnOp.addEventListener('click', function (e) {
        if (e.target instanceof Element === false) {
            return;
        }
        addToScreen(e.target.innerHTML, true);
    });
});
btnClear?.addEventListener('click', function () {
    if (screenInp instanceof HTMLElement === false) {
        return;
    }
    screenInp.innerText = '';
});
btnResult?.addEventListener('click', function () {
    let calculation = screenInp?.innerText;
    if (!calculation) {
        return;
    }
    execCalculate(calculation);
});
