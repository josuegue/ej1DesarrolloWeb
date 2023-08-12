var add = document.querySelector("#add");
var subtract = document.querySelector("#substract");

add.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = parseInt(output.innerText) + 1;
    output.innerText = result;

    if (result > 10){
        output.innerText = result = 0;
    }
    
});


subtract.addEventListener("click", function (){
    let output = document.querySelector("#output");
    let result = parseInt(output.innnerText) - 1;
    console.log(result);
    console.log(output);

    if (result < 0){
        output.innerText = result = 10;
    }
});
