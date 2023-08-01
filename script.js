const startButton = document.querySelector("#p-container > p");
startButton.addEventListener("click", switchSelectPage);

function switchSelectPage() {
    document.querySelector(".rps").remove();   
    insertIcons();
    let iconElements = document.querySelectorAll('img.icons');
    iconElements.forEach((item) => {
    item.addEventListener('click', iconClick)});
    changePar('#p-container > p', 'CHOOSE YOUR WEAPON');
}

function insertIcons() {
    const icons = {
        rockIcon: {
            'src':'/images/icons/rock-icon.png',
            'class': 'icons'},
        paperIcon: {
            'src':'/images/icons/paper-icon.png',
            'class': 'icons'},
        scissorIcon: {
            'src':'/images/icons/scissor-icon.png',
            'class': 'icons'}
        };
    
    const iconsContainer = document.querySelector("#icon-container");
     
    for (const icon in icons) {        
        iconsContainer.appendChild(createImgElement(icons[icon]));
    }
}

// Creates image element and add attributes and value
function createImgElement(attrObj) {
    const img = document.createElement('img');
    // Iterate through attribute objects
    for (const attr in attrObj) {
        img.setAttribute(attr, attrObj[attr]);
    }
    return img;
}

function changePar(element, paragraph) {
    document.querySelector(element).innerText = paragraph;
    document.querySelector(element).classList.remove("start-hover");
}

function iconClick(e) {
    console.log(e);    
}