import useSWR, { SWRResponse } from "swr";

function fetcher<T>(key: string, init?: RequestInit) {
  return fetch(key, init).then((res) => res.json() as Promise<T>);
}

export const useFetchSWR = <T>(path: string | undefined) => {
  const { data, error, isLoading, isValidating, mutate } = useSWR(path ? path : null, fetcher<T>);

  return {data, error, isLoading};
};

/**
  sample

  const {data: swrData, error: swrErr}= useFetchSWR<string>(APIGetTest); // 通常のfetch
  const {data: undefinedData, error: e}= useFetchSWR(undefined);         // 条件付きfetch
 */