import React, {Component} from "react";
import {connect} from "react-redux";

class CharList extends Component {
    render(){
        const {chars}=this.props;
        const list=chars.map((item,i)=>
            <li key={i+item.char}>Символ: {item.char}, Количество повторений: {item.count}</li>);
        return (
        <div>
            {list.length>0&&<h3>Список повторений букв</h3>}
            {list}

        </div>
    )}
}
const mapStateToProps = state => {
    return {
        chars: state.chars
    };
};
export default connect(mapStateToProps)(CharList);