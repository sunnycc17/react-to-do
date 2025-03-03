const App = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow border-0" style={{ width: "18rem" }}>
        <div className="card-body text-center">
          <h5 className="card-title">To Do</h5>
          <p className="card-text text-secondary">
            Stay productive, stay blossoming!
          </p>
          <a href="#" className="btn btn-info" role="button">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
