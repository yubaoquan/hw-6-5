import Home from './pages/home/index'
import News from './pages/news/index'
import Me from './pages/me/index'
import { Switch, Route, } from "react-router-dom";


export default function RouteConfig() {
  return <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/me" component={Me}/>
    <Route path="/news" component={News} />
  </Switch>
}
