import "../App.css";

export default function CardComponent() {
  return (
    <div
      id="card"
      className=" position-relative d-flex justify-content-center align-items-center card shadow w-auto p-4 z-3"
    >
      <div className="card-body text-center">
        <h5
          id="title"
          className="card-title fst-italic bg-warning-subtle rounded-2 p-2 border border-danger-subtle "
        >
          To Do
        </h5>
        <p className="card-text para">
          Stay productive, stay blossoming!
        </p>
      </div>
    </div>
  );
}
