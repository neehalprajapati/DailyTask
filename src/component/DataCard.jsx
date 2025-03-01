import './DataCard.css'

const DataCard = ({ title, description }) => {


  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{description}</p>
          <div className="display">
            <button type="button" className="btn btn-dark col-4">Delete</button>
            <button type="button" className="btn btn-dark">Complete</button>
          </div>
        </div>
      </div >
    </>
  )
}

export default DataCard;