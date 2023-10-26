# Webdev knowledge database

Here are all the concepts a front-end developer needs to know in order to get a job and create applications. I advise to memorize all the terms in bold, their meaning and, if possible, an example of their use in code.

## General programming concepts

**Declarative programming** - programming paradigm that expresses logic of computation without describing its' control flow

**Functional programming** - type of declarative programming in which programs are made of pure functions

**Pure function** - function that doesn't have side-effects and always gives same output with same input

**Procedure** - impure function

**Imperative programming** - programming paradigm that uses statements that change program's state

**Class** - object with context, constructor method and data fields

**Object-Oriented Programming (OOP)** - type of imperative programming in which programs are made of classes and implement 4 features:

1. **Encapsulation** - changing access scope of field
2. **Abstraction** - separating identical properties of different objects into another
3. **Inheritance** - creating objects by extending existing ones
4. **Polymorphism** - allowing for different method behaviour depending on type and amount of input

**SOLID** - OOP acronym that stands for 5 principles:

1. **Single responsibility** - class does only 1 thing
2. **Open/closed** - class can be opened or closed for others to use
3. **Liskov's substitution** - class can be replaced by any of its children
4. **Interface segregation** - classes' interfaces should be separated into many small promises for simpler interaction
5. **Dependency inversion** - classes shouldn't expect each other to never change, should use promises and could change as long as they allow

**Prototype** - object that can be used to store functionality and reuse it across many child components, e. g. function.prototype.a = 1

**Scope** - property of objects and variables that controls their accessibility from anywhere in script

**Hoisting** - making function's inner global variables available to all functions by executing it

**Closure** - making contexts private in form of recursive functions that share same lexical environment of parent function

**Debouncing** - executing function at most once in specified time period

**Throttling** - executing function at least and at most once in specified time period

**Bubbling** - capturing events from deepest element to all of it's parents recursively

### Data structures

**Data structure** - way of arranging data on a computer so that it can be accessed and updated efficiently. Data structures include:

- **Array** - collection of elements, each identified by index
- **Stack** - collection of elements that is modified in last in, first out (LIFO) order
- **Queue** - collection of entities that is modified in first in, first out (FIFO) order
- **Linked list** - collection of entities whose order is controlled by each element pointing to next regardless of their location in memory
- **Graph** - representation of connections that can be directed between nodes that can be weighted
- **Tree** - hierarchical graph with root value and subtrees of children
- **Hash table** - associative array that maps keys to values
- **Promise** - object with unique methods like `then` and `catch` that is returned by `async function` and is used to notify that it's execution is completed

### Algorithms

**Algorithm** - set of rules to be followed by computer, for example:

- **Binary Search** finds index of target number in sorted array by dividing it on 2 halves on each iteration, efficiency is $$O(log(n))$$, where n is array length
- **Insertion Sort** sorts array of numbers by comparing and ordering them one by one, efficiency is from $O(n)$ to $O(n^2)$
- **Selection Sort** sorts array by finding and selecting next smallest number across array one after another, efficiency is $O(n)$
- **Merge Sort** sorts array by dividing it on 2 halves based on index on each iteration and sorting each half, efficiency is $O(n * log(n))$
- **Quick Sort** sorts array by dividing it on 2 halves based on some median value called pivot and sorting each half, efficiency is from $O(n * log(n))$ to $O(n2)$
- **Heap Sort** sorts array by dividing it on sorted and unsorted parts and finding and selecting next smallest number across unsorted part one after another, efficincy is $O(n * log(n))$
- **Counting Sort** sorts array of values in specific range by counting value's number of appearances in array one by one, efficiency is $O(n + k)$, where k is range of values
- **Topological Sort** constructs topological flattened sequence of nodes from weighted Directed Acycled Graph (DAG), efficiency is $O(v + e)$
- **Breadth-First Search (BFS)** searches tree or graph data structure by checking neighbours of nodes level by level, efficiency is $O(v + e)$, where v and e are amounts of graph vertices and edges; and becomes inorder if discovers left child node earlier than right and reverse if not
- **Depth-first Search (DFS)** searches tree or graph data structure by checking node branches as far as possible one by one, efficiency is $O(v + e)$
- **Kruskal's Algorithm** constructs tree of edges with minimum weight out of undirected connected graph, efficiency is $O(n^2)$
- **Dijkstra's Algorithm** finds shortest path in weighted graph with non-negative edge weights from root, efficiency is $O(e * log(v))$
- **Floyd Warshall's Algorithm** finds shortest path in weighted graph with possible negative edge weights from root, efficiency is $O(v^3)$
- **Bellman-Ford's Algorithm** finds shortest path in weighted graph with possible negative edge weights from particular given vertex, efficiency is $O(v + e)$
- **Kadane's Algorithm** constructs subarray with biggest sum within from array of numbers by placing maximum subarray endings at each index, efficiency is $O(n)$
- **Lee's Algorithm** finds shortest path from given coordinates to another in maze that is represented as matrix with ways as ones and walls as zeroes, efficiency is $O(a * b)$, where and b are matrix dimensions
- **Flood Fill Algorithm** finds biggest connected area of same values in matrix by using BFS, efficiency is $O(a * b)$
- **Floyd's Cycle Algorithm** detects cycle in linked list by hashing and grouping nodes, efficiency is $O(n)$.

