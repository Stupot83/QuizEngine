import React from "react";
import { shallow } from "enzyme";
import QuizInterface from "../components/QuizInterface";
import QuizEngineStore from "../quizEngineStore";
import { Provider } from "react-redux";

const mockStore = QuizEngineStore;

describe("QuizInterface component", () => {
    it("should render correctly in debug mode", () => {
        const component = shallow(
            <Provider store={mockStore}>
                <QuizInterface debug />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const component = shallow(
            <Provider store={mockStore}>
                <QuizInterface />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });
});
