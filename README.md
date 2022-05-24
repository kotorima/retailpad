# Установка Node.js и первый запуск проекта

Если у вас не установлен node.js, то сейчас самое время этим занятся с:

Для начала скачиваем nvm-setup.exe по ссылке https://github.com/coreybutler/nvm-windows/releases
Устанавливаем nvm по классике. Далее открываем Windows PowerShell и выполняем команду `nvm install latest`.

Выполняем команду `node -v`, чтобы узнать версию node.js. Если у вас v16.15.0, то дальнейшие действия в этом абзаце можно пропустить. Если у вас другая, то выполняем `nvm ls`. Если у вас в списке нет нужной версии, то нужно выпонить команду `nvm install 16.15.0`, а после `nvm use 16.15.0`.

Важно!!! Команду `nvm use` нужно выполнять находясь в папке проекта.

Давайте теперь узнаем соответстует ли версия npm версии с которой работает node.js 16.15.0. Для этого выполним команду `npm -v`, если у вас 8.5.5, то дальнейшие действия не нужны. Если нет, то выполняем `npm install -g npm@8.5.5`

Находясь в папке проекта подтягиваем все зависимости при помощи команды `npm i`, далее выполняем `npm start`. И вот благодаря магии node.js мы запустили проект и можем начать с ним работать. Не забудте поздравить себя с этим событием, вы справились, так что похлопаем себе, мы такие молодцы с:

# Документация, к используемым библиотекам и методологиям в проекте

Create React App(CRA) - среда для разрабртки на React, с настроенным webpack и babel и еще несколькими дополнительными плюшками. Лучший инструмент для разработки SPA-приложений на React.
https://create-react-app.dev/

Мaterial UI - библиотека с готовыми react компонентами
https://mui.com/material-ui/

Redux - фреймворк позволяющий работать с состоянием приложения(Локальная "база данных", которая хранит в себе данные приложения(состояния)). 
https://habr.com/ru/post/498860/ - xорошая статья для понимания и риализации работы Redux.
https://react-redux.js.org/


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
