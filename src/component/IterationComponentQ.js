
/* 
1.외부 서버에서 경로를 참조받음 (가장 일반적인 방법)

2. src폴더 밑에 img 파일 참조 가능
import img1 from '../img/img1.png';

3. public폴더 밑에 넣는 경우 이미지를 바로 참조 가능 (간단한 정적인 이미지 보여줄 때)
*/

import { useState } from "react";



const IterationComponentQ = () => {

    const arr = [
        { src: '/img/img1.png', title: '아이폰10', price: 1000 },
        { src: '/img/img2.png', title: '아이폰11', price: 2000 },
        { src: '/img/img3.png', title: '아이폰12', price: 3000 },
        { src: '/img/img4.png', title: '아이폰13', price: 4000 },
    ]
    //1. state로 arr를 관리
    const [list, setList] = useState(arr);

    const handleImg = (e) => {
        setImg({src:e.target.src});
    }

    //2. 반복처리
    const newList = list.map(item =>

        <div key={item.src}>
            {/* <img src={item.src} alt="제목" width="200" onClick={() =>handleImg(item.src)} /> */}
            <img src={item.src} alt="제목" width="200" onClick={handleImg} />
            <p>상품:{item.title} </p>
            <p>가격: {item.price} </p>
        </div>)
    //3. 클릭 시 화면에 나올 내용을 state로 관리    
    const [img, setImg] = useState({src:'/img/img1.png'});

    /* const handleImg = (a) => {
        setImg({src:a});
    } */
    

    return (
        <>
            <h3>이미지 데이터 반복하기</h3>
            {/* <img src="https://raw.githubusercontent.com/yopy0817/data_example/master/img/img1.png" alt="제목" width="200"/>
            <img src={img1} alt="제목" width="200" /> */
            }

            <div>
                <img src={img.src} width="400"/>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-around" }}>

                {/* 반복할 요소의 모형 */}
               {newList}

            </div>
        </>
    )
}
export default IterationComponentQ;