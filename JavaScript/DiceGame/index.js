function play(){
    let i1=document.getElementsByClassName('img1')[0];
    let i2=document.getElementsByClassName("img2")[0];
    let rand1=Math.floor(Math.random() * 6+1);
    let rand2=Math.floor(Math.random() * 6+1);
    let heading=document.getElementsByTagName('h1')[0];
    i1.src=`images/dice${rand1}.png`
    i2.src=`images/dice${rand2}.png`
    console.log(rand1 + "random 1" + rand2 + "random 2" );
    if(rand1 > rand2) {
     heading.innerHTML="First Player Wins";
    }
    else if(rand1 < rand2) {
        heading.innerHTML="Second Player Wins";
    }
    else{
        heading.innerHTML="Play again";
    }
    
}