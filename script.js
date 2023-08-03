// Initialize container query selectors for global scope usage
const mainCont = document.querySelector(".main-container");
const title = document.querySelector("#title");
const iconCont = document.querySelector("#icon-container");
const mainPar = document.querySelector("#p-container > p");
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

mainPar.addEventListener("click", switchSelectPage);

function switchSelectPage() {
    mainPar.removeEventListener("click", switchSelectPage);
    insertIcons();
    const iconElements = document.querySelectorAll('img.icons');
    iconElements.forEach((item) => {
    item.addEventListener('click', roundResultPage)});
    changePar('#p-container > p', 'CHOOSE YOUR WEAPON');
}

function insertIcons() {
    if (iconCont.querySelector('.rps') !== null) {
        document.querySelector('.rps').replaceWith(createImgElement(icons.paperIcon));
    }
    iconCont.insertBefore(createImgElement(icons.rockIcon), document.querySelector("#paper"));
    iconCont.appendChild(createImgElement(icons.scissorIcon), document.querySelector("#paper"));
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

function roundResultPage(e) {
    const resultInfo = checkWinner(e); // Returns object with properties; winner, user icon, computer icon

    // Get user score 
    // Get computer score
    // Get icon user selected
    // Get icon randomly selected by computer

    // Create userPickDiv
    const userPickCont = document.createElement('div');
    console.log(userPickCont);
    // Append p element with text content 'YOU'
    const scoreOwner = document.createElement('p');
    scoreOwner.innerText = "YOU";
    console.log(scoreOwner);
    // Append icon user selected
    const userPickIcon = document.createElement('img');
    userPickIcon.setAttribute("src", `/images/icons/${resultInfo.user}-icon.png`);
    console.log(userPickIcon);
    // Append child elements to userPickDiv
    userPickCont.append(scoreOwner, userPickIcon);
    // Replace userPickDiv from rock icon element
    document.querySelector('#rock').replaceWith(userPickCont);
    
    
    // Create p element with text content 'VS'
    // Replace the element from paper icon element// 
    // Create computerDiv
    // Append p element with text content 'OPPONENT'
    // Append icon computer randomly selected// 
    // Create userScore div
    // Append p element with text content 'SCORE'
    // Append p element for score number
    // if user win, add text content 1
    // else add text content 0

    // Replace paragraph
    if (resultInfo.winner == "user") {
        changePar('#p-container > p', 'YOU WIN!');
    } else if (resultInfo.winner == "computer") {
        changePar('#p-container > p', 'YOU LOSE!');
    } else {
        changePar('#p-container > p', 'TIE!');
    }
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