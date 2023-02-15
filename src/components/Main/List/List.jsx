import React, { Component } from 'react';
import Item from './Item/Item';
import { v4 as uuidv4 } from 'uuid';
import data from '../../../tareas.json';
import './List.css'

class List extends Component {
    constructor(props){
        super(props)
        this.state ={
            items : data,
        }
    }



    printItem = () => {
        return <section className='items'>
            {this.state.items.map((item,i) =>
            <Item data={item} 
            delete={()=> this.deleteItem(i)} key={uuidv4()}/> )}
        
        </section>
    }

    deleteItem = (i) => {
        const remainingItems = this.state.items.filter((item,j)=> i !== j);
        this.setState({items:remainingItems})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        const todo = event.target.item.value;
        const newTodo = {
            todo
        }
        //alert(newItem)
        this.setState({items:[...this.state.items, newTodo]});

        event.target.item.value = ''
    }

    handleClear = () => {
        this.setState({items:[]});
    }

    handleReset = () => {
        this.setState({items:data})
    }

    handleChange = (event) => {
        if (event) {
           
        }
    }
    
    render() {
        return <section className='container'>
        <section>
            <button onClick={this.handleClear}>Clear</button>
            <button onClick={this.handleReset}>Reset</button>
        </section>
        <section>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name='item' onChange={this.handleChange}/>
            <input type="submit" value="Add" />
        
        </form>
        </section>
        
        {this.printItem()}
        

        </section>
    }

}

export default List;