document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    const messageStatus = document.getElementById('message-status');

    if (status) {
        messageStatus.textContent = status;
        messageStatus.style.display = 'block';
        if (status === 'Message Sent') {
            messageStatus.classList.add('message-success');
        } else {
            messageStatus.classList.add('message-fail');
        }
    }
});
