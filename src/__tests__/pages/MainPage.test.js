import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow, configure, mount } from 'enzyme';

import MainPage from '../../pages/MainPage';

configure({adapter: new Adapter()});

describe('Main page test', function () {

  let wrapper;

  beforeEach(() => { 
    wrapper = mount(<MainPage/>);
  })

  it('should render', () => {
    expect(wrapper).not.toBeNull();
    expect(wrapper).toMatchSnapshot();
  })
})


    
