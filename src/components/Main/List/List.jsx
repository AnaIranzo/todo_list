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
            showButton: false,
            inputData: '',
            newTask:''
        }

        this.inputData = React.createRef(); 

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
        this.setState({...this.state,items:remainingItems})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        const todo = event.target.item.value;
        if (todo.length >= 6) {
            const newTodo = {
                todo
            }
            //alert(newItem)
            this.setState({items:[...this.state.items, newTodo],showButton:false});
            
    
            event.target.item.value = ''
            this.setState({newTask:'Tarea añadida'});
            setTimeout(()=> {
                    
                this.setState({...this.state,newTask:''});
                
                
            },5000)
        }else{
            alert('Tarea demasiado corta')
        }
       

    }

    handleClear = () => {
        this.setState({...this.state,items:[]});
    }

    handleReset = () => {
        this.setState({...this.state,items:data})
    }

    handleChange = (event) => {
        if (event) {
            this.setState({...this.state,showButton:true});
            setTimeout(()=> {
                
                this.setState({...this.state,showButton:false,inputData:''})
               
                
                
                
            },2000)
        }else{
            
        }
    }
    
    render() {
        return <section className='container'>
            <h2>To do List</h2>
        <section>
            <button onClick={this.handleClear}>Clear</button>
            <button onClick={this.handleReset}>Reset</button>
        </section>
        <section>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name='item' onChange={this.handleChange} ref={this.inputData}/>
            <input type="submit" value="Add" hidden={this.state.showButton?false:true}/>
        
        </form>
            <p>{this.state.newTask}</p>
        </section>
        
        {this.printItem()}
        

        </section>
    }

}

export default List;