import { Component } from 'react';
import { Counter } from './Counter/Counter';
import { Header } from './Header/Header';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    isShowModal: false,
  };

  handleOpenModal = () => this.setState({ isShowModal: true });

  handleCloseModal = () => this.setState({ isShowModal: false });

  render() {
    return (
      <>
        <Header showModal={this.handleOpenModal} />
        <Counter />
        {this.state.isShowModal && (
          <Modal showModal={this.handleCloseModal}>querty</Modal>
        )}
      </>
    );
  }
}
