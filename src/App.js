import React, { useState, useEffect } from "react";
import { CodeBlock, dracula } from "react-code-blocks";

import "./App.css";

const data = [
  {
    question: "What is React?",
    answer: [
      {
        article:
          "React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications. It is used for handling view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.",
      },
    ],
  },
  {
    question: "What are the major features of React?",
    answer: [
      { article: "The major features of React are:" },
      {
        list: [
          "It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.",
          "Supports server-side rendering.",
          "Follows Unidirectional data flow or data binding.",
          "Uses reusable/composable UI components to develop the view.",
        ],
      },
    ],
  },
  {
    question: "What is JSX?",
    answer: [
      {
        article:
          "JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax.",
      },
      {
        article:
          "In the example below text inside <h1> tag is returned as JavaScript function to the render function.",
      },
      {
        code: `class App extends React.Component {
          render() {
            return(
              <div>
                <h1>{'Welcome to React world!'}</h1>
              </div>
            )
          }
        }`,
      },
    ],
  },
  {
    question: "How to create components in React?",
    answer: [
      {
        article: "There are two possible ways to create a component.",
      },
      {
        list: [
          "Function Components: This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as first parameter and return React elements:",
        ],
      },
      {
        code: `function Greeting({ message }) {
        return <h1>Hello, {message}</h1>
      }`,
      },
      {
        list: [
          "Class Components: You can also use ES6 class to define a component. The above function component can be written as:",
        ],
      },
      {
        code: `class Greeting extends React.Component {
        render() {
          return <h1>Hello, {this.props.message}</h1>
        }
      }`,
      },
    ],
  },
  {
    question: "When to use a Class Component over a Function Component?",
    answer: [
      {
        article:
          "If the component needs state or lifecycle methods then use class component otherwise use function component. However, from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only available in class component right in your function component. *So, it is always recommended to use Function components, unless you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries *",
      },
    ],
  },
  {
    question: "What is state in React?",
    answer: [
      {
        article:
          "State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components.",
      },
      {
        article:
          "State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.",
      },
      {
        article: "Let's create a user component with message state",
      },
      {
        code: `class User extends React.Component {
        constructor(props) {
          super(props)
      
          this.state = {
            message: 'Welcome to React world'
          }
        }
      
        render() {
          return (
            <div>
              <h1>{this.state.message}</h1>
            </div>
          )
        }
      }`,
      },
    ],
  },
  {
    question: "What are props in React?",
    answer: [
      {
        article:
          "Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes. They are data passed down from a parent component to a child component.",
      },
      {
        article:
          "The primary purpose of props in React is to provide following component functionality:",
      },
      {
        list: [
          "Pass custom data to your component.",
          "Trigger state changes.",
          "Use via this.props.reactProp inside component's render() method.",
        ],
      },
      {
        article:
          "For example, let us create an element with reactProp property: ",
      },
      { code: "<Element reactProp={'1'} />" },
      {
        article:
          "This reactProp (or whatever you came up with) name then becomes a property attached to React's native props object which originally already exists on all components created using React library.",
      },
      { code: "props.reactProp" },
    ],
  },
  {
    question: "What is the difference between state and props?",
    answer: [
      {
        article:
          "Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.",
      },
    ],
  },
  {
    question: "Why should we not update the state directly? ",
    answer: [
      {
        article:
          "If you try to update the state directly then it won't re-render the component.",
      },
      { code: "this.state.message = 'Hello world'" },
      {
        article:
          "Instead use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.",
      },
      { code: "this.setState({ message: 'Hello World' })  " },
      {
        articele:
          "Note: You can directly assign to the state object either in constructor or using latest javascript's class field declaration syntax.",
      },
    ],
  },
];

function App() {
  const [state, setQusetion] = useState({
    state: {},
    doneQuestions: [],
    isAnswerVisible: false,
  });

  const getQuestion = () => {
    if (data.length === state.doneQuestions.length) return;
    const getRandomInt = () => Math.floor(Math.random() * data.length);

    let newQuestion;

    do {
      newQuestion = getRandomInt();
    } while (state.doneQuestions.includes(newQuestion));

    setQusetion((thisState) => {
      return {
        state: data[newQuestion],
        doneQuestions: [...thisState.doneQuestions, newQuestion],
        isAnswerVisible: false,
      };
    });
  };

  const displayAnswer = () => {
    setQusetion((thisState) => {
      return {
        ...thisState,
        isAnswerVisible: true,
      };
    });
  };

  const repeatSession = () => {
    setQusetion((thisState) => ({ ...thisState, doneQuestions: [] }));
  };

  return (
    <main className="App">
      <header className="App-header">
        <h3>Interview questions</h3>
        {data.length === state.doneQuestions.length ? (
          <>
            <h5>No more questions</h5>
            <button onClick={repeatSession}>Repeat session</button>
          </>
        ) : (
          <button onClick={getQuestion}>Draw question</button>
        )}
      </header>
      <section className="App-body">
        {state.doneQuestions.length !== 0 && (
          <>
            <div className="App-body__column">
              <Question question={state.state.question} />
            </div>
            <div className="App-body__column">
              <Answer
                answer={state.state.answer}
                displayAnswer={displayAnswer}
                isAnswerVisible={state.isAnswerVisible}
              />
            </div>
          </>
        )}
      </section>
    </main>
  );
}

function Question({ question }) {
  return (
    <div className="App-body__question">
      <h3>{question}</h3>
    </div>
  );
}

function Answer({ answer, displayAnswer, isAnswerVisible }) {
  return (
    <div className="App-body__answer">
      {isAnswerVisible ? (
        <div>
          {answer.map(({ article, list, code }) => {
            return (
              <>
                {article && <p>{article}</p>}
                {list && <List list={list} />}
                {code && <Code code={code} />}
              </>
            );
          })}
        </div>
      ) : (
        <button onClick={displayAnswer}>Display answer</button>
      )}
    </div>
  );
}

function List({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

function Code({ code }) {
  return (
    <div className="code">
      <CodeBlock
        text={code}
        language={"js"}
        showLineNumbers={1}
        startingLineNumber={1}
        theme={dracula}
      />
    </div>
  );
}

export default App;
