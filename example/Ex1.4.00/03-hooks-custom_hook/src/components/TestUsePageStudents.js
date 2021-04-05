///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";
import {useAllStudents} from "./myHooks/useAllStudents";
import {getStudents} from "../services/getStudents";
import {usePageStudents} from "./myHooks/usePageStudents";


//-------------------------------------------------------------------------------------------------------------------//


function TestUsePageStudents(props) {

    const [page, setPage] = useState(),
        handleSetPage = (e) => {

            setPage(e.target.value);
        };

    const resp = usePageStudents(page, 5);

    /** hook 的运行时间是当 UI页面加载完成后，resp 异步运行，代码执行到此还没有赋值，所以需要判断 **/
    if (resp) {

        const list = resp.findByPage.map(item => {

            return (

                <li
                    key={item.id}
                >{item.name}</li>
            );
        });

        return (

            <React.Fragment>
                <div>数据总数: {resp.cont}</div>
                <ul>
                    {list}
                </ul>
                <input
                    type="number"
                    value={page}
                    onChange={handleSetPage}
                />
            </React.Fragment>
        );

    } else {

        return null;
    }
}


TestUsePageStudents.defaultProps = {

};


TestUsePageStudents.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    TestUsePageStudents
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////