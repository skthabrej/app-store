import {Component} from 'react'
import TabItem from '../TabItem'
import AppItem from '../AppItem'
import './index.css'

const tabsList = [
  {tabId: 'GAMES', displayText: 'Games'},
  {tabId: 'NEWS', displayText: 'News'},
  {tabId: 'SOCIAL', displayText: 'Social'},
  {tabId: 'FOOD', displayText: 'Food'},
]

const appsList = [
  {
    appId: 0,
    appName: 'Tumbler',
    imageUrl:
      'https://i.ibb.co/WF5gKP5/5296511-network-social-network-tumblr-tumblr-logo-icon.png',
    category: 'SOCIAL',
  },
  {
    appId: 1,
    appName: 'Messenger',
    imageUrl:
      'https://i.ibb.co/hg0PDpr/7086697-messenger-facebook-messenger-messenger-logo-icon.png',
    category: 'SOCIAL',
  },
  {
    appId: 2,
    appName: 'WhatsApp',
    imageUrl:
      'https://i.ibb.co/wzLdxjg/5296520-bubble-chat-mobile-whatsapp-whatsapp-logo-icon.png',
    category: 'SOCIAL',
  },
  {
    appId: 3,
    appName: 'Instagram',
    imageUrl:
      'https://i.ibb.co/YpKbkdF/5296765-camera-instagram-instagram-logo-icon.png',
    category: 'SOCIAL',
  },
  {
    appId: 4,
    appName: 'Snapchat',
    imageUrl:
      'https://i.ibb.co/rfF5qtg/5296508-snapchat-logo-ghost-snap-snapchat-social-media-icon.png',
    category: 'SOCIAL',
  },
  {
    appId: 5,
    appName: 'Twitter',
    imageUrl:
      'https://i.ibb.co/rfF5qtg/5296508-snapchat-logo-ghost-snap-snapchat-social-media-icon.png',
    category: 'SOCIAL',
  },
  {
    appId: 6,
    appName: 'Pinterest',
    imageUrl:
      'https://i.ibb.co/NYTtqkZ/670421-pinterest-communication-media-network-pinter-icon.png',
    category: 'SOCIAL',
  },
  {
    appId: 7,
    appName: 'WeChat',
    imageUrl:
      'https://i.ibb.co/hgFDmN6/386746-wechat-we-chat-icon.png',
    category: 'SOCIAL',
  },
  {
    appId: 8,
    appName: 'LinkedIn',
    imageUrl:
      'https://i.ibb.co/2FW75VZ/556122-linkedin-in-linked-logo-media-icon.png',
    category: 'SOCIAL',
  },
  {
    appId: 9,
    appName: 'Telegram',
    imageUrl:
      'https://i.ibb.co/s9FCkFh/4375108-logo-telegram-icon.png',
    category: 'SOCIAL',
  },
  {
    appId: 10,
    appName: 'Subway Surfers',
    imageUrl:
      'https://i.ibb.co/BBYWhfR/First-Avatar.webp',
    category: 'GAMES',
  },
  {
    appId: 11,
    appName: 'FreeFire',
    imageUrl:
      'https://i.ibb.co/j3zgdV7/60bf039f5f35f.png',
    category: 'GAMES',
  },
  {
    appId: 12,
    appName: 'Pub G',
    imageUrl:
      'https://i.ibb.co/ncNp80W/unnamed.png',
    category: 'GAMES',
  },
  {
    appId: 13,
    appName: 'Angry Birds',
    imageUrl:
      'https://i.ibb.co/BgkjbzX/VPf-TOVckw-KRKKo-Yu-P5-Td-BPd-Sbr-Osx-YWQy-QNm-Wqt-WUdl-JJNTk-G70ml60-Pc-Az3-x-VJ5zs.jpg',
    category: 'GAMES',
  },
  {
    appId: 14,
    appName: 'Hill Climb 2',
    imageUrl:
      'https://i.ibb.co/hf3C0wQ/hill-climb-racing-2.png',
    category: 'GAMES',
  },
  {
    appId: 15,
    appName: 'Call of Duty',
    imageUrl:
      'https://i.postimg.cc/XY6W1WvL/call-of-duty-mobile-button-sm00-1552980373997.jpg',
    category: 'GAMES',
  },
  {
    appId: 16,
    appName: 'Dr. Driving',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-dr-driving.png',
    category: 'GAMES',
  },
  {
    appId: 17,
    appName: 'Smurfs Bubble',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-smurfs-bubble.png',
    category: 'GAMES',
  },
  {
    appId: 18,
    appName: 'Grade Learning',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-grade-learning.png',
    category: 'GAMES',
  },
  {
    appId: 19,
    appName: 'My Talking Tom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-my-talking-tom.png',
    category: 'GAMES',
  },
  {
    appId: 20,
    appName: 'Inshorts',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-inshorts.png',
    category: 'NEWS',
  },
  {
    appId: 21,
    appName: 'Way2News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-way2news.png',
    category: 'NEWS',
  },
  {
    appId: 22,
    appName: 'Google News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-google-news.png',
    category: 'NEWS',
  },
  {
    appId: 23,
    appName: 'Flipboard',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-flipboard.png',
    category: 'NEWS',
  },
  {
    appId: 24,
    appName: 'SmartNews',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-smart-news.png',
    category: 'NEWS',
  },
  {
    appId: 25,
    appName: 'BBC News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-bbc-news.png',
    category: 'NEWS',
  },
  {
    appId: 26,
    appName: 'CNN News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-cnn-news.png',
    category: 'NEWS',
  },
  {
    appId: 27,
    appName: 'Daily Wire',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-daily-wire.png',
    category: 'NEWS',
  },
  {
    appId: 28,
    appName: 'AP News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-ap-news.png',
    category: 'NEWS',
  },
  {
    appId: 29,
    appName: 'News Break',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-news-break.png',
    category: 'NEWS',
  },
  {
    appId: 30,
    appName: 'Zomato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-zomato.png',
    category: 'FOOD',
  },
  {
    appId: 31,
    appName: 'Swiggy',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-swiggy.png',
    category: 'FOOD',
  },
  {
    appId: 32,
    appName: "Domino's Pizza",
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-dominos.png',
    category: 'FOOD',
  },
  {
    appId: 33,
    appName: 'All in One',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-all-in-one.png',
    category: 'FOOD',
  },
  {
    appId: 34,
    appName: 'Instacart',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-insta-cart.png',
    category: 'FOOD',
  },
  {
    appId: 35,
    appName: 'Saucey',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-saucey.png',
    category: 'FOOD',
  },
  {
    appId: 36,
    appName: 'Waitr',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-waitr.png',
    category: 'FOOD',
  },
  {
    appId: 37,
    appName: 'Grubhub',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-grubhub.png',
    category: 'FOOD',
  },
  {
    appId: 38,
    appName: 'Mercato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-mercato.png',
    category: 'FOOD',
  },
  {
    appId: 39,
    appName: 'DOT',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/food-dot.png',
    category: 'FOOD',
  },
]

