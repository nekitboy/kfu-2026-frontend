import React from 'react'
import ReactDOM from 'react-dom/client'

const element = <h1>Hello World</h1>

const rootElement = document.getElementById('root')
if (!rootElement) {
    throw new Error('No root element found')
}

const root = ReactDOM.createRoot(rootElement)

root.render(element)



