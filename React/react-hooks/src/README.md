## What is React ?

- React is a javascript library.
- It is used for building user interfaces and can be used for developing single-page, web and mobile.
- React is a single page application.
- Created by facebook.

## npm -

- node package manager

## JSX:

- Javascript XML. Allows writing HTML structures in Javascript files using XML-like syntax.

## Components:

- Independent reusable pieces of UI. It can be functional or class-based.
- Example:

```js
function Greting() {
  const myName = "Pramod";

  return <h1>{`Hey ${myName}`}</h1>;
}
```

## Props:

- Short for properties, these are read-only inputs to components that define attributes or configuration.

## State:

- Holds data that might change over the lifecycles of a component. Used in class or functional component via useState hook.

## Make component snippet

- Type `rafce`

## Fragment
- <> </>
- Used to wrap multiple elements in a single parent element without adding extra nodes to the DOM.
        
    
  ## React Hooks :

- React hooks are functions that lets you use state and other features of react components.
- They enable you to manage state and handle side-effects.

```js
function evenOdd(num) {
  if (num % 2 !== 0) {
    return "odd";
  } else {
    return "even";
  }
}
evenOdd(5); // call
```

- Hooks are functions that start with `use` keyword.
- `useState` is a hook that allows you to add state to functional components.
- `useEffect` is a hook that allows you to run some code after rendering.
- `useContext` is a hook that allows you to subscribe to React context without wrapping your component
- `useReducer` is a hook that is similar to `useState`, but it's used with
- `useCallback` is a hook that memoizes a function.
- `useMemo` is a hook that memoizes a value.
- `useRef` is a hook that creates a reference to a DOM node or a value of that.

## UseState Hook :

- useState is a hook that lets you add react state to functional componemts
- Syntax: const [name,setName] = useState("Pramod")
- const [variable/state, function: to cahnge the value] = useState("")
- By the help of function we can change/manipulate the value.