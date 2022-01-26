var axios = require('axios');
const { load } = require('cheerio');
var cheerio = require('cheerio');
//Express
const express = require('express') 
const app = express() 
const port = 5000 

app.get('/', (req, res) => {
  res.json(array)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//API request 

const array = []

async function getScores() {   

    const url = 'https://www.espn.com/golf/leaderboard'
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
        
        const playerName = $(this).find('a').text()
        const teeTime = $(this).find('.tc').text()
        const score = $(this).find('.Table__TD').text()
        array.push(playerName, teeTime, score)
      })
  
      console.log(array)    
      
    } catch (error) {
      console.error(error);
    }
  }

  getScores()
  
  

  