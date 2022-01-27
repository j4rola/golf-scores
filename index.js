var axios = require('axios');
const { load } = require('cheerio');
var cheerio = require('cheerio');
const { toArray } = require('cheerio/lib/api/traversing');
const cors = require('cors')
//Express
const express = require('express'); 
const { getFirstChild } = require('parse5-htmlparser2-tree-adapter');
const app = express() 
const port = 5000 

app.use(cors())

app.get('/', async (req, res) => {   

    const url = 'https://www.espn.com/golf/leaderboard'  

    const array = []

    try {
      const response = await axios(url);   
      const responseData = response.data;  
      const $ = cheerio.load(responseData);
      
      //console.log($)
      // $('.bp-mobile', responseData).each(function(){
      //   const title = $(this).text()
      //   console.log(title)
      // })


  
      $('.PlayerRow__Overview', responseData).each(function(){
        const list = []
        const playerName = $(this).find('a').text()
        const teeTime = $(this).find('.tc').text()
        const tdArray = $(this).find('.Table__TD').toArray().map((x) => { return $(x).text()})  
        const score = tdArray[4]
        const position = tdArray[1]
        const totalScore = tdArray[7] 
        const holesPlayed = tdArray[6]
        console.log(tdArray)
        array.push({playerName: playerName, score: score, teeTime: teeTime, position: position, totalScore: totalScore, holesPlayed: holesPlayed})  
      })
  
      res.json(array)
      
    } catch (error) {
      console.error(error);
    }
  } // end of handler function
  ) // end of app.get() 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//API request 
  
  

  