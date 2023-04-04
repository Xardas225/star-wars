// Library
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
// HOC
import { withErrorApi } from "@hoc-helpers/withErrorApi";
// Components
import PeopleList from "@components/PeoplePage/PeopleList/PeopleList";
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation/PeopleNavigation";
// Utils
import { getApiResource, changeHTTP } from "@utils/network";
// Constants
import { API_PEOPLE } from "@constants/api";
// Services
import { getPeopleId, getPeopleImg } from "@services/getPeopleData";
// Hooks
import { useQueryParams } from '@hooks/useQueryParams';


const PeoplePage = ({ setErrorApi }) => {

    const [people, setPeople] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page');

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
            setNextPage(changeHTTP(response.next));
            setPrevPage(changeHTTP(response.previous));
            setCounterPage(queryPage);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResource(API_PEOPLE+queryPage)
    }, [queryPage])


    return (
        <>
            {people && <PeopleList people={people} />}
            <PeopleNavigation  
                counterPage={counterPage}
                nextPage={nextPage}
                prevPage={prevPage}
            />
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);
