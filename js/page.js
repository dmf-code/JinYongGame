var coverDom = document.getElementById("cover");
var xitongDom = document.getElementById("xitong");
var coverLayerDom;

function reStart(){
    window.location.reload();
}

//截取图片url的名称，用来匹配函数
function imageName(str){
    var slen = str.length-1;
    var curstr = "";
    while(str[slen]!='.')slen--;
    while(str[--slen]!='/'){
        curstr += str[slen];
    }
    //翻转字符串
    return curstr.split("").reverse().join("")+"(this)";
}
//截取物品url的名称，用来匹配函数
function WupingName(str){
    var slen = str.length-1;
    var curstr = "";
    while(str[slen]!='_')slen--;
    while(str[--slen]!='/'){
        curstr += str[slen];
    }
    //翻转字符串
    return curstr.split("").reverse().join("");
}

//经过input时的弹出框
function inputText(str,x,y){
    $('#inputText').html(str).css({'right':x,'bottom':y});
}
//创建每个人物的按钮函数
function createBtn(id,btn=null){
    for(var i=1;i<=btn.length;++i){
        if(btn[i-1]!=''){
            var ele2 = document.createElement("input");
            ele2.value = ' ';
            ele2.type = 'image';
            ele2.setAttribute('src',btn[i-1]);
            ele2.setAttribute('id',(id+'_btn_'+i));
            ele2.setAttribute('class',('mainFrame_btn'));
            if(i==btn.length){
                ele2.setAttribute('onclick','returnButton()');
            }else{
                ele2.setAttribute('onclick',imageName(btn[i-1]));
            }
            document.getElementById(id).appendChild(ele2);
        }
    }
}

