import React from "react";
import { shallow } from "enzyme";
import Topnav from "../components/navigation/Topnav";
import QuizEngineStore from "../quizEngineStore";
import { Provider } from "react-redux";

const mockStore = QuizEngineStore;

describe("Topnav", () => {
    it("should render correctly in debug mode", () => {
        const component = shallow(
            <Provider store={mockStore}>
                <Topnav debug />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const component = shallow(
            <Provider store={mockStore}>
                <Topnav />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });
});
