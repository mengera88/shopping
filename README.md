# 一些说明

由于时间和其他考量，只实现了满足题目要求的一些动态数据交互效果，没有完全按照网站提供的样式去实现(比如一些drawer从半屏到页面转变的动效)
数据是用了mock数据，详见interface中的product.json文件，该数据取自给的demo的接口返回，其中数据中的quantity的含义做了变更，在本次实现中表示选中的数量

初次使用Chakra UI
整页版本也做了

由于不知道promo code的效果，所以这次没有实现。在demo中尝试乱写了一些promo code 都提示invalid code。不清楚正确的效果形式

在状态管理中，由于是比较小型的项目，没有使用redux等比较重的状态管理方案，而是使用的context作为轻量级的状态管理方案，详见 context 文件夹。

项目部署地址： https://stellar-mandazi-fb0f3f.netlify.app/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
