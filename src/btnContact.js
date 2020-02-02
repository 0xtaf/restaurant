function btnContactFunc(){
    

    let oldIntro;
    let oldColor;
    let oldbg;
    let newbg;
    let contactView;

    newbg = document.querySelector('.menu');
    newbg.style.display = "none";

    contactView = document.querySelector('.contact');
    contactView.style.display = "block";


    oldIntro = document.querySelector('.intro');
    oldIntro.textContent = "";

    oldColor = document.querySelector('.color');
    oldColor.className = "colorless";

    oldbg = document.querySelector('.bgg');
    oldbg.className = "blurred";

    


}

export default btnContactFunc;