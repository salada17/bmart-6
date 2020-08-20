import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { SubcategoryPage, UserPage } from './pages';
import './styles/reset.scss';
import './styles/fonts.scss';
import './styles/reactModal.scss';
import './styles/globalstyle.scss';

import BannerPage from './pages/BannerPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SubcategoryPage} />
          <Route exact path="/user/:subPath" component={UserPage} />
          <Route exact path="/banner" component={BannerPage} />
          <Redirect path="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

// function PublicRoute({ ...rest }: any): React.ReactElement {
//   const { setLoginCallback } = useContext(AfterLoginAction);

//   useEffect(() => {
//     setLoginCallback('/');
//   }, [setLoginCallback]);

//   return <Route {...rest} />;
// }

export default App;
