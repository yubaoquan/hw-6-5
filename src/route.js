import Index from './pages/index'
import Other from './pages/other/index'
import { Switch, Route, } from "react-router-dom";


export default function RouteConfig() {
  return <Switch>
    <Route path="/" component={Index} />
    <Route path="/other" component={Other}/>
  </Switch>
}
