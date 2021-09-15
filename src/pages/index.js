import { useLocation, Link, useRouteMatch } from "react-router-dom";
import classnames from 'classnames'
import Home from './home/index'
import News from './news/index'
import Me from './me/index'
import { Switch, Route, } from "react-router-dom";
import './nav.less';
import {
  HomeOutlined,
  GlobalOutlined,
  SmileOutlined,
} from '@ant-design/icons';

export default function App() {
  let { path, url } = useRouteMatch();
  const location = useLocation()

  const activeIndex = ['', '/news', '/me'].indexOf(location.pathname.replace('/home', ''))

  return (
    <>
      <Switch>
        <Route path={url} exact component={Home} />
        <Route path={`${url}/news`} component={News} />
        <Route path={`${url}/me`} component={Me}/>
      </Switch>

      <div className="bottom-nav">
        <Link
          to={path}
          className={classnames(['item'], { active: activeIndex === 0 })}
        >
          <div>
            <HomeOutlined />
          </div>
          <div>Home</div>
        </Link>

        <Link
          to={`${path}/news`}
          className={classnames(['item'], { active: activeIndex === 1 })}
        >
          <div>
            <GlobalOutlined />
          </div>
          <div>News</div>
        </Link>

        <Link
          to={`${path}/me`}
          className={classnames(['item'], { active: activeIndex === 2 })}
        >
          <div>
            <SmileOutlined />
          </div>
          <div>Me</div>
        </Link>
      </div>
    </>
  );
}
