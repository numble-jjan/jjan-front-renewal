import * as Yup from "yup";

import type { FieldErrors, FieldValues } from "@/types/form";
import type { YupResolver } from "@/types/resolver";

export const yupResolver: YupResolver = <TFieldValues extends FieldValues>(
  schema: Yup.ObjectSchema<TFieldValues>,
) => {
  return async values => {
    try {
      const validatedValues = await schema.validate(values, {
        abortEarly: false,
      });
      return { values: validatedValues, errors: {} };
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = err.inner.reduce((acc, error) => {
          if (error.path) {
            acc[error.path as keyof typeof errors] = { message: error.message };
          }
          return acc;
        }, {} as FieldErrors<TFieldValues>);
        return { values: {}, errors };
      }
      throw err;
    }
  };
};
