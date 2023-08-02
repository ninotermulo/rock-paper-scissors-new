const startButton = document.querySelector("#p-container > p");
startButton.addEventListener("click", switchSelectPage);

function switchSelectPage() {
    startButton.removeEventListener("click", switchSelectPage);
    insertIcons();
    let iconElements = document.querySelectorAll('img.icons');
    iconElements.forEach((item) => {
    item.addEventListener('click', getUserChoice)});
    changePar('#p-container > p', 'CHOOSE YOUR WEAPON');
}

function insertIcons() {
     const icons = {
         rockIcon: {
             'id': 'rock',   
             'src':'/images/icons/rock-icon.png',
             'class': 'icons'},
         paperIcon: {
             'id': 'paper',
             'src':'/images/icons/paper-icon.png',
             'class': 'icons'},
         scissorIcon: {
             'id': 'scissor',
             'src':'/images/icons/scissor-icon.png',
             'class': 'icons'}
         };
    
    const imgCont = document.querySelector("#icon-container");
    if (imgCont.querySelector('.rps') !== null) {
        document.querySelector('.rps').replaceWith(createImgElement(icons.paperIcon));
    }
    imgCont.insertBefore(createImgElement(icons.rockIcon), document.querySelector("#paper"));
    imgCont.appendChild(createImgElement(icons.scissorIcon), document.querySelector("#paper"));

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
    const nodeElem = document.querySelector(element);
    nodeElem.innerText = paragraph;
    nodeElem.classList.remove("start-hover");
    nodeElem.style.cursor = "text";
}

function getUserChoice(e) {
    return e.target.id;    
}

function getComputerChoice() {
    const computerChoice = Math.floor((Math.random() * 3)) + 1;
    switch(computerChoice) {
      case 1:
        return "rock";
      case 2:
        return "paper";
      case 3:
        return "scissor";
    }
}
