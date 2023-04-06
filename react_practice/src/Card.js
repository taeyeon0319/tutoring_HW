import './App.css';
import React, { useState } from 'react'

function Card(props){
    const[cnt, setCnt] = useState(parseInt(props.detail1));

    return (<div class="card mb-4 box-shadow card_l">
    <div class="card-header">
      <h4 class="my-0 font-weight-normal">{props.name}</h4>
    </div>
    <div class="card-body">
        <h1 class="card-title pricing-card-title"><span class="money_bold">${props.price} </span><small class="text-muted ide">/ mo</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
            <li>{cnt} users included</li>
            <li>{props.detail2}</li>
            <li>{props.detail3}</li>
            <li>{props.detail4}</li>
        </ul>
        <button type="button" class={ props.class } onClick={() => setCnt((prev) => prev+1)}>{props.button}</button>
    </div>
</div>)
}
export default Card;