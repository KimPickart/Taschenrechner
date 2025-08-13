window.onload = function(){
    let calculatorButton = document.getElementsByClassName("calculator_button");
    let calculatorButtonNumber = document.getElementsByClassName("calculator_button_number");
    let MathTask = document.getElementById("MathTask");
    let empty = true; 

    let InhaltTaskText ;
    let pTask;
    let Task;
    let FinishTask;
    let pressed = false;
    const select = document.getElementById("modes");
    let mode = select.value;

    for (let i = 0; i < calculatorButtonNumber.length; i++) {
        calculatorButtonNumber[i].addEventListener("click", function() {
            let digit = calculatorButtonNumber[i].innerText;
            if (empty === true) {
                InhaltTaskText = digit;
                FinishTask = digit;
                pTask = document.createElement("p");
                pTask.className = "Task";
                pTask.innerHTML = InhaltTaskText;
                MathTask.appendChild(pTask);
                empty = false;
                if (select.value === "DarkMode") {
                    pTask.style.color = "white";
                }else if (select.value === "LightMode") {
                    pTask.style.color = "black";
                }
                return
                
            }else if(empty === false) {
                if (select.value === "DarkMode") {
                    pTask.style.color = "white";
                }else if (select.value === "LightMode") {
                    pTask.style.color = "black";
                }
                InhaltTaskText += digit;
                FinishTask += digit;
                pTask.innerHTML = InhaltTaskText;        
                MathTask.appendChild(pTask);
                return
            }
            pressed = false;
        });    
    }

    calculatorButton[5].addEventListener("click", function() {
            if (empty === true) {
                InhaltTaskText = "0";
                FinishTask = "0";
                pTask = document.createElement("p");
                pTask.className = "Task";
                Task = String(0);
                pTask.innerHTML = InhaltTaskText;
                MathTask.appendChild(pTask);
                empty = false;
                if (select.value === "DarkMode") {
                    pTask.style.color = "white";
                }else if (select.value === "LightMode") {
                    pTask.style.color = "black";
                } 
                return
            }else if(empty === false) {
                InhaltTaskText += "0";
                FinishTask += "0";
                pTask.innerHTML = InhaltTaskText;        
                MathTask.appendChild(pTask);
                if (select.value === "DarkMode") {
                    pTask.style.color = "white";
                }
                return
            }
    });   

    function addOperator(op) {
        if (pressed === false) { // anklicken von 2 Operatoren hintereinander funktioniert noch
            if (empty === true) {
                return
                
            }else if(empty === false) {
                InhaltTaskText += op; 
                pTask.innerHTML = InhaltTaskText;        
                MathTask.appendChild(pTask);
                canBeFinish = false;
                if (select.value === "DarkMode") {
                    pTask.style.color = "white";
                }else if (select.value === "LightMode") {
                    pTask.style.color = "black";
                }
                if (op === "×") {
                    op = "*";
                    FinishTask += op;
                }else if(op === ":"){
                    op = "/"
                    FinishTask += op;
                }else if (op === "+" || op === "-"){
                    FinishTask += op;
                }
                pressed = true;
                
                return
            }
        } else if (pressed === true) {
            pressed = false;
            if (select.value === "DarkMode") {
                    pTask.style.color = "white";
                }else if (select.value === "LightMode") {
                    pTask.style.color = "black";
                }
            return
        }}

    calculatorButton[1].addEventListener("click", function (){addOperator("×")})
    calculatorButton[2].addEventListener("click", function (){addOperator(":")})
    calculatorButton[3].addEventListener("click", function (){addOperator("+")})
    calculatorButton[4].addEventListener("click", function (){addOperator("-")})

    calculatorButton[0].addEventListener("click", function() {
        empty = true; 
        MathTask.removeChild(pTask);
    });

    calculatorButton[6].addEventListener("click", function (){
        try { //Fehlerbehandlung
            MathTask.removeChild(pTask);
            pTask = document.createElement("p");
            pTask.className = "Task";
            TaskCalculate = eval(FinishTask);
            pTask.innerHTML = eval(FinishTask);
            MathTask.appendChild(pTask);
            InhaltTaskText = "";
            FinishTask = "";
            if (select.value === "DarkMode") {
                pTask.style.color = "white";
            }else if (select.value === "LightMode") {
                pTask.style.color = "black";
            }
        } catch (e) {
            alert("Es muss eine vollständige Aufgabe drinnen stehen.")
        }
        /*finally{
            passiert bei beiden
        }*/
    });

    
    

    
    let body = document.getElementsByTagName("body")[0];
    let textCalculatorButton = document.getElementsByClassName("text_calculator_button");
    let modeColor = document.getElementById("modes");

    select.addEventListener("change", function (){
        let mode = select.value;
        if (mode === "DarkMode") {
            body.style.backgroundColor = "#292929ff"

            for (let index = 0; index < calculatorButtonNumber.length; index++) {
                calculatorButtonNumber[index].style.backgroundColor = "#838383ff";
            }

            for (let index = 0; index < calculatorButton.length; index++) {
                calculatorButton[index].style.backgroundColor = "#6b6b6bff";
            }

            for (let i = 0; i < textCalculatorButton.length; i++) {
                textCalculatorButton[i].style.color = "white";
            }

            MathTask.style.backgroundColor = "#8a8a8aff";

            modeColor.style.backgroundColor = "#535353ff";
            modeColor.style.color = "white";
            modeColor.style.borderColor = "rgba(201, 201, 201, 0.23)";
            pTask.style.color = "white";

        }else if(mode === "LightMode"){
            body.style.backgroundColor = "#ffffffff"

            for (let index = 0; index < calculatorButtonNumber.length; index++) {
                calculatorButtonNumber[index].style.backgroundColor = "rgb(223, 223, 223)";
            }

            for (let index = 0; index < calculatorButton.length; index++) {
                calculatorButton[index].style.backgroundColor = " rgb(185, 185, 185)";
            }

            for (let i = 0; i < textCalculatorButton.length; i++) {
                textCalculatorButton[i].style.color = "black";
            }

            MathTask.style.backgroundColor = "rgb(179, 177, 177)";
            modeColor.style.backgroundColor = " rgb(236, 236, 236)";
            modeColor.style.color = "black";
            modeColor.style.borderColor = "rgba(92, 92, 92, 0.233)";

            pTask.style.color = "black";

        }
    });

}
