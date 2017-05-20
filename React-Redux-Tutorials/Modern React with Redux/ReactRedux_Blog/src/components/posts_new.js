import React, { Component, PropTypes } from 'react';
//reduxForm object is very similar to the connect function from react-redux
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  //This is like props except its context. This is giving us this.context.router. We want access to the router property so we check all the parents for router.
  //And then assign that to this.context.router
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    console.log(this.props);
    this.props.createPost(props) //This call is an action creator. It will return a promise so we can use .then
    //when promise successfully resolve
      .then(() => {
        //Blog post has been create, navigate user to "/", We navigate by calling this.context.router.push
        //with the new path to navigate to.
        this.context.router.push("/");
      });
  }
  render() {
    // console.log("This is from posts_new.js");
    // console.log(this.props);
    const { fields: { title, categories, content }, handleSubmit } = this.props;  //same as const handleSubmit = this.props.handleSubmit; same as const title = this.props.fields.title
    return (
      //This onSubmit will pass in props from the form (our title, categories, content). Not this.props.
      //when we pass in {...title}, {...categories}, {...content}, we are passing in the entire configuration of those objects. Those object contains things like onChange, onSubmit methods etc, they're built-in functions by redux-form
      //Feel free to console log it if you dont know what it contains. console.log(title)
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}
function validate(values) {
  const errors = {};
  if(!values.title) {
    errors.title = 'Enter a username.';
  }
  if(!values.categories) {
    errors.categories = 'Enter a categories';
  }
  if(!values.content) {
    errors.content = 'Enter some content';
  }
  return errors;
}
/*connect vs reduxForm
connect: 1st argument mapStateToProps, 2nd argument mapDispatchToProps
reduxForm: 1st argument is form config, 2nd argument mapStateToProps, 3rd argument mapDispatchToProps
*/
export default reduxForm({
  form: 'PostsNewForm', //arbitary name
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);

/*
This will make the form an application state
i.e:
state === {
  form: {
    PostsNewForm: {
      title: '....',
      categories: '....',
      content: '....'
    }
  }
}
*/
