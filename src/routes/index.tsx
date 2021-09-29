import { Switch } from 'react-router-dom';

import Route from './Route'

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import DragonDetails from '../pages/DragonDetails';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/dragon-details/:id" component={DragonDetails} isPrivate />
  </Switch>
);

export default Routes;
