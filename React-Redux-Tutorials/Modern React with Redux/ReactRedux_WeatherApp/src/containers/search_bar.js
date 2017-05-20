import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    //We have to do this because onInputChange function would not recogonize "this"
    //as the component level "this". We could've also done onChange={() => {this.onInputChange}} on the <input>.
    //rule of thumb, if you have a callback that has a reference to "this", you need to bind it.
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  //onChange have an event object
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    //Fetch the weather data by calling our action creator
    this.props.fetchWeather(this.state.term);
    //clear the form field
    this.setState({ term: '' })
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a 5 day forecast of your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchWeather }, dispatch);
}

//on our previous project we have mapStateToProps, but because we don't have it here, we pass null
//mapDispatchToProps is always 2nd argument because its the argument for the function to dispatch to other containers
export default connect(null, mapDispatchToProps)(SearchBar)
