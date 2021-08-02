import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure } from "enzyme";

import MainPage from "../../pages/MainPage";

configure({adapter: new Adapter()});

describe("Main page test", function () {

  let wrapper;

  beforeEach(() => { 
    wrapper = shallow(<MainPage />);
  })

  it("should render cardDetail", () => {
    expect(wrapper).not.toBeNull();
    expect(wrapper).toMatchSnapshot();
  })
})