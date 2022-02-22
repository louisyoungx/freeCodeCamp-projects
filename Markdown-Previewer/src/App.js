import React from 'react'
import './App.css'
import './preview.css'
import { content } from './content'
import { Editor } from './component/editor'
import { Preview } from './component/preview'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      content: '',
    }
    this.update = this.update.bind(this)
  }
  componentDidMount() {
    this.update()
    this.initEditor()
  }
  async update() {
  }
  initEditor() {
    // eslint-disable-next-line no-undef
    this.editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
      mode: 'text/x-markdown', // 语言模式
      theme: "neo", // 主题
      // keyMap: "sublime", // 快键键风格
      lineNumbers: true, // 显示行号
      smartIndent: true, // 智能缩进
      indentUnit: 4, // 智能缩进单位为4个空格长度
      indentWithTabs: true, // 使用制表符进行智能缩进
      lineWrapping: true, // 在行槽中添加行号显示器、折叠器、语法检测器
      gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
      foldGutter: true, // 启用行槽中的代码折叠
      autofocus: true, // 自动聚焦
      matchBrackets: true, // 匹配结束符号，比如"]、}"
      autoCloseBrackets: true, // 自动闭合符号
      styleActiveLine: true, // 显示选中行的样式
    })
    this.setWidth()
    window.onresize = () => {
      this.setWidth()
    }
    this.editor.setOption("value", content)
    this.editor.on("change", () => {
      this.setState({
        content: this.editor.getValue(),
      })
  })
    this.setState(state => ({
      content: content,
    }))
  }
  setWidth() {
    if (document.body.clientWidth < 820) {
      this.editor.setSize("100vw", "60vh")
    } else {
      this.editor.setSize("50vw", "90vh")
    }
  }
  render() {
    return (
      <div className='app'>
        <div className='app-header'>
          <a href='/'>#</a>
          <p>React Markdown</p>
        </div>
        <hr className='horizon' />
        <div className='app-content'>
          <Editor />
          <Preview content={this.state.content}/>
        </div>
        <div className='app-footer'></div>
      </div>
    )
  }
}

export default App
