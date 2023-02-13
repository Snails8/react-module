import useSWR, { SWRResponse } from "swr";

// 認証用のコード
type AuthRequestHeaders = {
  headers: {
    authorization: string;
  };
};

export const useFetchSWR = <T>(path: string | undefined, fetcher?: (requestHeaders: AuthRequestHeaders) => Promise<T>
) => {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    path ? path : null, 
    fetcherWithToken,
  );

  return {data, error, isLoading};
};

// default fetcher
async function fetcherWithToken<T>(key: string, init?: RequestInit): Promise<T> {
  const token = 'test-token';
  return fetch(key, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  }).then((res) => res.json() as Promise<T>);
}

/**
  sample

  const {data: swrData, error: swrErr}= useFetchSWR<string>(APIGetTest); // 通常のfetch
  const {data: undefinedData, error: e}= useFetchSWR(undefined);         // 条件付きfetch
 */


