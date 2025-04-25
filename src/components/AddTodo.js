import React from 'react';

export default class AddTodo extends React.Component {
  _onAddTodo = () => {
    if (this.refs.todo.value.length > 0) {
      this.props.handleAddTodo(this.refs.todo.value);
      this.refs.todo.value = '';
    }
  };

  render() {
    return (
      <div className="new-todo form-group" style={containerStyle}>
        <h3 style={titleStyle}>Todo Xstream v67.0</h3>
        <div style={inputContainerStyle}>
          <label htmlFor="todo-input" style={labelStyle}></label>
          <input
            id="todo-input"
            type="text"
            className="form-control"
            placeholder="Enter your todo here..."
            ref="todo"
            style={inputStyle}
          />
          <button
            className="btn btn-primary"
            onClick={this._onAddTodo}
            style={buttonStyle}
          >
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}

// Inline styles
const containerStyle = {
  maxWidth: '500px',
  margin: '20px auto',
  padding: '20px',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
  textAlign: 'center',
  marginBottom: '15px',
  color: '#343a40',
  fontFamily: "'Arial', sans-serif",
};

const inputContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const labelStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  marginBottom: '5px',
  color: '#495057',
};

const inputStyle = {
  padding: '12px',
  borderRadius: '5px',
  border: '1px solid #ced4da',
  fontSize: '16px',
};

const buttonStyle = {
  padding: '12px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  alignSelf: 'flex-start',
};
