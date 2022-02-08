const data = {
    velopert: {
        name:'김민준', description:'리액트를 좋아하는개발자'
    },
    gildong: {
        name:'홍길동',description:'홍길동의 주인공'
    }
};

/*********************************************************************************************************
 URL파라미터 사용 : match객체를 받아와서 사용한다.
 path, url, isExact, params 속성들이 들어있고, 그 중 params의 값을 참조한다.
 [ex]
 {path:"/profile/:username",url:"/profile/gildong",isExact:true,params:{"username":"gildong"}}
*********************************************************************************************************/
const Profile = ({match}) => {
    //console.log(match);
    //debugger;

    const {username} = match.params;

    const profile = data[username];

    if(!profile){
        return <div>존재하지 않는 사용자입니다.</div>
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;