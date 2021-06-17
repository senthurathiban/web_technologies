## Table of Contents

- [Components](#Component)
    - [Function Components](#functionComponent)
    - [Class Components](#classComponent)
    - [Rendering Components](#renderingComponent)
    - [Composing Components](#composingComponent)
    
## Components <a name = "Component"></a>

React contains different kind of components we will see about React.Component subclasses. Components lets you split UI to independent & reusable pieces that are in isolation. Components are like javascript functions that accepts arbitary inputs (props) and returns React Elements describing what should be shown on the screen.

### Function Components <a name = "functionComponent"></a>
    function Welcome(props){
        return <h1>Hello, {props.name}</h1>;
    }
#### Its like a normal javascript function that accepts props as parameters and returns a react element with a content.
### Class Components <a name = "classComponent"></a>
    class Welcome extends React.Component{
        render(){
            return <h1>Hello, {this.props.name}</h1>;
        }
    }
The above 2 components are equivalent in React point of view.

### Rendering Components <a name="renderingComponent"></a>
React elements can also render custom components instead of usual DOM tags.
React passes attributes and children to a user defined component as a single object called props.

    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }

    const element = <Welcome name="Sara" />;

    ReactDOM.render(
        element,
        document.getElementById('root')
    );
### Composing Components <a name="composingComponent"></a>
#### Components can refer to any other components in their output so that it can be abstracted at any levels. Button, form, dialog, screen all are expressed as components in react. Example can be like user defined Welcome component in above example can be rendered multiple times.

    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }

    function App() {
        return (
            <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
            </div>
        );
    }

    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );

#### Class Components or function components no matter what, they should never change the value of their props. Fuctions or class that does not modify its props are called pure component. In other case, function that tries to modify its own props are all impure component.