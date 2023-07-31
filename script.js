const startButton = document.querySelector(".start");

startButton.addEventListener("click", insertIcons);

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
    
    const iconsContainer = document.querySelector(".icon-container");
    const iconNodesContainer = document.createElement('div');
    document.querySelector(".rps-icon").remove();    
    
    for (const icon in icons) {        
        iconNodesContainer.appendChild(createImgElement(icons[icon]));
    }
    iconsContainer.appendChild(iconNodesContainer);

    insertSelectionPar();
}

// Creates image element and add attributes and value to it
function createImgElement(attrObj) {
    const img = document.createElement('img');
    // Iterate through attribute objects
    for (const attr in attrObj) {
        img.setAttribute(attr, attrObj[attr]);
    }
    return img;
}

// Switches to Selection Paragraph
function insertSelectionPar() {
    const startButtonDiv = document.querySelector(".start-container");
    const startButtonPar = document.querySelector(".start");
    const selectionPar = document.createElement('p');
    selectionPar.appendChild(document.createTextNode("CHOOSE YOUR WEAPON"));
    startButtonDiv.replaceChild(selectionPar, startButtonPar);
}


