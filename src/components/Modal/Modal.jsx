export const Modal = ({ children, showModal }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backdropFilter: 'blur(5px)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          border: '1px solid #4a50cd',
          background: '#a3adff',
          transform: 'translate(-50%,-50%)',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px',
          minWidth: '300px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h2> Modal</h2>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={showModal}
          >
            Close
          </button>
        </div>

        <p>{children}</p>
      </div>
    </div>
  );
};
