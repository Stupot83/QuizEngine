import React from "react";
import { shallow } from "enzyme";
import QuizList from "../components/QuizList";
import QuizEngineStore from "../quizEngineStore";
import { Provider } from "react-redux";

const mockStore = QuizEngineStore;

describe("QuizList component", () => {
    it("should render correctly in debug mode", () => {
        const component = shallow(
            <Provider store={mockStore}>
                <QuizList debug />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const component = shallow(
            <Provider store={mockStore}>
                <QuizList />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });
});
