
    let score = JSON.parse(localStorage.getItem('score')) || {
        wins:0,
        loss:0,
        tie:0
    };   

    UpdateScore();

    let isautoplay = true;
    let intervalId;
    

    function autoplay(){

        if (isautoplay){
            intervalId = setInterval(() => {        
                const playermove = Computermove();
                PlayGame(playermove);
            }, 1000);
            
            isautoplay = false;

        } else {
        clearInterval(intervalId);
        isautoplay = true;  

        }
        
    };

    document.querySelector('.js-rock-button')
        .addEventListener('click', () => {
            PlayGame('rock');
        });

    document.querySelector('.js-paper-button')
        .addEventListener('click', () => {
            PlayGame('paper');
        });

    document.querySelector('.js-scissor-button')
        .addEventListener('click', () => {
            PlayGame('scissor');
        });

    document.querySelector('.js-autoplay-button')
        .addEventListener('click', () => {
            autoplay();
        });

    document.querySelector('.js-reset-button')
        .addEventListener('click', () => {
            score.wins =0;
            score.loss =0;
            score.tie =0;
            localStorage.removeItem('score');
            UpdateScore();
        });
    

    document.body.addEventListener('keydown', (event) => {
        if (event.key === 'r') {
            PlayGame('rock');
        } else if (event.key === 'p'){
            PlayGame('paper');
        } else if (event.key === 's'){
            PlayGame('scissor');
        }else if (event.key === 'a'){
            autoplay();
        }
    });



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
            score.wins += 1;
        }else if  (result ==='You Lose'){
            score.loss += 1;
        }else if ( result ==='TIE'){
                score.tie += 1;
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
        const rand =  Math.floor(Math.random() * 3);
        let Compmove = '';

        if ( rand == 0 ){
            Compmove='Rock';
        }else if( rand == 1){
            Compmove='Paper';
        }else if (rand == 2){
            Compmove='scissor';
        }
        return Compmove;

    }