document.getElementById('submitBtn').addEventListener('click', function () {
    var username = document.getElementById('username').value;
    var message = document.getElementById('message').value;
    if (message === '') {
        alert('请输入内容');
        return;
    }
    if (username === '') {
        username = '匿名';
    }
    var messageBoard = document.getElementById('messageBoard');
    var newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.innerHTML = '<div class="message-info"><div class="info"><img src="../font/me.png"><strong>'
        + username + '</strong></div><span>发布于：' + getCurrentTime() +
        '</span></div><div class="mcontent">' + message + '</div>';
    messageBoard.insertBefore(newMessage, messageBoard.firstChild);
    document.getElementById('username').value = '';
    document.getElementById('message').value = '';
});
function getCurrentTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = ('0' + (now.getMonth() + 1)).slice(-2);
    var day = ('0' + now.getDate()).slice(-2);
    var hours = ('0' + now.getHours()).slice(-2);
    var minutes = ('0' + now.getMinutes()).slice(-2);
    var seconds = ('0' + now.getSeconds()).slice(-2);
    return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
}