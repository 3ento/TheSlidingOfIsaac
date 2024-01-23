let bgm = document.getElementById('menu-music'); 
let promise = bgm.play();

if (promise !== undefined) {
    promise.then(_ => {
        bgm.volume=0.3;
    }).catch(error => {
        bgm.muted = true;
        bgm.play();   
        document.getElementById("audio-warning").style.display = "block";
    });

    document.getElementById("audio-warning").onclick= function(){
        bgm.autoplay = true;
        console.log("a")
    }
}

