import { Component } from "react";
import './index.css'

class AppItem extends Component {
    render() {
      const {searchedApp} = this.props
      const {appId,imageUrl,appName} = searchedApp
      return (
        <li className="tab-list-item">
            <img src={imageUrl} className='app-img' alt={appId}/>
            <p className="app-name">{appName}</p>
        </li>
      )
    }
  }
  
  export default AppItem