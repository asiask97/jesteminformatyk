function process(clicked_id){

    var pickedElement = clicked_id;   
    console.log(pickedElement)
    var computerPick = Math.floor((Math.random() * 3) + 1);
    console.log(computerPick)


   
    var compscore = document.getElementById('compScore');
    var yourscore = document.getElementById('yourScore');


    var compnumb = compscore.innerHTML;
    var yournumb = yourscore.innerHTML;    
    
    
    if (pickedElement == computerPick){
        alert('tie');
    }
    else if (pickedElement == 1 && computerPick == 2){
        alert('scizors vs paper -- you won');
        yournumb++;
        yourscore.innerHTML = yournumb;
    }
    else if (pickedElement == 1 && computerPick == 3){
        alert('scizors vs rock -- you lost');
        compnumb++;
        compscore.innerHTML = compnumb;
    }
    else if (pickedElement == 2 && computerPick == 1){
        alert('paper vs scizors -- you lost');
        compnumb++;
        compscore.innerHTML = compnumb;
    }
    else if (pickedElement == 2 && computerPick == 3){
        alert('paper vs rock -- you won');
        yournumb++;
        yourscore.innerHTML = yournumb;
    }
    else if (pickedElement == 3 && computerPick == 1){
        alert('rock vs scizors -- you won');
        yournumb++;
        yourscore.innerHTML = yournumb;
    }
    else if (pickedElement == 3 && computerPick == 2){
        alert('rock vs paper -- you lost');
        compnumb++;
        compscore.innerHTML = compnumb;
    }
    



}
