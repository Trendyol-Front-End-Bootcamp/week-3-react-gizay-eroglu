import ReactDOM from "react-dom";
import { mock } from "jest";
import { renderToDOM } from "../index";
 
jest.mock("react-dom");

describe("test ReactDOM.render", () => {

  const originalRender = ReactDOM.render;

  beforeEach(() => {
    ReactDOM.render = jest.fn();
  });

  afterAll(() => {
    ReactDOM.render = originalRender;
  });

  it("should call ReactDOM.render", () => {
    renderToDOM();
    expect(ReactDOM.render).toHaveBeenCalled();
  });
});