import React from 'react';
import { Link } from 'react-router-dom';

export default function Article(props) {
    return (

        <article className="card">
            <img src={props.image} alt="" />
            <div>
                <div className={props.category + " category"}>{props.category.toString().slice(9)}</div>
                <h3>
                    <Link to={{ pathname: `/article/${props.id}`, state: { params: props } }}>{props.description}</Link>
                </h3>
                {props.content.toString().slice(0, 200) + "..."}
            </div>
        </article >

    )
}
