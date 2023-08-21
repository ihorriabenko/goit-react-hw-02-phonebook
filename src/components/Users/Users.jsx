import PropTypes from 'prop-types';

import s from './users.module.css';
import Filter from 'components/Filter/Filter';

const Users = ({ removeUser, getFilteredUsers, handleFilter }) => {
  const elements = getFilteredUsers.map(({ id, name, number }) => (
    <li className={s.item} key={id}>
      {name}: {number}{' '}
      <button className={s.btn} onClick={() => removeUser(id)}>
        Delete
      </button>
    </li>
  ));

  return (
    <>
      <Filter handleFilter={handleFilter} />
      <ul>{elements}</ul>
    </>
  );
};

Users.propTypes = {
  removeUser: PropTypes.func.isRequired,
  getFilteredUsers: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  handleFilter: PropTypes.func.isRequired,
};

export default Users;
