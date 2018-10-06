
//时间进行函数
function TimeRun(){
    gameTimeD++;
        //省略闰年平年的考虑
    if(gameTimeM==2&&gameTimeD>=29){gameTimeM++;gameTimeD=1;}
    else if(gameTimeM%2==1&&gameTimeD>=32){gameTimeM++;gameTimeD=1;}
    else if(gameTimeM%2==0&&gameTimeD>=31){gameTimeM++;gameTimeD=1;}
    if(gameTimeM>12)gameTimeM=1,gameTimeY++;
}

//改变帧的css
function changeFrameCss(){
    mainFrameDom.style.display = "block";
    mainDom.style.display = "none";
    TimeRun();
    $("#Top_msg_time").html(("江湖"+gameTimeY+"年"+gameTimeM+"月"+gameTimeD+"日"));
}

//返回函数
function returnButton(){
    //主页面的音乐
    audioTurn.audioPlay(1);
    mainFrameDom.style.display = "none";
    mainDom.style.display = "block";
    //删除文本信息
    $('#mainFrame_Talk_word').empty();
    for(var i=1;i<=12;++i){
        document.getElementById(("mainFrame_"+i)).style.display = "none";
    }
    //将顶部的位置信息写回大地图
    $("#Top_msg_local").html("大地图");
    jieshaoNum = -1;
    TimeRun();
    $("#Top_msg_time").html(("江湖"+gameTimeY+"年"+gameTimeM+"月"+gameTimeD+"日"));
    
    //江湖日记，记录所进入过的地方
    var str = ("江湖"+gameTimeY+"年"+gameTimeM+"月"+gameTimeD+"日,你来到了"+"大地图");
    var ele2 = document.createElement("p");
    ele2.appendChild(document.createTextNode(str));
    document.getElementById("cover_Layer_riji").appendChild(ele2);
}
//文字信息
function wordFun(num){
    jieshaoNum = num;
    var text = document.createTextNode(jieshao[num][0]);
    document.getElementById('mainFrame_Talk_word').appendChild(text);
    $("#Top_msg_local").html(jieshao[num][1]);
    //江湖日记，记录所进入过的地方
    var str = ("江湖"+gameTimeY+"年"+gameTimeM+"月"+gameTimeD+"日,你来到了"+jieshao[num][1]);
    var ele2 = document.createElement("p");
    ele2.appendChild(document.createTextNode(str));
    document.getElementById("cover_Layer_riji").appendChild(ele2);
}


//页面跳转函数
//偏远山区
function mainIcon_1(){
    changeFrameCss();
    document.getElementById("mainFrame_1").style.display = "block";
    wordFun(0);
    //city1
    audioTurn.audioPlay(2);
}
//少林寺
function mainIcon_2(){
    document.getElementById("mainFrame_2").style.display = "block";
    changeFrameCss();
    wordFun(1);
    //city1
    audioTurn.audioPlay(2);
}
//仙剑门
function mainIcon_3(){
    document.getElementById("mainFrame_3").style.display = "block";
    changeFrameCss();
    wordFun(2);
    //city1
    audioTurn.audioPlay(2);
}
//赤蛇部落
function mainIcon_4(){
    document.getElementById("mainFrame_4").style.display = "block";
    changeFrameCss();
    wordFun(3);
    //city1
    audioTurn.audioPlay(2);
}
//稻花村
function mainIcon_5(){
    document.getElementById("mainFrame_5").style.display = "block";
    changeFrameCss();
    wordFun(4);
    //city2
    audioTurn.audioPlay(3);
}
//比武场
function mainIcon_6(){
    document.getElementById("mainFrame_6").style.display = "block";
    changeFrameCss();
    wordFun(5);
    //city2
    audioTurn.audioPlay(3);

}
//祭坛
function mainIcon_7(){
    document.getElementById("mainFrame_7").style.display = "block";
    changeFrameCss();
    wordFun(6);
    //city2
    audioTurn.audioPlay(3);

}
//万花谷
function mainIcon_8(){
    document.getElementById("mainFrame_8").style.display = "block";
    changeFrameCss();
    wordFun(7);
    //city2
    audioTurn.audioPlay(3);

}
//杂货店
function mainIcon_9(){
    document.getElementById("mainFrame_9").style.display = "block";
    changeFrameCss();
    wordFun(8);
    //city3
    audioTurn.audioPlay(4);

}
//麒麟宫殿
function mainIcon_10(){
    document.getElementById("mainFrame_10").style.display = "block";
    changeFrameCss();
    wordFun(9);
    //city3
    audioTurn.audioPlay(4);

}
//灵犀仙岛
function mainIcon_11(){
    document.getElementById("mainFrame_11").style.display = "block";
    changeFrameCss();
    wordFun(10);
    //city4
    audioTurn.audioPlay(5);
}
//荒漠驿站
function mainIcon_12(){
    document.getElementById("mainFrame_12").style.display = "block";
    changeFrameCss();
    wordFun(11);
    //city4
    audioTurn.audioPlay(5);
}


