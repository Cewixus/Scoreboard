let homeScrText = document.getElementById("home-score")
let guestScrText = document.getElementById("guest-score")
const button = document.querySelectorAll(".score-btn")
let newGame = document.getElementById("newgame-btn")
let homeScr = 0
let guestScr = 0

button.forEach(btn => {
btn.addEventListener("click", addPoints)
})

newGame.addEventListener("click", restart)
    
function addPoints(clicked){
    if(clicked.target.name == "home-btn" ){
    homeScr += Number(clicked.target.textContent)
    }
    if(clicked.target.name == "guest-btn" ){
    guestScr += Number(clicked.target.textContent)
    }
    homeScrText.textContent = homeScr
    guestScrText.textContent = guestScr
    highLight()
}

function restart()
{
    homeScr = 0
    homeScrText.textContent = homeScr
    guestScr = 0
    guestScrText.textContent = guestScr
    homeScrText.style.color = "#c1121f"
    guestScrText.style.color = "#c1121f"
}

function highLight(){
        if(homeScr > guestScr){
        homeScrText.style.color = "#70e000"
        guestScrText.style.color = "#c1121f"
    }else if(homeScr < guestScr){
        guestScrText.style.color = "#70e000"
        homeScrText.style.color = "#c1121f"
    } else{
        homeScrText.style.color = "#c1121f"
        guestScrText.style.color = "#c1121f"
    }  
}    