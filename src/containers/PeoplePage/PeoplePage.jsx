// Library
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
// HOC
import { withErrorApi } from "@hoc-helpers/withErrorApi";
// Components
import PeopleList from "@components/PeoplePage/PeopleList/PeopleList";
// Utils
import { getApiResource } from "@utils/network";
// Constants
import { API_PEOPLE } from "@constants/api";
// Services
import { getPeopleId, getPeopleImg } from "@services/getPeopleData";


const PeoplePage = ({ setErrorApi }) => {

    const [people, setPeople] = useState(null);

    const getResource = async (url) => {
        const response = await getApiResource(url);

        if (response) {
            const peopleList = response.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const img = getPeopleImg(id);
                return {
                    name,
                    id,
                    img
                }
            });
            setPeople(peopleList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResource(API_PEOPLE)
    }, [])


    return (
        <>
            {people && <PeopleList people={people} />}
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);
