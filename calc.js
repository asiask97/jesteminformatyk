
var display = ''

var buttons = document.querySelectorAll('button')
var oparator = document.getElementsByClassName('operator');

buttons.forEach (function clickedbutton(button) {
    button.addEventListener('click',function(e){
        
    var pressed = e.target.id;
    display = display + pressed

    document.getElementById('anwser').textContent = display;

    });

});

var equals = document.querySelector('.equals');
equals.addEventListener('click', () =>{
    document.getElementById('anwser').textContent = "";

    //splitting the sum into two parts ( two for now --- only + for now )
   
   if  (display.includes('+') == true){
       
        var sumArray = display.split('+');

    }else if (display.includes('-') == true){

        var sumArray = display.split('-');
   
    }else if (display.includes('/') == true){

        var sumArray = display.split('/');

    }else if (display.includes('x') == true){
        
        var sumArray = display.split('x');

    }
     

    var numArray = sumArray.map((i) => Number(i));
    var first = numArray[0];
    var second = numArray[1];

    console.log(sumArray);

    // finding out what type of sum to do +,-,/ 
    if (display.includes('+') == true){

        display = first+second;
        document.getElementById('anwser').textContent = display;

    }else if(display.includes('-') == true){

        display = first-second;
        document.getElementById('anwser').textContent = display;

    }else if(display.includes('/') == true){

        display = first/second;
        document.getElementById('anwser').textContent = display;

    }else if (display.includes('x') == true){

        display = first*second;
        document.getElementById('anwser').textContent = display;

    }

});

// clear button

var clear = document.getElementById('clear');
clear.addEventListener('click', ()=>{

    display = '';
    document.getElementById('anwser').textContent = '';


});

/* // once equal is pressed sum is callculated 
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



}) */
