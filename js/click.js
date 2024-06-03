(function () {
    var a_idx = 0;
    window.onclick = function (event) {
        var a = new Array("不忘初心，砥砺前行","勇往直前，无所畏惧","攀登高峰，永不止步","百炼成钢，终成大器","勇敢闯荡，收获无限","不言放弃，只言成功","信念坚定，必定胜利","拼搏奋斗，光荣无悔"
,"坚持不懈，梦想成真");

        var heart = document.createElement("b"); 
        heart.onselectstart = new Function('event.returnValue=false'); 

        document.body.appendChild(heart).innerHTML = a[a_idx]; 
        a_idx = (a_idx + 1) % a.length;
        heart.style.cssText = "position: fixed;left:-100%;"; 

        var f = 16, 
            x = event.clientX - f / 2, 
            y = event.clientY - f, 
            c = randomColor(), 
            a = 1, 
            s = 1.2; 

        var timer = setInterval(function () { 
            if (a <= 0) {
                document.body.removeChild(heart);
                clearInterval(timer);
            } else {
                heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" +
                    c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
                    s + ");";

                y--;
                a -= 0.016;
                s += 0.002;
            }
        }, 15)

    }
    function randomColor() {

        return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
        .random() * 255)) + ")";

    }
}());