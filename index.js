
//var audio = new Audio('sounds/tom-1.mp3');

for(i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    
   var button=this.innerHTML;
   switch (button) {
    case 'k':
        var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

   
    case'a':
        var a =new Audio("sounds/crash.mp3");
        a.play();
        break;


    case's':
        var s=new Audio("sounds/snare.mp3");
        s.play();
        break;
    case'd':
        var d = new Audio("sounds/tom-1.mp3");
        d.play();
        break;
    case'j':
        var j=new Audio("sounds/tom-2.mp3");
        j.play();
        break;
    case'w':
        var w =new Audio("sounds/tom-3.mp3");
        w.play();
        break;
    case 'l':
        var l=new Audio("sounds/tom-4.mp3");
        l.play();
        break;          

    default:
        console.log('Erorr');
        break;
   }

   
    pressedkey(button);
});
document.addEventListener("keypress",function(event){
    pressedkey(event.key);
});

}
function pressedkey(key){
    switch (key) {
        case 'k':
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
       
        case'a':
            var a =new Audio("sounds/crash.mp3");
            a.play();
            break;
    
    
        case's':
            var s=new Audio("sounds/snare.mp3");
            s.play();
            break;
        case'd':
            var d = new Audio("sounds/tom-1.mp3");
            d.play();
            break;
        case'j':
            var j=new Audio("sounds/tom-2.mp3");
            j.play();
            break;
        case'w':
            var w =new Audio("sounds/tom-3.mp3");
            w.play();
            break;
        case 'l':
            var l=new Audio("sounds/tom-4.mp3");
            l.play();
            break;          
    
        default:
            console.log('Erorr');
            break;
       }

}
 //audio.play();
