export function loadMore(ele, callback) {
    let timer;
    ele.addEventListener("scroll", function () {
        try {
            clearTimeout(timer)
        } catch (e) {
            console.log(e);
        }

        timer = setTimeout(()=> {
            let {offsetHeight, scrollTop, scrollHeight} = ele;
            if (offsetHeight + scrollTop + 20 > scrollHeight) {
                callback();
            }
        }, 300)
    }, false)
}
export function pullRefresh(ele, callback) {
    let distance = ele.offsetTop;
    let startY, move;

    function touchmove(e) {
        move = e.touches[0].pageY - startY;
        if (move > 0) {
            if (move > 80) {
                move = 80;
            }

            ele.style.top = move + distance + "px"
        } else {
            ele.removeEventListener("touchmove", touchmove)
            ele.removeEventListener("touchend", touchend)
        }
    }

    function touchend() {//清空事件
        if (move < 80) {
            return ele.style.top = distance + "px";
        }
        move = 0;
        ele.style.top = move + distance + "px";
        ele.removeEventListener("touchmove", touchmove)
        ele.removeEventListener("touchend", touchend)
    }

    function touchstart(e) {
        startY = e.touches[0].pageY;
        if (ele.scrollTop === 0 && ele.offsetTop === distance) {
            ele.addEventListener("touchmove", touchmove)
            ele.addEventListener("touchend", touchend)
        }
    }

    ele.addEventListener("touchstart", touchstart, false)
}