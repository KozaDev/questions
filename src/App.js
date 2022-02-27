import React, { useState } from "react";
import { CodeBlock, dracula } from "react-code-blocks";

import "./App.css";
import data from "./data.js";

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
