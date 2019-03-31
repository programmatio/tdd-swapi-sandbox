import React from "react";
import moxios from "moxios";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ListOfCharacters from "../src/ListOfCharacters";
import axios from "axios";
Enzyme.configure({ adapter: new Adapter() });

jest.mock("axios", () => {
  const characters = [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77"
    }
  ];
  return {
    get: jest.fn(() => Promise.resolve(characters))
  };
});

describe("<ListOfCharacters />", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.install();
  });

  it("should fetch characters", () => {
    // moxios.wait(() => {
    //   const request = moxios.requests.mostRecent();
    //   request.respondWith({
    //     status: 200,
    //     response: {
    //       data: {
    //         results: [
    // {
    //   name: "Luke Skywalker",
    //   height: "172",
    //   mass: "77"
    // }
    //         ]
    //       }
    //     }
    //   });
    // });
    const wrapper = mount(<ListOfCharacters />);
    wrapper.instance().componentDidMount();
    expect(wrapper.state("characters")).toBe("object");
    expect(Array.isArray(wrapper.state("characters"))).toEqual(true);
    expect(wrapper.state("characters")[0].name).toEqual("Luke Skywalker");
  });

  it("should store fetched characters in the state", () => {});
});
