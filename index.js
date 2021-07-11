
let len=document.querySelectorAll(".drum").length;

for(let i=0;i<len;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",clicks);

function clicks(){
	
	let innerhtml=this.innerHTML;
	makesound(innerhtml);
	animation(innerhtml);
		
}
}

document.addEventListener("keypress",function(envent){
      makesound(event.key);
      animation(event.key);

});

function animation(currentkey){
    
    let press=document.querySelector("."+currentkey);
    press.classList.add("pressed");
    
    setTimeout(function(){
press.classList.remove("pressed");
},100);

}

function makesound(key){
	switch(key){
				case"a":
					let audio1=new Audio("sounds/tom-1.mp3");
				    audio1.play();
				break;
				case "s":
					let audio2=new Audio("sounds/tom-2.mp3");
				    audio2.play();
				break;
				case "d":
					let audio3=new Audio("sounds/tom-3.mp3");
				    audio3.play();
				break;
				case"f" :
					let audio4=new Audio("sounds/tom-4.mp3");
				    audio4.play();
				break;
				case"j":
					let audio5=new Audio("sounds/snare.mp3");
				    audio5.play();
				break;
				case"k":
					let audio6=new Audio("sounds/crash.mp3");
				    audio6.play();
				break;
				case"l":
					let audio7=new Audio("sounds/kick-bass.mp3");
				    audio7.play();
				break;
				default:
				alert("please select the given key");
				break;
			}
}