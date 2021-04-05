///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import "./index.css";


//-------------------------------------------------------------------------------------------------------------------//


export {
    Pager
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * props:
 *
 * @current: 初始页码
 * @total: 总数据量
 * @linmit: 页面容量
 * @panelNumber: 数字页码最多显示多少
 */

function Pager(props) {


    let pageNumber = getPageNumber(props),
        min = getMinNumber(props),
        max = getMaxNumber(min, pageNumber, props),
        pages = createPagers(min, max, props);

    // console.log(min, max, props.current);

    if (pageNumber === 0) {

        return false;
    }

    return (

        <React.Fragment>
            <div className="pager">

                <span
                    onClick={() => {
                        toPage(1, props);
                    }}
                    className={props.current === 1 ? 'item disabled' : 'item'}
                >首页</span>
                <span
                    onClick={() => {
                        toPage(props.current - 1 < 0 ? 1 : props.current - 1, props);
                    }}
                    className={props.current === 1 ? 'item disabled' : 'item'}
                >上一页</span>

                {pages}

                <span
                    onClick={() => {
                        toPage(props.current + 1 > pageNumber ? pageNumber : props.current + 1, props);
                    }}
                    className={props.current === pageNumber ? 'item disabled' : 'item'}>下一页</span>
                <span
                    onClick={() => {
                        toPage(pageNumber, props);
                    }}
                    className={props.current === pageNumber ? 'item disabled' : 'item'}>尾页</span>

                <span>{props.current}</span>/<span>{pageNumber}</span>
            </div>
        </React.Fragment>
    );
}


//-------------------------------------------------------------------------------------------------------------------//


function toPage(target, props) {

    if (props.current === target) {

        return false;
    }

    props.onPageChange && props.onPageChange(target);
}


function getPageNumber(props) {

    return Math.ceil(props.total / props.limit);
}


function getMinNumber(props) {

    let min = props.current - Math.ceil(props.panelNumber / 2) - 1;

    if (min < 1) {

        min = 1;
    }

    return min;
}


function getMaxNumber(min, pageNumber, props) {

    let max = min + props.panelNumber - 1;

    if (max > pageNumber) {

        max = pageNumber;
    }

    return max;
}


function createPagers(min, max, props) {

    let pages = [];

    for (let i = min; i <= max; i++) {

        pages.push(
            <span
                className={i === props.current ? 'item active' : 'item'}
                key={i}
                onClick={() => {
                    toPage(i, props);
                }}
            >{i}</span>
        )
    }

    return pages;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
