import React, { useState } from 'react';
import Try from './Try';

function getNumbers(){//숫자 네개를 겹치지 않게 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
      const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
      array.push(chosen);
    }
    return array;
}//class안에 있는게 아닌 독립적으로 존재하는 함수라 react class형을 hooks로 바꿔도 변화 없음

const Numberball =()=>{
  const [answer, setAnswer] = useState(getNumbers());
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [tries, setTries] = useState([]);
  const inputEl = useRef(null);

  const onSubmitForm=(e)=>{
    e.preventDefault();
    if (value === answer.join('')) {
        setResult('홈런');
        setTries(()=>{
           return [...prevState.tries, { try: value, result: '홈런!' }]
        })
       
        alert('게임을 다시 시작합니다!');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
        inputEl.current.focus();

      } else { // 답 틀렸으면
        const answerArray = value.split('').map((v) => parseInt(v));
        let strike = 0;
        let ball = 0;
        if (tries.length >= 9) { // 10번 이상 틀렸을 때
            setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`); // state set은 비동기
            alert('게임을 다시 시작합니다.');

            setValue('');
            setAnswer(getNumbers());
            setTries([]);
            
        } else {
            console.log('답은', answer.join(''));
          for (let i = 0; i < 4; i += 1) {
            if (answerArray[i] === answer[i]) {
                console.log('strike', answerArray[i], answer[i]);
                strike += 1;
              } else if (answer.includes(answerArray[i])) {
                console.log('ball', answerArray[i], answer.indexOf(answerArray[i]));
                ball += 1;
              }
          }
          setTries((prevTries) => [...prevState.tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}]);
          setValue('');
        }
      }
    };

    const onChangeInput=(e)=>{
        setValue(e.target.value)
    }
    return(
        <>
        <h1>{result}</h1>
         <form onSubmit={onSubmitForm}>
           <input ref={inputEl} maxLength={4} value={value} onChange={onChangeInput} />
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
export default Numberball;