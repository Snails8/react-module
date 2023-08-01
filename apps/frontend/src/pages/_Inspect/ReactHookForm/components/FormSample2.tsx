import React from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  street: yup.string().required(),
  city: yup.string().required(),
});

export const FormSample2 = () => {
  const methods = useForm({
    resolver: yupResolver(schema)
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(data => console.log(data))}>
        <BasicInformation />
        <AddressInformation />
        <input type="submit" />
      </form>
    </FormProvider>
  );
};


const BasicInformation = () => {
  const { register } = useFormContext();
  return (
    <div>
      <label>Name</label>
      <input {...register('name')} />

      <label>Email</label>
      <input {...register('email')} />
    </div>
  );
};

const AddressInformation = () => {
  const { register } = useFormContext();
  return (
    <div>
      <label>Street</label>
      <input {...register('street')} />

      <label>City</label>
      <input {...register('city')} />
    </div>
  );
};