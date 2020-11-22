let popped = 0;

function PlaySound(soundobj) {
    let thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    let thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "ball"){
        
                e.target.style.backgroundColor = "white";

                PlaySound('mySound');

                e.target.textContent = "POP!";
                popped++;

                

                removeEvent(e);
                checkAllPopped();

               
                
    }   
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
        StopSound('mySound')
    })
};

function checkAllPopped(){
    if (popped === 20){
        let gallery = document.querySelector('.stage');
        let message = document.querySelector('.balloons-end');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};



