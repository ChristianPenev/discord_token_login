//background
chrome.runtime.sendMessage({popupOpen: true});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', onclick, false);
    function onclick() {
        var token = document.getElementById("token").value
        chrome.tabs.getSelected(null, function(tab) {
            window.id = tab.id;
        });
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            chrome.tabs.sendMessage(window.id,token);
        });
        document.getElementById("status").innerHTML = "Conecting...";
        document.getElementById("status").style = "color: orange";
        chrome.runtime.sendMessage({info: "clicked"});
    }
}, false);
chrome.runtime.onMessage.addListener(function(request,sender,sendResponce) {
    if(request.status === "conected") {
        document.getElementById("status").innerHTML = "Conected to the Discord's API !";
        document.getElementById("status").style = "color: green";
    }
});
chrome.runtime.onMessage.addListener(function(request,sender,sendResponce) {
    if(request.failed) {
        document.getElementById("status").innerHTML = "Conection failed!";
        document.getElementById("status").style = "color: red";
    }
});
chrome.runtime.onMessage.addListener(function(message,sender,sendResponce) {
    if(message.alreadycon) {
        document.getElementById("status").innerHTML = "Conected to the Discord's API !";
        document.getElementById("status").style = "color: green";
    }
});