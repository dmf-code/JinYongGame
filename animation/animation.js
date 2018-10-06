var AniRanNum,AniRanStr;
var animation_text =[
    /*0*/["你使出一个上勾拳，对敌人造成","伤害。"],
    /*1*/["敌人一个回闪，挡掉一部分力量，并快速向你腹部踢出一脚。你勉强接下，受到了","伤害。"],
    /*2*/["你迅猛的横扫敌人一脚，造成一下暴击，敌人受到强烈的","伤害。"],
    /*3*/["接下你的一脚后，已无法进行攻击"],
    /*4*/["你挥出一个重拳。"],
    /*5*/["敌人快速接下，并快速的回击你一拳。你一下子没反应过来，受了一击，退后了一步，并受到","受害。"],
    /*6*/["你抓住敌人破绽，重重的踢出一脚，敌人受到","伤害。"],
    /*7*/["敌人受了一脚之后，立刻反击，回你一拳。你受到了","伤害。"],
    
    /*8*/["你双手抱头，缩成一团，做出防御姿态。"],
    /*9*/["敌人看见你防御，立即给予追击，造成","伤害。"],
    
    /*10*/["逃跑失败！"],
    /*11*/["敌人趁你逃跑之时，用力踢出旋风脚。你受到","伤害。"],
    /*12*/["逃跑成功！"]
];
function ADDTextNode(obj){
    var ele1 = document.createElement("div");
    ele1.setAttribute("class","animation_text");
    document.getElementById("zhandou_2").appendChild(ele1);
    var ele = document.createElement("h2");
    ele.style.color="#FFA500";
    var ranNum;
    if($('#cartoon_1').attr("id") != obj.attr("id")){
        ele.innerHTML = "敌人：";
        if(AniRanNum == 3){
            AniRanStr = animation_text[AniRanNum][0];
       }
        else{
            ranNum = Myenemy.getAttck(Myrole);//parseInt(Math.random()*10);
            Myrole.life -= ranNum;
            AniRanStr = animation_text[AniRanNum][0]+ranNum+animation_text[AniRanNum][1];
        }
        document.getElementById("role_xuetiao").style.width = Myrole.life*0.16+"%";
    }else{
        ele.innerHTML = "我：";
        if(AniRanNum == 4||AniRanNum == 8 ||AniRanNum == 10 ||AniRanNum == 12){
            AniRanStr = animation_text[AniRanNum][0];
       }
        else{
            ranNum = Myrole.getAttck(Myenemy);
            Myenemy.life -= ranNum;
            AniRanStr = animation_text[AniRanNum][0]+ranNum+animation_text[AniRanNum][1];
        }
        document.getElementById("monstor_xuetiao").style.width = Myenemy.life*0.16+"%";
    }
    if(Myrole.life<=0){
        LostGame();
    }
    if(Myenemy.life<=0){
        WinGame();
    }
       ele1.appendChild(ele);
    ele1.appendChild(document.createTextNode(AniRanStr));
}

//统一禁止按钮点击函数
function abandonClick(){
    document.getElementById("anima_btn_1").disabled = true;
    document.getElementById("anima_btn_2").disabled = true;
    document.getElementById("anima_btn_3").disabled = true;
}
function accessClick(){
    document.getElementById("anima_btn_1").disabled = false;
    document.getElementById("anima_btn_2").disabled = false;
    document.getElementById("anima_btn_3").disabled = false;
}

//人物攻击
//攻击的按钮
function closeCartoon_1(){
    $("#cartoon_1").removeClass();
    if(Myenemy.life>0)openCartoon_2(); 
    else Myenemy.life = 100;
}
function openCartoon_1(){
    var num = parseInt(Math.random()*10)%2+1;
    AniRanNum = parseInt(Math.random()*10)%8;
    if(AniRanNum%2)AniRanNum--;
    $("#cartoon_1").addClass("cartoon_"+num);
    abandonClick();
    ADDTextNode($("#cartoon_1"));
    setTimeout("closeCartoon_1()",1500);
}
function closeCartoon_2(){
    $("#cartoon_2").removeClass();
    accessClick();
}
function openCartoon_2(){
    var num = parseInt(Math.random()*10)%2+3;
    AniRanNum++;
    if(AniRanNum!=3)
    $("#cartoon_2").addClass("cartoon_"+num);
    ADDTextNode($("#cartoon_2"));
    setTimeout("closeCartoon_2()",1500);
}
//防御的按钮
function closeCartoon_3(){
    openCartoon_4();
}
function openCartoon_3(){
    AniRanNum = 8;
    abandonClick();
    ADDTextNode($("#cartoon_1"));
    setTimeout("closeCartoon_3()",1500);
}
function closeCartoon_4(){
    $("#cartoon_2").removeClass();
    accessClick();
}
function openCartoon_4(){
    var num = parseInt(Math.random()*10)%2+3;
    AniRanNum++;
    ADDTextNode($("#cartoon_2"));
    $("#cartoon_2").addClass("cartoon_"+num);
    setTimeout("closeCartoon_4()",1500);
}
//离开战斗场景
//逃跑的
function closeAnimationFrame(){
    audioTurn.audioPlay(1);
    accessClick();
    $("#zhandou_2").empty();
    document.getElementById("animation_bg").style.display = "none";
    document.getElementById("winGame").style.display = "none";
    Myenemy.life = 100;
    document.getElementById("monstor_xuetiao").style.width = "16%";
}
//胜利的
function WinGame(){
    $("#winGame2").empty();
    var temp = parseInt(Math.random()*200+10);
    gameMoney1 += temp;
    $("#Top_msg_money1").html(gameMoney1);
    document.getElementById("winGame2").appendChild(document.createTextNode("获得："+temp+"两白银！"));
    document.getElementById("winGame").style.display = "block";
}
//失败的
function LostGame(){
    audioTurn.audioPlay(14);
    document.getElementById("end").style.display = "block";
}
//逃跑按钮
function closeCartoon_5(){
    openCartoon_6();
}

function openCartoon_5(){
    var num = Math.random()*10;
    if(num>=4){
        AniRanNum = 12;
        setTimeout("closeAnimationFrame()",1500);
    }else{
        AniRanNum = 10;
        setTimeout("closeCartoon_5()",1500);
    }
    abandonClick();
    ADDTextNode($("#cartoon_1"));
}
function closeCartoon_6(){
    $("#cartoon_2").removeClass();
    accessClick();
}
function openCartoon_6(){
    var num = parseInt(Math.random()*10)%2+3;
    AniRanNum++;
    ADDTextNode($("#cartoon_2"));
    $("#cartoon_2").addClass("cartoon_"+num);
    setTimeout("closeCartoon_6()",1500);
}