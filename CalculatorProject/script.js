// defining constant nodes and node lists

const display = document.querySelector(".display");

const clear = document.querySelector("#clear");

const dot = document.querySelector("#dot");

const equal = document.querySelector("#equal");

const operators = document.querySelectorAll(".row-4 button");

const number_keys = document.querySelectorAll(".keys .number");

// looping through operators

for (const operator of operators)
{
    operator.addEventListener("click",function(){
        if (display.innerHTML == 0 || display.innerHTML == "Infinity" || display.innerHTML == "Error")
        {
            display.innerHTML = "0" + this.innerHTML
        }
        else
        {
            display.innerHTML += this.innerHTML
        }
    });
}

// displaying number passing function
for (const number of number_keys)
{
    number.addEventListener("click",putonScreen);
}

// displaying number function
function putonScreen()
{
    if (display.innerHTML == 0 || display.innerHTML == "Infinity" || display.innerHTML == "Error")
    {
        display.innerHTML = this.innerHTML;
    }
    else
    {
        display.innerHTML += this.innerHTML
    }
}

// adding functionalities to clear, dot
clear.addEventListener("click",function(){
    display.innerHTML = 0;
})

dot.addEventListener("click",function(){
    display.innerHTML += this.innerHTML
})

/*evaluating the screen and
printing the result on the screen*/ 

equal.addEventListener("click",function(){
    try
    {
        if 
        (display.innerHTML.search("÷")){
            display.innerHTML = display.innerHTML.replace("÷","/");
            result = eval(display.innerHTML);
            display.innerHTML = result;    
        }
        else
        {
            result = eval(display.innerHTML);
            display.innerHTML = result;    
        }    
    }
    catch 
    {
        display.innerHTML = "Error"
    }
})


























