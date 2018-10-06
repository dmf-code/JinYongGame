
function wuping_show_1(){
    document.getElementById("cover_Layer_Wuping_div1").style.display = "block";
    document.getElementById("cover_Layer_Wuping_div2").style.display = "none";
    document.getElementById("cover_Layer_Wuping_div3").style.display = "none";
    document.getElementById("cover_Layer_Wuping_div4").style.display = "none";
    document.getElementById("cover_Layer_Wuping_div5").style.display = "none";
}
function wuping_show_2(){
    document.getElementById("cover_Layer_Wuping_div1").style.display = "none";
    document.getElementById("cover_Layer_Wuping_div2").style.display = "block";
    document.getElementById("cover_Layer_Wuping_div3").style.display = "none";
    document.getElementById("cover_Layer_Wuping_div4").style.display = "none";
    document.getElementById("cover_Layer_Wuping_div5").style.display = "none";
}
function wuping_show_3(){
    document.getElementById("cover_Layer_Wuping_div1").style.display = "none";
    document.getElementById("cover_Layer_Wuping_div2").style.display = "none";
    document.getElementById("cover_Layer_Wuping_div3").style.display = "block";
    document.getElementById("cover_Layer_Wuping_div4").style.display = "none";
    document.getElementById("cover_Layer_Wuping_div5").style.display = "none";
}
function wuping_show_4(){
    document.getElementById("cover_Layer_Wuping_div1").style.display = "none";
    document.getElementById("cover_Layer_Wuping_div2").style.display = "none";
    document.getElementById("cover_Layer_Wuping_div3").style.display = "none";
    document.getElementById("cover_Layer_Wuping_div4").style.display = "block";
    document.getElementById("cover_Layer_Wuping_div5").style.display = "none";
}
function wuping_show_5(){
    document.getElementById("cover_Layer_Wuping_div1").style.display = "none";
    document.getElementById("cover_Layer_Wuping_div2").style.display = "none";
    document.getElementById("cover_Layer_Wuping_div3").style.display = "none";
    document.getElementById("cover_Layer_Wuping_div4").style.display = "none";
    document.getElementById("cover_Layer_Wuping_div5").style.display = "block";
}

//cover2的显示与关闭
function cover_Layer_shuxing(){
    document.getElementById("cover_Layer_3").style.display = "block";
    document.getElementById("cover_Layer_4").style.display = "none";
}

function cover_Layer_zhuangbei(){
    document.getElementById("cover_Layer_3").style.display = "none";
    document.getElementById("cover_Layer_4").style.display = "block";
}

//获取按钮图片的编号
function getImagesNum(str){
    var slen = str.length-1;
    var curstr = "";
    while(str[slen]!='.')slen--;
    while(str[--slen]!='_'){
        curstr += str[slen];
    }
    //翻转字符串
    return curstr.split("").reverse().join("");
}


//获取各个槽的名称
function getChaoName(str){
    var slen = str.length-1;
    var curstr = "";
    while(str[slen]!='.')slen--;
    while(str[--slen]!='_'){
        curstr += str[slen];
    }
    //翻转字符串
    return curstr.split("").reverse().join("");
}

//获取各个物品的类型的名称
function getWuName(str){
    var slen = str.length-1;
    var curstr = "";
    while(str[slen]!='_')slen--;
    while(str[--slen]!='/'){
        curstr += str[slen];
    }
    //翻转字符串
    return curstr.split("").reverse().join("");
}
//获取各个物品的号码
function getWuNumName(str){
    var slen = str.length-1;
    var curstr = "";
    while(str[slen]!='.')slen--;
    while(str[--slen]!='_'){
        curstr += str[slen];
    }
    //翻转字符串
    return curstr.split("").reverse().join("");
}

