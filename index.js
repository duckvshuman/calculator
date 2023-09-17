const display = document.querySelector(".display")
const operandButtons = document.querySelectorAll("[data-operand]")
const operatorButtons = document.querySelectorAll("[data-operator]")
const calculateButton = document.querySelector("[data-calculate]")
const clearAllButton = document.querySelector("[data-clear]")
const deleteButton = document.querySelector("[data-delete]")

let oldArith = ''
let currentArith = ''
let operation = ''

operatorButtons.forEach((button) => {
    button.addEventListener('click',() => {
        processOperator(button.textContent)
    })
})

operandButtons.forEach((button) => {
    button.addEventListener('click',() => {
        processOperand(button.textContent)
    })
})

calculateButton.addEventListener('click', () => {
    if (!oldArith) return
    let result = compute()
    oldArith = ''
    display.textContent = result
    currentArith = result
})

clearAllButton.addEventListener('click', () => {
    display.textContent = ''
    oldArith = ''
    currentArith = ''
})

deleteButton.addEventListener('click', () => {
    currentArith = currentArith.slice(0, -1)
    display.textContent = currentArith
})


function processOperator(buttonContext) {
    if (!currentArith) return
    display.textContent = currentArith + buttonContext;

    if (!oldArith) {
        oldArith = currentArith
        operation = buttonContext
    } else {
        let result = compute()
        oldArith = result
    }
    currentArith = ''
}

function processOperand(buttonContext) {
    if (buttonContext === "." && currentArith.includes('.')) return
    currentArith += buttonContext
    display.textContent = currentArith
}

function compute() {
    let result
    let oldArithFloat = parseFloat(oldArith)
    let currentArithFloat = parseFloat(currentArith)

    switch(operation) {
        case "+":
            result = oldArithFloat + currentArithFloat
            break
        case "-":
            result = oldArithFloat - currentArithFloat
            break
        case "x":
            result = oldArithFloat * currentArithFloat
            break
        case "÷":
            result = oldArithFloat / currentArithFloat
            break
    }
    return result
}
