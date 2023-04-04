import PropTypes from 'prop-types';
import UiButton from '@ui/UiButton/UiButton';
import { Link } from 'react-router-dom';
import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({
    counterPage,
    nextPage,
    prevPage
}) => {
    return (
        <div className={styles.nav__container}>
            <Link to={`/people/?page=${+counterPage - 1}`} className={styles.nav__button}>
                <UiButton
                    className={styles.nav__button}
                    text="Previous"
                    disabled={!prevPage}
                />
            </Link>
            <Link to={`/people/?page=${+counterPage + 1}`} className={styles.nav__button}>
                <UiButton
                    text="Next"
                    disabled={!nextPage}
                />
            </Link>
        </div>
    )
}

PeopleNavigation.propTypes = {
    counterPage: PropTypes.number,
    nextPage: PropTypes.string,
    prevPage: PropTypes.string,
}

export default PeopleNavigation;