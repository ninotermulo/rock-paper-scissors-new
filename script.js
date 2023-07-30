const startButton = document.querySelector(".start");

startButton.addEventListener("click", (e) => {
    const iconsContainer = document.createElement('div');
    iconsContainer.setAttribute('id', 'choice-cont');
    
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
    console.log(iconsContainer);

    const rpsIcon = document.querySelector(".rps-icon");
    document.querySelector(".main-container").replaceChild(iconsContainer, rpsIcon);
});

/*
create selection div wrapper
    - add id attribute to div
add rock icon image inside div
add paper icon image inside div
add scissor icon image inside div
    - add class attribute and value for hover effect
replace rps-icon.png img element with div wrapper with icons
create p element
create  text node for selection statement
append text node inside p element
replace p element 'start' with p element selection
*/
