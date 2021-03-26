# vue-inline-px-to-rem
a webpack loader for vue projects to transform px units exiting in inline styles to rem units

## Getting Started
### Using npm to install vue-inline-px-to-rem
```
npm install --save-dev vue-inline-px-to-rem
```
### Add the loader to your webpack config. For example:
vue.config.js
```
module.exports = {
  chainWebpack (config) {
    ...
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('vue-inline-px-to-rem')
      .loader('vue-inline-px-to-rem')
      .options({
        rootValue: 100
      })
      .end()
      ...
  }
}
```
### Options
| Name | Type | Default | Description |
| ------------ | ------------- | ------ | ----- |
| rootValue | Number  | 100 | Represents the root element font size or returns the root element font size based on the input parameter