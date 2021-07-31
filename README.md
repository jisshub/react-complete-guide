[What is React](#What-is-React)

[Extensions to Install](#Extensions-to-Install)

[Create a React Application](#Create-a-React-Application)

[File Structure Overview](#File-Structure-Overview)

[Components and Templates](#Components-and-Templates)

[Dynamic Values in Template](#Dynamic-Values-in-Template)

[Multiple Components](#Multiple-Components)

[Adding inline styles dynamically](#Adding-inline-styles-dynamically)

[Click Events](#Click-Events)

[Using State](#Using-State)

[Using useState React hook](#Using-useState-React-hook)

[Intro to React Dev Tools](#Intro-to-React-Dev-Tools)

[Outputting List](#Outputting-List)

[Props](#Props)

[Reusing Components](#Reusing-Components)

[Functions As Props](#Functions-As-Props)

[useEffect Hook Basics](#useEffect-Hook-Basics)

[useEffect Hook Dependencies](#useEffect-Hook-Dependencies)

[Using JSON Server](#Using-JSON-Server)

[Fetching Data with useEffect](#Fetching-Data-with-useEffect)

[Conditional Loading Message](#Conditional-Loading-Message)

[Handling Fetch Errors](#Handling-Fetch-Errors)

[Create Custom Hook](#Create-Custom-Hook)

[React Router](#React-Router)

[Exact Match Routes](#Exact-Match-Routes)

[Router Links](#Router-Links)

[Route Parameters](#Route-Parameters)

[Reusing Custom Hook](#Reusing-Custom-Hook)

[Web Forms](#Web-Forms)

[Submit Forms](#Submit-Forms)

[Making a POST request](#Making-a-POST-request)

[Programmatic Redirects](#Programmatic-Redirects)

[Deleting Blogs](#Deleting-Blogs)

[Setting 404 Page](#Setting-404-Page)

# What is React

![](./images/screen-1.jpg 'image')

- **Single Page Application** means server only needs to send a single html page to the browser for the website to run fully.
- Then React takes over and manages the whole website in the browser including user events, website data,
  also routing from page -> page.
- When user clicks a nav in the website, request not sending to server instead React changes all the content in the website dependent on the route of the link user clicked.
- For example when user clicks on Contact nav, **React** look in to its route and then inject contact form on to the page.
- This in contract with traditional website where every links user clicks sends a request to the server and loads an html page. Check below image

![Traditional Setup](./images/screen-2.jpg)

# Extensions to Install

1. Simple React Snippets
2. Reactjs code snippets

To use emmet inside react components, update settings like below,

![](./images/screen-3.jpg)

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

![](./images/screen-4.jpg)

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

# Adding CSS to the components

> delete _App.css_ file and it's import

**App.css**

```css
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

/* base styles */
* {
  margin: 0;
  font-family: 'Quicksand';
  color: #333;
}
.navbar {
  padding: 20px;
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  border-bottom: 1px solid #f2f2f2;
}
.navbar h1 {
  color: #f1356d;
}
.navbar .links {
  margin-left: auto;
}
.navbar a {
  margin-left: 16px;
  text-decoration: none;
  padding: 6px;
}
.navbar a:hover {
  color: #f1356d;
}
.content {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
}
```

# Adding inline styles dynamically

```js
<a
  href='/create'
  style={{
    color: 'white',
    backgroundColor: '#f1356d',
    borderRadius: '8px',
  }}
>
  New Blog
</a>
```

# Click Events

Pass a function as a reference to onClick event. Check example below

While clicking on button, function is invoked

```js
const Home = () => {
  const handleClick = () => {
    console.log('hello ninjas');
  };
  return (
    <div className='home'>
      <h2>HomePage</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
```

### Passing arguments to the function

invoke the function with in another function. check bewlow

```js

    function handleClickAgain(name) {
        console.log(`name: ${name}`);
    }
    return (
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClickAgain('jissmon')}>Click Me Again</button>
        </div>
     );
}
```

### Event Object

Objects that we get access automatically when an event triggers.

When a funciton invoked event object is passed

```js
const handleClick = (e) => {
  console.log('hello ninjas', e);
};
function handleClickAgain(name, e) {
  console.log(`name: ${name}`, e.target);
}
return (
  <div className='home'>
    <h2>HomePage</h2>
    <button onClick={handleClick}>Click Me</button>
    <button onClick={(e) => handleClickAgain('jissmon', e)}>
      Click Me Again
    </button>
  </div>
);
```

![](./images/screen-5.jpg 'image')

# Using State

Making a value reactive. i.e changing the values according to events aoccures.
For this purpose we use, _hooks_.
here the hook is _useState_
By using this hook we create reactive value.

```js
const Home = () => {
  let name = 'jissmon';
  const handleClick = () => {
    name = 'thala ajith';
    console.log(name);
  };
  return (
    <div className='home'>
      <h2>HomePage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};
```

here the value of name wont change to even v click the button.

# Using useState React hook

```js
import { useState } from 'react';
const Home = () => {
  const [state, setstate] = useState('data science');
  const handleClick = () => {
    setstate('machine learning');
    console.log(state);
  };
  return (
    <div className='home'>
      <h2>HomePage</h2>
      <p>{state}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
```

**useState()** takes the initial state. store it using array destructuring.
where variable `state` takes the initial value while `setstate`
used to update the initial state later in the code.
which is updated while invking **handleClick()** function.
thus changing value in template. Sceenshot below

Note: `state` is where v store initial state, `setstate` is used to update the `state`.

![](./images/screen-6.jpg)

## Intro to React Dev Tools

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

## Outputting List

Dynamically show list in the template by maping thru each object in the same. Use _map_ method. map filters thru each element in the array and make chnages in the same.

```js
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum..', author: 'jiss', id: 1},
        {title: 'welcome party', body: 'lorem ipsum..', author: 'rehman', id: 2},
        {title: 'react dev tools', body: 'lorem ipsum..', author: 'ajith', id: 3}
    ])
    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={}>

                </div>
            ))}
        </div>
     );

```

Map called on blogs where v get access to each values in the same. then using jsx template to display each one in the list.
when v o/p a list in jsx template. Root template must hav a _key_ property to keep track of each item when DOM outputs it.
So if data changes at any point of time, react will keep track of it. keys are unique for each item.

```js
<div className='home'>
  {blogs.map((blog) => (
    <div className='blog-preview' key={blog.id}>
      <h2>{blog.title}</h2>
      <p>Written by {blog.body}</p>
    </div>
  ))}
</div>
```

`blog.id` refers to **key** property here. which is unique for each. it can be any unique property not just id.

# Props

Not repeating the same logic in every component, we make it reusable
for the component using **props** feature
In case of blogs, we create an external component and specify logic of cycling
through each blog there. Later v reuse it in multiple component.

**BlogList.js**

```js
const blogList = () => {
  return (
    <div className='home'>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.body}</p>
        </div>
      ))}
    </div>
  );
};
```

**Home.js**

```js
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum..', author: 'jiss', id: 1 },
    { title: 'welcome party', body: 'lorem ipsum..', author: 'rehman', id: 2 },
    { title: 'react dev tools', body: 'lorem ipsum..', author: 'ajith', id: 3 },
  ]);
  return <blogList />;
};
```

- Here shows error _blogs not defined_ since the same not defined in Home component.
- To do that v use _Props_. Using the same v pass _blogs_ data from **Home** component
  to **blogList** component given in the return statement.
- Thus making it reusable.

Using Props Check Below:

```js
return <BlogList blogs={blogs} />;
```

- Pass blogs data to a variable. clubing them makes a prop.
- Means `blogs={blogs}` is a **Prop**.
- BlogList component get this prop as argument.

**BlogList.js**

```js
const BlogList = (prop) => {
  const blogs = prop.blogs;
  console.log(prop, blogs);
  return (
    <div className='home'>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.body}</p>
        </div>
      ))}
    </div>
  );
};
```

- We access the prop property which has an object blogs which contains an array
  of blogs.
- Then iterate thru each blog.

![](./images/screen-9.jpg)

## Destructuring prop in each manner

Here v destructure that prop object when getting the same as an argument itself.

```js
// from this
const BlogList = (prop) => {};
// to this
const BlogList = ({ blogs }) => {};
```

# Reusing Components

```js
return (
  <div className='home'>
    <BlogList blog={blogs} title='All Blogs' />
    <BlogList
      blogs={blogs.filter((blog) => blog.author === 'Ajith')}
      title="Ajith's Blog"
    />
  </div>
);
```

- First case of BlogList We get all the blogs.
- Second case, we filtered out blogs of author `Ajith`.
- Thus reusing the BlogList component again.

---

# Functions As Props

Suppose we want to delete a blog,

**BlogList.js**

```js
<div className='blog-preview' key={blog.id}>
  <h2>{blog.title}</h2>
  <p>Written by {blog.body}</p>
  <button onClick={handleDelete(blog.id)}>Delete</button>
</div>
```

- Call _handleDelete_ gets blog id as parameter.
- Create this in Home component since blog state is defined in Home. Check Below

```js
const [blogs, setBlogs] = useState([
  { title: 'My new website', body: 'lorem ipsum..', author: 'jiss', id: 1 },
  { title: 'welcome party', body: 'lorem ipsum..', author: 'rehman', id: 2 },
  { title: 'react dev tools', body: 'lorem ipsum..', author: 'ajith', id: 3 },
]);
```

- Use _setBlogs_ to update/delete the blogs.
- Thus We create the function here and interact with data directly.
- Later pass this funtion to BlogList component as _Prop_.

**Home.js**

```js
const handleDelete = (blogId) => {
  // store blogs with unmatched id's to newBlogs variable
  const newBlogs = blogs.filter((blog) => blog.id !== blogId);
  // call setBlogs - Pass newBlogs
  setBlogs(newBlogs);
};
return <BlogList blogs={blogs} handleDelete={handleDelete} />;
```

- _BlogList_ component accept this prop as an argument.

**BlogList.js**

```js
const BlogList = ({ blogs, handleDelete }) => {};
```

This how we pass function as prop to another function.

---

# useEffect Hook Basics

- ueEffect hook runs every time when component renders.
- Also runs when state changes.
- It is useful for fetching the data.

```js
import { useEffect } from 'react';
useEffect(() => {
  console.log('use effect executed');
});
```

# useEffect Hook Dependencies

- when we want to run _useEffect_ function only after certain rendering instead of every renders.

- We use actual dependencies with useEffect.

- For example: If want to run useEffect only when a certain state is changed.

```js
// define a state
const [name, setName] = useState('mario');

// add a dependency array for state name in useEffect function.
useEffect(() => {
  console.log('use effect executed');
  console.log(name);
}, [name]);

// useEffect fires only whenever name changes
return (
  <div className='content'>
    <BlogList blogs={blogs} handleDelete={handleDelete} />
    <button
      onClick={() => {
        setName('shawn');
      }}
    >
      Change Name
    </button>
  </div>
);
// Once changed & then again button is clicked, useEffect doesn't runs since state is already changed in first click event.
```

![](./images/screen-8.jpg)

---

# Using JSON Server

use json-server to fetch data

1. create a json file to store data.
2. Add **json-server** using npx to watch json file and wrap it with some
   endpoints/api's.
   ```bash
    npx json-server --watch data/db.json --port 8000
   ```
   **Note**: port number should be diff from our localhost port number
3. Once **json-server** installed & watched json file to wrap some api's.
4. some of those endpoints listed below
   ![](./images/screen-10.jpg 'image')

---

# Fetching Data with useEffect

> Fetch the data when component first renders

1. Set initial value of blogs to null.

```js
const [blogs, setBlogs] = useState(null);
```

2. `fetch` method is called inside `useEffect` which gives a Promise object.

3. Call `then` on `fetch` to return a response object.

4. Call json() on response object to get the data.

5. On returning the data we get a `Promise` object

6. Again apply `then` and pass a parameter to it to get the data.

```js
useEffect(() => {
  fetch('http://localhost:8000/blogs')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
}, []);
```

7. Update the blog state with new blogs data.
   pass data to `setBlogs` function

```js
useEffect(() => {
  fetch('http://localhost:8000/blogs')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setBlogs(data);
    });
}, []);
```

8. Run the server which result in error like below

```bash
TypeError: Cannot read property 'map' of null
```

Because `blogs` get null value initially

```js
const [blogs, setBlogs] = useState(null);
```

To override that, use **conditional formatting on JSX template** like below

```jsx
return (
  <div className='content'>
    {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} />}
  </div>
);
```

Here template renders only if both conditions were true.

**Summary**

1. Fetch the data
2. Update the state with data.
3. Updated state has a value now, then output the component and pass that value as props.
4. Later iterate on that value and renders it in the DOM.

# Conditional Loading Message

Shows a loading message in browser in mean time while content loads.

1. Define a state and assign true to the same.

```js
const [isPending, setIsPending] = useState(true);
```

2. Show it in the template using `conditional formatting`

```jsx
{
  isPending && <div>Loading...</div>;
}
```

3. Once content loads, remove the same.
   So, Call the `setIsPending()` passing a `false` as argument.

```js
 .then(data => {
                setBlogs(data);
                setIsPending(false);
            })
```

Thus how we conditionally o/p a message.

---

# Handling Fetch Errors

Letting users know an error happened while fetching data.

> **Network Connection Error**

To catch network errors, use catch method which logs the error message.

```js
fetch('http://localhost:8000/blogs')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    setBlogs(data);
    setIsPending(false);
  })
  .catch((err) => {
    {
      console.log(err.message);
    }
  });
```

![](./images/screen-11.jpg 'image')

> **What if api from which user tried to fetch data doesn't exit and server returns a response object user not expected?**

- How to catch such errors?

  1. use _res.ok_ property to check we got correct response back, if yes, returns true else returns false.
  2. if false is the value, throw an error with a message.
  3. `catch` block catches that error and logs the message.

```js
fetch('http://localhost:8000/blogssss')
  .then((res) => {
    console.log(res);
    if (!res.ok) {
      throw Error(`Couldn't fetch data`);
    }
    return res.json();
  })
  .then((data) => {
    setBlogs(data);
    setIsPending(false);
  })
  .catch((err) => {
    {
      console.log(err.message);
    }
  });
```

![](./images/screen-12.jpg 'image')

---

# Create Custom Hook

Aim: To reuse the hooks in multiple places.

1. Create new file and define a function which will be the _custom hook_.
   Note: Custom Hooks starts with name `use`, else not works.

2. Cut & paste `useEffect` and all `states` from Home component to new custom hook.

Check Below - new Custom Hook

**useFetch.js**

```js
import { useState, useEffect } from 'react';
const useFetch = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error(`Couldn't fetch data`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        {
          setIsPending(false);
          setError(err.message);
        }
      });
  }, []);
};

export default useFetch;
```

3. Return the states as object of arrays.

```js
    }, []);
    return {data, isPending, error};
}
```

4. Instead of hardcoding url to **fetch()**, we specify it with in both `hook` and `fetch` as parameter.

5. Place it as an array dependency to `useEffect`. So when `url` changes it re-renders the `useEffct` to get the data with respect to endpoints.

```js
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error(`Couldn't fetch data`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        {
          setIsPending(false);
          setError(err.message);
        }
      });
  }, [url]);
  return { data, isPending, error };
};
```

6. Destructure the returned state using `object destructuring` and import `useFetch` of custom hook to `Home` component.

**Home.js**

```js
import useFetch from './useFetch';
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs');
  return (
    <div className='content'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};
```

Note: `{data: blogs}` means we call the `data` we get as `blogs`. That's it.

Thus we can reuse this hook in various components.

---

# React Router

## Multiple pages in application

In react websites,

- client makes a request
- server sends response as index.html file along with compiled js files for our react app
- From this point onwards react takes full control of the application.
- Initially index page is empty, then react injects the contents dynamically using the components created.
- Clicking on a link from that page notifies the react router and intercepts the app from sending request to the server.
- Instead react router looks at the reqeust and inject the respective content on the sreen.
- Example, On clicking `About` page will inject `About` component to the page.
- This is how react router works. As a result app makes less req to server thereby making it faster.

![](./images/screen-13.jpg 'image')

## Setting Up React Router

1. Install react-router and react-router-dom.

```bash
npm i react-router
npm i react-router-dom
```

2. First import packages from react-router-dom in App component

3. Surround the app using `Router` component.

4. All routes goes inside `Switch` component.

5. Each routes are specified using `Route` Component where v gives path of the route.

**App.js**

```js
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
```

---

# Exact Match Routes

Add a new router.

```jsx
<Route path='/create'>
  <Create />
</Route>
```

Navigate to http://localhost:3000/create

It shows contents of the Home component and not the Create component, since route `/create` matches with route `/` which is strange. So to resolve this,
we use `exact` property with `Route` for Home component. Thus Home component is shown only when exact match is there.

```jsx
<Route exact path='/'>
  <Home />
</Route>
```

**Note:** React router searches thru routes from top to bottom. Then if a matching route found, inject that component to the page.

---

# Router Links

At present, react sends request to server while clicking on nav links.
To intercept this we use **router-links**.

1. First import `Link` from `react-router-dom` package.
2. Replace `anchor` tags with `Link` tag, `href` attribute with `to`.

**Navbar.js**

```jsx
<div className='links'>
  <Link to='/'>Home</Link>
  <Link
    to='/create'
    style={{
      color: 'white',
      backgroundColor: '#f1356d',
      borderRadius: '8px',
    }}
  >
    New Blog
  </Link>
</div>
```

- Links tags will prevent react sending req -> server.
- Instead it will look to the path where the req going to.
- Then it matches that path against Routes provided.
- Thus by not sending request everytime we navigate thru pages.

# Route Parameters

- Changable variables in a route are parameters.
- Used while viewing details page of a specific blog.
- In react component use this parameters to set up the content.

  ![](./images/screen-14.jpg 'image')

## How to set up component and render using route parameters

- Create a component first.
- Add jsx template to the same.

```js
const BlogDetails = () => {
  return (
    <div className='blog-details'>
      <h2>Blog Details</h2>
    </div>
  );
};
```

- Add a route for the same in App component.

**App.js**

```js
<Route path='/blogs/:id'>
  <BlogDetails />
</Route>
```

In browser, `http://localhost:3000/blogs/22`

So we can get that component rendered in browser whatever the id we gave here.

- Next we need to fetch id we gave in path to our BlogDetails component.
- Thus we can fetch the blog corresponding to the id.
- For this, use react hook called `useParams`.
- `useParams` will grab the parameter from route.
- Then destructure the paramters that grabbed.
- Later use this parameter in templates/other function to fetch the blog.

**BlogDetails.js**

```jsx
const { id } = useParams();
return (
  <div className='blog-details'>
    <h2>Blog Details - {id}</h2>
  </div>
);
```

- We have to navigate to blog details page while clicking on each blog.

**BlogList.js**

```jsx
<Link to={`blogs/${blog.id}`}>
  <h2>{blog.title}</h2>
  <p>Written by {blog.author}</p>
</Link>
```

- We surround them in `Link` tag of react router dom.
- Set the route and parameter in `to` attribute of the same.

# Reusing Custom Hook

- Need to show blog data on clicking each one of them.
- we use `useFetch` custom hook in BlogDetails component.
- Destructure the data coming from useFetch hook.
- return the data in jsx template
  **BlogDetails.js**

```js
const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('http://localhost:8000/blogs/' + id);
  return (
    <div className='blog-details'>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};
```

# Web Forms

## CONTROLLED INPUT

- A way of setting input fields in forms. So we can track their values.
- For example, if v have a text input field, we can store value of the same in a state.
- If that state changes, value of input field also changes respectively.

**Demo :**

- Create a form in a component

**Create.js**

```jsx
return (
  <div className='create'>
    <h1>Add New Blog</h1>
    <form>
      <label>Blog title:</label>
      <input type='text' required></input>
      <label>Blog body:</label>
      <textarea required></textarea>
      <label>Blog author: </label>
      <select>
        <option value='mario'>mario</option>
        <option value='yoshi'>yoshi</option>
      </select>
      <button>Submit</button>
    </form>
  </div>
);
```

What we want to do is to keep track the values entered/selected in fields (input, select, textarea...).

1. First we need to define a state to asscociate with the input field.

```js
const [title, setTitle] = useState('');
```

2. Then we have to add value property to input which in turn associate with the state defined.

```jsx
<input type='text' required value='{title}' />
```

3. To change the value, we use define `onChange` event with an anonymouse function that takes `setTitle`.
   `setTitle` will update the current value with the value user enter in to input field.
   To get value use event object.

```jsx
<input
  type='text'
  required
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>
```

4. Now we can track what user types in the field.

### Controlled input for Select Field

```jsx
const [author, setAuthor] = useState('mario')

<select value={author} onChange={(e) => setAuthor(e.target.value)}>
  <option value='mario'>mario</option>
  <option value='yoshi'>yoshi</option>
</select>
```

# Submit Forms

- When submit a form, submit event fires.

- submit event is `onSubmit()`.

- we define the same by setting a function as a reference to this event.

- Next Prevent default action of page refresh while form submits.

- Next save the submitted data as an object.

- log the object.

**Create.js**

```jsx
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [author, setAuthor] = useState('mario')
const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author}
}
return (
    <div className="create">
        <h1>Add New Blog</h1>
        <form onSubmit={handleSubmit}>
        </form>
        ---
        -----
        -----
)
```

![](./images/screen-15.jpg 'image')

# Making a POST request

- Make a request to json server to add the data to db.json file.

- Create a POST request with in _handleSubmit_ function

```js
const handleSubmit = (e) => {
  e.preventDefault();
  const blog = { title, body, author };
  fetch('http://localhost:8000/blogs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blog),
  }).then(() => console.log('content added'));
};
```

- Here we add method, content type, also convert json data to string format.

- Call then method to get response object.

- Thus adding the data to db.json file.

# Programmatic Redirects

- Go back to prevous page, use `useHistory` hook.
- Once blog is creatd, go back to previous page.
- import the hook
- define it
- call `go()` method and pass -1.

```js
import { useHistory } from 'react-router-dom';
const history = useHistory();
        .then(() => {
            console.log(`New Blog Added`);
            history.go(-1);
        });
```

- To redirect to Home page, call `push()` method and pass the route.

```js
.then(() => {
    console.log(`New Blog Added`);
    history.push("/");
});
```

# Deleting Blogs

- Delete blog and return to home page.
- use fetch, method as delete, refer the function
  in the template.

**BlogDetails.js**

```jsx
import { useHistory } from "react-router-dom";
const BlogDetails = () => {
    const { id } =  useParams();
    const history = useHistory();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method: 'DELETE'
        })
        .then(() => {
            history.push('/');
        })
    }


<button onClick={handleDelete}>Delete</button>
```

# Setting 404 Page

- Go to 404 page when url is wrong / page doesn't exist.
- Create new component.

**NotFound.js**

```js
const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to='/'>Back to Homepage...</Link>
    </div>
  );
};

export default NotFound;
```

- Next in **App.js** component add the route to this page.
- Embed NotFound component to the route.
- Set path to astericks(\*) to match any other routes and not the ones already given.
- Also add this Route at very bottom else it will match above routes.

**App.js**

```js
<Route path='*'>
  <NotFound />
</Route>
```

---
