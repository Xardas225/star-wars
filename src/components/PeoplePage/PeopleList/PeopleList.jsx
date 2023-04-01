// Library
import PropTypes from 'prop-types';
// Styles
import styles from './PeopleList.module.css';

const PeopleList = ({ people }) => {
    return (
        <>
            <ul className={styles.list__container}>
                {people.map(({ name, id, img }) => {
                    return <li key={id} className={styles.list__item}>
                        <a href="#" className={styles.person__link}>
                            <img src={img} alt={name} className={styles.person__img} />
                            <span className={styles.person__title}>{name}</span>
                        </a>
                    </li>;
                })}
            </ul>
        </>
    )
}

PeopleList.propTypes = {
    people: PropTypes.array
}

export default PeopleList;