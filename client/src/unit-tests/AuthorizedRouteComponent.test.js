import React from "react";
import { shallow } from "enzyme";
import AuthorizedRoute from "../components/authorizedRoutes/AuthorizedRoute";
import QuizEngineStore from "../quizEngineStore";
import { Provider } from "react-redux";

const mockStore = QuizEngineStore;

describe("AuthorizedRoute component", () => {
    it("should render correctly in debug mode", () => {
        const component = shallow(
            <Provider store={mockStore}>
                <AuthorizedRoute debug />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const component = shallow(
            <Provider store={mockStore}>
                <AuthorizedRoute />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });
});
