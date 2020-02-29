var scores, activePlayer, totalScore1 ,totalScore2, gamePlaying1, gamePlaying2, y1, y2;

scores = [20,30];
totalScore1 = 0;
totalScore2 = 0;

gamePlaying1 = true;
gamePlaying2 = false;
y1 = 481;
y2 = 468;
var line1 = true;
var line2 = false;
var line11 = true;
var line22 = false;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';

document.querySelector('.player1').setAttribute("cx","20");
document.querySelector('.player1').setAttribute("cy","481");

document.querySelector('.player2').setAttribute("cx","30");
document.querySelector('.player2').setAttribute("cy","468");

document.querySelector('.btn-roll').addEventListener('click',function(){    
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    var player1 = document.querySelector('.player1');
    var player2 = document.querySelector('.player2');
    
    if(gamePlaying1){
        var oldScore1 = scores[0];
        var oldY1 = y1;
        for(var i=1; i <= dice; i++){
                ////scores[0] = scores[0] + 50;
                if(line1){
                    scores[0] = scores[0] + 50;
                    if (scores[0] > 470 ){
                        scores[0] = scores[0] - 50;
                        y1 = y1 - 50;
                        player1.setAttribute("cx" , scores[0]);
                        player1.setAttribute("cy" , y1);
                        line1 = false; 
                        line2 = true;
                    }if(scores[0] === 20 && y1 === 31 && i!== dice){
                        scores[0] = oldScore1;
                        y1 = oldY1;
                        player1.setAttribute("cx", oldScore1);
                        player1.setAttribute("cy", y1);     
                        break;
                    }else{
                        player1.setAttribute("cx" , scores[0]);
                        player1.setAttribute("cy" , y1);

                    }    
                }
                else if(line2){
                    scores[0] = scores[0] - 50;
                        if (scores[0] < 20 && y1 > 31){
                            scores[0] = scores[0] + 50;
                            y1 = y1 - 50;
                            player1.setAttribute("cx" , scores[0]);
                            player1.setAttribute("cy" , y1);
                            line2 = false; 
                            line1 = true;  
                        }if(scores[0] === 20 && y1 === 31 && i!== dice){
                            scores[0] = oldScore1;
                            y1 = oldY1;                        
                            player1.setAttribute("cx", oldScore1);
                            player1.setAttribute("cy", y1);     
                           break;
                        }else{
                            player1.setAttribute("cx" , scores[0]);
                            player1.setAttribute("cy" , y1); 
                        }    
                    }                        
            }
            if(scores[0] === 370 && y1 === 481 || scores[0] === 70 && y1 === 381 || scores[0] === 320 && y1 === 231 || scores[0] === 220 && y1 === 181 || scores[0] === 420 && y1 === 131  ){
                y1 = ladder(scores[0], y1);
            }
            if(scores[0] === 120 && y1 === 381 || scores[0] === 220 && y1 === 281 || scores[0] === 70 && y1 === 31 || scores[0] === 320 && y1 === 181 || scores[0] === 470 && y1 === 81  ){
                y1 = snake(scores[0], y1);
            }
            ///console.log(scores[0], y1);
            totalScore1 += dice;
            document.querySelector('#score-0').textContent = dice;
            ///if()
            gamePlaying1 = false;
            gamePlaying2 = true;
            if(scores[0]=== 20 && y1 === 31){
                document.querySelector('#score-0').textContent = 'Winner!';
                ///document.querySelector('.player-0-panel').classList.add('winner');
                blockMode();    
              
            }
    }else if(gamePlaying2){
        var oldScore2 = scores[1];
        var oldY2 = y2;
        for(var i=1; i <= dice; i++){
            ////scores[0] = scores[0] + 50;
            if(line11){
                scores[1] = scores[1] + 50;
                if (scores[1] > 480 ){
                    scores[1] = scores[1] - 50;
                    y2 = y2 - 50;
                    player2.setAttribute("cx" , scores[1]);
                    player2.setAttribute("cy" , y2);
                    line11 = false; 
                    line22 = true;
                }if(scores[1] === 30 && y2 === 18 && i!== dice){
                    scores[1] = oldScore2;
                    y2 = oldY2;
                    player2.setAttribute("cx", oldScore2);
                    player2.setAttribute("cy", y2);     
                   break;
                }else{
                    player2.setAttribute("cx" , scores[1]);
                    player2.setAttribute("cy" , y2);

                }
            }
            else if(line22){
                scores[1] = scores[1] - 50;
                    if (scores[1] < 30 && y2 > 18){
                        scores[1] = scores[1] + 50;
                        y2 = y2 - 50;
                        player2.setAttribute("cx" , scores[1]);
                        player2.setAttribute("cy" , y2);
                        line22= false; 
                        line11 = true;    
                   }if(scores[1] === 30 && y2 === 18 && i!== dice){
                        scores[1] = oldScore2;              
                        y2 = oldY2;                              
                        player2.setAttribute("cx", oldScore2);
                        player2.setAttribute("cy", y2);     
                        break;
                    }else{
                        player2.setAttribute("cx" , scores[1]);
                        player2.setAttribute("cy" , y2); 
                    }
                    
                }    

        }
        
        if(scores[1] === 380 && y2 === 468 || scores[1] === 80 && y2 === 368 || scores[1] === 330 && y2 === 218 || scores[1] === 230 && y2 === 168 || scores[1] === 430 && y2 === 118  ){
            y2 = ladder(scores[1], y2);
        }
        if(scores[1] === 130 && y2 === 368 || scores[1] === 230 && y2 === 268 || scores[1] === 80 && y2 === 18 || scores[1] === 330 && y2 === 168 || scores[1] === 480 && y2 === 68  ){
            y2 = snake(scores[1], y2);
        }
        totalScore2 += dice;    
        document.querySelector('#score-1').textContent = dice;
        gamePlaying2 = false;
        gamePlaying1 = true;
        if(scores[1]=== 30 && y2 === 18){
            document.querySelector('#score-1').textContent = 'Winner!';
            //document.querySelector('.player-1-panel').classList.add('winner');
            blockMode();    
        }     
    }


});

