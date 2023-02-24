import React from 'react';
import { useEffect, useState } from 'react';

import { useFishes } from './useFishes.hook';
import { Link, useLocation } from 'react-router-dom';
import { FishesTable } from '../../components/organisms/domain/Fish/FishesTable/FishTable';

export const Fishes: React.FC = () => {
  const location = useLocation();
  const [isSave, setIsSave] = useState<{ isSave: boolean }>(
    location.state as { isSave: boolean }
  );

  useEffect(() => {
    if (location.state) {
      console.log(location.state);
      setIsSave({ isSave: true });
    } else {
      setIsSave({ isSave: false });
    }
  }, []);

  const fishes = useFishes().fishes;

  return (
    <>
      <Link to="/fishes/create">作成</Link>
      <FishesTable fishes={fishes} />
    </>
  );
};