//开始游戏函数
function beginGame(){
    document.getElementById("start").style.display = "none";
    //主界面音乐
    audioTurn.audioPlay(1);
}
//游戏介绍函数
function youxijieshao(){
    document.getElementById("start_youxijieshao").style.display = "block";
    //sound8
    audioTurn.audioPlay(14);
}
function close_youxijieshao(){
    document.getElementById("start_youxijieshao").style.display = "none";
    //start
    audioTurn.audioPlay(0);
}
//游戏声明函数
function youxishengming(){
    document.getElementById("start_youxishengming").style.display = "block";
    //start
    audioTurn.audioPlay(14);
}
function close_youxishengming(){
    document.getElementById("start_youxishengming").style.display = "none";
    //start
    audioTurn.audioPlay(0);
}
//开始界面的按钮
function createStartBtn(){
    var ele = document.createElement("input");
    ele.type = "image";
    ele.src="../images/border/start_btn1.png";
    ele.setAttribute("id","start_btn1");
    ele.setAttribute("onclick","beginGame()");
    document.getElementById("start").appendChild(ele);
    ele = document.createElement("input");
    ele.type = "image";
    ele.src="../images/border/start_btn2.png";
    ele.setAttribute("id","start_btn2");
    ele.setAttribute("onclick","youxijieshao()");
    document.getElementById("start").appendChild(ele);
    ele = document.createElement("input");
    ele.type = "image";
    ele.src="../images/border/start_btn3.png";
    ele.setAttribute("id","start_btn3");
    ele.setAttribute("onclick","youxishengming()");
    document.getElementById("start").appendChild(ele);
    ele = document.createElement("div");
    ele.setAttribute("id","start_youxijieshao");
    document.getElementById("start").appendChild(ele);
    
    ele = document.createElement("input");
    ele.type = "image";
    ele.src="../images/border/youxistart_close.png";
    ele.setAttribute("id","start_youxijieshao_btn");
    ele.setAttribute("onclick","close_youxijieshao()");
    document.getElementById("start_youxijieshao").appendChild(ele);

    ele = document.createElement("div");
    ele.setAttribute("id","start_youxishengming");
    document.getElementById("start").appendChild(ele);

     ele = document.createElement("input");
    ele.type = "image";
    ele.src="../images/border/youxistart_close.png";
    ele.setAttribute("id","start_youxishengming_btn");
    ele.setAttribute("onclick","close_youxishengming()");
    document.getElementById("start_youxishengming").appendChild(ele);
}
createStartBtn();

//cover2武器的四个插槽
function cover2_wuqi_chao(){
    // if(getChaoName(document.getElementById("cover_Layer_4_1").src) == "chao")
    {
        document.getElementById("cover").style.display = "block";
        wuping();
    }
}
function cover2_fanju_chao(){
    //if(getChaoName(document.getElementById("cover_Layer_4_2").src) == "chao")
    {
        wuping();
    }
}
function cover2_siping_chao(){
    //if(getChaoName(document.getElementById("cover_Layer_4_3").src) == "chao")
    {
        wuping();
    }
}
function cover2_shu_chao(){
    //if(getChaoName(document.getElementById("cover_Layer_4_4").src) == "chao")
    {
        wuping();
    }
}
//cover3
//点击商品的一系列函数
function zhuangBeiWuPingF(){
    var url = getWuName(wupingTypeUrl),num=getWuNumName(wupingTypeUrl);
    if(url == "wuqi"){
        document.getElementById("cover_Layer_4_1").setAttribute("src",wupingTypeUrl);
        for(var i=0;i<10;++i){
            Myrole.AddAttr1[i] = parseInt(Math.random()*10);
        }
    }else if(url == "fanju"){
        document.getElementById("cover_Layer_4_2").setAttribute("src",wupingTypeUrl);
        for(var i=0;i<10;++i){
            Myrole.AddAttr2[i] = parseInt(Math.random()*10);
        }
    }else if(url == "siping"){
        document.getElementById("cover_Layer_4_3").setAttribute("src",wupingTypeUrl);
        for(var i=0;i<10;++i){
            Myrole.AddAttr3[i] = parseInt(Math.random()*10);
        }
    }else if(url == "shu"){
        document.getElementById("cover_Layer_4_4").setAttribute("src",wupingTypeUrl);
    }
    for(var i=0;i<10;++i){
        document.getElementById("cover_Layer_3_"+i).innerHTML = (Myrole.attr[i]+Myrole.AddAttr1[i]+Myrole.AddAttr2[i]+Myrole.AddAttr3[i]);
    }
    document.getElementById("cover3").style.display = "none";
}
function xieXiaF(){
    var url = getWuName(wupingTypeUrl);
    if(url == "wuqi"){
        document.getElementById("cover_Layer_4_1").setAttribute("src","../images/wuping/wuqi_chao.png");
        for(var i=0;i<10;++i){
            Myrole.AddAttr1[i] = 0;
        }
    }else if(url == "fanju"){
        document.getElementById("cover_Layer_4_2").setAttribute("src","../images/wuping/fanju_chao.png");
        for(var i=0;i<10;++i){
            Myrole.AddAttr2[i] = 0;
        }
    }else if(url == "siping"){
        document.getElementById("cover_Layer_4_3").setAttribute("src","../images/wuping/siping_chao.png");
        for(var i=0;i<10;++i){
            Myrole.AddAttr3[i] = 0;
        }
    }else if(url == "shu"){
        document.getElementById("cover_Layer_4_4").setAttribute("src","../images/wuping/shu_chao.png");
    }else{
        document.getElementById("cover3_Layer_5").style.display = "block";
    }
    for(var i=0;i<10;++i){
        document.getElementById("cover_Layer_3_"+i).innerHTML = (Myrole.attr[i]+Myrole.AddAttr1[i]+Myrole.AddAttr2[i]+Myrole.AddAttr3[i]);
    }
    document.getElementById("cover3").style.display = "none";
}
function showZhuangbeiF(obj){
    wupingTypeUrl = obj.src;
    var num = getWuNumName(obj.src);
    var wuName = getWuName(obj.src);
    document.getElementById("cover3").style.display = "block";
    document.getElementById("cover3_Layer_1").style.backgroundImage="url("+wupingTypeUrl+")";
}
function CloseZhuangBeiLayer(){
    document.getElementById("cover3").style.display = "none";
}
function closeNoWuping(){
    document.getElementById("cover3_Layer_5").style.display = "none";
}

