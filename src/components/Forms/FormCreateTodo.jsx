import { Component } from 'react';

export class FormCreateTodo extends Component {
  state = {
    title: '',
    description: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createTodo(this.state);
    this.setState({ title: '', description: '' });
  };

  render() {
    console.log(this.state);
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          marginTop: '50px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
          color: '#485ae0',
        }}
      >
        <div
          className="mb-3"
          style={{
            display: 'flex',
            alignContent: 'space-around',
          }}
        >
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            name="description"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    );
  }
}
