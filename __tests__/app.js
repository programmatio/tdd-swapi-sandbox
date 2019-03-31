import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../src/index";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("should render h1", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1").length).toEqual(1);
    expect(wrapper.find("h1").text()).toEqual("Hello CodeSandbox");
  });
});
