import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';

import Card from '../../components/Card';

configure({adapter: new Adapter()});

describe('Card component test', function () {

  let wrapper;

  beforeEach(() => { 
    wrapper = shallow(<Card />);
  })

  it('should render card', () => {
    expect(wrapper).toMatchSnapshot();
  })
  
  it('should check class of div element which includes card texts', () => {
    const classOfDiv = wrapper.find('div div').hasClass('card-text');
    expect(classOfDiv).toEqual(true);
  })

  it('should give response to click event', () => {
    const mockCallBackClick = jest.fn();
    wrapper = shallow(<Card onCardClick={mockCallBackClick}/>);
    wrapper.simulate('click');
    expect(mockCallBackClick.mock.calls.length).toEqual(1);
  });

});