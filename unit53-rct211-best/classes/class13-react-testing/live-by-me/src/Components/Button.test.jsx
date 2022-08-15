import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";

import userEvent from "@testing-library/user-event";

import App from "../App";
import Button from "./Button";

describe("Button Tests", () => {
  // test("should have button in dom" , () => {} )
  it("should have button in dom", () => {
    render(<Button>Click Me</Button>); //virtually

    // screen.debug()

    let button = screen.getByText("Click Me"); //document.getElementById()
    expect(button).toBeInTheDocument();
  });

  it("should have button with text Click me in App.js", () => {
    render(<App></App>); //virtually

    // screen.debug()

    // let button = screen.getByText("Click Me");
    let button = screen.getByTestId("cButton");

    expect(button).toBeInTheDocument();
  });

  it("should render empty button", () => {
    render(<Button></Button>);

    // screen.debug()

    let button = screen.getByTestId("cButton");
    expect(button).toBeEmptyDOMElement();
  });

  it("should change theme", () => {
    render(<App></App>);

    let h3 = screen.getByText("Current Theme is light");
    expect(h3).toHaveTextContent("light");

    let themeButton = screen.getByText("Change Theme");

    // userEvent.click(themeButton);
    fireEvent.click(themeButton);
    expect(h3).toHaveTextContent("dark");
  });

  it("should call the given function", () => {
    const mockfn = jest.fn(); // what this function is, what is the logic that this function works with

    // render(<Button onClick={mockfn}>Click me</Button>);
    render(<Button clickHandler={mockfn}>Click me</Button>);
    // render(<Button clickHandler={mockfn}></Button>);

    // screen.debug()

    const btn = screen.getByTestId("cButton");
    fireEvent.click(btn);
    fireEvent.click(btn);
    // fireEvent.
    // expect(mockfn).toBeCalled();
    // expect(mockfn).toBeCalledTimes(1);
    expect(mockfn).toBeCalledTimes(2);
  });

  //Snapshot -> Screenshots, Represented in a particular format

  // it("should match snapshot", () => {
  it.only("should match snapshot", () => {
    const tree = renderer
      .create(
        <Button colorScheme={"green"} variant={"ghost"}>
          Add Counter
        </Button>
      )
      // .toJSON();
    .toTree();
    expect(tree).toMatchSnapshot();
  });


  //basic utitlies, hooks (NOT REACT HOOKS)
  //run for 1 time, before running any test
  beforeAll(() => {
    // make a db.call => output
  });

  //before every test case
  beforeEach(() => {
    // get the deployed link (netlify)
  });

  //after all the tests are run
  afterAll(() => {
    // stop that db.json
  });

  //after a single test case if completed
  afterEach(() => {
    //
  });




});

//If our function is getting called or not?
// 1. We should get our button
//2. We should mimic the click event behavior
// 3. We should check if the function was triggered.

//<div></div>

//1. We wanted to access a button with text Click me inside App.js
//2. But the button is actually using the text "Change theme"
//3. So, by default the test should have failed.

//Expectations -> Actual Results

//Delete App.test.js

//Redux?
