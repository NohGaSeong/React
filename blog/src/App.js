

import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = 'twitter';
  


  // function 함수(){
  //   return 100
  // }
  
  //데이터는 
  //1.변수에 넣거나
  //2. state에 넣거나

  //var [a,b] = [10,100];

  //state는 변수 대신 쓰는 데이터 저장공간
  // userState()를 이용해 만들어야함
  // 문자,숫자,array,object 다 저장가능

  //state에 데이터 저장해놓는 이유 : 웹이 app처럼 동작하게 만들고싶어서 ㅇㅇ
  let [글제목,글제목변경] = useState(['남자 셔츠 추천', '산정동 우동 맛집','와 샌즈','트위터 만들기 힘들다']); 
  let[따봉, 따봉변경] = useState(0);


  function 제목바꾸기(){
    //var newArray = 글제목; <- 이건 값 공유임. 
    var newArray = [...글제목]; // <- 이게 복사고 (딥카피)
    newArray[0] = '여자코드 추천';
    글제목변경(newArray);
  }

  //Array, Object state 데이터 수정방법
  // - 일단 변경함수 써야함
  // - 변경함수(대체할 데이터)
  // - state는 직접 건들지마삼
  // - deep copy를 해서 그걸 건들어야함 

  // 1.기존 state 카피본 만들고
  // 2.카피본에 수정사항 반영하고
  // 3.변경함수()에 집어넣고 (꼭 외우기)
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className = "list">
        <h3> {글제목[1]} <span onClick = { ()=> {따봉변경(따봉 + 1)} }>👍</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3> {글제목[0]} </h3>
        <p>2월 17일 발행</p>
        <hr/>
     
        <h3> {글제목[3]} </h3>
        <p>2월 17일 발행</p>
        <hr/>
    
        <h3> {글제목[2]} </h3>
        <p>2월 17일 발행</p>
        <hr/>
        </div>
        {/* <button onClick = { 제목바꾸기}>버튼</button> */}

      
        <Modal/>

      </div>

  );


}

function Modal(){
  return(
    <div className = "modal">
          <h2>제목</h2>
          <p>날짜</p>
          <p>상세내용</p>
        </div>

        //어떤걸 component로 만드는게 좋을까?
        // -반복 출현하는 HTML 덩어리들
        // -자주 변경되는 HTML UI 들

        //단점 : state 쓸 때 복잡해짐
        //       상위 component에서 만든 state 쓰려면 props 문법 이용해야함
  )
}
export default App;
