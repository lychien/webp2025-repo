var container = document.getElementById('container');
 
window.addEventListener("keyup", function(e) {
    console.log(e.key);
    if (/^[a-z]$/.test(e.key) && container.innerText.length > 0) {
        // 只檢查第一個字元是否與 e.key 一樣
        if (container.innerText[0] === e.key) {
            // 只移除第一個字元
            container.innerText = container.innerText.substring(1);
        }
    }
    add_new_chars();
});
 
function add_new_chars() {
    let randomLength = Math.floor(Math.random() * 3) + 1; // 產生 1~3 的隨機數
    let randomChars = '';
    for (let i = 0; i < randomLength; i++) {
        randomChars += String.fromCharCode(97 + Math.floor(Math.random() * 26)); // 產生 a~z 的隨機字元
    }
    container.innerText += randomChars; // 添加到 container 內
}
 
// 確保一開始就有字元
add_new_chars();