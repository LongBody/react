import React, { Component } from 'react';
import '../components/todoItem.css';
import checkImg from '../components/check.png';
import checkComplete from '../components/checkComplete.png';
class todoItem extends Component{

    render(){
        const  {item,onClick} =this.props;
        let className='TodoItem'
        let url=checkImg;
        if(item.isComplete){
            url=checkComplete
        }
        if(item.isComplete){
            className+=' todoItem-complete'
        }
        return(
            <div  className={className} >
            <img onClick={onClick} src={url} className="check"/>
            <p>{this.props.item.title}</p>
            </div>
        )
    }
}
export default todoItem;
