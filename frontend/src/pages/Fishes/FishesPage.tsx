import React from "react";
import { BasePage } from "../../components/templates/BasePage/BasePage";

import { useEffect, useState } from 'react';

import {
  Fish,
} from '../../hooks';
import { Link, useLocation } from "react-router-dom";
import { FishesTable } from "../../components/organisms/FishesTable/FishTable";

export const Fishes:React.FC = () => {
  const location = useLocation()
  const [isSave, setIsSave] = useState<{isSave: boolean}>(location.state as {isSave: boolean})

  useEffect(() => {
    if(location.state) {
      console.log(location.state)
      setIsSave({isSave: true})
    } else {
      setIsSave({isSave: false})
    }
  },[])

  const [fishes, setFishes] = useState<Fish[]>([]);  
  useEffect(() => {
      fetch('http://localhost:7001/api/v1/fishes',{
          method: 'GET'
      })
      .then(res => res.json())
      .then((data) => {
        setFishes(data.fishes)
      },
      (error) => {
          console.log(error);
          const errData = {
          }
      })
  }, [])

    return (
        <>
          <BasePage>
          {isSave?.isSave === true ?
            <h5>成功</h5> : ''
          }
          <FishesTable 
            fishes={fishes}
          />
          <Link to="/fishes/create">作成</Link>
          
          </BasePage>
        </>
    )
}