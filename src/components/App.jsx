import { Component } from 'react';
import { Counter } from './Counter/Counter';
import { Header } from './Header/Header';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    isShowModal: false,
  };

  // handleOpenModal = () => this.setState({ isShowModal: true });

  // handleCloseModal = () => this.setState({ isShowModal: false });

  toggleModal = () => {
    this.setState(prevState => ({ isShowModal: !prevState.isShowModal }));
  };

  render() {
    return (
      <>
        <Header showModal={this.toggleModal} />
        <Counter />
        {this.state.isShowModal && (
          <Modal showModal={this.toggleModal}>querty</Modal>
        )}
      </>
    );
  }
}
