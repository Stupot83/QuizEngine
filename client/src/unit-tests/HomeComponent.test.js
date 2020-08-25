import React from "react";
import { shallow } from "enzyme";
import Home from "../components/Home";
import QuizEngineStore from "../quizEngineStore";
import { Provider } from "react-redux";

const mockStore = QuizEngineStore;

describe("Home component", () => {
    it("should render correctly in debug mode", () => {
        const component = shallow(
            <Provider store={mockStore}>
                <Home debug />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const component = shallow(
            <Provider store={mockStore}>
                <Home />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });
});
