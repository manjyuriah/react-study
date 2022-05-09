const React=require('react'); //쪼갤때는 이 파일에서 필요로하는 라이브러리 넣기
// const {Component}=React; //밑 class extends할때 React. 이거 안붙이려면 써야함

class WordRelay extends React.Component{
    state={
        text:'Hello, webpack'
    };
    render(){
        return <h1>{this.state.text}</h1>
    }

}
module.exports = WordRelay;//이 파일안 컴포넌트를 밖에서도 쓸 수 있게하는거