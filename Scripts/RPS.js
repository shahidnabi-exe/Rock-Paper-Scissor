
let score=JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    loss:0,
    tie:0
};   
   
// if(score===null){
//     score={
//         wins: 0,
//         loss=0,
//         tie=
//     };

// } 

UpdateScore();

let isautoplay = true;
let intervalId;
 

function autoplay(){

    if (isautoplay){
        intervalId = setInterval(function() {        
            const playermove = Computermove();
            PlayGame(playermove);
        }, 1000);
        isautoplay = false;

    }else{
    clearInterval(intervalId);
    isautoplay = true;  

    }
   
}


function PlayGame(playermove){
    const Compmove =   Computermove();
    let result='';

    if ( playermove==='scissor'){
        if (Compmove==='Rock'){
        result= 'You Lose';
        }else if( Compmove==='Paper'){
            result='You Won';
        }else if (Compmove==='scissor'){
            result='TIE';
        }
} else if (playermove==='paper'){
    
        if (Compmove==='Rock'){
        result= 'You Won';
        }else if( Compmove==='Paper'){
            result='TIE';
        }else if (Compmove==='scissor'){
            result='You Lose';
        }
} else if(playermove==='rock'){
        if (Compmove==='Rock'){
        result= 'TIE';
        }else if( Compmove==='Paper'){
            result='You Lose';
        }else if (Compmove==='scissor'){
            result='You Won';
        }
    }

 if (result ==='You Won'){
            score.wins+=1;
        }else if  (result==='You Lose'){
            score.loss+=1;
        }else if ( result==='TIE'){
            score.tie+=1;
            }
localStorage.setItem('score', JSON.stringify(score));      

document.querySelector('.js-result')
    .innerHTML = result;

document.querySelector('.js-moves')
    .innerHTML= `You
    <img src="images/${playermove}-emoji.png"   class="move-icon">
    <img src="images/${Compmove}-emoji.png"  class="move-icon">
    Computer `;
    UpdateScore();

        }
        

function UpdateScore(){
    document.querySelector('.js-score')
    .innerHTML=`Wins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.tie}`;
}

function Computermove(){
    const rand= Math.random();
    let Compmove='';

    if ( rand >=0 &&  rand <1/3){
        Compmove='Rock';
    }else if( rand >1/3 && rand <2/3){
        Compmove='Paper';
    }else if (rand >2/3 && rand <1){
        Compmove='scissor';
    }
    return Compmove;

}