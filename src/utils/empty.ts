function isEmptyPrimitive(
  value: string | number | boolean | null | undefined,
): boolean {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "string" && value.trim() === "") {
    return true;
  }

  if (typeof value === "number" && isNaN(value)) {
    return true;
  }

  return false;
}

function isEmptyObj(obj: object) {
  return Object.keys(obj).length === 0;
}

export { isEmptyPrimitive, isEmptyObj };
