///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {useEffect,useState,useCallback,useContext} from "react";
import {getStudents} from "../../services/getStudents";


//-------------------------------------------------------------------------------------------------------------------//


function usePageStudents(page, limit) {

    const [resp, setResp] = useState();

    useEffect(() => {

        (async ()=>{

            const resp = await getStudents(page, limit);

            setResp(resp);

        })();

        return () => {

        };

    },[page, limit]);

    console.log(resp);

    return resp;
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    usePageStudents
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
