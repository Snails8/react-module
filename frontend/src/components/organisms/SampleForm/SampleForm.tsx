import { useFormContext } from "react-hook-form";
import { Container } from "../../atoms/Design/Container/Container";
import { ControlTextField } from "../../atoms/_MUI/ControlTextField/ControlTextField";

export const SampleForm = () => {
  const {control, trigger} = useFormContext();

  return  (
    <Container type="center">
      <ControlTextField 
        type="text"
        name="name"
        control={control}
        trigger={trigger}
      />
    </Container>
  );
};