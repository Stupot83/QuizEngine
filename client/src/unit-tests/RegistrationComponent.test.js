import React from "react";
import { shallow } from "enzyme";
import Registration from "../components/entry/Registration";
import QuizEngineStore from "../quizEngineStore";
import { Provider } from "react-redux";

const mockStore = QuizEngineStore;

describe("Registration component", () => {
    it("should render correctly in debug mode", () => {
        const component = shallow(
            <Provider store={mockStore}>
                <Registration debug />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const component = shallow(
            <Provider store={mockStore}>
                <Registration />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });
});
