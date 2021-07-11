import Profile from './components/profile';
import Statistics from './components/statistics';
import FriendList from './components/friendList';
import TransactionHistory from './components/transactionHistory';
import user from './user.json';
import statisticalData from './statistic-data.json';
import friends from './friends.json';
import transactions from './transactions.json'
export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
