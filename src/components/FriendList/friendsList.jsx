import PropTypes from 'prop-types';
import { FriendItem } from '../FriendList/friendItem';
import { FriendList, FriendListItem } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList className="friends-list">
      {friends.map(friend => (
        <FriendListItem className="item" key={friend.id}>
          <FriendItem friends={friend} />
        </FriendListItem>
      ))}
    </FriendList>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
