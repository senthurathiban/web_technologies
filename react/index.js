const firstName = 'Senthur';
const lastName = 'Athiban';
function getFullName(){
    return `${firstName} ${lastName}`;
}
let element = <h1>Hello {firstName}, your full name is {getFullName()}</h1>;
// Expressions can be called within curly braces in JSX (Javascript XML) and Each JSX is also an expression.
// After compilation JSX expressions becomes normal javascript function calls and evaluates javascript object
// ie: JSX expressions can be used in if,else,loops,variable assignments,function call parameters & return from a function.
// JSX is more closer to javascript than html so react uses camelCase naming convention instead of HTML attribute names.
// Quotes are used to specify string literals as attributes
element = <div tabIndex="0"> Test div</div>;
// Curly braces can be used to embed javascript expressions in attributes
element = <div className={getFullName()}> Test div</div>;
// Specifying Children in JSX
    // No children tag gets closed with a forward slash
    element = <img src={getFullName()}/> 
    // Element with children
    element = (
        <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
        </div>
    );
// JSX prevents injection attacks.
// By Default React DOM escapes any values embedded in jsx before rendering them. Before rendering everything is converted to string so there is no way of executing code that aren't written explicitly in your application.
// JSX Represents Objects
// BABEl compiles JSX to React.createElement() calls.
element = (
    <h1 className="greeting">
      Hello, world!
    </h1>
);
//  and 
element = React.createElement( 
    'h1',
    {className:'greeting'},
    'Hello, world!'
);
// both assignments does same.
// React.createElement() creates an object like this
element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
}
// These objects are called React Elements. React reads these objects and uses them to construct the DOM and keep it up to date.
// Unlike Browser dom elements react elements are just plain objects and are cheap to create
// ReactDOM take cares of updating the DOM to match the React Elements.

// To Render an Element to a root DOM pass both to ReactDOM.render method.
// ReactDOM.render(
//     element,
//     document.getElementById('root') // this refers to the root DOM node as everything inside this will be managed by React DOM
// );

// Updating DOM
// React Elements are immutable which means once an element created will never able to modify its children or attribute value.
// The only way to update is create a new element and pass it to ReactDOM.render()
function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);