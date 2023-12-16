export const Header = ({ showModal }) => {
  console.log(10 < 12 && 'component');
  return (
    <nav className="navbar bg-dark mb-3">
      <div
        className="container-fluid"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'black',
          margin: '0',
          padding: '3px 15px',
          borderRadius: '6px',
        }}
      >
        <h2
          className="navbar-brand mb-0 h1 text-success"
          style={{
            textTransform: 'uppercase',
          }}
        >
          Menu
        </h2>
        <button className="btn btn-outline-success" onClick={showModal}>
          Open Modal
        </button>
      </div>
    </nav>
  );
};
