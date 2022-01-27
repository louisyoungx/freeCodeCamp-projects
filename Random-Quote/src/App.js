import React from 'react';
import './App.css';
import colors from './colors.json'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      text: '',
      author: '',
      href: '',
      bgColor: 'white',
      colorName: '',
    }
    this.update = this.update.bind(this)
  }
  componentDidMount() {
    this.update()
    console.log(this.getRandomColor())
  }
  async update() {
    this.changeColor()
    let quote = await this.quote()
    console.log(quote)
    this.setState(state => ({
      text: quote.hitokoto,
      author: this.author(quote),
      href: 'https://hitokoto.cn/?uuid=' + quote.uuid
    }))
  }
  async quote() {
    // DOCS - https://developer.hitokoto.cn/sentence
    let hitokoto = await fetch('https://v1.hitokoto.cn?c=c&c=d&c=h&c=i&c=j&c=k')
    return await hitokoto.json()
  }
  author(quote) {
    if (quote.from_who) {
      return quote.from_who
    } else if (quote.from) {
      return quote.from
    } else {
      return '佚名'
    }
  }
  changeColor() {
    let color = this.getRandomColor()
    this.setState(state => ({
      ...state,
      bgColor: color.hex,
      colorName: color.name,
    }))
  }
  getRandomColor() {
    return colors[
      Math.floor(Math.random() * colors.length)
    ];
  }
  render() {
    return (
      <div className='app' style={{backgroundColor: this.state.bgColor}}>
        <div id='quote-box' style={{color: this.state.bgColor}}>
          <div id='text'>
            <p>{this.state.text}</p>
          </div>
          <div id='author'>
            <p>-- {this.state.author}</p>
          </div>
          <div className='buttons'>
            <a id='tweet-quote' href={this.state.href} style={{color: this.state.bgColor}}>
              详情
            </a>
            <button id='new-quote' onClick={this.update} style={{backgroundColor: this.state.bgColor}}>
              下一条
            </button>
          </div>

        </div>
        <div id='title'>{this.state.colorName}</div>
      </div>
    );
  }
}

export default App;
