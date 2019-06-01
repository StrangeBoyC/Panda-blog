
window.onload = function () {


    let home = document.getElementById("home");

    home.onmouseenter = function () {
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
    let width = turnsLi[0].offsetWidth;
    let flag = true;

/*    for(let i=0;i<radioLi.length;i++){
        radioLi[i].onclick = function () {
            for(let j=0;j<radioLi.length;j++){
                // turnsLi[j].style.zIndex="1";
                animate(turnsLi[j],{opacity:0},500);
                radioLi[j].style.background= "#fff";
            }
            // turnsLi[i].style.zIndex="999";
            animate(turnsLi[i],{opacity:1},500,);

            radio.style.zIndex="999";
            radioLi[i].style.background= "#12b7de";
            leftBtn.style.zIndex="999";
            rightBtn.style.zIndex="999";
            index=i;
        }
    }*/

    //透明过渡
    /*let index=0;
    leftBtn.onclick=function(){
        console.log(index);
        index--;
        if(index<0){
            index=turnsLi.length-1;
        }
        for(let j=0;j<turnsLi.length;j++){
            // turnsLi[j].style.zIndex="1";
            animate(turnsLi[j],{opacity:0},500);
            radioLi[j].style.background= "#fff";
        }
        // turnsLi[index].style.zIndex="999";
        animate(turnsLi[index],{opacity:1},500,);
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
            // turnsLi[j].style.zIndex="1";
            animate(turnsLi[j],{opacity:0},500);
            radioLi[j].style.background= "#fff";
        }
        // turnsLi[index].style.zIndex="999";
        animate(turnsLi[index],{opacity:1},500,);
        radio.style.zIndex="999";
        radioLi[index].style.background= "#12b7de";
        leftBtn.style.zIndex="999";
        rightBtn.style.zIndex="999";
    }*/


    //左右过渡
    let index=0;
    let next=0;
    leftBtn.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        next--;
        if(next<0){
            next=turnsLi.length-1;
        }
        turnsLi[next].style.left=-width+"px";
        animate(turnsLi[index],{left:width},500,);
        radioLi[index].classList.remove("hot");
        animate(turnsLi[next],{left:0},500,function () {
            flag=true;
        });
        radioLi[next].classList.add("hot");
        index = next;
    }
    rightBtn.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        next++;
        if(next>=turnsLi.length){
            next=0;
        }
        turnsLi[next].style.left=width+"px";
        animate(turnsLi[index],{left:-width},500,);
        radioLi[index].classList.remove("hot");
        animate(turnsLi[next],{left:0},500,function () {
            flag=true;
        });
        radioLi[next].classList.add("hot");
        index = next;
    }

    for(let i=0;i<radioLi.length;i++){
        radioLi[i].onclick = function () {
            if (index === i){
                return;
            }
            if(!flag){
                return;
            }
            flag=false;
            next=i;
            if (next>index) {
                turnsLi[next].style.left=width+"px";
                animate(turnsLi[index],{left:-width},500,);
                radioLi[index].classList.remove("hot");
                animate(turnsLi[next],{left:0},500,function () {
                    flag=true;
                });
                radioLi[next].classList.add("hot");
                index = next;
            }
            else if(next<index){
                turnsLi[next].style.left=-width+"px";
                animate(turnsLi[index],{left:width},500,);
                radioLi[index].classList.remove("hot");
                animate(turnsLi[next],{left:0},500,function () {
                    flag=true;
                });
                radioLi[next].classList.add("hot");
                index = next;
            }
        }
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


    let viewHeight = innerHeight;
    let images = document.querySelectorAll(".lazy-onload");
    let positionArry = [];
    images.forEach(function (ele) {
        let parent = ele.offsetParent;
        positionArry.push(parent.offsetTop + ele.offsetTop)
    })

    window.onscroll = function () {
        let scrolltop = document.documentElement.scrollTop;
        for(let i=0;i<positionArry.length;i++){
            if (scrolltop + viewHeight > positionArry[i]+50){
                if (!images.src){
                    images[i].src = images[i].getAttribute("aa");
                }
            }
        }
    }

}