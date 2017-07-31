var Greeter = React.createClass({

//Default properties
    getDefaultProps: function(){
        return {
            name: 'React',
            message : 'This is a form component'
        };
    },

    onButtonClick: function(e){
        e.preventDefault();
        var name = this.refs.name.value;
        alert(name);
    },

    render: function(){
        //Stores property
        var name = this.props.name;
        var message = this.props.message;
        //Returns a JSX Object
        return (
           <div>
               <h1>Hello {name}!</h1>
               {message}

               <form onSubmit={this.onButtonClick}>
                   <input type="text" ref="name" />
                   <button>Set Name</button>
               </form>
           </div>
        );
    }
});

var firstName = 'Kaustubh';
var msg = "Not a default prop message";

ReactDOM.render(
    <Greeter name= {firstName} message = {msg}/>,
    document.getElementById('app')
);