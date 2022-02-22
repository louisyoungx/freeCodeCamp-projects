import { marked } from 'marked'
import Prism from 'prismjs'

export const Preview = (props) => {
    marked.setOptions({
      breaks: true,
      highlight: function (code) {
        return Prism.highlight(code, Prism.languages.javascript, 'javascript')
      }
    })
    let renderer = new marked.Renderer()
    renderer.link = (href, title, text) => {
      return `<a target="_blank" href="${href}">${text}</a>`
    }
    renderer.heading = (text, level) => {
      if (level === 2) {
        return `
        <h${level} id="${text}">
          <a name="class="header-anchor" href="#${text}">
            #
          </a>
          ${text}
        </h${level}>`
      } else {
        return `
        <h${level} id="${text}">
          ${text}
        </h${level}>`
      }
    }
  
    return (
      <div className='preview'>
        <div
          id='preview'
          dangerouslySetInnerHTML={{
            __html: marked(props.content, { renderer: renderer })
          }}
        ></div>
      </div>
    )
  }