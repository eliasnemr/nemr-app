import "./App.css";

function App() {
  return (
    <div className="grid grid-cols-1 grid-rows-[56px_1fr] h-screen">
      <header className="grid grid-cols-[1fr_minmax(0,_560px)_1fr] grid-rows-1">
        <div />
        <div>
          <h1>Nemr</h1>
        </div>
        <div />
      </header>
      <main className="grid grid-cols-[1fr_minmax(0,_560px)_1fr] grid-rows-1">
        <div />
        <section>Content..</section>
        <div />
      </main>
    </div>
  );
}

export default App;
