import React, {Component} from 'react';

class AddTodo extends Component{
    state={
        content: ''
    }
    handleChange = (e)=>{
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.add(this.state)
        this.setState({
            content: ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type={'text'} placeholder={'Here your todo'} onChange={this.handleChange} value={this.state.content}/>
                    <br></br>
                    <input type={'submit'} value={'Create new todo now'} className={'waves-effect waves-light btn'}/>
                </form>
            </div>
        )
    }
}

export default AddTodo;