document.addEventListener("annonce", function(e) {
    chrome.runtime.sendMessage({ id : e.detail});
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    
    //console.log("oui",sender);
    //console.log(request);
    const event = new CustomEvent('annonceSelectionne', { detail:{id:request.id, base64:request.base64}});
    document.dispatchEvent(event);
});

