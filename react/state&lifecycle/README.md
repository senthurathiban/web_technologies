## Table of Contents

- [State](#state)
    - [Function to Class Conversion](#classConversion)
- [Lifecycle Hooks](#lifecycles)
- [Event Handlers](#eventListeners)

## State
#### State is similiar to props but it is private and fully controlled by its component.

#### Following example can be rewritten with state.
    function clock(props){
        return <div>Time is {props.date.toLocaleTimeString()}</div>;
    }

    function Tick(){
        ReactDOM.render(
            <Clock date={new Date()}/>,
            document.getElementById('root')
        );
    }

    setInterval(Tick,1000);

Ideally React.render should be called only once but its Clock component to be updated itself each second using states.

## Component conversion from function to class<a name='classConversion'></a>
    class Clock extends React.Component{
        render(){
            return <div> Time is {this.props.date.toLocaleTimeString()}</div>;
        }
    }
#### now Clock is a Class component and we will change the props to state

    class Clock extends React.Component{
        render(){
            return <div> Time is {this.state.date.toLocaleTimeString()}</div>;
        }
    }
#### base props to the base constructor
    class Clock extends React.Component{
        constructor(props){
            super(props);
            this.state = { date : new Date()}
        }
        render(){
            return <div> Time is {this.state.date.toLocaleTimeString()}</div>;
        }
    }
    // Remove date prop from the component
    ReactDOM.render(
        <Clock/>,
        document.getElementById('root')
    );

## LifeCycles <a name='lifecycles'></a>
#### In an application with many components its neccessary to clear the resources used by the components when they are destroyed.

#### Mounting - When a component renders to the DOM for the first time.
#### Unmounting - when a DOM produced by the component is removed.

#### Special methods called the lifecycle methods are called when the component class gets mounted or unmounted.

    class Clock extends React.Component {
        constructor(props) {
            super(props);
            this.state = {date: new Date()};
        }

        componentDidMount() {
            this.timerId = setInterval(()=>this.tick,1000);
        }

        componentWillUnmount() {
            clearInterval(this.timerId);
        }

        tick(){
            this.setState({
                date: new Date()
            })
        }

        render() {
            return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
            );
        }
    }

ComponentDidMount - called when component renders the DOM.
ComponentWillUnmount - called when component is removed from the DOM.
Only place to assign the store is the constructor. State Updates might be asynchronous and you cannot depend on the values of state or props while updating state.

    // Wrong
    this.setState({
        counter: this.state.counter + this.props.increment,
    });

instead you can pass a function that contains 2 params state(param1) and props(param2) returning state object with updated value.

    this.setState(function(state, props) {
        return {
            counter: state.counter + props.increment
        };
    });

when setState is called react merges the object you provide into current state.

Neither parent nor the child component can know whether other components are stateful or stateless and also do not care whether they are class or function component.
and that is why components are said to be encapsulated.

A component may decide to pass its state to its child components through props.
The way that the data can flow only through its child components via props are called unidirectional or top-down data flow.

## Event Handlers <a name='eventListeners'></a>