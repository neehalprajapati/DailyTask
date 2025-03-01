import DataCard from "./DataCard";
import './DataCard.css'

const Alltask = ({ fullTask = [], handleDelete, cardDelete, cardComplete }) => {




  return (
    <>
      <div className="dataCard">
        <div className="dataCardFormat">
          {fullTask.map((item, index) => (<div className="card" style={{ width: "18rem" }} key={index}>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p className="card-text">{item.description}</p>
              <div className="display">
                <button type="button" onClick={() => { cardDelete(index) }} className="btn btn-dark col-4">Delete</button>
                <button type="button" onClick={() => { cardComplete(index) }} className="btn btn-dark">Complete</button>
              </div>
            </div>
          </div >))}
        </div>
      </div>
    </>
  )
}

export default Alltask;