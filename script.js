function process(clicked_id){

    var pickedElement = clicked_id;   
    console.log(pickedElement)
    var computerPick = Math.floor((Math.random() * 3) + 1);
    console.log(computerPick)


   
    var compscore = document.getElementById('compScore');
    var yourscore = document.getElementById('yourScore');


    var compnumb = compscore.innerHTML;
    var yournumb = yourscore.innerHTML;    

    var suma = compnumb+yournumb;

        

            if (pickedElement == computerPick){
                alert('tie');
            }
            else if (pickedElement == 1 && computerPick == 2){
                yournumb++;
                yourscore.innerHTML = yournumb;
                alert('scizors vs paper -- you won');
            }
            else if (pickedElement == 1 && computerPick == 3){
                compnumb++;
                compscore.innerHTML = compnumb;
                alert('scizors vs rock -- you lost');
            }
            else if (pickedElement == 2 && computerPick == 1){
                compnumb++;
                compscore.innerHTML = compnumb;
                alert('paper vs scizors -- you lost');
            }
            else if (pickedElement == 2 && computerPick == 3){
                yournumb++;
                yourscore.innerHTML = yournumb;
                alert('paper vs rock -- you won');
            }
            else if (pickedElement == 3 && computerPick == 1){
                yournumb++;
                yourscore.innerHTML = yournumb;
                alert('rock vs scizors -- you won');
            }
            else if (pickedElement == 3 && computerPick == 2){
                compnumb++;
                compscore.innerHTML = compnumb;
                alert('rock vs paper -- you lost');
            }
            
        
         function gohome(){
            window.location.href="start.html"
            }

        var suma = compnumb+yournumb;

            if (compnumb == 3){
                alert('comp won  -- game will be restarted')
                gohome();
               
            }
            else if (yournumb == 3){
                alert(' you won -- game will be restarted')
                gohome();
            }
            
        
    
    


}
