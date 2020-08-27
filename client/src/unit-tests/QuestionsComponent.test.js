import React from "react";
import { shallow } from "enzyme";
import Questions from "../components/Questions";
import QuizEngineStore from "../quizEngineStore";
import { Provider } from "react-redux";

const mockStore = QuizEngineStore;

describe("Question component", () => {
    it("should render correctly in debug mode", () => {
        const component = shallow(
            <Provider store={mockStore}>
                <Questions debug />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const component = shallow(
            <Provider store={mockStore}>
                <Questions />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });
});