//遮蔽层
function coverLayer(){
    //cover1
    var ele = document.createElement("div");
    ele.setAttribute("id","cover_Layer");
    document.getElementById("cover").appendChild(ele);
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover_Layer_closeBtn");
    ele.src = "../images/border/body_layer_close.png";
    ele.setAttribute("onclick","coverLayerClose()");
    document.getElementById("cover").appendChild(ele);
    ele = document.createElement("div");
    ele.setAttribute("id","cover_Layer_riji");
    document.getElementById("cover").appendChild(ele);
    //cover2
    //主角页面遮蔽层，因为与其它遮蔽层不同，另外写
    var ele = document.createElement("div");
    ele.setAttribute("id","cover_Layer_2");
    document.getElementById("cover2").appendChild(ele);
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover_Layer_closeBtn_2");
    ele.src = "../images/border/body_layer_close.png";
    ele.setAttribute("onclick","coverLayerClose2()");
    document.getElementById("cover2").appendChild(ele);
    //属性
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover_Layer_shuxing");
    ele.src = "../images/border/shuxing.png";
    ele.setAttribute("onclick","cover_Layer_shuxing()");
    document.getElementById("cover2").appendChild(ele);
    //装备
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover_Layer_zhuangbei");
    ele.src = "../images/border/zhuangbei.png";
    ele.setAttribute("onclick","cover_Layer_zhuangbei()");
    document.getElementById("cover2").appendChild(ele);
    //人物各项属性值的显示
    var ele = document.createElement("div");
    ele.setAttribute("id","cover_Layer_3");
    document.getElementById("cover2").appendChild(ele);
    //各项属性的值的创建
    for(var i=0;i<10;++i){
        ele = document.createElement("div");
        ele.setAttribute("id",("cover_Layer_3_"+i));
        ele.appendChild(document.createTextNode(Myrole.attr[i]+Myrole.AddAttr1[i]+Myrole.AddAttr2[i]+Myrole.AddAttr3[i]));
        document.getElementById("cover_Layer_3").appendChild(ele);
    }

    var ele = document.createElement("div");
    ele.setAttribute("id","cover_Layer_4");
    document.getElementById("cover2").appendChild(ele);
    //第1个卡槽
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover_Layer_4_1");
    ele.src = "../images/wuping/wuqi_chao.png";
    ele.setAttribute("onclick","cover2_wuqi_chao()");
    document.getElementById("cover_Layer_4").appendChild(ele);
    //第2个卡槽
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover_Layer_4_2");
    ele.src = "../images/wuping/fanju_chao.png";
    ele.setAttribute("onclick","cover2_fanju_chao()");
    document.getElementById("cover_Layer_4").appendChild(ele);
    //第3个卡槽
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover_Layer_4_3");
    ele.src = "../images/wuping/siping_chao.png";
    ele.setAttribute("onclick","cover2_siping_chao()");
    document.getElementById("cover_Layer_4").appendChild(ele);
    //第4个卡槽
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover_Layer_4_4");
    ele.src = "../images/wuping/shu_chao.png";
    ele.setAttribute("onclick","cover2_shu_chao()");
    document.getElementById("cover_Layer_4").appendChild(ele);

    //cover3
    //点击物品弹出的页面
    ele = document.createElement("div");
    ele.setAttribute("id","cover3_Layer");
    document.getElementById("cover3").appendChild(ele);
    ele = document.createElement("div");
    //cover3_Layer层的各个元素
    ele.setAttribute("id","cover3_Layer_1");
    document.getElementById("cover3_Layer").appendChild(ele);
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover3_Layer_2");
    ele.src = "../images/border/in.png";
    ele.setAttribute("onclick","zhuangBeiWuPingF()");
    document.getElementById("cover3_Layer").appendChild(ele);
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover3_Layer_3");
    ele.src = "../images/border/out.png";
    ele.setAttribute("onclick","xieXiaF()");
    document.getElementById("cover3_Layer").appendChild(ele);
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover3_Layer_4");
    ele.src = "../images/border/body_layer_close.png";
    ele.setAttribute("onclick","CloseZhuangBeiLayer()");
    document.getElementById("cover3_Layer").appendChild(ele);

    //cover4
    ele = document.createElement("input");
    ele.type = "image";
    ele.src = "../images/border/shop_close.png";
    ele.setAttribute("id","cover4_close");
    ele.setAttribute("onclick","cover4_close()");
    document.getElementById("cover4").appendChild(ele);
    ele = document.createElement("div");
    ele.setAttribute("id","cover4_Layer");
    document.getElementById("cover4").appendChild(ele);
    //白银
    ele = document.createElement("div");
    ele.setAttribute("id","cover4_baiying");
    document.getElementById("cover4").appendChild(ele);
    //黄金
    ele = document.createElement("div");
    ele.setAttribute("id","cover4_huangjing");
    document.getElementById("cover4").appendChild(ele);

    ele = document.createElement("div");
    ele.setAttribute("id","cover4_Layer_1");
    document.getElementById("cover4_Layer").appendChild(ele);
    for(var i=0;i<shopHasWuping.length;++i){
        ele = document.createElement("input");
        ele.type = "image";
        ele.setAttribute("class","cover4_shop");
        ele.src=shopHasWuping[i];
        ele.setAttribute("onclick","showBuy(this)");
        document.getElementById("cover4_Layer_1").appendChild(ele);
    }
    
    //点击物品弹出的购买页面
    ele = document.createElement("div");
    ele.setAttribute("id","cover4_Layer_2");
    document.getElementById("cover4").appendChild(ele);
    ele = document.createElement("div");
    //cover4_Layer层的各个元素
    ele.setAttribute("id","cover4_Layer_2_1");
    document.getElementById("cover4_Layer_2").appendChild(ele);
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover4_Layer_2_2");
    ele.src = "../images/border/goumai.png";
    ele.setAttribute("onclick","goumaiF()");
    document.getElementById("cover4_Layer_2").appendChild(ele);
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover4_Layer_2_3");
    ele.src = "../images/border/bumai.png";
    ele.setAttribute("onclick","bumaiF()");
    document.getElementById("cover4_Layer_2").appendChild(ele);
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover4_Layer_2_4");
    ele.src = "../images/border/body_layer_close.png";
    ele.setAttribute("onclick","closeCover4_Layer()");
    document.getElementById("cover4_Layer_2").appendChild(ele);
    ele = document.createElement("div");
    ele.setAttribute("id","cover4_Layer_2_5");
    document.getElementById("cover4_Layer_2").appendChild(ele);
    ele = document.createElement("div");
    ele.setAttribute("id","cover4_Layer_2_6");
    document.getElementById("cover4_Layer_2").appendChild(ele);

    //物品购买失败的界面
    ele = document.createElement("div");
    ele.setAttribute("id","cover4_Layer_3");
    document.getElementById("cover4").appendChild(ele);
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover4_Layer_3_1");
    ele.src = "../images/border/body_layer_close.png";
    ele.setAttribute("onclick","closeNoWuping()");
    document.getElementById("cover4_Layer_3").appendChild(ele);
    ele = document.createElement("div");
    ele.setAttribute("id","cover4_Layer_3_2");
    document.getElementById("cover4_Layer_3").appendChild(ele);
    ele = document.createElement("div");
    ele.setAttribute("id","cover4_Layer_3_3");
    document.getElementById("cover4_Layer_3").appendChild(ele);

    //cover5
    ele = document.createElement("div");
    ele.setAttribute("id","cover5_1");
    document.getElementById("cover5").appendChild(ele);
    ele = document.createElement("div");
    ele.setAttribute("id","cover5_2");
    document.getElementById("cover5").appendChild(ele);
    ele = document.createElement("div");
    ele.setAttribute("id","cover5_3");
    ele.setAttribute("onclick","nextSpeaking()");
    document.getElementById("cover5").appendChild(ele);
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover5_4");
    ele.src = "../images/border/over.png";
    ele.setAttribute("onclick","closeSpeaking()");
    document.getElementById("cover5").appendChild(ele);
    //cover6
    ele = document.createElement("div");
    ele.setAttribute("id","cover6_1");
    document.getElementById("cover6").appendChild(ele);
    ele = document.createElement("h1");
    ele.setAttribute("id","cover6_1_1");
    //ele.innerHTML = "是否接受比试？";
    document.getElementById("cover6_1").appendChild(ele);
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover6_1_2");
    //ele.setAttribute("src","../images/border/jieshoutiaozhan.png");
    //ele.setAttribute("onclick","jieshoutiaozhan()");
    document.getElementById("cover6_1").appendChild(ele);
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover6_1_3");
    //ele.setAttribute("src","../images/border/jujuetiaozhan.png");
    //ele.setAttribute("onclick","jujuetiaozhan()");
    document.getElementById("cover6_1").appendChild(ele);
    ele = document.createElement("input");
    ele.setAttribute("id","cover6_1_4");
    ele.type = "image";
    ele.setAttribute("src","../images/bg/err.png");
    ele.setAttribute("onclick","cover6_closeStudy()");
    document.getElementById("cover6_1").appendChild(ele);
    //cover7
    /*
    ele = document.createElement("input");
    ele.setAttribute("id","cover7_1");
    ele.type = "image";
    ele.setAttribute("src","../images/bg/err.png");
    ele.setAttribute("onclick","");
    document.getElementById("cover7").appendChild(ele);
    */
}


