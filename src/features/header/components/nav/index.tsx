import React from 'react';
import Index from './nav-link';
import { useRoute } from '../../../../components/routing';

const Nav = () => {
  const url = useRoute();

  return (
    <nav className="nav-wrapper">
      <div className="nav container">
        <div className="nav-link-wrapper">
          <Index name={'HOME'} url={'/'} active={url === '/'} />
          <Index name={'Shop'} url={'/shop'} active={url === '/shop'} />
          <Index name={'Blog'} url={'/blog'} />
          <Index name={'About us'} url={'/about'} />
        </div>

        <a href="tel:+2195551114" className="nav-link nav-link_active">
          <div
            style={{
              width: '28px',
              height: '28px',
              backgroundImage: "url('/assets/phone.svg')",
              marginRight: '8px',
            }}
          ></div>
          <div>(219) 555-1114</div>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