### Patterns

**Patterns** - general solutions for common problems in software development

- **Factory Method** - superclass with interface for creating objects allows child classes to alter their type
- **Abstract Factory** - creating families of related objects without specifying their concrete classes
- **Builder** - constructing complex objects step by step with ability to produce different types of it on different stages
- **Prototype** - abstract instance with non-unique code that can be shared across multiple objects
- **Singleton** - class that strictly has only 1 instance and provides a global access point to itself
- **Adapter** - something that allows objects with incompatible interfaces to interact
- **Bridge** - split of complex classes into abstraction and implementation that can be developed independently
- **Composite** - object can be recursive child and parent of other objects while still normally acting as individual object
- **Decorator** - wrapper that can attach new behaviors to objects by placing them inside itself
- **Facade** - simplified interface to library or any other complex set of classes
- **Flyweight** - fitting more objects into available amount of memory by sharing common parts in multiple objects
- **Proxy** - placeholder of another object that allows to access the object and perform something before or after it

## Web network

**Hypertext Transfer Protocol (HTTP)** - international standart of accessing websites with default port 80 that offers different types of requests:

- **POST** submits data to specified resource
- **GET** requests and retrieves data of specified resource
- **PUT** replaces all data of target resource with request payload
- **DELETE** deletes specified data
- **HEAD** asks for response identical to that of GET request, but without response body
- **CONNECT** establishes tunnel to server identified by the target resource
- **OPTIONS** describes communication options for target resource
- **TRACE** performs message loop-back test along path to the target resource
- **PATCH** applies partial modifications to data

**Create, read, update and delete (CRUD)** - interface convention shared by HTTP with methods post, get, put and delete

**Response** of target server can be one of 5 classes:

1. **Informational** responses (100-199)
2. **Successful** responses (200-299)
3. **Redirects** (300-399)
4. **Client** errors (400-499)
5. **Server** errors (500-599)

**Simple Object Access Protocol (SOAP)** - messaging protocol that uses XML

**Representational State Transfer (REST)** - messaging protocol that uses JSON and, usually, HTTP and used for web services called RESTful that operate only text resources and share endpoints

**Domain Naming System (DNS)** - software that binds IPs of servers to domains

**Cross-Origin Resource Sharing (CORS)** - HTTP-header and preliminary request based mechanism that control which domains and IPs are allowed to access server

**Socket** - created only during lifetime of application endpoint for manipulating data continuously

**Progressive Web App (PWA)** - modern application development approach with 3 main points:

- **HyperText Transfer Protocol Secure (HTTPS)** - encrypted and more secure version of HTTP with default port 443
- **Service worker** - script that controls network requests handling, asset caching, can make web page faster and even work offline
- **Manifest** - JSON file that describes how app appears to user

**Accessibility** - web-development approach that makes browsing websites possible for people with disabilities:

- **Semantic HTML**
- Declaring language of site
- Leaving meaningful links
- Placeholders and alt texts

