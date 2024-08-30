const express = require('express');
const cors = require ('cors');
const PORT = 5500;
const app = express()

app.use(cors({
    origin : true,
}))

app.use(express.json());

app.listen(PORT, ()=>{
    console.log("Server running on: "+ PORT);
})

app.get('/', (req, res)=>{
    let html = `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Input-Based Calculator</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                height: 100vh;
                                margin: 0;
                                background-color: #f0f0f0;
                            }

                            .calculator {
                                background-color: #ffffff;
                                padding: 20px;
                                border-radius: 10px;
                                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                                text-align: center;
                            }

                            input, select, button {
                                margin: 10px 0;
                                padding: 10px;
                                font-size: 18px;
                                border-radius: 5px;
                                border: 1px solid #ccc;
                                width: 100%;
                                box-sizing: border-box;
                            }

                            button {
                                background-color: #4CAF50;
                                color: white;
                                cursor: pointer;
                                transition: background-color 0.3s ease;
                            }

                            button:hover {
                                background-color: #45a049;
                            }

                            .result {
                                margin-top: 20px;
                                font-size: 24px;
                                font-weight: bold;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="calculator">
                            <h2>Simple Calculator</h2>
                            <input type="number" id="firstNumber" placeholder="Enter first number">
                            <input type="number" id="secondNumber" placeholder="Enter second number">
                            <select id="operation">
                                <option value="add">Add (+)</option>
                                <option value="subtract">Subtract (-)</option>
                                <option value="multiply">Multiply (*)</option>
                                <option value="divide">Divide (/)</option>
                            </select>
                            <button onclick="calculate()">Calculate</button> element_count = {}
                            duplicates = []

                        elem in nums:
                            if elem in element_count:
                                element_count[elem] += 1
                            else:
                                element_count[elem] = 1
                        
                        for elem, count in element_count.items():
                            if count > 1:
                                duplicates.append(elem)
                                return True

                            else
                                return False
                            <div class="result" id="result"></div>
                        </div>

                        <script>
                            function calculate() {
                                const firstNumber = parseFloat(document.getElementById('firstNumber').value);
                                const secondNumber = parseFloat(document.getElementById('secondNumber').value);
                                const operation = document.getElementById('operation').value;
                                let result;

                                if (isNaN(firstNumber) || isNaN(secondNumber)) {
                                    result = "Please enter valid numbers";
                                } else {
                                    if (operation === 'add') {
                                        result = firstNumber + secondNumber;
                                    } else if (operation === 'subtract') {
                                        result = firstNumber - secondNumber;
                                    } else if (operation === 'multiply') {
                                        result = firstNumber * secondNumber;
                                    } else if (operation === 'divide') {
                                        result = secondNumber !== 0 ? firstNumber / secondNumber : "Cannot divide by zero";
                                    } else {
                                        result = "Invalid operation selected";
                                    }
                                }
                            }
                        </script>
                    </body>
                    </html>
        `
    res.send(html);
})