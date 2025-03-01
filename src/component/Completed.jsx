import './Complete.css'
import { TiTick } from "react-icons/ti";

const Completed = ({ completeCards = [], completeFromComplete }) => {

  return (
    <>
      <div className="dataCard">
        <div className="dataCardFormat">
          {completeCards.map((item, index) => (<div className="card" style={{ width: "18rem" }} key={index}>
            <div className="card-body">
              <div className="icon" onClick={() => { completeFromComplete(index) }}><TiTick /></div>
              <h2 className="card-title">{item.title}</h2>
              <p className="card-text">{item.description}</p>
            </div>
          </div >))}
        </div>
      </div>
    </>
  )
}

export default Completed;