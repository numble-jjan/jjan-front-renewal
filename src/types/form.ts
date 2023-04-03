type Message = string;
type FieldName = string;
type FieldValue = FieldValues[FieldName];
type FieldValues = Record<FieldName, any>;
type FieldError = {
  message?: Message;
};
type FieldErrors<T extends FieldValues = FieldValues> = {
  [K in keyof T]: FieldError;
};

export type {
  Message,
  FieldName,
  FieldValue,
  FieldValues,
  FieldError,
  FieldErrors,
};
