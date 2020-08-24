import React from "react";
import { shallow } from "enzyme";
import Landing from "../components/Landing";

describe("Landing component", () => {
    it("should render correctly in debug mode", () => {
        const component = shallow(<Landing debug />);

        expect(component).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const component = shallow(<Landing />);

        expect(component).toMatchSnapshot();
    });
});
