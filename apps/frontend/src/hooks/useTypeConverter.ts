interface TypeConverter {
  stringToNumber: (value: string) => number;
  stringToBoolean: (value: string) => boolean;
  stringToDate: (value: string) => Date;
}

export const useTypeConverter = (): TypeConverter => {
  const stringToNumber = (value: string): number => {
    const num = Number(value);
    if (isNaN(num)) {
      throw new Error(
        'Error: Invalid value expected number but got other type'
      );
    }

    return Number(value);
  };

  const stringToBoolean = (value: string): boolean => {
    // JSON.parse時など型情報がメモリに含まれている時があるため
    if (typeof value === 'boolean') {
      return value;
    }

    // Boolean() では値があるかどうかで判定が入ってしまうため
    if (value === 'true') {
      return true;
    }
    if (value === 'false') {
      return false;
    }

    throw new Error('Error: Invalid value expected boolean but got other type');
  };

  const stringToDate = (value: string): Date => {
    const date = new Date(value);

    return date;
  };

  return {
    stringToBoolean,
    stringToNumber,
    stringToDate,
  };
};
