import { Component } from "react";
import './index.css'

class TabItem extends Component {
    onSelectTabItem = () => {
      const {tab, onSelectTab} = this.props
      const {tabId} = tab
      onSelectTab(tabId)
    }
  
    render() {
      const {tab,isActive} = this.props
      const {displayText} = tab
      const highLight = isActive ? 'highlight-tab' : ''
      return (
        <li className="tab-list">
          <button
            className={`button-style ${highLight}`}
            onClick={this.onSelectTabItem}
          >
            {displayText}
          </button>
        </li>
      )
    }
  }
  
  export default TabItem