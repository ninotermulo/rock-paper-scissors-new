const startButton = document.querySelector(".start");

startButton.addEventListener("click", insertIcons);

function insertIcons() {
    const rockIcon = document.createElement('img');
    rockIcon.setAttribute('src', "/images/icons/rock-icon.png");
    rockIcon.setAttribute('class', "icons");
    
    const paperIcon = document.createElement('img');
    paperIcon.setAttribute('src', "/images/icons/paper-icon.png");
    paperIcon.setAttribute('class', "icons");
    
    const scissorIcon = document.createElement('img');
    scissorIcon.setAttribute('src', "/images/icons/scissor-icon.png");
    scissorIcon.setAttribute('class', "icons");

    const iconsContainer = document.querySelector(".icon-container");
    const iconNodesContainer = document.createElement('div');
    document.querySelector(".rps-icon").remove();
    
    iconNodesContainer.appendChild(rockIcon);
    iconNodesContainer.appendChild(paperIcon);
    iconNodesContainer.appendChild(scissorIcon);
    iconsContainer.appendChild(iconNodesContainer);

    const startButtonDiv = document.querySelector(".start-container");
    const selectionState = document.createElement('p');
    selectionState.appendChild(document.createTextNode("CHOOSE YOUR WEAPON"));
    startButtonDiv.replaceChild(selectionState, startButton);
}


