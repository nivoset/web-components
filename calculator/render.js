//import html from "../node_modules/lit-html/lib/html.js"

export default (theme, layout, value) => `
        <div class="calculator ${theme} ${layout}">
            <calc-display>${value}</calc-display>
            <div id="clear" class="btn">C</div>
            <div id="sign" class="btn">+/-</div>
            <div id="percent" class="btn">%</div>
            <div id="divide" class="btn operator">÷</div>
            <div id="button-7" class="btn">7</div>
            <div id="button-8" class="btn">8</div>
            <div id="button-9" class="btn">9</div>
            <div id="multiply" class="btn operator">x</div>
            <div id="button-4" class="btn">4</div>
            <div id="button-5" class="btn">5</div>
            <div id="button-6" class="btn">6</div>
            <div id="minus" class="btn operator">-</div>
            <div id="button-1" class="btn">1</div>
            <div id="button-2" class="btn">2</div>
            <div id="button-3" class="btn">3</div>
            <div id="add" class="btn operator">+</div>
            <div id="button-0" class="btn zero">0</div>
            <div id="dot" class="btn">.</div>
            <div id="equal" class="btn operator">=</div>
        </div>
        <style scoped>
            .calculator div::selection {
                color: none;
                background: none;
            }
            .light {
                --display-background-color: #333;
                --display-text-color: white;
                
                --button-background-color: #F2F2F2;
                --button-text-color: black;
                
                --operator-background-color: orange;
                --operator-text-color: white;
            }
            .dark {
                --display-background-color: #333;
                --display-text-color: white;
                
                --button-background-color: #F2F2F2;
                --button-text-color: black;
                
                --operator-background-color: orange;
                --operator-text-color: white;
            }
            .calculator {
                margin: 0 auto;
                width: 400px;
                font-size: 40px;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-auto-rows: minmax(50px, auto);
                background-color: black;
            }
            calc-display {
                grid-column: 1/5;
            }
            .zero {
                grid-column: 1 / 3;
            }
            .btn {
                background-color:var(--button-background-color);
                color: var(--button-text-color);
                cursor: pointer;
                text-align: center;
                border: 1px solid #999;
            }
            .operator {
                background-color: var(--operator-background-color);
                color: var(--operator-text-color);
            }
        </style>`;