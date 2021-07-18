import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavouritesPage from './pages/Favourite';
import NewMeeetupPage from './pages/NewMeetup';
import MainNavigation from './components/layouts/MainNavigation';


function App() {
  return <div>
    <MainNavigation />
    <Switch>
      <Route path='/' exact={true} >
        <AllMeetupsPage />
      </Route>
      <Route path='/new-meetup'>
        <NewMeeetupPage />
      </Route>
      <Route path='/favourites'>
        <FavouritesPage />
      </Route>
    </Switch>
  </div>;
}

export default App;
