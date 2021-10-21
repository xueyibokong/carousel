import React, {useState, useEffect, useRef} from "react";
import {
    itemDTO
} from './types'
export default function Item ({
    data,
    onMouseEnter,
    onMouseLeave,
    innerStyle
}: {
    data: itemDTO,
    onMouseEnter: () => void,
    onMouseLeave: () => void,
    innerStyle: {[key:string]: string}
}) {
    return (
        <li className="hs-carousel-item"
            onClick={() => {window.open(data.jumpUrl)}}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                backgroundImage: `url(${data.img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: data.bgColor,
                color: data.color,
                ...innerStyle
            }}
        >
            <h1 className="hs-carousel-item-title"> {data.title} </h1>
            <h5 className="hs-carousel-item-dis"> {data.title} </h5>
        </li>
    )
}