const input = document.getElementById("userInput");
let expression = '';

function press(num)
{
    expression += num;
    userInput.value = expression;
}

function erase()
{
    expression = '';
    userInput.value = expression;
}

function equal()
{
    try
    {
        const result = eval(expression);
        userInput.value = result;
        expression = result.toString();
    }
    catch
    {
        expression = "";
        userInput.value = "Error";
    }   
}