const request = require('request')
var models = require('../models')
var Ten = models.Ten
var Thirty = models.Thirty

function update30() {
  let FRED30url = 'https://api.stlouisfed.org/fred/series/observations?series_id=DGS30&api_key=58548ed1796d3d6ac3b0692082b2a23d&file_type=json&limit=30&sort_order=desc'

  request(FRED30url, function(error, response, body){
    if(!error && response.statusCode == 200) {

      let data = JSON.parse(body)
      let observations = data.observations
      let formattedData = []

      observations.forEach(dataPoint =>{
        if(dataPoint.value.length > 2) {
          formattedData.push({date: dataPoint.date, value: dataPoint.value})
        }
      })

      Thirty.bulkCreate(formattedData)
        .then(dataArr => {
          console.log('30s updated')
        })
    }
  })
}

function update10() {
  let FRED10url = 'https://api.stlouisfed.org/fred/series/observations?series_id=DGS10&api_key=58548ed1796d3d6ac3b0692082b2a23d&file_type=json&limit=30&sort_order=desc'

  request(FRED10url, function(error, response, body){
    if(!error && response.statusCode == 200) {

      let data = JSON.parse(body)
      let observations = data.observations
      let formattedData = []

      observations.forEach(dataPoint =>{
        if(dataPoint.value.length > 2) {
          formattedData.push({date: dataPoint.date, value: dataPoint.value})
        }
      })

      Ten.bulkCreate(formattedData)
        .then(dataArr => {
          console.log('10s updated')
        })
    }
  })
}

module.exports = {
  update10: update10,
  update30: update30
}
