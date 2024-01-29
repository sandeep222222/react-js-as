// Write your code here

import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInning,
      manOfTheMatch,
      secondInning,
      umpires,
      venue,
      result,
    } = latestMatch

    return (
      <div className="latesh-match-card-container">
        <div className="latesh-match-heading">Latesh Match</div>
        <div className="latesh-match-card">
          <div className="latesh-match-logo-container">
            <div className="latesh-match-details-main">
              <p className="latesh-match-team-name">{competingTeam}</p>
              <p className="latesh-match-date">{date}</p>
              <p className="latesh-match-venue">{venue}</p>
              <p className="latesh-match-status">{result}</p>
            </div>
            <img
              className="latest-match-logo"
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
            />
          </div>
          <div className="latest-match-details-info">
            <div className="match-info-item">
              <p className="latesh-match-details-label">First Innings</p>
              <p className="latesh-match-details-value">{firstInning}</p>
            </div>
            <div className="match-info-item">
              <p className="latesh-match-details-label">Second Innings</p>
              <p className="latesh-match-details-value">{secondInning}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-details-label">Man of The Match</p>
              <p className="latesh-match-details-value">{manOfTheMatch}</p>
            </div>
            <div className="match-info-item">
              <p className="latesh-match-details-label">Umpires</p>
              <p className="latesh-match-details-value">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
