import React from "react";
import {Link} from "react-router-dom"
export default class homeList extends React.Component {
    render() {
        return (<div className="home-list">
            {this.props.lessonList.map((item, index)=> {
                return ( <li key={index}>
                    <Link to={{pathname:`/detail/${item.id}`,state:item}}>
                        <div className="lesson-banner">
                            <img src={item.url} alt=""/>
                        </div>
                    </Link>
                    <p>{item.title} </p>
                    <strong>{item.price}</strong>
                </li>)
            })}
        </div>)
    }
}