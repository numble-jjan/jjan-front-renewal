export const EMAIL_VALIDATION_MESSAGE = {
  required: "이메일을 입력해주세요.",
  notMatched: "이메일 주소를 다시 확인해주세요.",
};

export const PASSWORD_VALIDATION_MESSAGE = {
  requied: "비밀번호를 입력해주세요.",
  notMatched: "비밀번호는 영문자, 숫자, 특수문자 조합을 입력해야 합니다.",
  notConfirmed: "비밀번호를 다시 확인해주세요.",
};

export const NICKNAME_VALIDATION_MESSAGE = {
  require: "닉네임을 입력해주세요.",
  notMatched: "사용할 수 없는 닉네임입니다.",
  existed: "이미 사용중인 닉네임입니다.",
};

export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

export const NICKNAME_REGEX = /^[a-zA-Z가-힣]{1}[a-zA-Z가-힣0-9]{1,9}$/;
