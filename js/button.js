function myButton() {
    document.getElementById("btn").style.backgroundColor = "red";
    document.getElementById("btn").style.color = "white";
    document.getElementById("pTag").innerHTML = "This text has been changed!";
    document.getElementById("pTag").style.color = "pink";


    //如果换成class，querySelector可以trigger className, 引号内要加 “.”
    // document.querySelector(".btn").style.backgroundColor = "blue";
    // document.querySelector(".btn").style.color = "white";

}