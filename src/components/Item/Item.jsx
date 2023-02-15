import React, {Component} from "react";
import './Item.css'

class Item extends Component {


    render() {
        return <article>
            <p>- {this.props.data.todo}</p>
            <button onClick={this.props.delete}>Delete</button>
        </article>
    }
}

export default Item;