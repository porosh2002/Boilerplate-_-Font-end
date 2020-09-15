import React,{Suspense} from 'react';
import './App.css';
import { Switch, Route} from "react-router-dom";
import Navigation from './Component/Navigation/Navigation';
function App() {
  const Home =React.lazy(() => import('./Page/Home'));
  return (
    <div>
    <Suspense fallback={<div></div>}>
      <div>
      <Navigation />
      </div>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Suspense>
      </div>
  );
}

export default App;
