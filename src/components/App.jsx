import { Component } from 'react';
import { Counter } from './Counter/Counter';
import { Header } from './Header/Header';
import { Modal } from './Modal/Modal';
import { FormCreateTodo } from './Forms/FormCreateTodo';
import data from './data.json';
import { TodoList } from './TodoList/TodoList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    isShowModal: false,
    todo: data,
  };

  // handleOpenModal = () => this.setState({ isShowModal: true });

  // handleCloseModal = () => this.setState({ isShowModal: false });

  toggleModal = () => {
    this.setState(prevState => ({ isShowModal: !prevState.isShowModal }));
  };

  // sendUserData = data => {
  //   const newUser = { ...data, id: 'nbm' };
  //   // console.log('data :>> ', newUser);
  // };

  createTodo = data => {
    const newTodo = {
      ...data,
      id: nanoid(),
      completed: false,
    };
    const isDublicated = this.state.todo.find(el => el.title === data.title);
    if (isDublicated) return;
    this.setState(prev => ({ todo: [...prev.todo, newTodo] }));
  };

  deleteTodo = id => {
    this.setState(prev => ({ todo: prev.todo.filter(el => el.id !== id) }));
  };

  updateTodo = id => {
    this.setState(prev => ({
      todo: prev.todo.map(el => {
        if (el.id === id) return { ...el, completed: !el.completed };
        return el;
      }),
    }));
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Header showModal={this.toggleModal} />
        <Counter />
        {this.state.isShowModal && (
          <Modal showModal={this.toggleModal}>querty</Modal>
        )}
        <FormCreateTodo createTodo={this.createTodo} />
        <TodoList
          todo={this.state.todo}
          deleteTodo={this.deleteTodo}
          updateTodo={this.updateTodo}
        />
      </>
    );
  }
}
