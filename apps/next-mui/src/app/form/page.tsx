'use client';

import { RhfTextField } from "@module/mui-component";
import { Control, useForm } from "react-hook-form";

type FormValues = {
  name: string,
}
export default function Form() {
  const { control, handleSubmit } = useForm<FormValues>();
  return (
    <div style={{ padding: 5 }}>
      <RhfTextField
        name="name"
        control={control}
        label="TextField"
        placeholder="Placeholder"
        helperText="HelperText"
      />
    </div>
  )
}