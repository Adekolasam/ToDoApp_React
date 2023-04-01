
function ToDo (props){
    
    return(
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onChange={(e) => props.handleChange(e,props.item.id)} />
            <p>{props.item.text}</p>
        </div>
    );
}

export default ToDo;