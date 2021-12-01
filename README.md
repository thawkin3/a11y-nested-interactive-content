# Accessible Nested Interactive Content

This project is meant to teach software engineers how to create accessible nested interactive content in React. It includes good examples and bad examples.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can find the demo app hosted here: http://tylerhawkins.info/a11y-nested-interactive-content/build/

## Running the App Locally

You can run the app locally by simply cloning the repo, running `yarn install`, and then running `yarn start`.

## Accessibility Principles Addressed

1. Interactive content should not be nested.
2. When re-creating a button element using a div element, you must remember to add a tabindex, a keypress handler, and the role="button" attribute.
3. Lists of items should use proper semantic list elements.
4. Interactive content needs adequate visible focus indicators.
5. Contextual labels should be added to buttons to indicate which item in the list the button relates to.

## Additional Takeaways

1. Accessible content can still look good!
2. You can often take inaccessible content and improve it even without affecting the initial UI design.

## Available Scripts

In the project directory, you can run:

- `build`: Builds the app
- `eject`: Ejects the app from using react-scripts
- `format`: Formats the code using Prettier
- `format-watch`: Formats the code using Prettier in watch mode
- `start`: Starts the app in development mode
- `test`: Runs the tests in watch mode
