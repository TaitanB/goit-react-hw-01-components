import PropTypes from 'prop-types';
import { FriendItem } from '../FriendList/friendItem';

export const FriendsList = ({ friends }) => {
  return (
    <ul className="friends-list">
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <FriendItem friends={friend} />
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
