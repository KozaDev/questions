const data = [
  {
    question: "What is the difference between Element and Component?",
    answer: [
      {
        article:
          "An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.",
      },
      {
        article:
          "The object representation of React Element would be as follows:",
      },
      {
        code: `const element = React.createElement(
            'div',
            {id: 'login-btn'},
            'Login'
          )`,
      },
      {
        article: "The above React.createElement() function returns an object:",
      },
      {
        code: `{
          type: 'div',
          props: {
            children: 'Login',
            id: 'login-btn'
          }
        }`,
      },
      {
        article: "And finally it renders to the DOM using ReactDOM.render(): ",
      },
      {
        code: `<div id='login-btn'>Login</div>`,
      },
      {
        article:
          "Whereas a component can be declared in several different ways. It can be a class with a render() method or it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output:",
      },
      {
        code: `const Button = ({ onLogin }) =>
        <div id={'login-btn'} onClick={onLogin}>Login</div>`,
      },
      {
        article:
          "Then JSX gets transpiled to a React.createElement() function tree:",
      },
      {
        code: `const Button = ({ onLogin }) => React.createElement(
            'div',
            { id: 'login-btn', onClick: onLogin },
            'Login'
          )`,
      },
    ],
  },
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
        article:
          "Note: You can directly assign to the state object either in constructor or using latest javascript's class field declaration syntax.",
      },
    ],
  },
  {
    question: "What is the difference between HTML and React event handling?",
    answer: [
      {
        article:
          "Below are some of the main differences between HTML and React event handling",
      },
      {
        article:
          "In HTML, the event name usually represents in lowercase as a convention:",
      },
      { code: `<button onclick='activateLasers()'>` },
      { articele: "Whereas in React it follows camelCase convention:" },
      { code: `<button onClick={activateLasers}>` },
      {
        article: "In HTML, you can return false to prevent default behavior:",
      },
      {
        code: `<a href='#' onclick='console.log("The link was clicked."); return false;' />`,
      },
      {
        article: "Whereas in React you must call preventDefault() explicitly:",
      },
      {
        code: `function handleClick(event) {
        event.preventDefault()
        console.log('The link was clicked.')
      }`,
      },
      {
        article:
          "In HTML, you need to invoke the function by appending () Whereas in react you should not append () with the function name. (refer 'activateLasers' function in the first point for example)",
      },
    ],
  },
  {
    question: "How to bind methods or event handlers in JSX callbacks?",
    answer: [
      { article: "There are 3 possible ways to achieve this:" },
      {
        article:
          "1.Binding in Constructor: In JavaScript classes, the methods are not bound by default. The same thing applies for React event handlers defined as class methods. Normally we bind them in constructor.",
      },
      {
        code: `class Foo extends Component {
                    constructor(props) {
                      super(props);
                      this.handleClick = this.handleClick.bind(this);
                    }
                    handleClick() {
                      console.log('Click happened');
                    }
                    render() {
                      return <button onClick={this.handleClick}>Click Me</button>;
                    }
                  }`,
      },
      {
        article:
          "2.Public class fields syntax: If you don't like to use bind approach then public class fields syntax can be used to correctly bind callbacks.",
      },
      {
        code: `handleClick = () => {
        console.log('this is:', this)
      }`,
      },
      {
        code: `<button onClick={this.handleClick}>
      {'Click me'}
    </button>`,
      },
      {
        article:
          "3.Arrow functions in callbacks: You can use arrow functions directly in the callbacks.",
      },
      {
        code: `handleClick() {
        console.log('Click happened');
    }
    render() {
        return <button onClick={() => this.handleClick()}>Click Me</button>;
    }`,
      },
      {
        article:
          "Note: If the callback is passed as prop to child components, those components might do an extra re-rendering. In those cases, it is preferred to go with .bind() or public class fields syntax approach considering performance.",
      },
    ],
  },
  {
    question: "What are synthetic events in React?",
    answer: [
      {
        article:
          "SyntheticEvent is a cross-browser wrapper around the browser's native event. Its API is same as the browser's native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers.",
      },
    ],
  },
  {
    question: "What are inline conditional expressions?",
    answer: [
      {
        article:
          "You can use either if statements or ternary expressions which are available from JS to conditionally render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator &&.",
      },
      {
        code: `<h1>Hello!</h1>
      {
          messages.length > 0 && !isLogin?
            <h2>
                You have {messages.length} unread messages.
            </h2>
            :
            <h2>
                You don't have unread messages.
            </h2>
      }`,
      },
    ],
  },
  {
    question:
      "What is 'key' prop and what is the benefit of using it in arrays of elements?",
    answer: [
      {
        article:
          "A key is a special string attribute you should include when creating arrays of elements. Key prop helps React identify which items have changed, are added, or are removed.",
      },
      {
        articele: `Most often we use ID from our data as key:`,
      },
      {
        code: `const todoItems = todos.map((todo) =>
        <li key={todo.id}>
          {todo.text}
        </li>
      )`,
      },
      {
        articele:
          "When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort: ",
      },
      {
        code: `const todoItems = todos.map((todo, index) =>
          <li key={index}>
            {todo.text}
          </li>
        )`,
      },
      { articele: "Note:" },
      {
        list: [
          "1. Using indexes for keys is not recommended if the order of items may change. This can negatively impact performance and may cause issues with component state.",
          ,
          "2. If you extract list item as separate component then apply keys on list component instead of li tag. ",
          "3. There will be a warning message in the console if the key prop is not present on list items.",
        ],
      },
    ],
  },
  {
    question: "What is the use of refs?",
    answer: [
      {
        article:
          "The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.",
      },
    ],
  },
  {
    question: "What is Lifting State Up in React?",
    answer: [
      {
        article:
          "When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.",
      },
    ],
  },
];

export default data;
