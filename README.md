#### react-router로 SPA개발하기

## SPA?
- Single Page Application
- 애플리케이션을 브라우저에 불러와 실행시키고, 사용자와의 인터랙션 발생시 "필요한 부분만" 자바스크립트를 활용하여 업데이트한다.
- 서버에서 사용자에게 제공하는 페이지는 하나, 해당페이지에서 로딩된 js와 현재 사용자의 브라우저 주소 상태에 따라 다양한 화면을 보여준다.

## 라우팅
- 다른 주소에 다른 화면을 보여주는 것 
- 리액트 라이브러리 자체에 내장된 기능은 없음
- react-router / reach-router / Next.js 등의 리액트 라우팅 라이브러리를 이용한다. 



## 프로젝트 순서
1. 프로젝트생성, react-router적용 
    >yarn add react-router-dom
2. 페이지만들기
3. Route컴포넌트로 특정 주소에 컴포넌트 연결
4. 라우트 이동하기
5. URL파라미터와 쿼리 이해하기
6. 서브 라우트
7. 부가기능

---

## Route 컴포넌트 사용하기
- Route 컴포넌트로 특정 주소에 컴포넌트 연결하기   
  `<Route path="주소규칙" component={보여줄컴포넌트}/>`
- 주소규칙 일부가 겹칠 때 : Route컴포넌트의 exact props를 true로 설정한다
  `<Route path="주소규칙" component={보여줄컴포넌트} exact={true}/>`
#### Route 하나에 여러개의 path설정하기 (리액트라우터 5버전 이후 가능)
- 5버전 이전에서는 그냥 path props만 다른 Route컴포넌트를 새로하나 작성해서 사용했음 
    ```
    <Route path="/about" component={About} />
    <Route path="/info" component={About} /> 
    ```
- path props를 배열로 넘기면 여러 경로에서 같은 컴포넌트를 보여줄 수 있다. (스프링에서 핸들러매핑을 배열처리하는 것처럼)
    ```
    <Route path={["/about","/info"]} component={About} />
    ```


## Link 컴포넌트 사용하기
- 리액트라이브러리 사용할 때는 a태그 사용하면 모든 컴포넌트와 상태값을 전부 날리고 새로 렌더링하므로, Link컴포넌트를 사용한다.
`<Link to="/about">소개로 Link</Link>`

---

#### URL파라미터 vs URL쿼리
- URL파라미터 : 특정ID 또는 이름 등을 조회목적으로 사용
- URL쿼리 : 키워드 검색등 페이지에 필요한 옵션을 전달

## URL파라미터 사용하기 : match객체의 params값 참조
- 라우트로 사용되는 Route컴포넌트에서 받아오는 match객체의 param값을 참조한다.
```
const Profile = ({match}) => {
    const {username} = match.params;
    ...생략...
};
```
- 라우트컴포넌트에서 path규칙에 :을 앞에 붙여 사용한다.
```
    <Route path="/profile/:username" component={Profile} />
```
- match객체 : path, url, isExact, params 속성들이 들어있고, 그 중 params의 값을 참조한다.
```
 { 
    path:"/profile/:username"
    ,url:"/profile/gildong"
    ,isExact:true
    ,params:{"username":"gildong"}
 }
```

## URL쿼리 사용하기 : location객체의 search값 참조
- location객체의 search속성은 "?detail=true"처럼 문자열로 되어있다.
- search속성 값(string)을 object로 변환하여 사용한다. => qs라이브러리 이용하여 변황
    > yarn add qs
```
 {
    pathname: "/about",
    search: "?detail=true",
    hash: ""
 }
```
***qs.parse() 사용시 유의사항***
- ignoreQueryPrefix:true 설정으로 쿼리스트링 문자열 맨 앞의 "?"를 생략하고 parsing한다
- boolean값은 반드시 문자열 true인지 비교할 것
- 숫자 데이터는 반드시 parseInt해서 사용할 것

## 서브라우트 
- 라우트 내부에 또 라우트를 정의하는 것. 