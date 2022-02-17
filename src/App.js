import React, { useState } from "react";
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
];

function App() {
  const [state, setQusetion] = useState({ state: {}, doneQuestions: [] });

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
      };
    });
  };

  return (
    <main className="App">
      <header className="App-header">
        <h3>Interview questions</h3>
        {data.length === state.doneQuestions.length ? (
          <h5>{"No more questions"}</h5>
        ) : (
          <button onClick={getQuestion}>Get question</button>
        )}
      </header>
      <section className="App-body">
        {state.doneQuestions.length !== 0 && (
          <>
            <div className="App-body__column">
              <Question question={state.state.question} />
            </div>
            <div className="App-body__column">
              <Answer answer={state.state.answer} />
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

function Answer({ answer }) {
  return (
    <div className="App-body__answer">
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
