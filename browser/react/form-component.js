import React from 'react'



const FormComponent = function(props) {

  let tens = props.rateData.tens
  let thirties = props.rateData.thirties
  // console.log(tens, thirties)

  return(
    <div>
      <p>This data is sourced from the St. Louis Fed Federal Reserve Economic Data API.</p>
      <p>These data points are updated around 4:00pm each day.</p>
      <hr/>
      <p>Most Recent 10-year: <strong>{`${tens[0].value}`}%</strong> on {`${tens[0].date}`}</p>
      <p>Most Recent 30-year: <strong>{`${thirties[0].value}`}%</strong> on {`${thirties[0].date}`}</p>
      <form>
        <div className="form-group">
          <label>Interpolation Year</label>
          <input
            name="name"
            type="name"
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-block btn-primary">
        CALCULATE!
        </button>
      </form>
    </div>
  )

}

export default FormComponent
