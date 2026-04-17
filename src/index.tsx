import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router';

import App from "./app";

const element = <BrowserRouter><App/></BrowserRouter>

const rootElement = document.getElementById('root')
if (!rootElement) {
    throw new Error('No root element found')
}

const root = ReactDOM.createRoot(rootElement)

root.render(element)



