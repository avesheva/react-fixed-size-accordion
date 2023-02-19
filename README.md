# react-fixed-size-accordion

Easy to use, lightweight accordion panel for react, with stable height in opened and closed states.


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

## How to use
```javascript
import React, { useState } from 'react'
import './App.css'

import FixedSizeAccordion from 'react-fixed-size-accordion' // Import component

const TopBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="example-header">
      <div className="visible-header">
        <h3>This is the list header, for example</h3>

        <button onClick={() => setOpen(isOpen => !isOpen)}>
          Open
        </button>
      </div>

      { open && (<div>
        <p>This is hidden block. There are could be list filters, info block or any what you want.</p>
        <p>Can be any height</p>
        <p>
          Whole accordion height do not changes when this block opened or closed, and all list elements are visible
        </p>
      </div>) }
    </div>
  )
}

const BottomBar = () => {
  const someList = [0, 1, 2, 3, 4]

  return (
    <div>
      { someList.map((item) => <div key={item} className="listItem">
        ITEM : { item }
      </div>) }
    </div>
  )
}

const App => () => {
  return (
    <div className="App">
      <ReactFixedSizeAccordion
        topBarContent={ topBar() }
        bottomBarContent={ bottomBar() }
        animationDuration={ 1000 }
      />
    </div>
  )
}

export default App
```
**Styles on you**

## Props
| NAME                    | TYPE      | DEFAULT      |  DESCRIPTION                                                                                   |
|-------------------------|-----------|--------------|------------------------------------------------------------------------------------------------|
| topBarContent           | ReactNode |     -        | Required. Content for top bar                                                                  |
| bottomBarContent        | ReactNode |     -        | Required. Content for bottom bar                                                               | 
| animationDuration? (ms) | Number    |    0         | Set sliding animation duration. Animation not applying, if value **0**                         |
| topBarId?               | String    | fsaTopBar    | **topBar** slot wrapper **id**                                                                 |  
| bottomBarId?            | String    | fsaBottomBar | **bottomBar** slot wrapper **id**                                                              |
| bottomBarContentId?     | String    | " "          | By default bottom bar height calculations performing on block with **bottomBarId**. You can add your component with **id** to bottom bar and pass that **id** as a prop - calculations will perform on that component |
