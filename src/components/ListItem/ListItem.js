import React,{Component} from 'react';
import './ListItem.css';
class ListItem extends Component{
    state = {
        selected: false
    }
    clickAction = () => {
        this.setState(prevState => {
            this.props.toggleSelected(this.props.id+1, !prevState.selected);
            return { selected: !prevState.selected }
        });
    }
    render() {
        return (
            <li className={"todo"+(this.state.selected ? " selected" : "")}>
                <div
                    className="name"
                    onClick={this.clickAction}>
                    {this.props.name}
                </div>
            </li>
        );
    }
}
export default ListItem;