chrome.runtime.onMessage.addListener(function(token) {
    setInterval(() => {
    document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
    }, 50);
    setTimeout(() => {
    location.reload();
    chrome.runtime.sendMessage({status: "conected"}, function(response) {
        console.log("I sended a message");
    });
    }, 2500);
})