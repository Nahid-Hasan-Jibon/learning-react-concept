import "./App.css";

function App() {
  function handleClick() {
    alert("btn clicked");
  }
  const handleClick2 = () => {
    alert("btn 2 clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3>Hello vaia kmn aco</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button
        onClick={() => {
          alert("Third btn clicked");
        }}
      >
        Third
      </button>

      <button onClick={()=>{addToFive(2)}}>Four</button>
    </>
  );
}

export default App;