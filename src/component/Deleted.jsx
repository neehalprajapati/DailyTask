import './Complete.css'
import { RxCross1 } from "react-icons/rx";

const Deleted = ({ deleteCards = [], deleteFromDelete }) => {



  return (
    <>
      <div className="dataCard">
        <div className="dataCardFormat">
          {deleteCards.length !== 0 ? (deleteCards.map((item, index) => (<div className="card" style={{ width: "18rem" }} key={index}>
            <div className="card-body">
              <div className="icon" onClick={() => { deleteFromDelete(index) }}><RxCross1 className='crossIcons' /></div>
              <h2 className="card-title">{item.title}</h2>
              <p className="card-text">{item.description}</p>
            </div>
          </div >))) : (<p className='para'>No cards Deleted</p>)}
        </div>
      </div>
    </>
  )
}

export default Deleted;