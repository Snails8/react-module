import React from "react";
import { useEffect, useState } from 'react';

import {useFishes,} from '../../hooks';
import { Link, useLocation } from "react-router-dom";
import { Layout } from "../../components/templates/_Layout/Layout";
import { FishesTable } from "../../components/organisms/FishesTable/FishTable";

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
      <Layout isContainerDesign={true}>
        <Link to="/fishes/create">作成</Link>
        <FishesTable fishes={fishes} />
      </Layout>
    </>
  );
};