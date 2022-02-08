import './App.css';
import About from "./About";
import Home from "./Home";
import {Route, Link} from "react-router-dom";
import Profile from "./Profile";

function App() {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Link컴포넌트로 홈으로 라우팅</Link>
            </li>
            <li>
                <Link to="/about">소개로 Link</Link>
            </li>
            <li>
                <Link to="/info">직접 Route컴포넌트 새로작성한 Link (리액트라우터 5버전 이전)</Link>
            </li>
            <li>
                <Link to="/profile/velport">velport의 프로필</Link>
            </li>
            <li>

                <Link to="/profile/gildong">gildong의 프로필</Link>
            </li>
        </ul>
        <p> * 리액트라이브러리 사용할 때는 a태그 사용하면 모든 컴포넌트와 상태값을 전부 날리고 새로 렌더링하므로, Link컴포넌트를 사용한다.</p>

        <hr/>
        <Route path="/" component={Home} exact={true}/>
        <Route path={["/about","/info"]} component={About} />
        <Route path="/profile/:username" component={Profile} />
    </div>
  );
}

export default App;
