# react-fixed-size-accordion

Easy to use, lightweight accordion panel for Vue 3, with stable height in opened and closed states.


[screencast-localhost_5173-2022.11.26-16_26_23.webm](https://user-images.githubusercontent.com/12416010/204093958-582c6f45-f780-4518-9ce6-cae9dcd80c37.webm?width="100")

## Installation
```shell
# with npm
npm install react-fixed-size-accordion
```
```shell
# with yarn
yarn add react-fixed-size-accordion
```

## Getting Started
### Import component
```javascript
import FixedSizeAccordion from 'react-fixed-size-accordion'
```

## Props
| NAME                    | TYPE      | DEFAULT      |  DESCRIPTION                                                                                   |
|-------------------------|-----------|--------------|------------------------------------------------------------------------------------------------|
| open                    | Boolean   |    -         | Required. Whether hidden block in opened or closed state                                       |   
| animationDuration? (ms) | Number    |    0         | Set sliding animation duration. Animation not applying, if value **0**                         |
| topBarId?               | String    | fsaTopBar    | **topBar** slot wrapper **id**                                                                 |  
| bottomBarId?            | String    | fsaBottomBar | **bottomBar** slot wrapper **id**                                                              |
| bottomBarContentId?     | String    | " "          | By default bottom bar height calculations performing on block with **bottomBarId**. You can add your component with **id** to bottom bar and pass that **id** as a prop - calculations will perform on that component |
