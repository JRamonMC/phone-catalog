import React from "react";
import renderer from "react-test-renderer";
import Card from "./../Card";
import { shallow } from "enzyme";

describe("Phone card", () => {
  const fakeDataPhone = {
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

  it("Phone card without detail", () => {
    const wrapper = shallow(<Card phone={fakeDataPhone} detail={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Description on  card shows  properly", () => {
    const wrapper = shallow(<Card phone={fakeDataPhone} detail={false} />);
    expect(
      wrapper.containsAnyMatchingElements([
        <p className="font-weight-light">test-d</p>,
      ])
    ).toEqual(true);
  });
});
