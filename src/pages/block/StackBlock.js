import React, { useState } from 'react';
import Block from './Block';
import Button from './Button';

const StackBlock = () => {
  const [buttonNo, _] = useState([1, 2, 3])
  const [blockNum, setBlockNum] = useState([{id:1, show: false}, {id:2, show: false}, {id:3, show: false}])

  const handleButtonShow = (e) => {

    const updateBlockNum = blockNum.map((info)=>{
      return info.id === +e.target.id ? {id: info.id , show : !(info.show)} : info = info
    })
    setBlockNum(updateBlockNum);
  }

  return (
    <>
    {buttonNo.map((num)=>{
      return <Button key={num} buttonNo={num} handleButtonShow={handleButtonShow}/>
    })}
    {blockNum.map((info)=>{
      return (info.show && <Block key={info.id} blockNum={info.id} />)
    })}
    </>
  )
}

export default StackBlock;