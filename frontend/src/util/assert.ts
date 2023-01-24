import { AssertionError } from "assert";

export function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw new AssertionError({
      message: `Expected 'val' to be defined, but received ${val}`
    });
  }
}

export function assertIsDefinedOrNull<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined ) {
    throw new AssertionError({
      message: `Expected 'val' to be defined, but received ${val}`
    });
  }
}