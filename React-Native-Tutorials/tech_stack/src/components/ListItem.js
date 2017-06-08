import React, { Component } from 'react';
import { CardSection } from './common';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import * as actions from '../actions'

class ListItem extends Component {
  renderDescription() {
    const { library, selectedLibraryId } = this.props
    if(library.id === selectedLibraryId) {
      console.log(library.id, selectedLibraryId);
      return (
        <Text>{library.description}</Text>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectedLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(mapStateToProps, actions)(ListItem);
