let home = 0
let away = 0


function addScore(location, score) {
    if (location == "home") {
        home += score
        drawHome()
    }
    if (location == "away") {
        away += score
        drawAway()
    }
}

function drawHome() {
    let homeScoreElm = document.getElementById('home-score')
    console.log(homeScoreElm)
    homeScoreElm.innerText = home
}

function drawAway() {
    let awayScoreElm = document.getElementById('away-score')
    console.log(awayScoreElm)
    awayScoreElm.innerText = away
}

function reset() {
    home = 0
    away = 0
    drawHome()
    drawAway()
}


