# React Training _A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES_ 
A React (https://facebook.github.io/react/) based workshop to help learn more about React.

# Table of contents
- Stateful vs stateless components
- Components in components
- Props & state
- Communicating between components
- Lifecycle methods
- Refs
- Children

# Structure of workshop (2 hours)
## First hour
- 10 mins - intro - mentors put in chat dialogue what they want to gain from the workshop.
- 50 mins - demo of table of contents through building a simple todo app using React.

## Second hour
- Open Q&A session style where mentors ask questions based on first hour and React in general.
- Possible time depending: assign drills to mentors to try in teams of 2 depending on numbers in attendance.

# Drills
- Create a component (call it whatever you like, it can be statefull or stateless) that returns the text Hello World to the screen.

- Create a stateful component called **Parent** that will be used to setup state which will have two properties - name & age. Give these properties values of your choice. Create a stateless component called **Child** that will render the name & age properties of state. The state must be passed down from Main to Child via props.

- Create a function sayHello in the **Parent** that you created in the last drill, this function can just return a console.log('Hello!'). Call this function from the **Child** component that you also created in the last drill.


# Further readings
- Lifecycle methods [https://facebook.github.io/react/docs/react-component.html]

# Using this App locally
- fork this repo
- clone repo to your machine
- cd into project folder
- cd into app folder
- npm start (starts development server & opens up chrome tab on port 3000)
- Start coding :)
