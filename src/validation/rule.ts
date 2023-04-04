import { FieldValues } from "react-hook-form";

import { MAX_IMAGE_SIZE, SUPPORTED_IMAGE_FORMATS } from "@/constants/file";

import { FieldError } from "@/types/form";

export const validateImages = <T extends FieldValues>(
  values?: T,
  files?: File[],
) => {
  const errors: FieldError = {};

  files?.map(file => {
    if (file.size > MAX_IMAGE_SIZE) {
      errors.message = "File size must be 2MB or smaller";
    }

    if (!SUPPORTED_IMAGE_FORMATS.includes(file.type)) {
      errors.message =
        "Unsupported file format. Allowed formats: JPG, JPEG, GIF, PNG";
    }
  });

  return errors;
};
