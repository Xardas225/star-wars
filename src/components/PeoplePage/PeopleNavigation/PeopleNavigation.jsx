import PropTypes from 'prop-types';
import UiButton from '@ui/UiButton/UiButton';
import { Link } from 'react-router-dom';

const PeopleNavigation = ({
    counterPage,
    nextPage,
    prevPage
}) => {
    return (
        <>
            <Link to={`/people/?page=${+counterPage - 1}`}>
                <UiButton
                    text="Previous"
                    disabled={!prevPage}
                />
            </Link>
            <Link to={`/people/?page=${+counterPage + 1}`}>
                <UiButton
                    text="Next"
                    disabled={!nextPage}
                />
            </Link>
        </>
    )
}

PeopleNavigation.propTypes = {
    counterPage: PropTypes.number,
    nextPage: PropTypes.string,
    prevPage: PropTypes.string,
}

export default PeopleNavigation;