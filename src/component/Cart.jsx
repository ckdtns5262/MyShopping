import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import '../App.css'
import { changeCount} from '../Store'
import { changeAge } from '../store/UserSlice'

const Cart = () => {
   let state = useSelector((state)=>state)
   let dispatch = useDispatch()
  return (
    <>
    
    <div className='cart'>
        <div className=''>
            <ul>
            <li>장바구니 상품은 최대 30일간 저장됩니다.</li>
            <li>가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.</li>
            <li>오늘출발 상품은 판매자 설정 시점에 따라 오늘출발 여부가 변경될 수 있으니 주문 시 꼭 다시 확인해 주시기 바랍니다.</li>
            </ul>
        </div>
        <p>{state.user.name}({state.user.age})의 페이지</p>
        <button onClick={()=>{
            dispatch(changeAge(20))
        }}>버튼</button>
        <Table className=''>
                <thead>
                    <tr>
                        {/* <td><input type="checkbox"/></td> */}
                        <td>#</td>
                        <td>상품정보</td>
                        <td>수량</td>
                        <td>상품금액</td>
                        <td>배송비</td>
                        <td>변경하기</td>
                    </tr>
                </thead>
                <tbody>
                    {
                    state.cart.map((a,i)=>
                        <tr key={i}>
                        {/* <td><input type="checkbox"/></td> */}
                        <td>{state.cart[i].id}</td>
                        <td>{state.cart[i].prd}</td>
                        <td>{state.cart[i].option}</td>
                        <td>{state.cart[i].price}원</td>
                        <td>{state.cart[i].deliver}원</td>
                        <td>
                        <span className='far'>
                        <button onClick={()=>{
                          dispatch(changeCount(state.cart[i].id))
                        }}>+</button>
                        </span></td>
                        </tr>
                    )
                    }
                </tbody>

        </Table>
    </div>
    </>
  )
}

export default Cart