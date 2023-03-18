import PropTypes from 'prop-types';
import { FriendStatus, FriendName } from './FriendsList.styled';

export const FriendItem = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <>
      <FriendStatus className="status" isOnline={isOnline}></FriendStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendName className="name">{name}</FriendName>
    </>
  );
};

FriendItem.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
