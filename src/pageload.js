
const firstLoad = (() => {
    const content = document.querySelector('.content');

    const bg = document.createElement('div');
    bg.className = "bgg";
    document.body.insertBefore(bg, content);

    const tabBar = document.createElement('div');
    tabBar.className = "tab-bar";
    document.body.insertBefore(tabBar, bg);


    const btnContact = document.createElement('button');
    btnContact.className = "btnNav"
    btnContact.textContent = "Contact";
    tabBar.appendChild(btnContact);
    const btnMenu = document.createElement('button');
    btnMenu.className = "btnNav"
    btnMenu.textContent = "Menu";
    tabBar.appendChild(btnMenu);
    const btnHome = document.createElement('button');
    btnHome.className = "btnNav"
    btnHome.textContent = "Home";
    tabBar.appendChild(btnHome);
    

    const header = document.createElement('h1');
    header.textContent = "0xtaf's Restaurant";
    header.className = "header";
    content.appendChild(header);


    const sentence = document.createElement('p');
    sentence.textContent = "Inspired JavaScript Cuisine";
    sentence.className = "intro";
    content.appendChild(sentence);

    const color = document.createElement('div');
    color.className = "color";
    document.body.appendChild(color);

    const newbg = document.createElement('div');
    newbg.className = "menu";
    document.body.insertBefore(newbg, content);
    newbg.style.display = "none";

    const contactArea = document.createElement('div');
    contactArea.className = "contact";
    document.body.appendChild(contactArea);
    const contact1 = document.createElement('h1');
    contact1.textContent = "DROP ME A MESSAGE";
    contact1.className = "contact1";
    contactArea.appendChild(contact1);
    const contact2 = document.createElement('p');
    contact2.textContent = "Let me know if you'd like to share any opinions or suggestions.";
    contact2.className = "contact2";
    contactArea.appendChild(contact2);
    const contact3 = document.createElement('h1');
    contact3.textContent = "EMAIL";
    contact3.className = "contact3";
    contactArea.appendChild(contact3);
    const contact4 = document.createElement('p');
    contact4.textContent = "tayfunsur@gmail.com";
    contact4.className = "contact4";
    contactArea.appendChild(contact4);
    const contact5 = document.createElement('h1');
    contact5.textContent = "GITHUB";
    contact5.className = "contact5";
    contactArea.appendChild(contact5);
    const contact6 = document.createElement('a');
    contact6.href ="http://github.com/0xtaf";
    contact6.textContent ="http://github.com/0xtaf";
    contact6.className = "contact6";
    contactArea.appendChild(contact6);
    const contact7 = document.createElement('h1');
    contact7.textContent = "TWITTER";
    contact7.className = "contact7";
    contactArea.appendChild(contact7);
    const contact8 = document.createElement('a');
    contact8.href = "https://twitter.com/OdbTayfun";
    contact8.textContent = "https://twitter.com/OdbTayfun";
    contact8.className = "contact8";
    contactArea.appendChild(contact8);
    contactArea.style.display = "none";

    return {btnHome,btnMenu,btnContact};

})();

export default firstLoad;