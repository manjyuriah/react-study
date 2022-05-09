import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [title,setTitle] = useState(['여자코트 추천','2021패딩 추천','연말 / 연초 파티'])
  let [thumbs,setThumbs]=useState(0)
  let posts = '강남 고기맛집'
  let [modal,setModal]=useState(true)
  //중요한 정보는 state로
  let [click,setClick]=useState(0)
  let[input,setInput]=useState('')

  //map 예시
  let array=[2,3,4];
  let rearrary=array.map(function(a){
    return a*2
  })

  function pushtest(){
    let array=[];
    for(let i=0; i<3;i++){
      array.push(<div>HI~</div>)
    }
    return array
  }
  pushtest()


  function change(){
    var newArray=[...title] //앞에 점 세개를 사용함으로써 값 공유가 아닌(배열 그대로를 가져오게됨) 순수한 값만 사용 가능해짐(중괄호나 대괄호를 없애줌)
    //이는 array나 object 자료형을 shallow/deep copy할 때 많이 사용
    newArray[0]='겨울 추위 매섭다';
    setTitle(newArray)
  }
  return (
    <div className="App">
     <div className="black-nav">
        <div>개발 Blog</div>
     </div>
     <button onClick={change}>이름 바꾸기</button>
     {pushtest()}
    {
      modal === true
      ? <Modal retitle={title} click={click}/>
      : null
    }

     {/* 중괄호를 쓴다고 쓰고싶은대로 다 쓸 수 있는게 아니라 중괄호 안에는 변수,함수만 가능! */}
     {
      title.map((a,index)=>{
        return (
          <div className="lists" key={index}>
            <h3  onClick={()=>{setClick(index)}} >{a}<span onClick={()=>{setThumbs(thumbs+1)}}>🎅</span>{thumbs}</h3>
            <p>12월27일 발행</p>
            </div>
        )
      })
     }
     <div>
      <input onChange={(e)=>{setInput(e.target.value)}} />
      <button onClick={()=>{
        let arrayCopy=[...title]
        arrayCopy.unshift(input); 
        setTitle(arrayCopy)}
        }>ㄴㄱ저장~!</button>
     </div>
     
    <button onClick={()=>{setModal(!modal)}}>열고닫기</button>
    </div>

  );
}
function Modal(props){
  return(
    <div className="modal">
      {/* {title[0]}은 function App이라는 함수안에 있어서 바로 사용 못함 */}
      {/* App이라는 컴포넌트에 Modal이라는 컴포넌트를 넣어서 사용 -> 컴포넌트간 통신필요(props) */}
      <h2>{props.retitle[props.click]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App;
