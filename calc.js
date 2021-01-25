
//var buttons = document.querySelectorAll('button')

//buttons.forEach (function clickedbutton(button) {
    //button.addEventListener('click',function(e){
        
      //  var pressed = e.target.id;
        
    //    document.getElementById('number').innerHTML = pressed



  //  });
//});

// once equal is pressed sum is callculated 
var equals = document.getElementById('=')
equals.addEventListener('click', function anwser(){

   // var anwser = document.getElementById('anwser').innerHTML


    //getting number in input
    var input1 =  parseInt(document.getElementById('number').value, 10);
    //console.log(input1);
    //console.log(typeof input1)

    var input2 = parseInt(document.getElementById('number2').value, 10);
    //console.log(input2);
    //console.log(typeof input2);

    
    // getting the clicked oparator 
    
    var plus = document.getElementById('+').checked;
    var minus = document.getElementById('-').checked;
    var dev =  document.getElementById('/').checked;
     
    // chceck witch option one must do 
    
    
    if (plus == true){
        
        document.getElementById('anwser').innerHTML = input1+input2 

    }else if (minus == true){

        document.getElementById('anwser').innerHTML = input1-input2

    }else if ( dev == true){

        document.getElementById('anwser').innerHTML = input1/input2
    }else{
        alert('error')
    }



})
