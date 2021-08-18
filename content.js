class QuizletFun{

    lastScrollPos = 0;

    initialize() {
        document.addEventListener("scroll", () => this.onDocScroll());
    }

    onDocScroll() {
        const currScrollPos = document.scrollingElement.scrollTop;

        if (Math.abs(currScrollPos - this.lastScrollPos) < 100) {
            return;
        }

        this.lastScrollPos = currScrollPos;
        this.checkForQuizletPopup();
	this.showFlashcards();
    }

    checkForQuizletPopup() {
        
	const delthis = document.getElementsByClassName('wugyavo')

	while(delthis.length>0){
		delthis[0].parentNode.removeChild(delthis[0]);
	}

	const showthis = document.getElementsByClassName('hpidy4b s1oluvjw')

	if(showthis.length>0){
		showthis[0].className=""
	}
    }

    showFlashcards() {
	var MagicCards = document.getElementsByClassName("SetPageTerm has-definitionText"); 
	for (var i = 0; i < MagicCards.length; i++) {
	    MagicCards[i].className = "SetPageTerm has-definitionText is-showing";
	    var AntireadMagicCards = MagicCards[i].cloneNode(true);
	    MagicCards[i].parentNode.replaceChild(AntireadMagicCards, MagicCards[i]);
	}
    }
}

(function () {
    new QuizletFun().initialize();

})();

const injectedCode = `
Quizlet.pickColorTheme("night")
`
var script = document.createElement("script");
script.textContent = injectedCode;
(document.head).appendChild(script);
