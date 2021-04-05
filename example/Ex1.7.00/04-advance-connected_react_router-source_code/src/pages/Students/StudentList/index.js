///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {StudentSearchBar} from "../../../components/StudentSearchBar";
import {StudentTable} from "../../../components/StudentTable";
import {searchStudents} from "../../../services/fetchStudents";
import {Pager} from "../../../components/Pager";
import qs from "query-string"


//-------------------------------------------------------------------------------------------------------------------//


function StudentList(props) {

    console.log(props.location);

    const query = getQuery(props.location.search),
        resp = useResp(query);

    // useEffect(() => {
    //
    //     searchStudents()
    //         .then(resp => {
    //
    //             setStus(resp.datas);
    //         });
    //
    //     return () => {
    //
    //     };
    //
    // },[]);

    const handleOnSearch = (condition) => {

        console.log('oldq', query);

        const newQuery = {
            ...query,
            key: condition.key,
            sex: condition.sex,
            page: 1
        };

        console.log('newq', newQuery);

        changeLocation(newQuery, props.history);

    },handleNewPage = (newPage) => {

        const newQuery = {
            ...query,
            page: newPage
        };

        changeLocation(newQuery, props.history);
    };

    return (

        <React.Fragment>
            {/*<div>StudentList Page</div>*/}
            <StudentSearchBar
                defStateVal={{
                    key: query.key,
                    sex: query.sex
                }}
                onSearch={handleOnSearch}
            />
            <StudentTable
                stus={resp.datas}
            />
            <Pager
                current={query.page}
                total={resp.cont}
                limit={query.size}
                panelNumber={5}
                onPageChange={handleNewPage}
            />
        </React.Fragment>
    );
}

function getQuery(search) {

    console.log('search', search);

    const queryDefVal = {
        page: 1,
        size: 10,
        key: '',
        sex: -1
    };

    let query = qs.parse(search);

    // query.size = +query.size;
    // query.page = +query.page;
    // query.sex = +query.sex;

    return Object.assign({}, queryDefVal, query);
}

function useResp(query) {

    const [resp, setResp] = useState({
        cont: 0,
        datas: []
    });

    useEffect(() => {

        // console.log('[query]: ',query);

        searchStudents({

            ...query

        }).then(resp => {

            setResp(resp);
        });

        // console.log('[resp]: ',resp);

        return () => {

        };

    },[query.key, query.size, query.sex, query.page]);

    return resp;
}

function changeLocation(query, history) {

    const search = qs.stringify(query);

    history.push('?' + search);
}

StudentList.defaultProps = {


};

StudentList.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    StudentList
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////