coverLayer();
coverLayerDom = document.getElementById("cover_Layer");

//系统按钮点击反应函数
function xitong(){
    xitongDom.style.display = "block";
    document.getElementById("main").style.display = "none";
    mainFrameDom.style.display = "none";
    document.getElementById("Top").style.display = "none";
    audioTurn.audioPlay(16);
}

function xitongClose(){
    xitongDom.style.display = "none";
    document.getElementById("main").style.display = "block";
    document.getElementById("Top").style.display = "block";
    $('#mainFrame_Talk_word').empty();
    audioTurn.audioPlay(1);
}
function wuping(){
    document.getElementById("cover_Layer_riji").style.display="none";
    coverDom.style.display = "block";
    //顶部信息
    var ele = document.createElement("p");
    ele.appendChild(document.createTextNode("物品列表"));
    coverLayerDom.appendChild(ele);
    //物品左边的按钮1
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover_Layer_Wuping_btn1");
    ele.src = "../images/border/wuping_left_1.png";
    ele.setAttribute("onclick","wuping_show_1()");
    coverLayerDom.appendChild(ele);
    //上面创建的按钮控制的一个div
    ele = document.createElement("div");
    ele.setAttribute("id","cover_Layer_Wuping_div1");
    coverLayerDom.appendChild(ele);

    //物品左边的按钮2
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover_Layer_Wuping_btn2");
    ele.src = "../images/border/wuping_left_2.png";
    ele.setAttribute("onclick","wuping_show_2()");
    coverLayerDom.appendChild(ele);

    //上面创建的按钮控制的一个div
    ele = document.createElement("div");
    ele.setAttribute("id","cover_Layer_Wuping_div2");
    coverLayerDom.appendChild(ele);

    //物品左边的按钮3
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover_Layer_Wuping_btn3");
    ele.src = "../images/border/wuping_left_3.png";
    ele.setAttribute("onclick","wuping_show_3()");
    coverLayerDom.appendChild(ele);
    
    //上面创建的按钮控制的一个div
    ele = document.createElement("div");
    ele.setAttribute("id","cover_Layer_Wuping_div3");
    coverLayerDom.appendChild(ele);

    //物品左边的按钮4
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover_Layer_Wuping_btn4");
    ele.src = "../images/border/wuping_left_4.png";
    ele.setAttribute("onclick","wuping_show_4()");
    coverLayerDom.appendChild(ele);

    //上面创建的按钮控制的一个div
    ele = document.createElement("div");
    ele.setAttribute("id","cover_Layer_Wuping_div4");
    coverLayerDom.appendChild(ele);

    //物品左边的按钮5
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","cover_Layer_Wuping_btn5");
    ele.src = "../images/border/wuping_left_5.png";
    ele.setAttribute("onclick","wuping_show_5()");
    coverLayerDom.appendChild(ele);
    //上面创建的按钮控制的一个div
    ele = document.createElement("div");
    ele.setAttribute("id","cover_Layer_Wuping_div5");
    coverLayerDom.appendChild(ele);
    var cover_Layer_Wuping_div1Dom = document.getElementById("cover_Layer_Wuping_div1");
    var cover_Layer_Wuping_div2Dom = document.getElementById("cover_Layer_Wuping_div2");
    var cover_Layer_Wuping_div3Dom = document.getElementById("cover_Layer_Wuping_div3");
    var cover_Layer_Wuping_div4Dom = document.getElementById("cover_Layer_Wuping_div4");
    var cover_Layer_Wuping_div5Dom = document.getElementById("cover_Layer_Wuping_div5");
    for(var i=0;i<hasWuping.length;++i){
        var str = WupingName(hasWuping[i]);
        ele = document.createElement("input");
            ele.type = "image";
            ele.src = (hasWuping[i]);
            if(str!='yao'&&str!='teshu')
            ele.setAttribute("onclick","showZhuangbeiF(this)");
        if(str == "wuqi"||str == "fanju"||str=="siping"){
            cover_Layer_Wuping_div2Dom.appendChild(ele);
        }else if(str=="yao"){
            cover_Layer_Wuping_div4Dom.appendChild(ele);
        }else if(str=="shu"){
            cover_Layer_Wuping_div3Dom.appendChild(ele);
        }else if(str=="teshu"){
            cover_Layer_Wuping_div5Dom.appendChild(ele);
        }
            ele = document.createElement("input");
            ele.type = "image";
            ele.src = (hasWuping[i]);
            if(str!='yao'&&str!='teshu')
            ele.setAttribute("onclick","showZhuangbeiF(this)");
            cover_Layer_Wuping_div1Dom.appendChild(ele);
    }
    wuping_show_1();
}
function riji(){
    document.getElementById("cover_Layer_riji").style.display="block";
    coverDom.style.display = "block";
    //顶部信息
    var ele = document.createElement("p");
    ele.appendChild(document.createTextNode("江湖日记"));
    coverLayerDom.appendChild(ele);

}
function duiwu(){
    document.getElementById("cover_Layer_riji").style.display="none";
    coverDom.style.display = "block";
    //人物信息改为图片欣赏
    var ele=document.createElement("div");
    $(ele).css({"position":"absolute","top":"20%","left":"20%","backgroundImage":"url(../images/bg/zhujiao_data.png)","backgroundSize":"100% 100%","width":"60%","height":"65%"});
    document.getElementById("cover_Layer").appendChild(ele);
}
function coverLayerClose(){
    coverDom.style.display = "none";
    $("#cover_Layer").empty();
    document.getElementById("cover_Layer_riji").style.display="none";
}
function coverLayerClose2(){
    document.getElementById("cover2").style.display = "none";
}
//创建系统页面函数
function createXitong(){
    //系统按钮
    var ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","mainFrame_Talk_btn1");
    ele.src = "../images/border/xitong.png";
    ele.setAttribute("onclick","xitong()");
    //提示信息框
    ele.onmouseover=function(){document.getElementById('inputText').style.display="block";inputText("系统",'15%','20%');};
    ele.onmouseout=function(){document.getElementById('inputText').style.display="none";};
    mainFrameDom.appendChild(ele);
//主界面的按钮，不要太大，所以要重新写，但还是使用相同的函数
    //系统按钮
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","main_Talk_btn1");
    ele.src = "../images/border/xitong.png";
    ele.setAttribute("onclick","xitong()");
    //提示信息框
    ele.onmouseover=function(){document.getElementById('inputText').style.display="block";inputText("系统",'10%','15%');};
    ele.onmouseout=function(){document.getElementById('inputText').style.display="none";};

    mainDom.appendChild(ele);
    
}
//创建物品页面函数
function createWuping(){
    //物品按钮
    var ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","mainFrame_Talk_btn2");
    ele.src = "../images/border/wuping.png";
    ele.setAttribute("onclick","wuping()");
     //提示信息框
    ele.onmouseover=function(){document.getElementById('inputText').style.display="block";inputText("物品",'25%','5%');};
    ele.onmouseout=function(){document.getElementById('inputText').style.display="none";};
    mainFrameDom.appendChild(ele);
    //主界面的按钮，不要太大，所以要重新写，但还是使用相同的函数
    //物品按钮
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","main_Talk_btn2");
    ele.src = "../images/border/wuping.png";
    ele.setAttribute("onclick","wuping()");

    //提示信息框
    ele.onmouseover=function(){document.getElementById('inputText').style.display="block";inputText("物品",'18%','5%');};
    ele.onmouseout=function(){document.getElementById('inputText').style.display="none";};

    mainDom.appendChild(ele);
}
//创建日记页面函数
function createRiji(){
    //日记按钮
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","mainFrame_Talk_btn3");
    ele.src = "../images/border/riji.png";
    ele.setAttribute("onclick","riji()");
    //提示信息框
    ele.onmouseover=function(){document.getElementById('inputText').style.display="block";inputText("日记",'19%','33%');};
    ele.onmouseout=function(){document.getElementById('inputText').style.display="none";};
    mainFrameDom.appendChild(ele);
//主界面的按钮，不要太大，所以要重新写，但还是使用相同的函数
    //日记按钮
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","main_Talk_btn3");
    ele.src = "../images/border/riji.png";
    ele.setAttribute("onclick","riji()");

    //提示信息框
    ele.onmouseover=function(){document.getElementById('inputText').style.display="block";inputText("日记",'14%','28%');};
    ele.onmouseout=function(){document.getElementById('inputText').style.display="none";};

    mainDom.appendChild(ele);
}
//创建队伍页面函数
function createDuiwu(){
     //队伍按钮
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","mainFrame_Talk_btn4");
    ele.src = "../images/border/duiwu.png";
    ele.setAttribute("onclick","duiwu()");
    //提示信息框
    ele.onmouseover=function(){document.getElementById('inputText').style.display="block";inputText("队伍",'8%','40%');};
    ele.onmouseout=function(){document.getElementById('inputText').style.display="none";};
    mainFrameDom.appendChild(ele);
//主界面的按钮，不要太大，所以要重新写，但还是使用相同的函数
    
    //队伍按钮
    ele = document.createElement("input");
    ele.type = "image";
    ele.setAttribute("id","main_Talk_btn4");
    ele.src = "../images/border/duiwu.png";
    ele.setAttribute("onclick","duiwu()");
    //提示信息框
    ele.onmouseover=function(){document.getElementById('inputText').style.display="block";inputText("队伍",'3%','35%');};
    ele.onmouseout=function(){document.getElementById('inputText').style.display="none";};
    mainDom.appendChild(ele);
}
//进入场景后的介绍信息
function createTalk(){
    //信息介绍框
    var ele = document.createElement("div");
    ele.setAttribute("id","mainFrame_Talk");
    mainFrameDom.appendChild(ele);
    //信息的再下一层
    ele = document.createElement("div");
    ele.setAttribute("id","mainFrame_Talk_word");
    document.getElementById("mainFrame_Talk").appendChild(ele);
    createDuiwu();
    createRiji();
    createXitong();
    createWuping();
}
createTalk();

//系统页面的按钮创建
function CreateXitongBtn(){
    var ele = document.createElement("input");
    ele.setAttribute("id","xitong_close");
    ele.type = "image";
    ele.src = "../images/border/xitong_close.png";
    ele.setAttribute("onclick","xitongClose()");
    document.getElementById("xitong").appendChild(ele);
}
CreateXitongBtn();