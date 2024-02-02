import {Component} from 'react'
import './index.css'
class ShowHide extends Component {
  state = {
    isClicked: false,
  }
  firstName = () => {
    this.setState(prevState = ({isClicked: !prevState.isClicked}))
  }
  getFirstName = () => (
    <div className="container">
      <p className="para">Joe</p>
    </div>
  )
  lastName = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }
  getLastName = () => (
    <div className="container">
      <p className="para">Jonas</p>
    </div>
  )

  render() {
    const {isClicked} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <button className="button" onClick={this.firstName}>
            Show/Hide Firstname
          </button>
          <button className="button" onClick={this.lastName}>
            Show/Hide Lastname
          </button>
        </div>
        {isClicked ? this.getFirstName() : null}
        {isClicked ? this.getLastName() : null}
      </div>
    )
  }
}
export default ShowHide