**Search Engine Optimization (SEO)** - set of practices to raise website in search results and increase amount of visits:

- Rational HTML structure
- Relevant words and texts
- Small webpage size
- Correct headings
- Links to and from popular webpages

## HTML

**Shadow DOM** - part of HTML DOM with HTML templates that isn't displayed on page by default and imply JS manipulation

## CSS

**Layout** - set of stylesheet rules that positions elements on page

- **Normal flow** - layout where elements are placed one after another depending on their size and value of display value, e. g. block
- **Floats** - layout where elements can be aligned to different sides of parent containers
- **Positioning** - layout where elements can be taken out of normal layout flow and placed independently of others
- **Flexbox** - single-dimensional layout that can be used to create very complex row or column layouts
- **Grid** - two-dimensional and packed with lot of properties layout that allows precisely predefine elements' place on webpage

**Preprocessor** - program that changes way stylesheets are written and then compiles them to normal CSS so browser can understand it:

- **Variable** - piece of information reusable across stylesheet, e. g. `$color: #000`
- **Nesting** - ability to recursively place selectors inside of their bodies, e. g. `ul { li { } }`
- **Mixin** - group of properties, e. g. `@mixin box { margin: 0; }`
- **Inheritance** - ability to extend existing styles, e. g. `.child { @extend %parent; }`

## JavaScript-specific concepts

**Objects** include `Boolean, Number, String, Date, Math, RegExp, Array, Function, Object, Error, BigInt, Map, Set, WeakMap, WeakSet, JSON, promise, generator, proxy, intl`

**Primitives** include `string, number, boolean, null, undefined`

**Values** include `Infinity, NaN, undefined, globalThis`

**Currying** - separating functions by input data and implementing parts of their functionality separately, e. g.

```js
function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}
```

**Optional chaining** - reading value of property located deep within chain of connected objects without checking their validity, e. g. `person.dog?.name`

**Immediately-invoked Function Expression (IIFE)** - function that executes as soon as created, e. g.

```js
(function (a) {
  return +2;
})();
```

or

```js
( => + 2 ) ()
```

**Destructuring** - unpacking values from arrays or properties from objects using spread operator e. g.

```js
[a, b] = [1, 2]
[a, ...rest] = [1, 2, 3, 4]
array = [...array, a]
```

**Strict mode** - disabling backward compatibility in favor for some optimizations that is activated by adding 'use strict':

- Turns some JS silent errors to **throw errors**
- Fixes mistakes that make it difficult for JavaScript engines to **perform optimizations**
- **Prohibits syntax** likely to be removed in future versions of language
- Implements **try-catch** - tries to execute code, then if doesn't succeed, catches possible error and finally runs some code, e. g.

```js
try {
  a();
} catch (e) {
  console.log(e);
} finally {
  console.log("done");
}
```

**Awaiting** - code execution after getting promise, e. g.

```js
let result = await new Promise();
```

**Asynchronous JavaScript And XML (AJAX)** - approach of making HTTP requests directly from scripts. e. g.

```js
fetch("http://example.com/data.json").then((response) => response.json());
```

## Frameworks, libraries, tools & other thing for Front-end development

### React

**React** - A declarative JavaScript library for building user interfaces

**Hook** - function with state and lifecycle features in functional React component:

- **useState** returns state value and function to update it
- **useEffect** asynchronously runs imperative, possibly effectful code after component is rendered
- **useContext** accepts context object and returns it's current value
- **useReducer** returns state paired with dispatch method that can modify it indirectly
- **useCallback** accepts an callback and an array of dependencies and returns it if they change
- **useMemo** accepts an function and an array of dependencies and recomputes it if they change
- **useRef** returns mutable ref object initialised with the passed argument
- **useImperativeHandle** customizes handler is exposed to parent components when using refs
- **useLayoutEffect** is identical to useEffect, but also runs after all DOM mutations
- **useDebugValue** can be used to display label for custom hooks in React DevTools

**Lifecycle** - set of stages program undergoes from initial creation to execution:

