import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        padding: '60px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        minHeight: 'calc(100vh)',
      }}
    >
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
