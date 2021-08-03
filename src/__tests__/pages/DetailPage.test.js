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

  it('should render cardDetail', () => {
    expect(wrapper).not.toBeNull();
    expect(wrapper).toMatchSnapshot();
  })

  it('', () => {
    expect(wrapper.find('Header')).toBeTruthy();
    expect(wrapper.find('CardDetail')).toBeTruthy();
  })


})
/**  it('expec',() => {
    let character= [{name:3}]
    const notFound = wrapper.find('card-loading');
    expect(notFound).toBeTruthy();
  })

  it('', () => {

    let character= [{name:3}]
    const notFound = wrapper.find('go-homepage-button');
    expect(notFound).toBeTruthy();

  }) */