//对话信息开启与关闭函数
function nextSpeaking(){
    if(speakCount<roleBtn[speakNum].length){
        if(speakCount%2)$("#cover5_2").css({"backgroundImage":"url(../images/roleicon/zhujiao.png)"});
        else $("#cover5_2").css({"backgroundImage":"url(../images/roleicon/role_"+(speakNum+1)+"_1.png)"});
        $("#cover5_3").html(roleBtn[speakNum][speakCount++]);
    }else{
        closeSpeaking();
        if(speakNum == 5||speakNum == 11||speakNum == 22||speakNum == 31||speakNum == 32){
            //结束谈话后出来的选择界面
            var ele = document.getElementById("cover6_1_1");
            ele.innerHTML = "是否接受比试？";
            ele = document.getElementById("cover6_1_2");
            ele.setAttribute("src","../images/border/jieshoutiaozhan.png");
            ele.setAttribute("onclick","jieshoutiaozhan()");
            ele = document.getElementById("cover6_1_3");
            ele.setAttribute("src","../images/border/jujuetiaozhan.png");
            ele.setAttribute("onclick","jujuetiaozhan()");
            //显示弹出选择界面
            document.getElementById("cover6").style.display = "block";
        }
        if(speakNum == 17 ||speakNum ==24 ||speakNum == 27 ||speakNum == 23){
             //结束谈话后出来的选择界面
            var ele = document.getElementById("cover6_1_1");
            ele.innerHTML = "是否接受？";
            ele = document.getElementById("cover6_1_2");
            ele.setAttribute("src","../images/border/jieshou.png");
            ele.setAttribute("onclick","cover6_jieshou()");
            ele = document.getElementById("cover6_1_3");
            ele.setAttribute("src","../images/border/jujue.png");
            ele.setAttribute("onclick","cover6_jujue()");
            //显示弹出选择界面
            document.getElementById("cover6").style.display = "block";
        }
    }
}

function openSpeaking(num){
    speakCount = 0;
    speakNum = num-1;
    document.getElementById("Top").style.display = "none";
    document.getElementById("mainFrame_Talk").style.display = "none";
    document.getElementById("mainFrame_Talk_btn1").style.display = "none";
    document.getElementById("mainFrame_Talk_btn2").style.display = "none";
    document.getElementById("mainFrame_Talk_btn3").style.display = "none";
    document.getElementById("mainFrame_Talk_btn4").style.display = "none";
    $(".mainFrame_btn").hide();
    document.getElementById("cover5").style.display = "block";
    $("#cover5_2").css({"backgroundImage":"url(../images/roleicon/role_"+num+"_1.png)"});
    $("#cover5_3").html(roleBtn[num-1][speakCount++]);
}
function closeSpeaking(){
    document.getElementById("Top").style.display = "block";
    document.getElementById("mainFrame_Talk").style.display = "block";
    document.getElementById("mainFrame_Talk_btn1").style.display = "block";
    document.getElementById("mainFrame_Talk_btn2").style.display = "block";
    document.getElementById("mainFrame_Talk_btn3").style.display = "block";
    document.getElementById("mainFrame_Talk_btn4").style.display = "block";
    $(".mainFrame_btn").show();
    document.getElementById("cover5").style.display = "none";
}