class AppStore extends Component {
  state={
    activeTab:tabsList[0].tabId,
    searchInput: ''
  }

  onSelectTab = tabId => {
    this.setState({activeTab:tabId})
  }

  onSearchItems = event => {
    this.setState({searchInput:event.target.value})
  }

  getFiltereddata = () => {
    const {activeTab} = this.state
    return appsList.filter(eachItem => eachItem.category === activeTab)
  }

  getSearchedData = filteredData => {
    const {searchInput} = this.state
    return filteredData.filter(eachItem =>
      eachItem.appName.toLowerCase().includes(searchInput.toLowerCase())
    )
  }

  render() {
    const {activeTab,searchInput} = this.state
    const filteredData = this.getFiltereddata()
    const searchedData = this.getSearchedData(filteredData)
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">My Store</h1>
          <div className="input-icon">
            <input
            type='search'
            placeholder='search'
            className='input-style'
            value={searchInput}
            onChange={this.onSearchItems}
            />
          </div>
          <div className="tabs-container">
            <ul className="tabs">
              {tabsList.map(eachItem => (
                <TabItem 
                tab={eachItem}
                key={eachItem.tabId}
                onSelectTab={this.onSelectTab}
                isActive={activeTab === eachItem.tabId}
                />
              ))}
            </ul>
          </div>
          <div className="apps-container">
          <ul className='tab-items'>
            {searchedData.map(eachApp => (
              <AppItem
              searchedApp={eachApp}
              key={eachApp.appId}
              />
            ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AppStore
