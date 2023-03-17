import { User } from './Profile/profile';
import user from '../data/user.json';

import { StatsList } from './Statistics/statsList';
import data from '../data/data.json';

import { FriendsList } from './FriendList/friendsList';
import friends from '../data/friends.json';

import { TransactionHistory } from './TransactionHistory/transactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <User profile={user} />
      <StatsList title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
