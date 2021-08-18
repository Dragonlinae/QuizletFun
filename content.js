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
}

(function () {
    new QuizletFun().initialize();

})();