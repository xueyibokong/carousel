import React, {useState, useEffect, useRef, useCallback, useMemo} from "react";
import {
    carouselPropsDTO,
    itemDTO
} from './types';
import './index.scss';
import Item from './item';

export default function Carousel ({
    list = [],
    overDuration = 1000,
    animatDuration = 500
}: carouselPropsDTO) {
    const [cIndex, setCIndex] = useState(0);
    const [timer, setTimer] = useState<any>(null);
    const [tEnd, setTEnd] = useState<boolean>(true);
    const [canRun, setCanRun] = useState<boolean>(true);
    const containerRef = useRef<any>(null);

    useEffect(() => {
        if(!tEnd) return;
        if(canRun) {
            setTimer(setTimeout(() => {
                setTEnd(false);
                setCIndex(i => i >= (list.length - 1) ? 0 : i + 1)
            }, overDuration))
        } else {
            clearTimer();
        }
        return () => {
            clearTimer();
        };
    }, [canRun, cIndex, tEnd]);

    useEffect(() => {
        containerRef?.current.addEventListener('transitionend', () => {
            setTEnd(true);
        })
    }, [])

    function clearTimer() {
        setTimer(null);
        clearTimeout(timer);
    }

    return (
        <div className="hs-carousel">
            <div className="hs-carousel-handle hs-carousel-handle__pre" onClick={() => {setCIndex(i => i <= 0 ? list.length - 1 : i - 1)}}></div>
            <div className="hs-carousel-handle hs-carousel-handle__next" onClick={() => {setCIndex(i => i >= (list.length - 1) ? 0 : i + 1)}}></div>
            <ul ref={containerRef} className="hs-carousel-list" style={{
                width: `${list.length}00%`,
                marginLeft: `${-cIndex}00%`,
                transition: `margin ${animatDuration / 1000}s`
            }}>
                {
                    list.map((item: itemDTO, index: number) => {
                        return <Item
                                    innerStyle={{ width: `${100/list.length}%` }}
                                    onMouseEnter={() => {setCanRun(false)}}
                                    onMouseLeave={() => {setCanRun(true)}}
                                    data={item} key={index}
                                />
                    })
                }
            </ul>
            <ul className="hs-carousel-point-list">
                {
                    list.map((item: itemDTO, index: number) => {
                        return <li
                                    className="hs-carousel-point-item"
                                    key={index}
                                >
                                    <div
                                        style={ cIndex === index ? {
                                            width: '100%',
                                            transition: `width ${overDuration / 1000}s`
                                        } : {}}
                                        className="hs-carousel-point-item__active"
                                    ></div>
                                </li>
                    })
                }
            </ul>
        </div>
    )
}

