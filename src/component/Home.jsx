import { useState } from 'react';
import './Home.css'

const Home = ({ task = { title: '', description: '' }, handleChange, handleSubmit, }) => {

  const [inputForm, setinputForm] = useState(false)


  const handleonClickTask = () => {
    setinputForm(true)
  }

  const handlecloseButton = () => {
    setinputForm(false)
  }

  // const handleChange = (e) => {
  //   setTask({ ...task, [e.target.name]: e.target.value })
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setTasks([...tasks, task])
  //   setTask({ title: '', description: '' })
  // }



  return (
    <>
      {!inputForm && <center>
        <div className='centerContainer'>
          <div className="overview">
            <div className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quibusdam cum numquam ab in minima odit velit ipsa! Assumenda sequi harum eum officia quidem architecto obcaecati ducimus facilis rerum aspernatur!
            </div>
            <div className="button">
              <button type="button" onClick={handleonClickTask} className="btn btn-outline-dark darkButton">Add Tasks</button>
            </div>
          </div>
        </div>
      </center>}

      {inputForm && <div className="inputControl">
        <form className="form">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
            <input name='title' value={task.title} onChange={handleChange} type="text" className="form-control" placeholder="Title..." />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
            <textarea name='description' value={task.description} onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Description...'></textarea>
          </div>
          <div className="mb-3">
            <button type="button" onClick={handleSubmit} className="btn btn-dark addButton">Add</button>
          </div>
          <div className="closeButton">
            <button type="button" onClick={handlecloseButton} className="btn-close" aria-label="Close"></button>
          </div>
        </form>
      </div>}



    </>
  )
}

export default Home;