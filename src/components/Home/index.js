import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="home-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <div>
          <h1 className="main-heading">Your Flexibility, Our Excellence</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
          />
          <div>
            <button type="button" className="button">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
