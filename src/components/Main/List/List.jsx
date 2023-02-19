import React, { Component } from 'react';
import Item from './Item/Item';
import { v4 as uuidv4 } from 'uuid';
import data from '../../../tareas.json';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



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
     
            this.setState({...this.state,showButton:true,inputData:event.target.value});
            setTimeout(()=> {
                
                this.setState({...this.state,showButton:false,inputData:""})
                
                
                
            },20000)
       
            
        
    }
    
    render() {
        return <section className='container'>
            <h2>To do List</h2>
    
        <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={this.handleClear} className="Button">Clear</Button>
        <Button variant="outlined" onClick={this.handleReset} className="Button">Reset</Button>
        </Stack>

        <Box component="form"sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        <TextField id="outlined-basic" variant="outlined" name='item' onChange={this.handleChange} ref={this.inputData}/>
      {/* <Button variant="outlined" type="submit" value="Add" style={{display: this.state.showButton?false:true}} className="Button">Add</Button> */}
        <input type="submit" value="Add" hidden={this.state.showButton?false:true} id='submit'/> 
    </Box>
        <section>
            
        {/*  <form onSubmit={this.handleSubmit}>
            <input type="text" name='item' onChange={this.handleChange} ref={this.inputData}/> 
            
        
        </form> */}
            <p>{this.state.newTask}</p>
        </section>
        
        {this.printItem()}
        

        </section>
    }

}

export default List;