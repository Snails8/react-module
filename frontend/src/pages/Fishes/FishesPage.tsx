import React from "react";
import { useEffect, useState } from 'react';

import {Fish, useFishes,} from '../../hooks';
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

  const fishes = useFishes().fishes;

  return (
    <>
      <FishesTemplate fishes={fishes}/>
    </>
  );
};