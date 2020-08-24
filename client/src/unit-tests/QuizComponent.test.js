import React from "react";
import { shallow } from "enzyme";
import Quiz from "../components/Quiz";
import QuizEngineStore from "../quizEngineStore";
import { Provider } from "react-redux";

const mockStore = QuizEngineStore;

describe("Quiz component", () => {
    it("should render correctly in debug mode", () => {
        const component = shallow(
            <Provider store={mockStore}>
                <Quiz debug />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const component = shallow(
            <Provider store={mockStore}>
                <Quiz />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });
});
