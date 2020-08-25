import React from "react";
import { shallow } from "enzyme";
import Login from "../components/entry/Login";
import QuizEngineStore from "../quizEngineStore";
import { Provider } from "react-redux";

const mockStore = QuizEngineStore;

describe("Loading Component", () => {
    it("should render correctly in debug mode", () => {
        const component = shallow(
            <Provider store={mockStore}>
                <Login debug />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const component = shallow(
            <Provider store={mockStore}>
                <Login />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });
});
