import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// Set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>'); //create a fake dom
global.window = global.document.defaultView;
const $ = jquery(global.window); //this tells jQuery dont try to find your own dom, use the one we provided

// build 'renderComponent' helper that should render a given react class
//build renderComponent to render a component for a given class
//The 3 arguments, our component class, the props we want to inject to the component,
//and the application level state that we want to inject to our redux store
//Notice it is kind of confusing that our 3rd argument in comment_list_test.js we pass props as 3rd argument. That is because we want to pass
//props to be stored in our redux store.
function renderComponent(ComponentClass, props, state) {
  //Create an instance of the component class, componentInstance is a reference to a component document
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
  //ReactDOM takes the component document and renders the HTML. We wrap it with the $ to get jQuery features.
  return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML
}

// Build helper for simulating events
//This is creating a new function for jQuery so all jQuery element can use it. Similar to Array.prototype.

$.fn.simulate = function(eventName, value) {
  //If we did pass in a value then set that jQuery element to that value

  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
  //$(div).simulate() this refers to the 'div'. this[0] means within this element get the first child.

}

// Set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
