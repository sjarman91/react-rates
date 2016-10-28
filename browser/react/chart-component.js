import React from 'react';
import ReactHighcharts from 'react-highcharts'




const convertData = function (arr) {
  let convertedData = [];

  arr.forEach(dataObj => {
    let date = null
    let val = null
    let dateArr = dataObj.date.split('-')
    dateArr[1] = dateArr[1] - 1

    if (dateArr.length > 1) {
      date = Date.UTC.apply(null, dateArr)
      val = Math.floor(Number(dataObj.value)*100)/100
      // console.log(val)
    }

    convertedData.push([date, val])
  })

  return convertedData
}


function ChartComponent (props) {
  console.log(props.rateData.tens)

    var config = {
      title: {text: 'Updated Treasury Rates'},
      xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
      yAxis: {
            title: {
                text: 'Yield (%)'
            }
        },
      plotOptions: {
            line: {
                dataLabels: {
                    enabled: false
                }
            }
        },
      series: [{name: '10-Year Treasury',
                data: convertData(props.rateData.tens)
              },{
                name: '30-Year Treasury',
                data: convertData(props.rateData.thirties)
              }]
    };

    return (
        <div>
            {React.createElement(ReactHighcharts, { config: config })}
        </div>
    )
}






export default ChartComponent
