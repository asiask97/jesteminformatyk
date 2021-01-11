function process(clicked_id){

    var pickedElement = clicked_id;   
    console.log(pickedElement)
    var computerPick = Math.floor((Math.random() * 3) + 1);
    console.log(computerPick)
   
    if (pickedElement == computerPick){
        alert('tie');
    }
    else if (pickedElement == 1 && computerPick == 2){
        alert('scizors vs paper -- you won')
    }
    else if (pickedElement == 1 && computerPick == 3){
        alert('scizors vs rock -- you lost')
    }
    else if (pickedElement == 2 && computerPick == 1){
        alert('paper vs scizors -- you lost')
    }
    else if (pickedElement == 2 && computerPick == 3){
        alert('paper vs rock -- you won')
    }
    else if (pickedElement == 3 && computerPick == 1){
        alert('rock vs scizors -- you won')
    }
    else if (pickedElement == 3 && computerPick == 2){
        alert('rock vs paper -- you lost')
    }
    

}

   
//function computerspicking(){

   // let computerPick = Math.floor((Math.random() * 3) + 1);

    //if (computerPick === 1){
    //  var compick = 'scizors';
   // }
    //else if(computerPick === 2 ){
    //    var compick = 'paper';
   //}
    //else{
    //    var compick = 'rock';
   // }

   // alert(compick);

  // } 

   //computerspicking();
  