window.onload = function () {
    let home = document.getElementById("home");

    home.onmousemove = function () {
        home.style.color = "red";
    }
    home.onmouseleave = function () {
        home.style.color = "#ffffff"
    }
    let photoLeft = document.querySelector(".photo-left");
    let turns = document.getElementsByClassName("turns")[0];
    let turnsLi = turns.getElementsByTagName("li");
    let radio = document.getElementsByClassName("radio")[0];
    let radioLi = radio.getElementsByTagName("li");
    let leftBtn = document.getElementsByClassName("left-btn")[0];
    let rightBtn = document.getElementsByClassName("right-btn")[0];


    for(let i=0;i<radioLi.length;i++){
        radioLi[i].onclick = function () {
            for(let j=0;j<radioLi.length;j++){
                turnsLi[j].style.zIndex="1";
                radioLi[j].style.background= "#fff";
            }
            turnsLi[i].style.zIndex="999";
            radio.style.zIndex="999";
            radioLi[i].style.background= "#12b7de";
            leftBtn.style.zIndex="999";
            rightBtn.style.zIndex="999";
            index=i;
        }
/*        radioLi[i].onmouseenter=function () {
            for(let j=0;j<radioLi.length;j++){
                radioLi[j].style.background= "#fff";
            }
            radioLi[i].style.background= "#12b7de";
        }*/

    }
    let index=0;
    leftBtn.onclick=function(){
        console.log(index);
        index--;
        if(index<0){
            index=turnsLi.length-1;
        }
        for(let j=0;j<turnsLi.length;j++){
            turnsLi[j].style.zIndex="1";
            radioLi[j].style.background= "#fff";
        }
        turnsLi[index].style.zIndex="999";
        radio.style.zIndex="999";
        radioLi[index].style.background= "#12b7de";
        leftBtn.style.zIndex="999";
        rightBtn.style.zIndex="999";
    }
    rightBtn.onclick=function(){
        index++;
        if(index==turnsLi.length){
            index=0;
        }
        for(let j=0;j<turnsLi.length;j++){
            turnsLi[j].style.zIndex="1";
            radioLi[j].style.background= "#fff";
        }
        turnsLi[index].style.zIndex="999";
        radio.style.zIndex="999";
        radioLi[index].style.background= "#12b7de";
        leftBtn.style.zIndex="999";
        rightBtn.style.zIndex="999";
    }
    let t=setInterval(rightBtn.onclick,2000);
    photoLeft.onmouseenter=function(){
        clearInterval(t);
    };
    photoLeft.onmouseleave = function(){
        t=setInterval(rightBtn.onclick,2000);
    };


    let dailyLeftT = document.querySelectorAll(".daily-left-title > ul >li >a");

    dailyLeftT.forEach(function (ele) {
        ele.onclick=function () {
            dailyLeftT.forEach(function (ele) {
                ele.classList.remove("title-hot");
            });
            this.classList.add("title-hot");
        }
    })


    let dailyLeftL = document.querySelectorAll(".daily-left-list > li");
    dailyLeftL.forEach(function (ele) {
        ele.onmouseenter=function () {
            dailyLeftL.forEach(function (ele) {
                ele.classList.remove("hot")
            })
            this.classList.add("hot");
        }
    })


}