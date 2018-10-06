var audioSrc = [/*0*/"../sound/start.mp3",/*1*/"../sound/main.mp3",/*2*/"../sound/city_1.mp3"
                ,/*3*/"../sound/city_2.mp3",/*4*/"../sound/city_3.mp3",/*5*/"../sound/city_4.mp3"
                ,/*6*/"../sound/sound_1.mp3",/*7*/"../sound/sound_2.mp3",/*8*/"../sound/sound_3.mp3"
                ,/*9*/"../sound/sound_4.mp3",/*10*/"../sound/sound_5.mp3",/*11*/"../sound/sound_6.mp3"
                ,/*12*/"../sound/sound_6.mp3",/*13*/"../sound/sound_7.mp3",/*14*/"../sound/sound_8.mp3"
                ,/*15*/"../sound/sound_9.mp3",/*16*/"../sound/sound_10.mp3"];
var audioId = [];
var initAudio = function(){
    var ele;
    for(var i=0;i<17;++i){
        ele = document.createElement("audio");
        ele.src = audioSrc[i];
        ele.setAttribute("id","audio_"+i);
        ele.loop = true;
        ele.preload = true;
        document.body.appendChild(ele);
        audioId[i] = ele;
    }
}
initAudio();
var audioTurn={
    cur:null,
    last:null,
    audioPlay:function(num){
        this.last = this.cur;
        this.cur = num;
        if(this.last!=null)
        audioId[this.last].pause();
        audioId[this.cur].currentTime = 0;
        audioId[this.cur].play();
    },
    audioPause:function(){
        if(this.cur!=null){
            audioId[this.cur].pause();
            this.cur=null;
        }
    }
}
audioTurn.audioPlay(0);