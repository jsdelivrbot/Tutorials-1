import _ from 'lodash'; //we use lodash to convert object to array
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    //nextProps are the next set of props that this component
    //will be rendered with. This.props is still the old set of props.
    //So this method allows you to use old props and new props with this.props and this.nextProps
    this.createDataSource(nextProps);
  }


  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />
  }
  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      >
      </ListView>
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    //value is our val it contains the name, phone, shift property
    //key is our uid, uid is our unique identifier for that user
    return { ...val, uid }; //i.e: { shift: 'Monday', name: 'S', id: '135rfsdf3' }
  });
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
