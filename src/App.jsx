import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home'
import Alltask from './component/Alltask';
import Completed from './component/Completed'
import Deleted from './component/Deleted'
import { useState } from 'react';

function App() {

  const [task, setTask] = useState({ title: " ", description: " " })
  const [tasks, setTasks] = useState([])
  const [deleteCards, setDeleteCards] = useState([])
  const [completeCards, setCompleteCards] = useState([])

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTasks([...tasks, task])
    setTask({ title: '', description: '' })
  }

  const cardDelete = (index) => {
    const carttoDelete = tasks[index]
    setTasks(tasks.filter((_, element) => element !== index))
    setDeleteCards([...deleteCards, carttoDelete])
  }

  const cardComplete = (index) => {
    const fullcompleted = tasks[index]
    setTasks(tasks.filter((_, element) => element !== index))
    setCompleteCards([...completeCards, fullcompleted])
  }

  const deleteFromDelete = (index) => {
    setDeleteCards(deleteCards.filter((_, element) => element !== index))
  }

  const completeFromComplete = (index) => {
    setCompleteCards(completeCards.filter((_, element) => element !== index))
  }

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home task={task} fullTask={tasks} handleSubmit={handleSubmit} handleChange={handleChange} />} />
            <Route path='Alltask' element={<Alltask fullTask={tasks} cardComplete={cardComplete} cardDelete={cardDelete} />} />
            <Route path='Completed' element={<Completed completeCards={completeCards} completeFromComplete={completeFromComplete} />} />
            <Route path='Deleted' element={<Deleted deleteCards={deleteCards} deleteFromDelete={deleteFromDelete} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;