//每个角色的按钮函数
//扫地憎
function role_1(obj){
    openSpeaking(getImagesNum(obj.src));
}
//方丈
function role_2(obj){
    openSpeaking(getImagesNum(obj.src));
}
//伐木工
function role_3(obj){
    openSpeaking(getImagesNum(obj.src));
}
//掌门
function role_4(obj){
    openSpeaking(getImagesNum(obj.src));
}
//赵柯
function role_5(obj){
    openSpeaking(getImagesNum(obj.src));
}
//流氓
function role_6(obj){
    openSpeaking(getImagesNum(obj.src));
}
//冷砂
function role_7(obj){
    openSpeaking(getImagesNum(obj.src));
}
//乞丐
function role_8(obj){
    openSpeaking(getImagesNum(obj.src));
}
//胖丁
function role_9(obj){
    openSpeaking(getImagesNum(obj.src));
}
//月轮
function role_10(obj){
    openSpeaking(getImagesNum(obj.src));
}
//泡泡
function role_11(obj){
    openSpeaking(getImagesNum(obj.src));
}
//强盗
function role_12(obj){
    openSpeaking(getImagesNum(obj.src));
}
//小贼猫
function role_13(obj){
    openSpeaking(getImagesNum(obj.src));
}
//盲侠
function role_14(obj){
    openSpeaking(getImagesNum(obj.src));
}
//嫖客
function role_15(obj){
    openSpeaking(getImagesNum(obj.src));
}
//猎人
function role_16(obj){
    openSpeaking(getImagesNum(obj.src));
}
//傻狗
function role_17(obj){
    openSpeaking(getImagesNum(obj.src));
}
//琴师
function role_18(obj){
    openSpeaking(getImagesNum(obj.src));
}
//商店老板
function role_19(obj){
    document.getElementById("cover4").style.display = "block";
    document.getElementById("cover4_baiying").innerHTML = gameMoney1;
    document.getElementById("cover4_huangjing").innerHTML = gameMoney2;
}
//大酋长
function role_20(obj){
    openSpeaking(getImagesNum(obj.src));
}
//小酋长
function role_21(obj){
    openSpeaking(getImagesNum(obj.src));
}
//酒仙
function role_22(obj){
    openSpeaking(getImagesNum(obj.src));
}
//虚竹
function role_23(obj){
    openSpeaking(getImagesNum(obj.src));
}
//店小二
function role_24(obj){
    openSpeaking(getImagesNum(obj.src));
}
//灵魂画师
function role_25(obj){
    openSpeaking(getImagesNum(obj.src));
}
//大妈
function role_26(obj){
    openSpeaking(getImagesNum(obj.src));
}
//搬砖大叔
function role_27(obj){
    openSpeaking(getImagesNum(obj.src));
}
//神医
function role_28(obj){
    openSpeaking(getImagesNum(obj.src));
}
//宫主
function role_29(obj){
    openSpeaking(getImagesNum(obj.src));
}
//少宫主
function role_30(obj){
    openSpeaking(getImagesNum(obj.src));
}
//管家
function role_31(obj){
    openSpeaking(getImagesNum(obj.src));
}
//陆教头
function role_32(obj){
    openSpeaking(getImagesNum(obj.src));
}
//郑教头
function role_33(obj){
    openSpeaking(getImagesNum(obj.src));
}


//cover4
//购买商品的一系列函数

