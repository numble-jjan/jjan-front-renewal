import { useState, useEffect } from "react";
import type {
  ChangeEventHandler,
  FocusEventHandler,
  FormEventHandler,
} from "react";
import { FieldValues } from "@/types/form";
import { Resolver } from "@/types/resolver";

type UseFormReturn<TFieldValues extends FieldValues> = {
  values: TFieldValues;
  errors: Partial<TFieldValues>;
  touched: Partial<TFieldValues>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<HTMLInputElement>;
  handleSubmit: FormEventHandler;
  getFieldProps: (name: string) => {
    name: string;
    value: any;
    onBlur: FocusEventHandler<HTMLInputElement>;
    onChange: ChangeEventHandler<HTMLInputElement>;
  };
};

type useFormArgs<TFieldValues extends FieldValues> = {
  initialValues: TFieldValues;
  onSubmit: (values: TFieldValues) => void;
  resolver: Resolver<TFieldValues>;
};

/**
 * valiation only works by using a resolver with a yupschema.
 */
const useForm = <TFieldValues extends FieldValues>({
  initialValues,
  onSubmit,
  resolver,
}: useFormArgs<TFieldValues>) => {
  const [values, setValues] = useState<TFieldValues>(initialValues);
  const [errors, setErrors] = useState<Partial<TFieldValues>>({});
  const [touched, setTouched] = useState<Partial<TFieldValues>>(
    {} as unknown as TFieldValues,
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = ({ target }) => {
    const { name } = target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleSubmit: FormEventHandler = async e => {
    e.preventDefault();

    setTouched(
      Object.keys(values).reduce((touched, field) => {
        (touched as unknown as any)[field] = true;
        return touched;
      }, {} as TFieldValues),
    );

    const result = await resolver(values);
    setErrors(result.errors as Partial<TFieldValues>);

    if ("values" in result) {
      onSubmit(result.values as TFieldValues);
      return;
    }

    onSubmit(values);
  };

  useEffect(() => {
    (async () => {
      const { errors } = await resolver(values);
      setErrors(errors as Partial<TFieldValues>);
    })();
  }, [values, resolver]);

  const getFieldProps = (name: string) => {
    const value = values[name];
    const onBlur = handleBlur;
    const onChange = handleChange;

    return {
      name,
      value,
      onBlur,
      onChange,
    };
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    getFieldProps,
  };
};

export { useForm };
export type { UseFormReturn, useFormArgs };
