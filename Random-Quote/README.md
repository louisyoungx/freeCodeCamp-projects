# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Rquirements

目标： 在 CodePen.io 上实现一个功能类似 https://codepen.io/freeCodeCamp/full/qRZeGZ 的 App。

在满足以下 需求 并能通过所有测试的前提下， 赋予它你自己的个人风格。

可以使用 HTML、JavaScript、CSS、Bootstrap、SASS、React、Redux、jQuery 来完成这个挑战。 但鉴于这个章节的学习内容与前端框架相关，推荐使用一款前端框架（比如 React）来完成这个挑战；不推荐使用前面没有提到的技术，否则风险自负。 不推荐使用前面没有提到的技术，否则风险自担。 我们有计划新增其他前端框架课程，例如 Angular 和 Vue，不过目前还没有这些内容。 我们会接受并尝试修复你在使用推荐技术栈创建项目时报告的问题。 编码愉快！

需求 1： 应该能看到一个具有 id="quote-box" 属性的包裹元素。

需求 2： 在 #quote-box 元素内，应该能看到一个具有 id="text" 属性的元素。

需求 3： 在 #quote-box 元素内，应该能看到一个具有 id="author" 属性的元素。

需求 4： 在 #quote-box 元素内，应该能看到一个具有 id="new-quote" 属性的可点击元素。

需求 5： 在 #quote-box 元素内，应该能看到一个具有 id="tweet-quote" 属性的可点击 a 元素。

需求 6： 首次加载时，App 应该在具有 id="text" 属性的元素内展示一条随机引语。

需求 7： 首次加载时，App 应该在具有 id="author" 属性的元素内展示该条随机引语的作者。

需求 8： 当点击具有 #new-quote 属性的按钮时，App 应该得到一条新的引语并在具有 #text 属性的元素内展示出来。

需求 9： 当点击具有 #new-quote 属性的按钮时，App 应该得到新引语的作者并在具有 #author 属性的元素内展示出来。

需求 10： 可以通过点击具有 #tweet-quote 属性的 a 标签将当前引语发送到推特。 该 a 标签的 href 属性应该是 "twitter.com/intent/tweet"，以便成功发送。

需求 11： 具有 #quote-box 属性的包裹元素应该水平居中。 请在浏览器缩放尺寸为 100% 且页面窗口最大化时运行测试。

你可以使用这个 CodePen 模板，点击 Save 创建即可你自己的项目 或者可以在任何喜欢的环境中使用以下 CDN 链接来运行测试：https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js。

一旦完成了本项目并且该项目所有测试运行通过，请提交项目的 URL。

注意： Twitter 不允许在 iframe 里加载链接。 如果 tweet 不能加载，尝试在 #tweet-quote 元素上使用 target="_blank" 或者 target="_top" 属性。 target="_top" 会替换当前 tab 页的内容，所以确保当前内容已经保存了。

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
