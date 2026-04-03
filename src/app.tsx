import React from 'react'
import HomePage from "./pages/home";

import ShopPage from "./pages/shop";
import {useRoute} from "./components/routing";

const App = () => {
    const url = useRoute()

    console.log(url)

    if (url === '/') {
        return <HomePage />
    } else if (url === '/shop') {
        return <ShopPage />
    }

    return <h1>404 not found</h1>
}

export default App;