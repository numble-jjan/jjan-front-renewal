import React, { createContext } from "react";

import { useForm } from "@/hooks/useForm";

import type {
  ChangeEventHandler,
  FocusEventHandler,
  FormEventHandler,
  PropsWithChildren,
} from "react";
import type { useFormArgs } from "@/hooks/useForm";
import type { FieldValues } from "@/types/form";
import type { UseFormReturn } from "@/hooks/useForm";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const initialFormReturn: UseFormReturn<FieldValues> = {
  values: {} as FieldValues,
  errors: {} as Partial<FieldValues>,
  touched: {} as Partial<FieldValues>,
  handleChange: noop as ChangeEventHandler<HTMLInputElement>,
  handleBlur: noop as FocusEventHandler<HTMLInputElement>,
  handleSubmit: noop as FormEventHandler,
  getFieldProps: (name: string) => ({
    name,
    value: "",
    onBlur: noop as FocusEventHandler<HTMLInputElement>,
    onChange: noop as ChangeEventHandler<HTMLInputElement>,
  }),
};

const FormContext =
  createContext<UseFormReturn<FieldValues>>(initialFormReturn);

type FormProps<TFieldValues extends FieldValues> = useFormArgs<TFieldValues>;

const Form = <TFieldValues extends FieldValues>({
  children,
  ...props
}: PropsWithChildren<FormProps<TFieldValues>>) => {
  const formValue = useForm<TFieldValues>(props);

  return (
    <FormContext.Provider value={formValue}>
      <form onSubmit={formValue.handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
};

export { FormContext };
export default Form;
