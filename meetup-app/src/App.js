import { Route, Switch } from 'react-router-dom';
import Layout from './components/layouts/Layout';

import AllMeetupsPage from './pages/AllMeetups';
import FavouritesPage from './pages/Favourite';
import NewMeeetupPage from './pages/NewMeetup';



function App() {
  return (
    <Layout>
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
    </Layout>
  )}

    export default App;
