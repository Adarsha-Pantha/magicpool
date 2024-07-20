let count=0;
let countOl=document.getElementById("count-ol");
let wordOl=document.getElementById("word-ol");

const words=["hello","see you again","bye","try again","hero tme","k xa babu","la hai la"]


function random(min,max){
   
    let randNum=Math.floor(Math.random()*(max-min+1)+min);
    let randWord=words[Math.floor(Math.random()*words.length)];
    
    countOl.innerText=randNum;
    wordOl.innerText=randWord;
    count=randNum;
    console.log(`Number:${count},word:${randWord}`);

}
random(1,10);