function ladder(x , y){
    switch(x && y){
        ///player 1
        case 370 && 481:
            document.querySelector('.player1').setAttribute("cx" , "420");
            document.querySelector('.player1').setAttribute("cy" , "381");
            line1 = true;
            line2 = false;
            scores[0] = 420;
            return 381;
            break;
        case 70 && 381:
            document.querySelector('.player1').setAttribute("cx" , "20");
            document.querySelector('.player1').setAttribute("cy" , "181");
            line1 = true;
            line2 = false;
            scores[0] = 20;
            return 181;
            break;
        case 320 && 231:
            document.querySelector('.player1').setAttribute("cx" , "370");
            document.querySelector('.player1').setAttribute("cy" , "181");
            line1 = true;
            line2 = false;
            scores[0] = 370;
            return 181;
            break;
        case 220 && 181:
            document.querySelector('.player1').setAttribute("cx" , "170");
            document.querySelector('.player1').setAttribute("cy" , "31");
            line1 = false;
            line2 = true;
            scores[0] = 170;
            return 31;
            break;
        case 420 && 131:
            document.querySelector('.player1').setAttribute("cx" , "370");
            document.querySelector('.player1').setAttribute("cy" , "31");
            line1 = false;
            line2 = true;
            scores[0] = 370;
            return 31;
            break;
        ////player 2
        case 380 && 468:
            document.querySelector('.player2').setAttribute("cx" , "430");
            document.querySelector('.player2').setAttribute("cy" , "368");
            line11 = true;
            line22 = false;
            scores[1] = 430;
            return 368;
            break;
        case 80 && 368:
            document.querySelector('.player2').setAttribute("cx" , "30");
            document.querySelector('.player2').setAttribute("cy" , "168");
            line11 = true;
            line22 = false;
            scores[1] = 30;
            return 168;
            break;
        case 330 && 218:
            document.querySelector('.player2').setAttribute("cx" , "380");
            document.querySelector('.player2').setAttribute("cy" , "168");
            line11 = true;
            line22 = false;
            scores[1] = 380;
            return 168;
            break;
        case 230 && 168:
            document.querySelector('.player2').setAttribute("cx" , "180");
            document.querySelector('.player2').setAttribute("cy" , "18");
            line11 = false;
            line22 = true;
            scores[1] = 180;
            return 18;
            break;
        case 430 && 118:
            document.querySelector('.player2').setAttribute("cx" , "380");
            document.querySelector('.player2').setAttribute("cy" , "18");
            line11 = false;
            line22 = true;
            scores[1] = 380;
            return 18;
            break;
    }
};

function snake(x , y){
    switch(x && y){
        //player 1
        case 120 && 381:
            document.querySelector('.player1').setAttribute("cx" , "170");
            document.querySelector('.player1').setAttribute("cy" , "431");
            line1 = false;
            line2 = true;
            scores[0] = 170;
            return 431;
            break;
        case 220 && 281:
            document.querySelector('.player1').setAttribute("cx" , "220");
            document.querySelector('.player1').setAttribute("cy" , "481");
            line1 = true;
            line2 = false;
            scores[0] = 220;
            return 481;
            break;
        case 70 && 31:
            document.querySelector('.player1').setAttribute("cx" , "170");
            document.querySelector('.player1').setAttribute("cy" , "381");
            line1 = true;
            line2 = false;
            scores[0] = 170;
            return 381;
            break;
        case 320 && 181:
            document.querySelector('.player1').setAttribute("cx" , "370");
            document.querySelector('.player1').setAttribute("cy" , "381");
            line1 = true;
            line2 = false;
            scores[0] = 370;
            return 381;
            break;
        case 470 && 81:
            document.querySelector('.player1').setAttribute("cx" , "470");
            document.querySelector('.player1').setAttribute("cy" , "281");
            line1 = true;
            line2 = false;
            scores[0] = 470;
            return 281;
            break;
        //player 2
        case 130 && 368:
            document.querySelector('.player2').setAttribute("cx" , "180");
            document.querySelector('.player2').setAttribute("cy" , "418");
            line11 = false;
            line22 = true;
            scores[1] = 180;
            return 418;
            break;
        case 230 && 268:
            document.querySelector('.player2').setAttribute("cx" , "230");
            document.querySelector('.player2').setAttribute("cy" , "468");
            line11 = true;
            line22 = false;
            scores[1] = 230;
            return 468;
            break;
        case 80 && 18:
            document.querySelector('.player2').setAttribute("cx" , "180");
            document.querySelector('.player2').setAttribute("cy" , "368");
            line11 = true;
            line22 = false;
            scores[1] = 180;
            return 368;
            break;
        case 330 && 168:
            document.querySelector('.player2').setAttribute("cx" , "380");
            document.querySelector('.player2').setAttribute("cy" , "368");
            line11 = true;
            line22 = false;
            scores[1] = 380;
            return 368;
            break;
        case 480 && 68:
            document.querySelector('.player2').setAttribute("cx" , "480");
            document.querySelector('.player2').setAttribute("cy" , "268");
            line11 = true;
            line22 = false;
            scores[1] = 480;
            return 268;
            break;
    }

};

function blockMode(){
    document.querySelector('.dice').style.display = 'none';
    gamePlaying1 = false;
    gamePlaying2 = false; 
};