import { Link } from "react-router-dom";
import { Fish } from "../../../hooks";
import { FishesTable } from "../../organisms/FishesTable/FishTable";
import { Layout } from "../_Layout/Layout";

type FishesTemplateProps = {
  fishes: Fish[]
}

export const FishesTemplate = (props: FishesTemplateProps) => {
  const fishes = props.fishes;
  
  return (
    <Layout isContainerDesign={true}>
      <FishesTable fishes={fishes} />
      <Link to="/fishes/create">作成</Link>
    </Layout>
  );
};