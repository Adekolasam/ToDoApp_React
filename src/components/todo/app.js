import React from "react";
import ToDo from "./todo-item";
import todosData from "./todosData";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            todos: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading: false,
                todos: todosData
            })
        },2000)      
    }

    componentWillUnmount() {
    }

    handleChange(e,id){
        e.preventDefault();
        this.setState(prevState => {
            
            const updatedTodos = prevState.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                console.log(todo);
                return todo;
            });
            console.log(updatedTodos);
            return {
                todos: updatedTodos
            }
        });
        
    }

    render(){
        const todoComponents = this.state.todos.map(todoItem => 
                <ToDo key={todoItem.id} item={todoItem} handleChange={this.handleChange} />
            );
        
        return(
            <div className="todo-list">
                <p>To Do App</p>
                {todoComponents}
            </div>
        );
    }
    
}

export default App;