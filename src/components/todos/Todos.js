import React from 'react';

const Todos = (props)=>{
    const listTodos = props.todos.map((todo,index)=>{
        return(
            <div key={index} className={'collection-item'}>
                <span onClick={()=>{props.delTodo(todo.id)}}>{todo.content}</span>
            </div>
        )
    })
    return(
        <div className={'Todos collection'}>
            {listTodos}
        </div>
    );
}

export default Todos;