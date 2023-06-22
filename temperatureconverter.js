var x = document.getElementById("ctof");
var y = document.getElementById("ftoc");
var z = document.getElementById("footer");
x.style.display = "none"
y.style.display = "none"
z.style.display = "none"

function ctofconvert(valNum) {
    var fahrenheitdisplay = "  "
    valNum = parseFloat(valNum)
    let fahrenheit = (valNum*1.8)+32
    document.getElementById("fahrenheitdisplay").innerHTML = fahrenheit + "\u00B0F";
    document.getElementById("ckf").innerHTML = "(" + valNum + "\u00B0C x 9/5) + 32 = " + fahrenheit + "\u00B0F" ;
}
function ftocconvert(valNum) {
    var fahrenheitdisplay = "  "
    valNum = parseFloat(valNum)
    let celsius = (valNum-32)/1.8
    document.getElementById("celsiusdisplay").innerHTML = celsius + "\u00B0C";
    document.getElementById("ckc").innerHTML = "(" + valNum + "\u00B0F - 32) / 9/5 = " + celsius + "\u00B0C";
}
function celsiusclear(){
    document.getElementById('inputcelsius').value = ''
    document.getElementById('fahrenheitdisplay').innerHTML = ''
    document.getElementById("ckf").innerHTML = ''
}
function fahrenheitclear(){
    document.getElementById('inputfahrenheit').value = ''
    document.getElementById('celsiusdisplay').innerHTML = ''
    document.getElementById("ckc").innerHTML = ''
}
function showcelsius(){
    var x = document.getElementById("ctof");
    var y = document.getElementById("ftoc");
    var z = document.getElementById("footer");
    x.style.display = "block"
    y.style.display = "none"
    z.style.display = "block"
}
function showfahrenheit(){
    var x = document.getElementById("ctof");
    var y = document.getElementById("ftoc");
    y.style.display = "block"
    x.style.display = "none"
    z.style.display = "block"
}