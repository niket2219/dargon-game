var score =0;
gameau=new Audio('music.mp3');
overau=new Audio('gameover.mp3');

setTimeout(() => {
    gameau.play();
}, 1000);


document.onkeydown = function(e){
    console.log(e.keyCode)
    if(e.keyCode==38)
    {
        dyno=document.querySelector('.dyno');
        dyno.classList.add('jumpdyno');
        setTimeout(() =>{
            dyno.classList.remove('jumpdyno')
        },700);
    }
    if(e.keyCode==39)
    {
        dyno=document.querySelector('.dyno');
        dx=parseInt(window.getComputedStyle(dyno,null).getPropertyValue('left'));
        dyno.style.left=dx+112+"px"
    }
    if(e.keyCode==37)
    {
        dyno=document.querySelector('.dyno');
        dx=parseInt(window.getComputedStyle(dyno,null).getPropertyValue('left'));
        dyno.style.left=dx-112+"px"
    }
}
setInterval(() =>{
    dyno=document.querySelector('.dyno');
    gameover=document.querySelector('.gameover');
    obstacle=document.querySelector('.obstacle');

    dx=parseInt(window.getComputedStyle(dyno,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dyno,null).getPropertyValue('bottom'));


    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('bottom'));

dfx=Math.abs(dx-ox);
dfy=Math.abs(dy-oy);
//console.log(dfx ,dfy)

if(dfx<82 && dfy<40){
    gameover.style.visibility='visible';
    obstacle.classList.remove('jumpdyno');
    alert("game over");

    score=0;
}
else{
    setTimeout(() => {

        score +=1;
        console.log(score);
        document.getElementById("score").innerHTML = "your score is : " +" "+" "  + score;
        
        
    },2000)}

},100)

