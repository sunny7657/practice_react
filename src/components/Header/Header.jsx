export const Header = ({ showModal }) => {
  console.log(10 < 12 && 'component');
  return (
    <nav className="navbar bg-dark mb-3">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#a3adff',
          margin: '0',
          padding: '3px 15px',
          borderRadius: '6px',
        }}
      >
        <h2
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
