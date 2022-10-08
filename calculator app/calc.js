const calculator = document.querySelector(".calculator")
const keys = document.querySelector(".calculator_keys")
const display = document.querySelector(".calculator_display")
const displayed = document.querySelector(".calculator_display3")
const display2 = document.querySelector(".calculator_display2")

keys.addEventListener("click", function(e){

    if(e.target.matches("button")){
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        const displayedNum2 = display2.textContent
        const displayedNum3 = displayed.textContent

        const previousKeyType = calculator.dataset.previousKeyType
        const nextKeyType = calculator.dataset.nextKeyType

        const del = Array.from(key.parentNode.children)

        if(!action){
            if(displayedNum === "0" || previousKeyType === "operator"){
                display.textContent = keyContent
            }else{
                display.textContent = displayedNum + keyContent
            }

            calculator.dataset.previousKeyType = "number"
            del.forEach(k => k.classList.remove("is_depressed"))
        }

        if(!action){
            if(displayedNum2 === "0"){
                display2.textContent = keyContent
            }else{
                display2.textContent = displayedNum2 + keyContent
            }
        }

        if(action === "decimal"){
            
            if(!displayedNum.includes(".")){
                display.textContent = displayedNum + "."
                display2.textContent = displayedNum2 + "."
            }
            else if(previousKeyType === "operator"){
                display.textContent = "0."
                display2.textContent = "0."
            }
            
            calculator.dataset.previousKeyType = "decimal"
            del.forEach(k => k.classList.remove("is_depressed"))
        }

        if(action === "add" || action === "subtract"
        || action === "multiply" || action === "divide"){

            if(previousKeyType !== "operator"){
                display2.textContent = displayedNum2 + keyContent
            }
            
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum
        
            if(firstValue && operator && previousKeyType !== "operator"){ 

                const calcValue = calculate(firstValue, operator, secondValue)
                display.textContent = calcValue
                display2.textContent =  displayedNum3 + keyContent
                calculator.dataset.firstValue = calcValue
                console.log(operator)
            }
            else {
            // If there are no calculations, set displayedNum as the firstValue
            calculator.dataset.firstValue = displayedNum
            }
            
            calculator.dataset.previousKeyType = "operator"
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action

            del.forEach(k => k.classList.remove("is_depressed"))
            key.classList.add("is_depressed")
        }


        if(action === "calculate"){

            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum
            
            if(firstValue){
                 display.textContent = calculate(firstValue,operator,secondValue)
            }

            calculator.dataset.previousKeyType = "calculate"
            // here if i change this variable to another display i will be able to modify it
            // display.textContent = calculate(firstValue,operator,secondValue)
            displayed.textContent = calculate(firstValue,operator,secondValue)
            console.log(firstValue)
            console.log(secondValue)
            console.log(displayedNum)
            console.log(displayedNum2)
        }

        function calculate(n1,operator,n2) {
            let result = ""

            if(operator === "add"){
                result = parseFloat(n1) + parseFloat(n2)
            }
            if(operator === "subtract"){
                result = parseFloat(n1) - parseFloat(n2)
            }
            if(operator === "multiply"){
                result = parseFloat(n1) * parseFloat(n2)
            }
            if(operator === "divide"){
                result = parseFloat(n1) / parseFloat(n2)
            }
            return result
        }
        
        if (action !== 'clear') {
            const clearbutton = calculator.querySelector('[data-action=clear]')
            clearbutton.textContent = "CE"
            
        }

        if (action === 'clear') {
            if(key.textContent === "AC"){
                calculator.dataset.firstValue = ""
                // calculator.dataset.secondValue = ""
                calculator.dataset.operator = ""
                calculator.dataset.previousKeyType = ""  
            }
            else{
                key.textContent = "AC"
            }

            display.textContent = 0
            displayed.textContent = 0
            display2.textContent= display.textContent
            calculator.dataset.previousKeyType = 'clear'

            del.forEach(k => k.classList.remove("is_depressed"))
        }

        if(action==="clear"){
            if(key.textContent === "CE"){
                calculator.dataset.firstValue = displayedNum
                // calculator.dataset.secondValue = ""
                calculator.dataset.operator = ""
                calculator.dataset.previousKeyType = ""  
            }

            display.textContent = 
            displayed.textContent = 0
            display2.textContent= display.textContent
            calculator.dataset.previousKeyType = 'clear'
        }
        
        
    }
})


