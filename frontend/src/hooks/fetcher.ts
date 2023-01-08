import useSWR from "swr";

async function fetcher<T>(key: string, init?: RequestInit) {
  return fetch(key, init).then((res) => res.json() as Promise<T>);
}

export const swrFetcher = <T>(path: string) => {
  const { data, error, isLoading, isValidating, mutate } = useSWR(path, fetcher<T>);

  return {data, error, isLoading};
};