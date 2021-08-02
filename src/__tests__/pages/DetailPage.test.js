import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure } from "enzyme";
import { getCharacterById } from "../../services/RickAndMortyApi";

import DetailPage from "../../pages/DetailPage";

configure({adapter: new Adapter()});

describe("Detail page test", function () {

  let wrapper;

  beforeEach(() => { 
    wrapper = shallow(<DetailPage match = {{ params: { id: 1 }}} />);
  })

  it("should render cardDetail", () => {
    expect(wrapper).not.toBeNull();
    expect(wrapper).toMatchSnapshot();
  })
})