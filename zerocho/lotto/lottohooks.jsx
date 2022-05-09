import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Ball from './ball';

function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

const Lotto = () => {
  const lottoNumbers = useMemo(() => getWinNumbers(), []);//두번째 배열에 있는 요소가 바뀌지 않는한 다시 실행되지 않음
  //useMemo를 사용하면 복잡한 함수 결과값을 hooks가 기억함(getWinNumbers의 return값)
  //useRef는 일반 값 기억
  //useCllbkack 는 함수 자체를 기억
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);


  useEffect(() => {
    console.log('useEffect');
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
      }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
    return () => {//componentWillUnmount자리
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]); // 빈 배열이면 componentDidMount와 동일
  // 배열에 요소가 있으면 componentDidMount랑 componentDidUpdate 둘 다 수행(일단 componentDidMount에 쓰일걸 useEffect에 다 넣고 두번째 인자에 componentDidUpdate로 쓰일거)
    //밑에 ononClickRedo 함수에서 timeouts.current = []로 바뀌는데 그걸 인지하고 실행하는 useEffect
  useEffect(() => {
    console.log('로또 숫자를 생성합니다.');
  }, [winNumbers]);

  const onClickRedo = useCallback(() => {//함수 자체를 기억하기 때문에 함수가 실행된 첫번째 값을 계속 기억하고있음
    console.log('onClickRedo');//useCallback이 없으면 매번 새로운 함수를 생성
    console.log(winNumbers);
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, [winNumbers]);//따라서 함수 두번째 인자에 새 배열을 넣어야 새로운 값으로 리렌더링

  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => <Ball key={v} number={v} />)}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} onClick={onClickRedo} />} {/*자식함수에 props로 매번 새로운 함수가 전달돼버림(매번 새로 렌더링)*/}
      {redo && <button onClick={onClickRedo}>한 번 더!</button>}
    </>
  );
};

export default Lotto;