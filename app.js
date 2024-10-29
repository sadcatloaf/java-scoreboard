let home = 0
let away = 0

function homeScore1() {
    home += 1
    console.log('home score', home)
    drawHome()
}

function awayScore1() {
    away += 1
    console.log('away score', away)
    drawAway()
}

function homeScore3() {
    home += 3
    console.log('home score', home)
    drawHome()

}

function awayScore3() {
    away += 3
    console.log('away score', away)
    drawAway()
}


function drawHome() {
    let homeScoreElm = document.getElementById('home-score')
    console.log(homeScoreElm)
    homeScoreElm.innerText = home
}