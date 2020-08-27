import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("When the application is loaded", () => {
    it("should render correctly in debug mode", () => {
        const component = shallow(<App debug />);

        expect(component).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const component = shallow(<App />);

        expect(component).toMatchSnapshot();
    });
});
