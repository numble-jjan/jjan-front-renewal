export type Variant =
  | "f1-regular"
  | "f1-bold"
  | "f2-regular"
  | "f2-bold"
  | "f3-regular"
  | "f3-bold"
  | "f4-regular"
  | "f4-bold"
  | "f5-regular"
  | "f5-bold"
  | "f6-regular"
  | "f6-bold"
  | "f7-regular"
  | "f7-bold";

export type Variants = {
  [key in Variant]: { fontSize: string; fontWeight: string };
};
