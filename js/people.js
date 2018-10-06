var roleElement ={
    //人物属性
    /*
    "quan_zhang":50,
    "jian_fa":50,
    "dao_fa":50,
    "qi_men":50,
    "bi_li":50,
    "shen_fa":50,
    "wu_xing":50,
    "fu_yuan":50,
    "geng_gu":50,
    "ding_li":50,
    */
   attr:[50,50,50,50,50,50,50,50,50,50],
   //增加属性槽1
   AddAttr1:[0,0,0,0,0,0,0,0,0,0],
   //增加属性槽2
   AddAttr2:[0,0,0,0,0,0,0,0,0,0],
   AddAttr3:[0,0,0,0,0,0,0,0,0,0],
    //是否使用了装备槽
    "wuqi":false,
    "fanju":false,
    "siping":false,
    "shu":false,
    //生命值
    "life":100,
    //攻击力计算函数
    getAttck:function(obj){
        return parseInt((this.attr[0]+this.attr[4]+this.attr[9])*1.0/(obj.attr[5]+obj.attr[7]+obj.attr[8]))+parseInt(Math.random()*10)+15;
    }
};

var EnemyElement = {
    //人物属性
    /*
    "quan_zhang":50,
    "jian_fa":50,
    "dao_fa":50,
    "qi_men":50,
    "bi_li":50,
    "shen_fa":50,
    "wu_xing":50,
    "fu_yuan":50,
    "geng_gu":50,
    "ding_li":50,
    */
   attr:{"0":50,"1":50,"2":50,"3":50,"4":50,"5":50,"6":50,"7":50,"8":50,"9":50},
    //生命值
    "life":100,
    //攻击力计算函数
    getAttck:function(obj){
        return parseInt((this.attr[0]+this.attr[4]+this.attr[9])*1.0/(obj.attr[5]+obj.attr[7]+obj.attr[8]))+parseInt(Math.random()*10)+5;
    }
};
var Myrole = roleElement;
var Myenemy = EnemyElement; 