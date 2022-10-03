window.onload = function(){
    let audio = document.querySelector('audio');
    // audio.play();
    let btn = document.querySelector("body");
    let flag = false;
    btn.onclick =()=>{
        if(flag){
            audio.pause();
            flag = false
        }else{
            audio.play();
            flag = true
        }
    }
}