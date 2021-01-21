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


const slider = document.getElementById('slider');
const root = document.documentElement;

slider.addEventListener('input', (e)=> {
   // root.style.setProperty("--redius", e.target.value)
   console.log(e.target.value);
   
   var sum = 600/e.target.value;
   var repeat = "repeat("+ e.target.value +","+ sum + "px)";
   root.style.setProperty("--idontknow", repeat)
   console.log(repeat);
})


//36


//100


// hover change color option.


var boxes = document.querySelectorAll('.boxes').forEach(item => {

    item.addEventListener('mousemove', (e)=>{
     console.log('hi');
     item.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",2000)";

     //var boxxes= document.getElementById('box')
     //boxxes.style.backgroundColor='black';



// reset button
        
    var resetbutton = document.getElementById('reset');
    resetbutton.addEventListener('click', ()=>{
        console.log('reseted')
        item.style.backgroundColor = "white";

})
})


    });