- **setState** changes component state and re-renders it and its' children with updated state
- **forceUpdate** forces re-render of component even if nothing is changed
- **componentDidMount** executed immediately after component is inserted into DOM
- **componentWillUnmount** executes immediately before a component is removed from DOM
- **componentDidUpdate** executes when component gets re-rendered
- **getDerivedStateFromProps** executes each time right before calling render method
- **getSnapshotBeforeUpdate** executes right before changes are committed to DOM
- **shouldComponentUpdate** controls that changes in state or props trigger re-render
- **getDerivedStateFromError** executes after an error has been thrown by component
- **componentDidCatch executes** after an error has been processed by component

**Redux** - immutable state container, where global state of app is an single object tree called store. and is implemented via 4 features:

1. **Action** - object with type field that modifies global app store
2. **Reducer** - function that takes action as input and transforms store accordingly
3. **Dispatch** - operation of assigning an action to reducer
4. **Mobx** - simple mutable state container, where data as store is directly provided to components by wrapper functions that make components reactive

## Vue

**Vue** - JS framework for building user interfaces which includes all neccessary parts for web app development and is initialized via exporting object with fields:

- **data** holds variables used in component
- **watch** observes particular data piece and executes on change
- **template** contains HTML layout
- **props** hold array of input data
- **created** and other similar methods control lifecycle of app
- **methods** holds differect functions used in component
- **computed** is equal to methods but caches data
- **mixins** hold array of objects that can be inserted in any component to add their functionality

**Vuex** - mutable Vue state container, where global state of app consists of global storage of all data, methods that alter that storage via commit to $store context, and components that access it, and can be created by connecting corresponding plugin and creating Vuex object: `Vue.use(Vuex); const store = new Vuex.Store({ state: { }, mutations: {
} })`

## Misc helpers

**Webpack** - JS bundler that transforms front-end assets such as HTML, CSS, and images and is configured via JS module with exports and rules for sources, e. g.

```js
const cssRegex = /\.css$/ mode: isEnvProduction
    ? 'production'
    : isEnvDevelopment
    && 'development'
```

**TypeScript** - compiler of JS that adds static typing to language and is designed for development of large applications:

- **Interface** - custom type, e. g. `interface Props {a: number }`
- **Generic** - polymorphic function, e. g.

```js
function (a: number): number { }
```

- **Abstraction** - class that is only meant to be extended from, e. g.

```js
abstract class Class {
    abstract method(): void
}
```

## Testing

**Test** - technique of executing program to find failures

- **Unit testing** verifies that any part of code delivers expected output
- **Component testing** verifies functionality and/or usability of single complex object
- **Smoke testing** verifies basic functionality of program at earlier stages of development
- **Integration testing** verifies if how individual components function together properly
- **Regression testing** verifies that codebase change hasn't broken the existing functionality
- **Sanity testing** verifies that minor modifications have fixed the issues and haven't introduced new ones
- **System testing** verifies complete, integrated system's compliance with specified requirements at final stages
- **Acceptance testing** verifies that software can handle actual users' required tasks in real-world scenarios

## Management & workflow concepts

**Agile** - set of methods and approaches to management:

1. **Focus on customers** for all employees of company
2. **Simplification of organizational structure**, rules, processes
3. **Short iterative loops** with intermediate results
4. **Retrospective and feedback** usage
5. **Independence and responsibility** of employees

**Scrum** - implementation of agile that includes 2-3 weeks iteration of work, 15-minutes daily meetings to track progress, demonstrating and analyzing of what's done

**Kanban** - set of methods and approaches to management:

1. **Balancing demands** with capacity of available human resource
2. **Handling of bottlenecks** of production process
3. **Board visualization** of work to give an understanding of what, when, and how much to do

## Links

HTML:

