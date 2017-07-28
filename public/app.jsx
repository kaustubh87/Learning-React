var Greeter = React.createClass({
    render: function(){

        //Returns a JSX Object
        return (
           React.createElement(
               'h1',
               null,
               'Hello React.createElement'
           )
           
        );
    }
});

ReactDOM.render(
    <Greeter/>,
    document.getElementById('app')
);