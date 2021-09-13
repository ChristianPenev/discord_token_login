console.log("background.js is ready!");
chrome.runtime.onMessage.addListener(function(messsage,sender, sendResponce) {
    if(messsage.popupOpen) {
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            let url = tabs[0].url;
            console.log(url);
            if(url === "https://discord.com/channels/@me") {
                chrome.runtime.sendMessage({alreadycon: true});
            }
        });
    }
});
chrome.runtime.onMessage.addListener(function(message,sender,sendResponce) {
    if(message.info === "clicked") {
        setTimeout(() => {
            chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
                let url = tabs[0].url;
                console.log(url);
                if(url === "https://discord.com/login") {
                    chrome.runtime.sendMessage({failed: true});
                }
            }); 
        }, 4000);
    }
});