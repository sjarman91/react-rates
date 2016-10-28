import React from 'react'
import { connect } from 'react-redux'
import ChartComponent from './chart-component'
import FormComponent from './form-component'


const MainComponent = function(props) {
  let rateData = props.rateData

  return (
    <div className="container">
      <div className="starter-template">
        <h1 className="text-center">US Treasury Rates</h1>
        <p className="lead text-center">A comparison of 10-year and 30-year Treasury rates, with a tool for interpolation between the two.</p>
        <hr/>
        <div className="row">
          <div className="col-md-4">
            <FormComponent rateData={rateData} />
            <hr/>
          </div>
          <div className="col-md-8">
            <ChartComponent rateData={rateData} />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = function(state) {
  return { rateData: state.rateData }
}

let MainContainer = connect(mapStateToProps)(MainComponent)

export default MainContainer
