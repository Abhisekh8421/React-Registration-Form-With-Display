import "./Displaycard.css";
function Displaycard({ EmailName, Username, Phonenumber, Birthday, Address }) {
  return (
    <div className="card">
      <h1 style={{ textTransform: "uppercase" }}>{Username}</h1>
      <h1>{Phonenumber}</h1>
      <h1>{Address}</h1>
      <h1>{EmailName}</h1>
      <h1>{Birthday}</h1>
    </div>
  );
}

export default Displaycard;
