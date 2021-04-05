///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {useEffect,useState,useCallback,useContext} from "react";
import {getStudents} from "../../services/getStudents"

//-------------------------------------------------------------------------------------------------------------------//


function useAllStudents() {

    const [students, setStudents] = useState([]);

    useEffect(() => {

        (async ()=>{

            const resp = await getStudents();

            setStudents(resp.findByPage);

        })();

        return () => {

        };

    },[]);

    // console.log('use', students);

    return students;
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    useAllStudents
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
