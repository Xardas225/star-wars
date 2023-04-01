import { useEffect, useState } from "react";
import { getApiResource } from "../../utils/network";
import { API_PEOPLE } from "../../constants/api";
import { getPeopleId, getPeopleImg } from "../../services/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList/PeopleList";


const PeoplePage = () => {

    const [people, setPeople] = useState();

    const getResource = async (url) => {
        const response = await getApiResource(url);


        const peopleList = response.results.map(({ name, url }) => {
            const id = getPeopleId(url);
            const img = getPeopleImg(id);
            return {
                name,
                id,
                img
            }
        });
        setPeople(peopleList)
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

export default PeoplePage;
