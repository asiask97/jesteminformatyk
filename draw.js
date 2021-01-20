// loop that creates divs

for (var i=0; i<2500; i++){
    
    var newDiv = document.createElement('div');
    newDiv.id= 'box';
    newDiv.className= 'boxes'

    var container = document.querySelector('body .wrapper');
    var before = document.querySelector('body h1')

    container.insertBefore(newDiv,before);
}

// creating option for more squares



//36


//100


// hover change color option.


var boxes = document.querySelectorAll('.boxes').forEach(item => {

    item.addEventListener('mouseover', ()=>{
     console.log('hi');
     item.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",2000)";

     //var boxxes= document.getElementById('box')
     //boxxes.style.backgroundColor='black';

    });


})




