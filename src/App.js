import { useState } from "react";
import Modal from "./components/modal";

export default function App() {
  const [modalMode, setModalmode] = useState(false);
  return (
    <div className="bg-gray-300 h-screen ">
      <div className=" flex justify-center pt-5">
        <button
          className="bg-red-400 p-2 rounded"
          onClick={() => setModalmode(true)}
        >
          Click me!
        </button>
      </div>
      <Modal modalMode={modalMode} setModalmode={setModalmode}/>
    </div>
  )
}
