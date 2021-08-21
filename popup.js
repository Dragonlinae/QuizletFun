document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById("go");
    btn.addEventListener("click", nomCookie);
});

async function nomCookie(){

    chrome.cookies.getAll({domain: "quizlet.com"}, function(cookies) {
        for(var i=0; i<cookies.length;i++) {
            chrome.cookies.remove({url: "https://quizlet.com" + cookies[i].path, name: cookies[i].name});
        }
        // TODO: Refresh page if refresh page toggle is toggled
        //chrome.extension.getBackgroundPage().window.location.reload(true)
    });
}