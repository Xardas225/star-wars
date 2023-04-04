import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { API_PERSON } from '@constants/api';
import { getApiResource } from '@utils/network';

const PersonPage = () => {
    const id = useParams().id;
    
    useEffect(()=>{
        (async ()=> {
            const res = await getApiResource(`${API_PERSON}/${id}`);
        })()
    }, [])
    
    return(
        <>

        </>
    )
}

export default PersonPage;