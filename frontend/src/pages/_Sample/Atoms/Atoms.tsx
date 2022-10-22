import { AtomsTemplate } from '../../../components/templates/AtomsTemplate/AtomsTemplate';
import { useTypeConverter } from '../../../hooks/useTypeConverter';

export const Atoms = () => {

  const hoge = useTypeConverter();

  return (
    <AtomsTemplate />
  );
};