window.onload = function () {
    Carouselfigure();
};
function Carouselfigure() {
    var next = document.getElementsByClassName("right")[0];
    var prev = document.getElementsByClassName("left")[0];
    var innerbox = document.getElementsByClassName("innerbox")[0];
    var img = document
        .getElementsByClassName("innerbox")[0]
        .getElementsByTagName("img");
    var index = 0;
    function move() {//设置该函数为移动函数
        innerbox.style.left = -img[0].offsetWidth * index + 'px';
        //offsetWidth用来获取图片的宽度，由于这几张图片的宽度相同，取任意一张的宽度都可，故选用数组中的0.负号是因为改变的是left的值，为了按图片顺序从左到右，才使用负号（可自行更换）。
    }
    next.onclick = function () {
        if (index == 3) {
            index = 0;
        }
        else { index++; }
        move();//运行移动函数来实现效果
    }
    prev.onclick = function () {
        if (index == 0) {
            index = 3;
        }
        else { index--; }
        move();//运行移动函数来实现效果
    }
}