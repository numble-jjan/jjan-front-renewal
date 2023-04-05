import * as Yup from "yup";

import type { FieldErrors, FieldValues } from "@/types/form";
import type { EmptyObject } from "@/types/util";

type ResolverSuccess<TFieldValues extends FieldValues = FieldValues> = {
  values: TFieldValues;
  errors: EmptyObject;
};

type ResolverError<TFieldValues extends FieldValues = FieldValues> = {
  values: EmptyObject;
  errors: FieldErrors<TFieldValues>;
};

type ResolverResult<TFieldValues extends FieldValues = FieldValues> =
  | ResolverSuccess<TFieldValues>
  | ResolverError<TFieldValues>;

/**
 * @todo Types for unimplemented resolver functionality
 */
type Resolver<TFieldValues extends FieldValues = FieldValues> = (
  values: TFieldValues,
) => Promise<ResolverResult<TFieldValues>> | ResolverResult<TFieldValues>;

type YupResolver = <TObjectSchema extends Yup.ObjectSchema<any>>(
  schema: TObjectSchema,
) => Resolver<FieldValues>;

export type { Resolver, YupResolver };