https://developer.mozilla.org/ru/docs/Web/HTML/Element/head
https://developer.mozilla.org/ru/docs/Web/HTML/Element/link
https://developer.mozilla.org/ru/docs/Web/HTML/Element/title
https://developer.mozilla.org/ru/docs/Web/HTML/Element/footer
https://developer.mozilla.org/ru/docs/Web/HTML/Element/header
https://developer.mozilla.org/ru/docs/Web/HTML/Element/Heading_Elements
https://developer.mozilla.org/ru/docs/Web/HTML/Element/main
https://developer.mozilla.org/ru/docs/Web/HTML/Element/nav
https://developer.mozilla.org/ru/docs/Web/HTML/Element/section
https://developer.mozilla.org/ru/docs/Web/HTML/Element/div
https://developer.mozilla.org/ru/docs/Web/HTML/Element/li
https://developer.mozilla.org/ru/docs/Web/HTML/Element/menu
https://developer.mozilla.org/ru/docs/Web/HTML/Element/ol
https://developer.mozilla.org/ru/docs/Web/HTML/Element/p
https://developer.mozilla.org/ru/docs/Web/HTML/Element/ul
https://developer.mozilla.org/ru/docs/Web/HTML/Element/a
https://developer.mozilla.org/ru/docs/Web/HTML/Element/code
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i
https://developer.mozilla.org/ru/docs/Web/HTML/Element/span
https://developer.mozilla.org/ru/docs/Web/HTML/Element/strong
https://developer.mozilla.org/ru/docs/Web/HTML/Element/time
https://developer.mozilla.org/ru/docs/Web/HTML/Element/u
https://developer.mozilla.org/ru/docs/Web/HTML/Element/img
https://developer.mozilla.org/ru/docs/Web/SVG/Element/svg
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody
https://developer.mozilla.org/ru/docs/Web/HTML/Element/td
https://developer.mozilla.org/ru/docs/Web/HTML/Element/tfoot
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr
https://developer.mozilla.org/ru/docs/Web/HTML/Element/button
https://developer.mozilla.org/ru/docs/Web/HTML/Element/form
https://developer.mozilla.org/ru/docs/Web/HTML/Element/input
https://developer.mozilla.org/ru/docs/Web/HTML/Element/label
https://developer.mozilla.org/ru/docs/Web/HTML/Element/option
https://developer.mozilla.org/ru/docs/Web/HTML/Element/select
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
https://developer.mozilla.org/ru/docs/Web/HTML/Element/details
https://developer.mozilla.org/ru/docs/Web/HTML/Element/dialog
https://developer.mozilla.org/ru/docs/Web/HTML/Element/summary

CSS properties & TailwindCSS:

https://tailwindcss.ru/docs/utility-first/
https://tailwindcss.ru/docs/hover-focus-and-other-states/
https://tailwindcss.ru/docs/responsive-design/
https://tailwindcss.ru/docs/display/
https://tailwindcss.ru/docs/object-fit/
https://tailwindcss.ru/docs/object-position/
https://tailwindcss.ru/docs/position/
https://tailwindcss.ru/docs/top-right-bottom-left/
https://tailwindcss.ru/docs/z-index/
https://tailwindcss.ru/docs/flex-direction/
https://tailwindcss.ru/docs/flex-wrap/
https://tailwindcss.ru/docs/flex/
https://tailwindcss.ru/docs/order/
https://tailwindcss.ru/docs/grid-template-columns/
https://tailwindcss.ru/docs/gap/
https://tailwindcss.ru/docs/justify-content/
https://tailwindcss.ru/docs/justify-self/
https://tailwindcss.ru/docs/align-items/
https://tailwindcss.ru/docs/align-self/
https://tailwindcss.ru/docs/padding/
https://tailwindcss.ru/docs/margin/
https://tailwindcss.ru/docs/width/
https://tailwindcss.ru/docs/min-width/
https://tailwindcss.ru/docs/max-width/
https://tailwindcss.ru/docs/height/
https://tailwindcss.ru/docs/min-height/
https://tailwindcss.ru/docs/max-height/
https://tailwindcss.ru/docs/font-size/
https://tailwindcss.ru/docs/font-weight/
https://tailwindcss.ru/docs/line-clamp/
https://tailwindcss.ru/docs/line-height/
https://tailwindcss.ru/docs/list-style-image/
https://tailwindcss.ru/docs/list-style-type/
https://tailwindcss.ru/docs/text-align/
https://tailwindcss.ru/docs/text-color/
https://tailwindcss.ru/docs/text-decoration/
https://tailwindcss.ru/docs/text-decoration-color/
https://tailwindcss.ru/docs/font-style/
https://tailwindcss.ru/docs/text-transform/
https://tailwindcss.ru/docs/whitespace/
https://tailwindcss.ru/docs/word-break/
https://tailwindcss.ru/docs/background-color/
https://tailwindcss.ru/docs/background-image/
https://tailwindcss.ru/docs/gradient-color-stops/
https://tailwindcss.ru/docs/border-radius/
https://tailwindcss.ru/docs/border-width/
https://tailwindcss.ru/docs/border-color/
https://tailwindcss.ru/docs/border-style/
https://tailwindcss.ru/docs/box-shadow/
https://tailwindcss.ru/docs/box-shadow-color/
https://tailwindcss.ru/docs/opacity/
https://tailwindcss.ru/docs/brightness/
https://tailwindcss.ru/docs/backdrop-brightness/
https://tailwindcss.ru/docs/border-collapse/
https://tailwindcss.ru/docs/transition-property/
https://tailwindcss.ru/docs/transition-duration/
https://tailwindcss.ru/docs/transition-timing-function/
https://tailwindcss.ru/docs/transition-delay/
https://tailwindcss.ru/docs/animation/
https://tailwindcss.ru/docs/scale/
https://tailwindcss.ru/docs/rotate/
https://tailwindcss.ru/docs/translate/
https://tailwindcss.ru/docs/skew/
https://tailwindcss.ru/docs/appearance/
https://tailwindcss.ru/docs/cursor/
https://tailwindcss.ru/docs/pointer-events/

