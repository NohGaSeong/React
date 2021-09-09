

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

  let [modal, modal변경] = useState(false);


  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState('');

  function 반복된UI(){

    var 어레이 = [];
    for (var i = 0; i<3; i++){
      어레이.push(<div>안녕</div>);
    }

    return 어레이
  }

  var 어레이 = [2,3,4];
  
  var 뉴어레이 = 어레이.map(function(a){
    return a*2
  });

  //.map = 유사 반복문

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
     
    {/* {반복된UI()} */}
        { 
          글제목.map(function(글, i){
            return (
            <div className = "list" key={i}>
            <h3 onClick={ ()=>{ 누른제목변경(i)}}> {글} <span onClick = { ()=> {따봉변경(따봉 + 1)} }>👍</span>{따봉}</h3>
            <p>2월 17일 발행</p>
            <hr/>
          </div>
            )
          })
        }
      {/* <button onClick={ ()=>{ 누른제목변경(0)}}>버튼1</button>
      <button onClick={ ()=>{ 누른제목변경(1)} }>버튼2</button>
      <button onClick={ ()=>{ 누른제목변경(2)} }>버튼3</button> */}

        {/* { 입력값}
        <input onChange = { (e) => {입력값변경(e.target.value)} }></input> */}

        <div className = "publish">
          <input onChange = { (e)=> {입력값변경(e.target.value)} } />
          <button onClick = { () => {
            var arrayCopy = [...글제목];
            arrayCopy.unshift(입력값); //array 맨 앞에 자료 추가 하는 문법
            글제목변경(arrayCopy);
          } }>저장</button>
        </div>




        <button onClick = { ()=> {modal변경(!modal)} }>버튼</button>

        {
          modal === true
          ? <Modal 글제목={글제목} 누른제목={누른제목}> </Modal>
          : null
        }

    </div>
  );
}

function Modal(props){
  return(

    //자식컴포넌트는 부모컴포넌트가 가진 state를 쓰려면 props로 전송해줘야 쓸 수 있음.
    // 1. <자식컴포넌트 작명={state명}/>
    // 2. 자식컴포넌트에서 props 파라미터 입력 후 사용
    <div className = "modal">
          <h2>{ props.글제목[props.누른제목] }</h2>
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
