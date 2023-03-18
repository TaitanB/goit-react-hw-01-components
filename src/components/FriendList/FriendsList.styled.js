import styled from 'styled-components';

export const FriendList = styled.ul`
  width: 320px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FriendListItem = styled.li`
  align-items: center;
  padding: 30px 50px;
  display: flex;
  gap: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.1),
    0 0 30px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.1),
    0 0 50px rgba(0, 0, 0, 0.1), 0 0 75px rgba(0, 0, 0, 0.1);
`;

export const FriendStatus = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const FriendName = styled.p`
  font-size: 26px;
  font-weight: 600;
`;