JavaScript:

https://learn.javascript.ru/intro
https://learn.javascript.ru/devtools
https://learn.javascript.ru/structure
https://learn.javascript.ru/variables
https://learn.javascript.ru/types
https://learn.javascript.ru/comparison
https://learn.javascript.ru/ifelse
https://learn.javascript.ru/logical-operators
https://learn.javascript.ru/arrow-functions-basics
https://learn.javascript.ru/debugging-chrome
https://learn.javascript.ru/object
https://learn.javascript.ru/object-copy
https://learn.javascript.ru/optional-chaining
https://learn.javascript.ru/number
https://learn.javascript.ru/string
https://learn.javascript.ru/array
https://learn.javascript.ru/array-methods
https://learn.javascript.ru/keys-values-entries
https://learn.javascript.ru/destructuring-assignment
https://learn.javascript.ru/date
https://learn.javascript.ru/rest-parameters-spread-operator
https://learn.javascript.ru/settimeout-setinterval
https://learn.javascript.ru/import-export

TypeScript:

https://www.typescriptlang.org/docs/handbook/2/basic-types.html
https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
https://www.typescriptlang.org/docs/handbook/2/narrowing.html
https://www.typescriptlang.org/docs/handbook/2/functions.html
https://www.typescriptlang.org/docs/handbook/2/objects.html
https://www.typescriptlang.org/docs/handbook/2/generics.html
https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
https://www.typescriptlang.org/docs/handbook/2/modules.html
https://www.typescriptlang.org/docs/handbook/2/mapped-types.html

React:

https://react.dev/learn/your-first-component
https://react.dev/learn/importing-and-exporting-components
https://react.dev/learn/writing-markup-with-jsx
https://react.dev/learn/javascript-in-jsx-with-curly-braces
https://react.dev/learn/passing-props-to-a-component
https://react.dev/learn/conditional-rendering
https://react.dev/learn/rendering-lists
https://react.dev/learn/adding-interactivity
https://react.dev/learn/responding-to-events
https://react.dev/learn/state-a-components-memory
https://react.dev/learn/reacting-to-input-with-state
https://react.dev/learn/synchronizing-with-effects
https://react.dev/learn/reusing-logic-with-custom-hooks

Nextjs:

https://nextjs.org/docs/app/building-your-application/routing
https://nextjs.org/docs/app/building-your-application/optimizing/images
https://nextjs.org/docs/app/building-your-application/optimizing/fonts
https://nextjs.org/docs/app/building-your-application/optimizing/static-assets

Primary technical stack visualization:

![image](/public/stack.jpg)
