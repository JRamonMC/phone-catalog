import React from "react";
import NavigationBar from "./../NavigationBar";
import { shallow } from "enzyme";

describe("Navigation Bar test", () => {
  it("Navigation Bar render", () => {
    const wrapper = shallow(<NavigationBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
