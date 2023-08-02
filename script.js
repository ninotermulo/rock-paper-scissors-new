const startButton = document.querySelector("#p-container > p");
startButton.addEventListener("click", switchSelectPage);

function switchSelectPage() {
    startButton.removeEventListener("click", switchSelectPage);
    insertIcons();
    let iconElements = document.querySelectorAll('img.icons');
    iconElements.forEach((item) => {
    item.addEventListener('click', checkWinner)});
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

function roundResultPage() {
    /*
    Replace paragraph
        if user win, display 'YOU WIN!'
        else display 'YOU LOSE!'
    
    Create userScore div
    Append p element with text content 'SCORE'
    Append p element for score number
        if user win, add text content 1
        else add text content 0
    
    Create computerScore div
    Append p element with content 'SCORE'
    Append p element for score number
        if opponent win, add text content 1
        else add text content 0

    Create userPickDiv
    Append p element with text content 'YOU'
    Append icon img user clicked

    Create computerDiv
    Append p element with text content 'OPPONENT'
    Append icon img computer randomly picked

    Create p element with text content 'VS'
    */ 
}

// Return object that contains winner, user choice & computer choice
function checkWinner(e) {
    const userPick = e.target.id;
    const computerPick = getComputerChoice();  
    const roundResult = {winner: "", user: userPick, computer: computerPick}
    switch (true) {
        case userPick == "rock" && computerPick == "rock":
        case userPick == "paper" && computerPick == "paper":
        case userPick == "scissor" && computerPick == "scissor":
            roundResult.winner = "tie"; break;
        case userPick == "rock" && computerPick == "scissor":
        case userPick == "paper" && computerPick == "rock":
        case userPick == "scissor" && computerPick == "paper":
            roundResult.winner = "user"; break;
        default:
            roundResult.winner = "computer"; break;
    }
    return roundResult;
}