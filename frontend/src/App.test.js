/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow} from "enzyme";
import App from './App';
import Articles from './components/ShowArticleList';
import Submitter from './components/SuggestArticleUpload';

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("enzyme - renders without crashing", () => {
  shallow(<App />);
});


it("List of Artlices renders without crashing", () => {
  shallow(<Articles />);
});

it("sumbit form - Title input function", () => {
  const wrapper = shallow(<Submitter />);
  wrapper.find('#titleInput').simulate('keyPress');

});

it("should have button element for submit", () => {
  const wrapper = shallow(<Submitter/>);
  expect(
    wrapper.containsMatchingElement(
      <input type="submit" className="btn btn-outline-warning btn-block mt-4" />
    )
  ).toBe(true);
})


describe("the user populates the input", () => {
  const wrapper = shallow(<Submitter/>);
  const item = 'Hello World';
    beforeEach(() => {
      const input = wrapper.find('input').first();
      input.simulate('change', {
        target: { name: 'title',  value: item }
      })
    });

    it('should update the state property `item`', () => {
      expect(
        wrapper.state().title
      ).toEqual(item);
    });
})




