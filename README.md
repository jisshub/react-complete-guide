[What is React](#What-is-React)

[Extensions to Install](#Extensions-to-Install)

[Create a React Application](#Create-a-React-Application)

[File Structure Overview](#File-Structure-Overview)

[Components and Templates](#Components-and-Templates)

[Dynamic Values in Template](#Dynamic-Values-in-Template)

[Multiple Components](#Multiple-Components)

# What is React

![alt](../images/screen-1.jpg)

- **Single Page Application** means server only needs to send a single html page to the browser for the website to run fully.
- Then React takes over and manages the whole website in the browser including user events, website data,
  also routing from page -> page.
- When user clicks a nav in the website, request not sending to server instead React changes all the content in the website dependent on the route of the link user clicked.
- For example when user clicks on Contact nav, **React** look in to its route and then inject contact form on to the page.
- This in contract with traditional website where every links user clicks sends a request to the server and loads an html page. Check below image

![Traditional Setup](../images/screen-2.jpg)

# Extensions to Install

1. Simple React Snippets
2. Reactjs code snippets

To use emmet inside react components, update settings like below,

![](../images/screen-3.jpg)

---

# Create a React Application

- Install Nodejs
- Go thru below link

  [Creating an App](https://github.com/facebook/create-react-app)

or run below command

```terminal
npx create-react-app my-app
cd my-app
npm run start
```

Check React Version

```terminal
npm view react version
```

# File Structure Overview

**node_module**: where all our project dependencies resides. if _node_modules_ not present in the project that downloaded from github. v can add it by running,

```terminal
npm install
```

**public > index.html** - Initial index file served by the server. React injects the components dynamically to the div element in this file.

```html
<div id="root"></div>
```

**src > App.js** - is the App component file. v export our App component here

**src > index.js** - where v render our App component to the DOM. V import the App component here.

```js
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

- index.js takes the _App_ component and renders to the DOM inside the div element with id _root_

**package.json** - List all the dependecies of the app. Also have scripts to run & build the app.

---

# Components and Templates

## App Component

**App.js**

```js
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

- here code inside the return() is _JSX_ template. and not _HTML_ template.

- JSX allows to create html style templates, and in background _Babel_ transpiles this jsx templates to html. and renders that html template to DOM.

- In JSX v use _className_ in place of _class_. while transpiling to html, it got converted to _class_.

# Dynamic Values in Template

**App.js**

- Using curly braces to add dynamic values to the template.

```js
function App() {
  const title = 'Welcome to our blog';
  const likes = 50;
  const link = 'https://www.google.com';
  return (
    <div className='App'>
      <div className='content'>
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}
```

---

# Multiple Components

![](../images/screen-4.jpg)

Root component is App.js, other components are nested inside the App component

Create a Navbar component in src

**Navbar.js**

_Stateless Function Component_

```js
const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>The Dojo Blog</h1>
      <div className='links'>
        <a href='/'>Home</a>
        <a href='/create'>New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
```

Next import this component in _App.js_

**App.js**

```js
import Navbar from './Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <h1>App Component</h1>
      </div>
    </div>
  );
}
```

Create a **Home** component and Export

**Home.js**

```js
const Home = () => {
  return (
    <div className='home'>
      <h2>HomePage</h2>
    </div>
  );
};

export default Home;
```

Inject Home component in App component

**App.js**

```js
import Home from './Home';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}
```
