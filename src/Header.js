import React from 'react';
import MenuItem from './MenuItem';
import './style.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div class="header">
                    <h1 class="header--logo">
                        <a href="#">
              NETFLIXroulette<span class="asterix">*</span>
                        </a>
                    </h1>
                    <nav class="header--navigation">
                        <ul class="navigation">
                            <MenuItem href="#all" text="all" />
                            <MenuItem href="#documentary" text="documentary" />
                            <MenuItem href="#comedy" text="comedy" />
                            <MenuItem href="#horror" text="horror" />
                            <MenuItem href="#crime" text="crime" />
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
