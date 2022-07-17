class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
}

//Selectors for all of the buttons and operations
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

//Deletes all the displayed values
clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}

delete() {

}

appendNumber(number) {
    //prevent multiple periods
    if (number === '.' && this.currentOperand.includes('.')) return

    this.currentOperand = this.currentOperand.toString() + number.toString()
}

chooseOperation(operation) {

}

compute() {

}

updateDisplay() {
//This is for testing!//
//this.currentOperandTextElement.innerText = this.currentOperand

}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

//Event listener to add clicked number to the calculator and update the display
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

//Event listener for operation buttons, very similar to above
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})