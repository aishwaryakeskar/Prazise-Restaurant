import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_appetizers  flex__center">
        <p className="app__specialMenu-menu_heading">Appetizers</p>
        <div className="app__specialMenu_menu_items">
          {data.appetizers.map((appetizer, index) => (
            <MenuItem key={appetizer.title + index} title={appetizer.title} price={appetizer.price} tags={appetizer.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_mains  flex__center">
        <p className="app__specialMenu-menu_heading">Mains</p>
        <div className="app__specialMenu_menu_items">
          {data.mains.map((main, index) => (
            <MenuItem key={main.title + index} title={main.title} price={main.price} tags={main.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
