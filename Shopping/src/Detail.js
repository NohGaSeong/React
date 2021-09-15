import React, {useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';


let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
  font-size:25px;
  color: ${props => props.색상}
  color: ${props => props.색상2}
`;


function Detail(props){

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function(상품){
    return 상품.id == id
  });

  let history = useHistory();
  return (
    <div className="container">
      <박스>
      {/* {변수명} , "일반" */}
      <제목 색상 = {'red'}>상세페이지</제목>
      </박스>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <button className="btn btn-danger">주문하기</button> 
          &nbsp;
          <button className = "btn btn-danger" onClick={()=>{
            history.push('/')
          }}>뒤로가기</button>
        </div>
      </div>
  </div>  
  )
};

export default Detail;