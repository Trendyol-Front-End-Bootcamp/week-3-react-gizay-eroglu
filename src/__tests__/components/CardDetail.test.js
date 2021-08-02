import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure } from "enzyme";

import CardDetail from "../../components/CardDetail";

configure({adapter: new Adapter()});

describe("Card detail component test", function () {

  let wrapper;

  beforeEach(() => { 
    wrapper = shallow(<CardDetail />);
  })

  it("should render cardDetail", () => {
    expect(wrapper).toMatchSnapshot();
  })
  
  it("should check class of loading element which includes character detail card", () => {
    const classOfDiv = wrapper.hasClass("card-detailed");
    expect(classOfDiv).toEqual(true);
  })

  it("should detail card include image alt inside of it", () => {
      const imgAlt = wrapper.find("img").prop("alt");
      expect(imgAlt).toEqual("Character");
  })

  it("should have div which includes card texts", () => {
      const cardTextDiv = wrapper.find(".card-text")
      expect(cardTextDiv).toBeTruthy();
  })

  it("should episodes return episode list", () => {
    const episodeList = [ { name: "first episode" }, { name: "second episode" } ];
    const component = shallow (<CardDetail lastFiveEpisodes={episodeList} />);
    expect(component.findWhere( n => n.type() === "div" && n.contains("first episode")));
  })
});
