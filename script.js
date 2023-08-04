// Initialize container query selectors for global scope usage
const mainCont = document.querySelector("#main-cont");
const title = document.querySelector("#title");
const iconCont = document.querySelector("#icon-container");
const mainParCont = document.querySelector("#main-par-cont");
const mainPar = document.querySelector("#main-par");

mainPar.addEventListener("click", initialSelectPage);

function initialSelectPage() {
    mainPar.removeEventListener("click", initialSelectPage);
    
    const rps = document.querySelector("#rps-icon")
    const rock = createImgElement({class: "icon-width"}, {id: "rock", src: "/images/icons/rock-icon.png", 
                    class: "choice-icons"});
    const paper = createImgElement({class: "icon-width"}, {id: "paper", src: "/images/icons/paper-icon.png", 
                    class: "choice-icons"});
    const scissor = createImgElement({class: "icon-width"}, {id: "scissor", src: "/images/icons/scissor-icon.png", 
                    class: "choice-icons"});
    
    rps.parentNode.replaceChild(paper, rps);
    paper.before(rock);
    paper.after(scissor);
    changeMainParText("CHOOSE YOUR WEAPON");

    document.querySelectorAll('.icon-width').forEach((item) => {
    item.addEventListener('click', (e) => console.log(e))});
}

// Icon Img block
function createImgElement(imgContAttr, imgAttr) {
    const imgDiv = document.createElement('div');
    setMultipleAttr(imgDiv, imgContAttr);
    const img = document.createElement('img');
    setMultipleAttr(img, imgAttr);
    imgDiv.appendChild(img);
    return imgDiv
}

// Sets multiple attributes to any elements
function setMultipleAttr(elem, elemAttributes) {
    Object.keys(elemAttributes).forEach(attribute => {
    elem.setAttribute(attribute, elemAttributes[attribute]);
    });
}

// Replaces main paragraph's text content
function changeMainParText(paragraph) {
    const mainPar = document.querySelector("#main-par");
    mainPar.innerText = paragraph;
    mainPar.classList.remove("start");
    mainPar.style.cursor = "text";
}

// Plays five rounds
function playFiveRounds() {
    document.querySelectorAll('.icon-width').forEach((item) => {
        item.removeEventListener('click', (e) => console.log(e))});
    
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