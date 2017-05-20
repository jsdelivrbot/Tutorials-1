import React, { Component } from 'react';

class SearchBar extends Component {
  //All class that extends React.Component or Component(for short syntax) needs to
  constructor(props) {
    super(props);
    this.state = { term : '' };
  };

  //require: implement render() method.
  render() {
    //onChange is the event that takes an {event handler}
    return (
      <div className="search-bar">
        <input value = {this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  };

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  };
};

export default SearchBar;
