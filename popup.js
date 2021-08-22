document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById("go");
    btn.addEventListener("click", nomCookie);
});

nommedCookies = 0;
chrome.storage.local.get("nommies", function(noms){
    if (noms.nommies == undefined){
        noms.nommies = 0;
    }
    document.getElementsByClassName("cookiecounter")[0].innerHTML = noms.nommies;
});
async function nomCookie(){


    chrome.cookies.getAll({domain: "quizlet.com"}, function(cookies) {
        for(var i=0; i<cookies.length;i++) {
            chrome.cookies.remove({url: "https://quizlet.com" + cookies[i].path, name: cookies[i].name});
        }

        chrome.storage.local.get("nommies", function(noms){
            if (noms.nommies == undefined){
                noms.nommies = 0;
            }
            nommedCookies = noms.nommies + cookies.length;
            document.getElementsByClassName("cookiecounter")[0].innerHTML = nommedCookies;
            chrome.storage.local.set({ "nommies": nommedCookies }, function(){
                if (document.getElementById("toggle1").checked) {
                    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                        chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
                    });
                }
            }); 
        });
    });
}