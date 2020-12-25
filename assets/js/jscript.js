
    let secret = Math.floor(Math.random() * 100) + 1; 
    // console.log(secret);
    let attempt = 0;
    let tipText;        
    let numberGuess = 0; 
    let userChoices;
    let txtTips;

    
    // function tips
    function ttopen(varText){
        document.getElementById("ttt").textContent = varText;
        document.getElementById("ttt").style.visibility = 'visible'; 
        
    }

    function ttclose(){
         document.getElementById("ttt").style.visibility = 'hidden';
    }

    function openDialogWinner(){
        dialogWinner.showModal();
    }
    
    function openDialogLooser(){
        document.getElementById('outMod').innerHTML = secret;
        dialogLooser.showModal();

    }
    
    function closeDialogWinner(){
        dialogWinner.close();
        window.location.reload();
    }

    function closeDialogLooser(){
        dialogLooser.close();
        window.location.reload();

    }

    function calc(){           
           numberGuess = +document.getElementById("numberInput").value;    

           switch (numberGuess) {
                case secret - 3:
                case secret + 3:
                    txtTips = 'Тепло!';
                    attempt++;
                    break;
                case secret - 2:
                case secret + 2:
                    txtTips = 'Еще теплее!';
                    attempt++;
                    break;
                case secret - 1:
                case secret + 1:
                    txtTips = 'Горячо!';
                    attempt++;
                    break;
                case secret:
                    openDialogWinner();
                    break;
                default:
                    if(numberGuess > secret + 3){
                        txtTips = 'перелет'
                        attempt++;
                    }else if(numberGuess < secret - 3) {
                        txtTips = 'недолет';
                        attempt++;
                    }
           } // end switch

           ttopen(txtTips);
           setInterval(ttclose, 4000); //close tips
           
           if(attempt > 1){
            userChoices = userChoices + (attempt + ' попытка => ' + numberGuess +  ' ' + txtTips + '<br>');
           } else{
            userChoices = attempt + ' попытка => ' + numberGuess + ' ' + txtTips + '<br>';
           }
           document.getElementById('attemptsShowing').innerHTML = userChoices;
           //console.log(userChoices);
           
            document.getElementById("btn").innerText = attempt + "/10";
            document.getElementById("numberInput").value = " ";
            document.getElementById("numberInput").focus();
            
            if(attempt == 10){
                openDialogLooser();

            }      
       
    } // end function calc()
