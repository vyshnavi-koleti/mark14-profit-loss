const initialPrice = document.querySelector("#initial-price");
const numOfStocks = document.querySelector("#stocks");
const currentPrice = document.querySelector("#current-price");
const btnClick = document.querySelector("#click");
const output = document.querySelector("#output");


btnClick.addEventListener('click', clickHandler);

function clickHandler() {

    if (initialPrice.value && numOfStocks.value && currentPrice.value) {

        var sellingPrice = Number(currentPrice.value);
        var costPrice = Number(initialPrice.value);
        var quantity = Number(numOfStocks.value);

        if (isPositive(sellingPrice, costPrice, quantity)) {

            if (sellingPrice > costPrice) {
                result = calculate(sellingPrice, costPrice);
                output.innerText = "YAYY! Your profit is " + result[0] + " and profit percentage is " + result[1] + "%";

            } else if (costPrice > sellingPrice) {
                result = calculate(costPrice, sellingPrice);
                output.innerText = "Whoops! Your loss is " + result[0] + " and loss percentage is " + result[1] + "%";

            }
        } else {
        
            output.innerText = "Please enter positive values";
        }

    } else {
        output.innerText = "Please enter all the values";
    }

}

function calculate(priceA, priceB) {
    var profitOrLoss = priceA - priceB;
    var profitOrLossStocks = profitOrLoss * numOfStocks.value;
    percentage = (profitOrLoss / initialPrice.value) * 100;

    if(profitOrLossStocks === 0){
        output.innerText = "Quantity can't be 0"
    }else{
        return [profitOrLossStocks, percentage.toFixed(2)];

    }

    

}

function isPositive(numA, numB, numC) {

    if (numA < 0 || numB < 0 || numC < 0) {
        return false;
    } else {
        return true;
    }
}