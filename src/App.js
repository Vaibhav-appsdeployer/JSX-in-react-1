import logo from "./logo.svg";
import "./App.css";

let name = "KING"
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>

      <div className="container">
        <h1>Hello {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magni exercitationem blanditiis vel, recusandae aliquid porro qui nulla aperiam maiores sint animi delectus nisi quibusdam ad. Ipsam dicta distinctio tempore aliquid quod voluptate maxime.</p>
      </div>
    </>
  );
}

export default App;