//界面的按钮初始化
function initMain(){
    //江湖日记，记录所进入过的地方
    var str = ("江湖"+gameTimeY+"年"+gameTimeM+"月"+gameTimeD+"日,你来到了"+"大地图");
    var ele2 = document.createElement("p");
    ele2.appendChild(document.createTextNode(str));
    document.getElementById("cover_Layer_riji").appendChild(ele2);
    var i;
    //页面按钮和跳转页面div
    for(i=1;i<=mainIconNum;++i){
        var ele = document.createElement("input");
        ele.type = "image";
        ele.src = "../images/mainicon/m_icon_"+i+".png";
        ele.setAttribute("onclick",("mainIcon_"+i+"();"));
        ele.setAttribute("id",("mainIcon_"+i));
        ele.setAttribute("class","mainIcon");
        mainDom.appendChild(ele);
        var ele2 = document.createElement("div");
        ele2.setAttribute("id",("mainFrame_"+i));
        ele2.setAttribute("class","mainFrame");
        ele2.style.display = "none";
        ele2.style.backgroundImage = ("url(../images/mainFrame/mainFrame_"+i+".jpg)");
        mainFrameDom.appendChild(ele2);
        //初始化进入下一级页面的按钮
        createBtn(('mainFrame_'+i),btn[i-1],btn[i-1].length);
    }
    
}
initMain();

function zhujiao(){
    document.getElementById("cover_Layer_riji").style.display = "none";
    //coverDom.style.display = "block";
    document.getElementById("cover2").style.display = "block";
    document.getElementById("cover_Layer_3").style.display = "block";
    document.getElementById("cover_Layer_4").style.display = "none";
    //document.getElementById("cover_Layer_2").style.display = "block";
    //document.getElementById("cover_Layer_closeBtn_2").style.display = "block";
}

function TopEmg(){
    //信息栏
    ele = document.createElement("div");
    ele.type = "image";
    ele.setAttribute("id","Top_msg");
    ele.src = "../images/border/mainUp.png";
    TopDom.appendChild(ele);
    //主角栏
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","Top_zhujiao");
    ele.src = "../images/border/zhujue.png";
    ele.setAttribute("onclick","zhujiao()");
    //提示信息框
    ele.onmouseover=function(){document.getElementById('inputText').style.display="block";inputText("查看玩家数据",'70%','85%');};
    ele.onmouseout=function(){document.getElementById('inputText').style.display="none";};

    TopDom.appendChild(ele);
    //现在所在位置
    ele = document.createElement("span");
    ele.setAttribute("id","Top_msg_local");
    document.getElementById("Top_msg").appendChild(ele);
    //时间轴
    ele = document.createElement("span");
    ele.setAttribute("id","Top_msg_time");
    document.getElementById("Top_msg").appendChild(ele);
    //money1
    ele = document.createElement("span");
    ele.setAttribute("id","Top_msg_money1");
    document.getElementById("Top_msg").appendChild(ele);
    //money2
    ele = document.createElement("span");
    ele.setAttribute("id","Top_msg_money2");
    document.getElementById("Top_msg").appendChild(ele);
    $("#Top_msg_local").html("大地图");
    $("#Top_msg_time").html("江湖0年1月1日");
    $("#Top_msg_money1").html("1000");
    $("#Top_msg_money2").html("0");
}
TopEmg();
