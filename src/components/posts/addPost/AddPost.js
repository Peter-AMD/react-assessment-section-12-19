import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { addPost } from '../../../redux/actions';

class AddPost extends Component {
  state = {
    isShowCreatePost: false,
  }

  renderFieldsWrapper = (field, label) => {
    return (
    <div className="field">
      <label>{label}</label>
      {field}
    </div>
    )
  }

  renderInput = ({ input, label }) => this.renderFieldsWrapper(<input {...input} autoComplete="off"/>, label);
  renderTextArea = ({ input, label }) => this.renderFieldsWrapper(<textarea {...input}></textarea>, label);

  onSubmit = (formValues) => {
    this.props.addPost({
      user: this.props.userId,
      title: formValues.title,
      body: formValues.description,
    });
  }
  toggleNewPostButton = (current) => {
    this.setState({
      isShowCreatePost: !current
    })
  }
        
  renderButton = () => {
    const buttonContent = this.state.isShowCreatePost ? 'Cancel' : 'Create New Post';
    const additionalClasses = this.state.isShowCreatePost ? '' : 'basic';
    return (
      <button onClick={() => this.toggleNewPostButton(this.state.isShowCreatePost)} style={{ width: '100%', margin: '30px 0' }} className={`ui button ${additionalClasses}`}>{buttonContent}</button>
    );
  }
  renderForm = () => {
    const buttonContent = this.props.isFetching ? <span className="ui mini active inline loader"></span> : 'Add';
    if (this.state.isShowCreatePost) return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field name="title" component={this.renderInput} label="Title" />
        <Field name="description" component={this.renderTextArea} label="Description" />
        <button className="ui button primary "> {buttonContent} </button>
      </form>
    );
  }
  render() {
    return (
      <div>
        {this.renderButton()}
        {this.renderForm()}
      </div>
    );
  }

}

const validate = ({ title, description }) => {
  const errors = {}
  if (!title) errors.title = 'Please enter a title';
  if (!description) errors.description = 'Please enter a description';
  
  return errors;
};
const mapStateToProps = state => {
  const { isFetching } = state;
  return { isFetching };
}
const connectedAddPost = connect(mapStateToProps, { addPost })(AddPost);
export default reduxForm({
  form: 'addPost',
  validate,
})(connectedAddPost);