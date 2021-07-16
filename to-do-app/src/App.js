import Backdrop from "./components/Backdrop";
import ToDo from "./components/ToDo";
import Modal from "./components/Modal";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <ToDo text='Learn React'/>
      <ToDo text='Practice React'/>
      <ToDo text='Master React'/>
      <Modal />
      <Backdrop></Backdrop>
    </div>
  )
}

export default App;
