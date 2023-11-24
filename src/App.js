import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1 className="text-center">✅...TIC-TAC-TOE...❎</h1>

        <div className="board">
          <div className="row">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="row">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="row">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
