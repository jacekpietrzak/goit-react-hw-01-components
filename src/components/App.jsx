import Profile from './Profile/Profile';
import user from '../data/user.json';
import Statistics from './Statistics/Statistics';
import data from '../data/data.json';
import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div className="App">
      <h2 className="heading2">Profile</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2 className="heading2">Statistics</h2>

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <h2 className="heading2">Friend list</h2>

      <FriendList friends={friends} />

      <h2 className="heading2">Transaction history</h2>

      <TransactionHistory items={transactions} />
    </div>
  );
};
