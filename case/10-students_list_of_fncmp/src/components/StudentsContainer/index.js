///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";
import {StudentsList} from "../StudentsList";
import {Pager} from "../Pager";
import {getStudents} from "../../services/getStudents";


//-------------------------------------------------------------------------------------------------------------------//


function StudentsContainer(props) {

    const [students, setStudents] = useState([]);

    const [page, setPage] = useState(1),
        handleSetPage = (e) => {

            setPage(e.target.value);
        };

    const [limit, setLimit] = useState(10),
        handleSetLimit = (e) => {

            setLimit(e.target.value);
        };

    const [total, setTotal] = useState(0);

    const [panelNumber, setPanelNumber] = useState(6),
        handleSetPanelNumber = (e) => {

            setPanelNumber(e.target.value);
        };

    const handleOnPageChange = (newPage) => {

        setPage(newPage);
    };

    useEffect(() => {

        (async function () {

            const resp = await getStudents(page, limit);

            setStudents(resp.findByPage);
            setTotal(resp.cont);

        })();

        return () => {

        };

    },[page, limit, panelNumber]);

    return (

        <React.Fragment>
            <ul>
                <StudentsList
                    stus={students}
                />
            </ul>
            <Pager
                current={page}
                limit={limit}
                total={total}
                panelNumber={panelNumber}
                onPageChange={handleOnPageChange}
            />
            <div>
                <br/>
                limit:
                <input
                    type="number"
                    value={limit}
                    onChange={handleSetLimit}
                />
            </div>
            <div>
                <br/>
                panelNumber:
                <input
                    type="number"
                    value={panelNumber}
                    onChange={handleSetPanelNumber}
                />
            </div>
        </React.Fragment>
    );
}

StudentsContainer.defaultProps = {

};


StudentsContainer.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    StudentsContainer
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////