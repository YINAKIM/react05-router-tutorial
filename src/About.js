import qs from 'qs';


/*********************************************************************************************************
 URL쿼리 사용 : location객체를 받아와서 search값(string)을 object로 변환하여(qs라이브러리이용) 사용한다.
 {
    pathname: "/about",
    search: "?detail=true",
    hash: ""
 }

 qs.parse() 사용시 유의사항
 - ignoreQueryPrefix:true 설정으로 쿼리스트링 문자열 맨 앞의 "?"를 생략하고 parsing한다
 - boolean값은 반드시 문자열 true인지 비교할 것
 - 숫자 데이터는 반드시 parseInt해서 사용할 것
*********************************************************************************************************/
const About = ({location}) => {
    console.log(location);

    const query = qs.parse(location.search,{
        ignoreQueryPrefix:true // search값(문자열) 맨앞의 "?"를 생략하고 변환하라는 옵션
    });

    const showDetail = query.detail === 'true'; // boolean값 true가 문자열true인지 비교

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터 기초를 실습</p>
            {showDetail && <p>detail값을 true로 설정하셨군요!</p>}
        </div>
    );
};

export default About;