function goumaiF(){
    var costMoney = 0,num = getWuNumName(wupingTypeUrl),url = getWuName(wupingTypeUrl);
    if(url=="wuqi"){
        costMoney = wuqi_value[num];
    }else if(url == "fanju"){
        costMoney = fanju_value[num];
    }else if(url == "siping"){
        costMoney = siping_value[num];
    }else if(url == "yao"){
        costMoney = yao_value[num];
    }else if(url == "teshu"){
        costMoney = teshu_value[num];
    }else if(url == "shu"){
        costMoney = shu_value[num];
    }
    if(costMoney>gameMoney1){
        document.getElementById("cover4_Layer_3").style.display = "block";
        document.getElementById("cover4_Layer_3_2").appendChild(document.createTextNode("白银不够，无法购买！"));
    }else{
        gameMoney1 -= costMoney;
        document.getElementById("Top_msg_money1").innerHTML = gameMoney1;
        document.getElementById("cover4_baiying").innerHTML = gameMoney1;
        document.getElementById("cover4_Layer_2").style.display = "none";
        hasWuping[++wupingNum] = wupingTypeUrl;
        $("#cover4_Layer_3_2").empty();
        //$("#cover4_Layer_4").empty();
    }
    $("#cover4_Layer_2_6").empty();
}
function bumaiF(){
    document.getElementById("cover4_Layer_2").style.display = "none";
    $("#cover4_Layer_2_6").empty();
    $("#cover4_Layer_3_2").empty();
}
function showBuy(obj){
    wupingTypeUrl = obj.src;
    var num = getWuNumName(obj.src);
    var wuName = getWuName(obj.src);
    if(wuName == 'wuqi'){
                document.getElementById("cover4_Layer_2_6").appendChild(document.createTextNode("商品价格为："+wuqi_value[num]+"白银"));
    }else if(wuName == 'fanju'){
                document.getElementById("cover4_Layer_2_6").appendChild(document.createTextNode("商品价格为："+fanju_value[num]+"白银"));
    }else if(wuName == 'siping'){
                document.getElementById("cover4_Layer_2_6").appendChild(document.createTextNode("商品价格为："+siping_value[num]+"白银"));
    }else if(wuName == 'shu'){
                document.getElementById("cover4_Layer_2_6").appendChild(document.createTextNode("商品价格为："+shu_value[num]+"白银"));
    }else if(wuName == 'yao'){
                document.getElementById("cover4_Layer_2_6").appendChild(document.createTextNode("商品价格为："+yao_value[num]+"白银"));
    }else if(wuName == 'teshu'){
                document.getElementById("cover4_Layer_2_6").appendChild(document.createTextNode("商品价格为："+teshu_value[num]+"白银"));
    }
    document.getElementById("cover4_Layer_2").style.display = "block";
    document.getElementById("cover4_Layer_2_5").style.backgroundImage="url("+wupingTypeUrl+")";
}

//关闭无法购买物品的界面
function closeNoWuping(){
    document.getElementById("cover4_Layer_3").style.display = "none";
    $("#cover4_Layer_3_2").empty();
}
function closeCover4_Layer(){
    document.getElementById("cover4_Layer_2").style.display = "none";
    $("#cover4_Layer_2_6").empty();
    $("#cover4_Layer_3_2").empty();
}
//商人处关闭函数
function cover4_close(){
    document.getElementById("cover4").style.display = "none";
}

//cover6
function jieshoutiaozhan(){
    audioTurn.audioPlay(6);
    document.getElementById("cover6").style.display = "none";
    document.getElementById("animation_bg").style.display = "block";
    $("#anima_monstor").css({"backgroundImage":"url(../animation/sucai/role_"+(speakNum+1)+".png)"});
    $("#zhandou_1").css({"backgroundImage":"url(../animation/sucai/role_"+(speakNum+1)+"_0.png)"});
}
function jujuetiaozhan(){
    document.getElementById("cover6").style.display = "none";
}

function cover6_jieshou(){
    if(gameMoney1<500){
        cover6_openStudy();
    }else{
        gameMoney1 -= 500;
        $("#Top_msg_money1").html(gameMoney1);
        document.getElementById("cover6").style.display = "none";
    }
}
function cover6_jujue(){
    document.getElementById("cover6").style.display = "none";
}

//打开无法学习的函数
function cover6_openStudy(){
    document.getElementById("cover6_1_4").style.display = "block";
}
//关闭无法学习的函数
function cover6_closeStudy(){
    document.getElementById("cover6_1_4").style.display = "none";
    document.getElementById("cover6").style.display = "none";
}