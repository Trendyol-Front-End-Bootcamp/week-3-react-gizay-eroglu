import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure } from "enzyme";
import Enzyme from "enzyme";

import Filter, { handleNameChange } from "../../components/Filter";

configure({adapter: new Adapter()});

describe("Filter component test", () => {
    const filter = jest.fn();
    let wrapper;

  beforeEach(() => { 
    wrapper = shallow(<Filter filter = { filter }/>);
  })

  it("renders", () => {
    expect(wrapper).not.toBeNull();
  })

  it("should show the initial value of the name", () => {
    expect(wrapper.find("#name").text()).toEqual("");
  })

  it("should name change", () => {
    let name = wrapper.find("#name");
    name.simulate("change", { target: { value: "gizay"}});
    name = wrapper.find("#name");
    expect(name.prop("value")).toEqual("gizay");
      
  })

  it("should gender change", () => {
    let gender = wrapper.find("#gender");
    gender.simulate("change", { target: { value: "male"}});
    gender = wrapper.find("#gender");
    expect(gender.prop("value")).toEqual("male");
  })

  it("should status change", () => {
    let status = wrapper.find("#status");
    status.simulate("change", { target: { value: "dead"}});
    status = wrapper.find("#status");
    expect(status.prop("value")).toEqual("dead");
  })
})


