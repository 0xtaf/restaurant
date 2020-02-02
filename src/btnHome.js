function btnHomeFunc(){
    
    let content;
    let intro;
    let color;
    let bg;
    let newbg;
    let contactView;

    content = document.querySelector('.content');


    intro = document.querySelector('p');
    intro.className = "intro";
    content.appendChild(intro);
    intro.textContent = "Inspired JavaScript Cuisine";
    color = document.querySelector('.colorless');
    color.className = "color";
    bg = document.querySelector('.blurred');
    bg.className = "bgg";
    newbg = document.querySelector('.menu');
    newbg.style.display = "none";
    contactView = document.querySelector('.contact');
    contactView.style.display = "none";

  
}

export default btnHomeFunc;