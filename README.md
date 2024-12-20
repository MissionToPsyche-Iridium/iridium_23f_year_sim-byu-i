# iridium_23f_year_sim-byu-i Software Developer's Guide

To help with the passing of this project here is a comprehensive guide of what you will need to work on this project.

## Tools:

### Languages and Libraries

- Node.js v20.13.1 (JavaScript runtime environment)
- npm v10.5.2 (Node.js package manager)
- React.js: Frontend library for building user interfaces.
- React Testing Library: Used for testing React components (included but not yet configured).

## Testing Scaffolding

Tests have not been implemented yet. However, the project includes initial setup for testing:

- Use psyche/src/App.test.js as the default test file for component testing.

- Additional configurations can be added in psyche/src/setupTests.js.

- npm test to run tests once implemented

## References
 
- [Design Document](documents\Psyche_Project_Design_Document.md)

- [Psyche Research](documents\psyche_looks\looks_trivia.md)

- Other various documents are in the documents folder which has images and inital designs for website

# Installation Guide

This video will help you get the project running on your local machine.

[Install Guide](https://youtu.be/mT9UwNDnyDo)


# Version Description Document

## Version/Release Number
V 1.0


---

## Completed Stories

- **WireFrame:** Created Wireframe designs for website
- **Weight and Age Functions:** Created function for weight and age converters
- **Color Pallete:** Created NASA/PSYCHE color pallete in accordance to NASA/PSYCHE branding
- **Created Trivia Page:** Created page to hold trivia content
- **Created Age Converter Component:** Created component for age conversion
- **Created Weight Converter Component:** Created Compononet for weight conversion
- **Home Page:** Created Home Page
- **Header/Footer:** Created Header and Footer
- **Drawing Page:** Created all drawing components and compiled them into the drawing component
- **Credits:** Created credits page

---

## Contributors

- Carter Bosen
- Brodie Busby
- Thomas Jamieson
- Bryer Johnson
- Jackson Westover
- John Wursten

---

## Test Cases

- **Test Case ID:** 1
  - **Description:** Functions for age and weight conversion
  - **Result:** The conversion functions behaved as expected and passed all testing.
  
- **Test Case ID:** 2
  - **Description:** Drawing app funcitonality
  - **Result:** Most things in the drawing app functioned as needed. Only issue was a bug when using the fill tool in an area that has been erased. The fill tool fills the path of the eraser.

---

## Known Errors

- **Erase Tool:** [Issue with erase tool not actually erasing drawing, but rather turning the area back to the color of the canvas. Can be seen when using fill tool over an area that was erased]

- **Oval Tool:** [Issue with Oval tool as it currently does not show the size of the oval when holding doen the mouse. Only when the mouse is released does the oval appear on the screen ]
---

## Future Features

- **Trivia Game:** Multiple choice stlye game with Psyche trivia
- **Improved styling:** Creating a more modern design
