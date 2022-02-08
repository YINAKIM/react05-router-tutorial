// 서브라우트 정의하기 : Profiles안에 Profile컴포넌트가 들어간 구조로 라우팅한다
import {Link, Route} from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
    return (
        <div>
            <h3>사용자목록:</h3>
            <ul>
                <li>
                    <Link to="/profiles/velopert">velpert</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong</Link>
                </li>
            </ul>

            <Route
                path="profiles"
                exact
                render={() => <div>사용자를 선택해주세요</div>}
            />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    );
};


export default Profiles;