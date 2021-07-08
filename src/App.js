import Profile from "./components/profile";
import user from './user.json';
export default function App (){
  return ( <Profile
  avatar={user.avatar}
  name={user.name}
  tag={user.tag}
  location={user.location}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}
  />);
}
