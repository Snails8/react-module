import React from "react";
import { useEffect, useState } from 'react';

import {Fish,} from '../../hooks';
import { FishesTemplate } from "../../components/templates/FishesTemplate/FishesTemplate";
import { useLocation } from "react-router-dom";

export const Fishes:React.FC = () => {
  const location = useLocation();
  const [isSave, setIsSave] = useState<{isSave: boolean}>(location.state as {isSave: boolean});

  useEffect(() => {
    if(location.state) {
      console.log(location.state);
      setIsSave({isSave: true});
    } else {
      setIsSave({isSave: false});
    }
  },[]);

  const [fishes, setFishes] = useState<Fish[]>([]);  
  useEffect(() => {
      fetch('http://localhost:7001/api/v1/fishes',{
          method: 'GET'
      })
      .then(res => res.json())
      .then((data) => {
        setFishes(data.fishes);
      },
      (error) => {
          console.log(error);
          const errData = {
          };
      });
  }, []);

  return (
    <>
      <FishesTemplate fishes={fishes}/>
    </>
  );
};