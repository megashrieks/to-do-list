import React,{Component} from 'react';
import './ListItem.css';
class ListItem extends Component{
    state = {
        selected: false
    }
    componentWillUpdate(nextProps, nextState) {
        if (nextProps.id !== this.props.id) nextState.selected = false;
    }
    clickAction = () => {
        this.setState(prevState => {
            this.props.toggleSelected(this.props.id, !prevState.selected);
            return { selected: !prevState.selected }
        });
    }
    render() {
        return (
            <li
                className={"todo" + (this.state.selected ? " selected" : "")}
                onClick={this.clickAction}>
                <div
                    className="name">
                    {this.props.name}
                </div>
            </li>
        );
    }
}
export default ListItem;