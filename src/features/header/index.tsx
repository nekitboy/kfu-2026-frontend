import React from 'react';
import Nav from "./components/nav";

const Header = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        alert('Form submitted!');
    }


    return (
        <>
            <header className="header container">
                <div className="header__logo">
                    <div className="header__logo__icon"></div>
                    <div>Ecobazar</div>
                </div>

                <form className="header__search" action="/search" onSubmit={submitHandler}>
                    <div className="header__search__icon"></div>
                    <input type="text" name="query" placeholder="Search"/>

                    <button className="header__search_button">Search</button>
                </form>

                <div className="header__cart">
                    <div>

                    </div>
                    <div>
                        <div>Shopping cart:</div>
                        <div>$57.00</div>
                    </div>
                </div>
            </header>
            <Nav/>
        </>
    )
}

export default Header