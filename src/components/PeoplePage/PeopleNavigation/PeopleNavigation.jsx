import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PeopleNavigation = ({
    counterPage,
    nextPage,
    prevPage
}) => {
    return (
        <>
            <Link to={`/people/?page=${+counterPage - 1}`}>
                <button
                    disabled={!prevPage}
                >
                    Prev
                </button>
            </Link>
            <Link to={`/people/?page=${+counterPage + 1}`}>
                <button
                    disabled={!nextPage}
                >
                    Next
                </button>
            </Link>
        </>
    )
}

PeopleNavigation.propTypes = {
    counterPage: PropTypes.number
}

export default PeopleNavigation;