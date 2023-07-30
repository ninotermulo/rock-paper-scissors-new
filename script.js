const startButton = document.querySelector(".start");

startButton.addEventListener("click", (e) => {
    const iconsContainer = document.createElement('div');
    iconsContainer.setAttribute('id', 'choice-cont');
    console.log(e);
    
    const rockIcon = document.createElement('img');
    rockIcon.setAttribute('src', "/images/icons/rock-icon.png");
    rockIcon.setAttribute('class', "icons");
    
    const paperIcon = document.createElement('img');
    paperIcon.setAttribute('src', "/images/icons/paper-icon.png");
    paperIcon.setAttribute('class', "icons");
    
    const scissorIcon = document.createElement('img');
    scissorIcon.setAttribute('src', "/images/icons/scissor-icon.png");
    scissorIcon.setAttribute('class', "icons");
    
    iconsContainer.appendChild(rockIcon);
    iconsContainer.appendChild(paperIcon);
    iconsContainer.appendChild(scissorIcon);

    const rpsIcon = document.querySelector(".rps-icon");
    document.querySelector(".icon-container").replaceChild(iconsContainer, rpsIcon);
});