function kyoto() {
    var num = Math.floor(Math.random() * 5);
    var msg = "";
    switch (num) {
        case 0:
            msg = "北海道";
            break;
        case 1:
            msg = "青森";
            break;
        case 2:
            msg = "岩手";
            break;
        case 3:
            msg = "宮城";
            break;
        case 4:
            msg = "秋田";
            break;
        case 5:
            msg = "山形";
            break;
        case 6:
            msg = "福島";
            break;
        case 7:
            msg = "群馬";
            break;
        case 8:
            msg = "栃木";
            break;
        case 9:
            msg = "茨城";
            break;
        case 10:
            msg = "埼玉";
            break;
        case 11:
            msg = "千葉";
            break;
        case 12:
            msg = "東京";
            break;
        case 13:
            msg = "神奈川";
            break;
        case 14:
            msg = "新潟";
            break;
        case 15:
            msg = "富山";
            break;
        case 16:
            msg = "石川";
            break;
        case 17:
            msg = "福井";
            break;
        case 18:
            msg = "長野";
            break;
        case 19:
            msg = "山梨";
            break;
        case 20:
            msg = "岐阜";
            break;
        case 21:
            msg = "静岡";
            break;
        case 22:
            msg = "愛知";
            break;
        case 23:
            msg = "京都";
            break;
        case 24:
            msg = "兵庫";
            break;
        case 25:
            msg = "大阪";
            break;
        case 26:
            msg = "奈良";
            break;
        case 27:
            msg = "滋賀";
            break;
        case 28:
            msg = "三重";
            break;
        case 29:
            msg = "和歌山";
            break;
        case 30:
            msg = "鳥取";
            break;
        case 31:
            msg = "島根";
            break;
        case 32:
            msg = "山口";
            break;
        case 33:
            msg = "岡山";
            break;
        case 34:
            msg = "広島";
            break;
        case 35:
            msg = "香川";
            break;
        case 36:
            msg = "愛媛";
            break;
        case 37:
            msg = "徳島";
            break;
        case 38:
            msg = "高知";
            break;
        case 39:
            msg = "福岡";
            break;
        case 40:
            msg = "大分";
            break;
        case 41:
            msg = "佐賀";
            break;
        case 42:
            msg = "長崎";
            break;
        case 43:
            msg = "宮崎";
            break;
        case 44:
            msg = "熊本";
            break;
        case 45:
            msg = "鹿児島";
            break;
        case 46:
            msg = "沖縄";
            break;
        default:
            msg = "見えるはずのないものが見えてるのであなたは宇宙行きです。";
            break;
    };
    var elem = document.getElementById("kyoto");
    var text = msg += "行こう。"
    if (elem) {
        elem.innerHTML = text;
    }
}
