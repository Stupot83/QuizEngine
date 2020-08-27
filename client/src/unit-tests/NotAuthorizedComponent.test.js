import React from "react";
import { shallow } from "enzyme";
import NotAuthorized from "../components/NotAuthorized";

describe("NotAuthorized component", () => {
    it("should render correctly in debug mode", () => {
        const component = shallow(<NotAuthorized debug />);

        expect(component).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const component = shallow(<NotAuthorized />);

        expect(component).toMatchSnapshot();
    });
});
