import { useHistory } from "react-router";
import useFetch from "../hooks/useFetch.ts";

export default function CreateDay() {
  const days = useFetch("http://localhost:3000/days");
  const history = useHistory();

  function addDay() {
    fetch(`http://localhost:3000/days/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({//json문자열로 변환
        day: days.length + 1,
      }),
    }).then(res => {
      if (res.ok) {
        alert("생성이 완료 되었습니다");
        history.push(`/`);
      }
    });
  }
  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}