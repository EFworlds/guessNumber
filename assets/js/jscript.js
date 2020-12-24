
    let secret = Math.floor(Math.random() * 100) + 1; 
    // console.log(secret);
    let attempt = 0;
    let tipText;        
    let numberGuess = 0;  
    
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
                    ttopen('Тепло!');
                    attempt++;
                    break;
                case secret - 2:
                case secret + 2:
                    ttopen('Еще теплее!');
                    attempt++;
                    break;
                case secret - 1:
                case secret + 1:
                    ttopen('Горячо!');
                    attempt++;
                    break;
                case secret:
                    openDialogWinner();
                    break;
                default:
                    if(numberGuess > secret + 3){
                        ttopen('перелет');
                        attempt++;
                    }else if(numberGuess < secret - 3) {
                        ttopen('недолет');
                        attempt++;
                    }
           } // end switch

           setInterval(ttclose, 4000); //close tips

            document.getElementById("btn").innerText = attempt + "/10";
            document.getElementById("numberInput").value = " ";
            document.getElementById("numberInput").focus();
            
            if(attempt == 10){
                openDialogLooser();

            }      
       
    } // end function calc()