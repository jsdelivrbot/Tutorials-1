import _ from 'lodash'; //we use lodash to convert object to array
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    //nextProps are the next set of props that this component
    //will be rendered with. This.props is still the old set of props.
    //So this method allows you to use old props and new props with this.props and this.nextProps
    this.createDataSource(this.nextProps);
  }


  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employee, (val, uid) => {
    //value is our val it contains the name, phone, shift property
    //key is our uid, uid is our unique identifier for that user
    return { ...val, uid }; //i.e: { shift: 'Monday', name: 'S', id: '135rfsdf3' }
  });
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
