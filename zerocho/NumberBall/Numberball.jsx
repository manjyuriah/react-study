import React, { Component, createRef } from 'react';
import Try from './Try';

function getNumbers(){//숫자 네개를 겹치지 않게 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
      const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
      array.push(chosen);
    }
    return array;
}

class Numberball extends Component{
    state={
        result:'',
        value:'',
        answer:getNumbers(), //ex)[1,3,5,7]
        tries:[] //배열에 값 넣을때 push쓰는데 react에서 금지
        //예전 state랑 현재 state가 달라야 react가 렌더링 하기 때문에 const array2라는 새로운 배열 변수를 만들고 const array2 = [...array,2]라고 해야 array === array2 가 false가 나와 렌더링함
    }
    onSubmitForm=(e)=>{
        const { value, tries, answer } = this.state;
        e.preventDefault();
        if (value === answer.join('')) {
            this.setState((prevState) => {
              return {
                result: '홈런!',
                tries: [...prevState.tries, { try: value, result: '홈런!' }],
              }
            });
            alert('게임을 다시 시작합니다!');
            this.setState({
              value: '',
              answer: getNumbers(),
              tries: [],
            });
            this.inputRef.current.focus();
          } else { // 답 틀렸으면
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) { // 10번 이상 틀렸을 때
              this.setState({
                result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
              });
              alert('게임을 다시 시작합니다!');
              this.setState({
                value: '',
                answer: getNumbers(),
                tries: [],
              });
              this.inputRef.current.focus();
            } else {
              for (let i = 0; i < 4; i += 1) {
                if (answerArray[i] === answer[i]) {
                  strike += 1;
                } else if (answer.includes(answerArray[i])) {
                  ball += 1;
                }
              }
              this.setState((prevState) => {
                return {
                  tries: [...prevState.tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}],
                  value: '',
                };
              });
              this.inputRef.current.focus();
            }
          }
        };
    onChangeInput=(e)=>{
        console.log(this.state.answer);
        this.setState({
          value: e.target.value,
        });
    }
    // fruits=[
    //     {fruit :'사과',taste:'빨개'},
    //     {fruit :'바나나',taste:'맛있어'},
    //     {fruit :'딸기',taste:'비싸'},
    //     {fruit :'수박',taste:'달아'},
    //     {fruit :'키위',taste:'맛있어'},
    //     {fruit :'귤',taste:'노래'},
    //     {fruit :'메론',taste:'무거워'}
    //     ]
    inputRef = createRef();
    
    render(){
        const { result, value, tries } = this.state;
        return(
            <>
               <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                  <input ref={this.inputRef} maxLength={4} value={value} onChange={this.onChangeInput} />
                </form>
                <div>시도: {tries.length}</div>
                <ul>
              {tries.map((v, i) => {
                return (
                  <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
                    )
                })}
                </ul>
            </>
        )
    }
}
export default Numberball;