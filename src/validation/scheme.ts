import * as yup from "yup";

import {
  EMAIL_VALIDATION_MESSAGE,
  NICKNAME_VALIDATION_MESSAGE,
  PASSWORD_VALIDATION_MESSAGE,
  PASSWORD_REGEX,
  NICKNAME_REGEX,
} from "@/constants/validation";

export const signupScheme = yup.object({
  email: yup
    .string()
    .email(EMAIL_VALIDATION_MESSAGE.notMatched)
    .required(EMAIL_VALIDATION_MESSAGE.required),
  password: yup
    .string()
    .required(PASSWORD_VALIDATION_MESSAGE.requied)
    .matches(PASSWORD_REGEX, PASSWORD_VALIDATION_MESSAGE.notMatched),
  passwordConfirmation: yup
    .string()
    .required(PASSWORD_VALIDATION_MESSAGE.requied)
    .oneOf([yup.ref("password")], PASSWORD_VALIDATION_MESSAGE.notConfirmed),
});

export const loginScheme = yup.object({
  email: yup
    .string()
    .email(EMAIL_VALIDATION_MESSAGE.notMatched)
    .required(EMAIL_VALIDATION_MESSAGE.required),
  password: yup
    .string()
    .required(PASSWORD_VALIDATION_MESSAGE.requied)
    .matches(PASSWORD_REGEX, PASSWORD_VALIDATION_MESSAGE.notMatched),
});

export const nicknameScheme = yup.object({
  nickname: yup
    .string()
    .required(NICKNAME_VALIDATION_MESSAGE.require)
    .matches(NICKNAME_REGEX, NICKNAME_VALIDATION_MESSAGE.notMatched),
});
