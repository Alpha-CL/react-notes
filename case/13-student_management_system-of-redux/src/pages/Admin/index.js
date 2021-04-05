///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {Layout} from "../../components/Layout";
import {Header} from "../../components/Header";
import {Menu} from "../../components/Menu"
import {Route,Switch} from "react-router-dom";
import {WelCome} from "../WelCome";
import {StudentList} from "../Students/StudentList";
import {StudentAdd} from "../Students/StudentAdd";
import {CourseList} from "../Coutses/CourseList";
import {CourseAdd} from "../Coutses/CourseAdd";
import {StudentDetail} from "../Students/StudentDetail";


//-------------------------------------------------------------------------------------------------------------------//


function Admin(props) {

    return (

        <React.Fragment>
            <Layout
                header={<Header/>}
                aside={<Menu/>}
            >
                <Switch>
                    <Route exact path="/" component={WelCome}/>
                    <Route exact path="/Students/StudentList" component={StudentList}/>
                    <Route exact path="/Students/StudentAdd" component={StudentAdd}/>
                    <Route exact path="/Students/:sno" component={StudentDetail}/>
                    <Route exact path="/Courses/CourseList" component={CourseList}/>
                    <Route exact path="/Courses/CourseAdd" component={CourseAdd}/>
                </Switch>
            </Layout>
        </React.Fragment>
    );
}


Admin.defaultProps = {

};


Admin.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Admin
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////