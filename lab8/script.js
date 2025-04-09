var container = document.getElementById('container');
var wrongCount = 0; // 新增錯誤計數器

window.onload = function() {
    container.textContent = add_new_chars(3);
}

function add_new_chars(x) {
    var n = Math.floor(Math.random() * x) + 1;
    var str = '';
    for (let i = 0; i < n; i++) {
        str += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    return str;
}

window.addEventListener("keyup", function(e) {
    var firstone = container.textContent.substring(0, 1);

    if (e.key === firstone) {
        // 正確輸入，重置錯誤次數
        wrongCount = 0;
        container.textContent = container.textContent.substring(1);
    } else {
        // 錯誤輸入
        wrongCount++;
        container.textContent += e.key;
    }

    // 原本每次輸入都會補上新的亂數字串
    container.textContent += add_new_chars(3);

    // 如果錯誤次數達到 3 次，再額外增加 6 組亂數字串
    if (wrongCount >= 3) {
        container.textContent += add_new_chars(6);
        wrongCount = 0; // 重置錯誤次數以便再次計算
    }
});