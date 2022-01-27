const feed = document.getElementById('feed')
const score = document.getElementById('score')

fetch('http://localhost:5000/').then( response => response.json()).then( data => { data.forEach(
    player => {   
        playerName = `<div id="wrap">`+`<h3>`+ player.position + "  " +  player.playerName + "  " + `</h3>` + `<h4>` + `Score: ${player.score}` + "  " + "  " + `Total Strokes: ${player.totalScore}`+ "  " + `Holes Played: ${player.holesPlayed}`+ `<h4/>`+`<div/>`
        feed.insertAdjacentHTML("beforeend", playerName) 
        //console.log(player)
           
    }
) })