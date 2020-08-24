import React from "react";
import { shallow } from "enzyme";
import Sidenav from "../components/navigation/Sidenav";
import QuizEngineStore from "../quizEngineStore";
import { Provider } from "react-redux";

const mockStore = QuizEngineStore;

describe("Sidenav component", () => {
    it("should render correctly in debug mode", () => {
        const component = shallow(
            <Provider store={mockStore}>
                <Sidenav debug />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const component = shallow(
            <Provider store={mockStore}>
                <Sidenav />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });
});
