import React from "react";
import ShowImage from "./../ShowImage";
import { shallow } from "enzyme";

describe("ShowImage test", () => {
  const fakeDataPhone = {
    _id: "id",
    name: "test",
    manufacturer: "test-m",
    description: "test-d",
    color: "test-c",
    price: "1",
    screen: "test-s",
    processor: "2",
    ram: "3",
    imageRaw: "test-i",
  };

  const fakeUrl = "fakeUrl";

  it("Show image render", () => {
    const wrapper = shallow(<ShowImage item={fakeDataPhone} url={fakeUrl} />);
    expect(wrapper).toMatchSnapshot();
  });
});
