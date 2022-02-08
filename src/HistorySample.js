import {Component} from "react";

// history객체 : 라우트로 사용된 컴포넌트에 match, location과 함께 전달되는 props중 하나, 컴포넌트 내의 메서드에서 라우터API를 호출할 수 있다.
class HistorySample extends Component{
    //뒤로가기
    handleGoBack = () => {
        this.props.history.goBack();
    };

    // 홈으로 이동
    handleGoHome = () => {
        this.props.history.push('/');
    };

    componentDidMount() {
        // 페이지에 변화가 생기기 직전에 정말 나갈것인지 질문함
        this.unblock = this.props.history.block('정말 나갈꺼?');
    }

    componentWillUnmount() {
        // 컴포넌트가 언마운트되면 질문을 멈춘다.
        if(this.unblock){
            this.unblock();
        }
    }


    render(){
        return(
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
            </div>
        );
    }
}

export default HistorySample;