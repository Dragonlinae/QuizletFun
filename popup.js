console.log("nom")

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById("go");
    btn.addEventListener("click", nomCookie);
});

function nomCookie(){
    chrome.cookies.getAll({domain: "quizlet.com"}, function(cookies) {
        for(var i=0; i<cookies.length;i++) {
            chrome.cookies.remove({url: "https://quizlet.com" + cookies[i].path, name: cookies[i].name});
        }
    });
}