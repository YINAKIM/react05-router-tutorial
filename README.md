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

