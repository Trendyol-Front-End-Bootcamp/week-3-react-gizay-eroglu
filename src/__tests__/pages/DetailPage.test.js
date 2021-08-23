import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';

import DetailPage from '../../pages/DetailPage';

configure({adapter: new Adapter()});

describe('Detail page test', function () {

  let wrapper;

  beforeEach(() => { 
    wrapper = shallow(<DetailPage match = {{ params: { id: 1 }}} />);
  })

  it('should render', () => {
    expect(wrapper).not.toBeNull();
    expect(wrapper).toMatchSnapshot();
  })

  it('should have header and card detail', () => {
    expect(wrapper.find('Header')).toBeTruthy();
    expect(wrapper.find('CardDetail')).toBeTruthy();
  })
})
