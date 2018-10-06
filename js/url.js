var gameMoney1 = 1000;//游戏中的初始钱
var gameMoney2 = 0;//游戏中的初始钱
//游戏的时间轴
var gameTimeY = 0,gameTimeM = 1,gameTimeD = 1;
//购买的东西的类型URL
var wupingTypeUrl = "";
var speakCount = 0,speakNum = 0;

//每个场景的对话
//每个数组里面的双数代表的是对话对象，单数为玩家
var roleBtn = [
      /*1*/["施主好!","你好！"],
      /*2*/["阿弥陀佛！","方丈你好！"],
      /*3*/["要帮我伐木吗？"],
      /*4*/["你好，要加入我们仙剑门吗？"],
      /*5*/["我是仙剑门的大弟子，要切磋一下吗？"],
      /*6*/["小兄弟，要跟我混吗？","不用了！","那就与我比试一下如何？"],
      /*7*/["这里非常危险，你还是快走吧。"],
      /*8*/["能施舍我一些钱花吗？"],
      /*9*/["你好！欢迎来到稻花村。"],
      /*10*/["你好！欢迎来到祭坛。"],
      /*11*/["你好！欢迎来到万花谷。"],
      /*12*/["你好！"],
      /*13*/["需要我帮你偷东西吗？"],
      /*14*/["你好！"],
      /*15*/["你好！"],
      /*16*/["你好！想来打猎吗？"],
      /*17*/["汪！汪！汪！"],
      /*18*/["你好！要学琴吗？"],
      /*19*/["你好！"],
      /*20*/["你好！我是这里的大酋长。"],
      /*21*/["你好！我是这里的小酋长。"],
      /*22*/["嗝，有酒吗？给我就告诉你一个秘密。"],
      /*23*/["你好！我是虚竹。","小和尚，你好！","要来切磋一下武功吗？"],
      /*24*/["你好！需要休息一下吗？"],
      /*25*/["你好！要跟我学画画吗？"],
      /*26*/["你好！"],
      /*27*/["搬砖！搬砖！不要吵着我搬砖！"],
      /*28*/["你好！需要看病吗？"],
      /*29*/["你好！我是这里的宫主。"],
      /*30*/["你好！我是这里的少宫主。"],
      /*31*/["你好！我是这里的管家。"],
      /*32*/["要和我比较一下武功吗？"],
      /*33*/["要和我比较一下武功吗？"]
];

//小场景的按钮图片url
var btn = [
            ["../images/roleicon/role_16.png","../images/roleicon/role_3.png","../images/roleicon/role_27.png","../images/mainicon/return.png"],
            ["../images/roleicon/role_2.png","../images/roleicon/role_23.png","../images/roleicon/role_1.png","../images/mainicon/return.png"],
            ["../images/roleicon/role_4.png","../images/roleicon/role_5.png","../images/mainicon/return.png"],
            ["../images/roleicon/role_20.png","../images/roleicon/role_21.png","../images/roleicon/role_7.png","../images/mainicon/return.png"],
            ["../images/roleicon/role_26.png","../images/roleicon/role_9.png","../images/roleicon/role_8.png","../images/mainicon/return.png"],
            ["../images/roleicon/role_33.png","../images/roleicon/role_32.png","../images/mainicon/return.png"],
            ["../images/roleicon/role_13.png","../images/roleicon/role_10.png","../images/mainicon/return.png"],
            ["../images/roleicon/role_18.png","../images/roleicon/role_17.png","../images/roleicon/role_11.png","../images/mainicon/return.png"],
            ["../images/roleicon/role_19.png","../images/mainicon/return.png"],
            ["../images/roleicon/role_29.png","../images/roleicon/role_30.png","../images/roleicon/role_31.png","../images/mainicon/return.png"],
            ["../images/roleicon/role_22.png","../images/roleicon/role_25.png","../images/roleicon/role_28.png","../images/mainicon/return.png"],
            ["../images/roleicon/role_24.png","../images/roleicon/role_6.png","../images/mainicon/return.png"]
];
//当前的场景下标
var jieshaoNum = -1;
//每进入一个小场景就有一段介绍
var jieshao = [
      ["一望无际的草，偶尔看见几只牦牛，阵阵风吹过耳边，你感觉非常舒服！","偏远山区"],
      ["你拾级而上来到天下名刹少林寺，途中听见阵阵钟鸣，顿时精神充沛。","少林寺"],
      ["高耸入云的地方，正是天下闻名的剑术大宗-仙剑门。","仙剑门"],
      ["阴森恐怖，你顿时感觉到双腿注了铅一般，无法动弹半步。","赤蛇部落"],
      ["民风淳朴，与世无争，每个人脸上都洋溢着幸福的笑容。","稻花村"],
      ["想要出名或赚钱，决斗就是就好的方法。","比武场"],
      ["每逢重阳，这里的香火都非常好。","祭坛"],
      ["这里风景如画，许多游客来了都不再愿意离开了","万花谷"],
      ["想要强，那就要来买装备，独家生意，不坑你坑谁？","杂货店"],
      ["名门望族，最好不要挑衅，后果会很严重的哦！","麒麟宫殿"],
      ["仙岛上有许多新奇的玩意，还有特殊惊喜哦","灵犀仙岛"],
      ["驿站，专门给来往的商人服务。","荒漠驿站"]
];
//商店有的物品

var shopHasWuping = [
      "../images/wuping/wuqi_1.png",
      "../images/wuping/wuqi_2.png",
      "../images/wuping/wuqi_3.png",
      "../images/wuping/fanju_1.png",
      "../images/wuping/fanju_2.png",
      "../images/wuping/shu_1.png",
      "../images/wuping/shu_2.png",
      "../images/wuping/siping_1.png",
      "../images/wuping/siping_2.png",
      "../images/wuping/yao_1.png",
      "../images/wuping/yao_2.png",
      "../images/wuping/yao_3.png",
      "../images/wuping/yao_4.png"
];
//我拥有的物品
var wupingNum = 5;
var hasWuping=[
      "../images/wuping/wuqi_1.png",
      "../images/wuping/yao_1.png",
      "../images/wuping/fanju_1.png",
      "../images/wuping/shu_1.png",
      "../images/wuping/teshu_1.png",
      "../images/wuping/siping_1.png"
];
var wuqi_value = [100,200,300,400,500,1000];
var yao_value = [100,300,600,800,1500,3000];
var fanju_value = [100,400,300,400,500,1000];
var shu_value = [100,600,300,400,500,1000];
var siping_value = [100,400,300,900,500,1000];
var teshu_value = [100,20000,300,400,500,1000];

var wuqi_shuxing=[10,11,23,34,12];
var fanju_shuxing=[10,11,23,34,12];
var siping_shuxing=[10,11,23,34,12];