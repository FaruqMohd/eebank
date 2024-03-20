import './index.css'

const NotFound = () => (
  <div className="not-found">
    <img
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      alt="not found"
    />
    <div>
      <h1 className="main-heading">Page Not Found</h1>
      <p className="caution">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </div>
)

export default NotFound
