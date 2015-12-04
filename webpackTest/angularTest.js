
document.getElementById("pContent").innerHTML = "Angular Script Test";

//var test = doSmth("Niklas");
document.write("test");




var n, arg, name;
alert("typeof this = " + typeof this);
for (name in this) {
    document.write("this[" + name + "]=" + this[name] + "<br>");
}
for (n = 0; n < arguments.length; ++n) {
    arg = arguments[n];
    document.write("typeof arguments[" + n + "] = " + typeof arg + "<br>");
    for (name in arg) {
        document.write("arguments[" + n + "][" + name + "]=" + arg[name] + "<br>");
    }
}