document.getElementById("buttonConvert").onclick = function() {

    let temp;
    
    if(document.getElementById("buttonCelsius").checked) {
        temp = document.getElementById("formUserInput").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("labelResult").innerHTML = "Your Number in Celsius is " + temp;

    } else if (document.getElementById("buttonFarenheit").checked) {
        temp = document.getElementById("formUserInput").value;
        temp = Number(temp);
        temp = toFarenheit(temp);
        document.getElementById("labelResult").innerHTML = "Your Number in Farenheit is " + temp;

    
    } else {
        document.getElementById("labelResult").innerHTML = "Select a Conversion";
    }

}

function toCelsius(temp) {
    return (temp - 32) * (5/9);
}

function toFarenheit(temp) {
    return temp * 9 / 5 + 32;
}

