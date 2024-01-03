// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeList: 0}

  onClickLeftArrow = () => {
    const {activeList} = this.state
    if (activeList > 0) {
      this.setState(prevState => ({activeList: prevState.activeList - 1}))
    } else {
      this.setState(prevState => ({activeList: prevState.activeList}))
    }
  }

  onClickRightArrow = () => {
    const {activeList} = this.state
    if (activeList < 3) {
      this.setState(prevState => ({activeList: prevState.activeList + 1}))
    } else {
      this.setState(prevState => ({activeList: prevState.activeList}))
    }
  }

  render() {
    const {activeList} = this.state
    const {reviewsList} = this.props

    const {imgUrl, username, companyName, description} = reviewsList[activeList]

    console.log(imgUrl)
    return (
      <div className="bg-container">
        <h1 className="title">Reviews</h1>
        <div className="flex-row">
          <button
            type="button"
            onClick={this.onClickLeftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <ul className="unordered-list">
            <li className="list">
              <img src={imgUrl} alt={username} className="image" />
              <p className="name">{username}</p>
              <p className="company">{companyName}</p>
              <p className="description">{description}</p>
            </li>
          </ul>
          <button
            type="button"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
