import React, {Component} from "react";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

class Item extends Component {


    render() {
        return <section className="container">
            <article className="task-container">
            <p>- {this.props.data.todo}</p>
            <IconButton aria-label="delete" size="large">
                <DeleteIcon onClick={this.props.delete}/>
            </IconButton>
            </article>
        </section>
    }
}

export default Item;