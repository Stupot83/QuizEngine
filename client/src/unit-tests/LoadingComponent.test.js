import React from "react";
import { shallow } from "enzyme";
import Loading from "../components/Loading";

describe("Loading component", () => {
    it("should render correctly in debug mode", () => {
        const component = shallow(<Loading debug />);

        expect(component).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const component = shallow(<Loading />);

        expect(component).toMatchSnapshot();
    });
});
