function omikuji() {
    var num = Math.floor(Math.random() * 5);
    var msg = "";
    switch (num) {
        case 0:
            msg = "今日は凶";
            break;
        case 1:
            msg = "協力したら凶";
            break;
        case 2:
            msg = "狂ってる、、凶";
            break
        case 3:
            msg = "共有押した二番目の人が凶";
            break
        case 4:
            msg = "鏡を見たら凶";
            break
        default:
            msg = "見えるはずのないものが見えてるのであなたは凶です";
            break;
    };
    var elem = document.getElementById("omikuji");
    if (elem) {
        elem.innerHTML = msg;
    }
}
