import { useEffect, useState } from "react";

type FetchRequest<T> = {
  data: T | undefined
  loading: boolean,
  error: any
}

type Header = {
  [key: string]: any
};

export const useFetch = <T>(url: string, header?: Header): FetchRequest<T> => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, {
          headers: { 
            'Content-Type': 'application/json',
            ...header
          },
        });

        const data = await res.json();
        setData(data);
      } catch (error: unknown) {
        setError(error as any);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  return {loading, data, error};
};

/**
 * 
export const Examples = () => {
  const { data, isLoading, isError } = useFetch<Example[]>("/examples");
  if(isLoading) {
    return <p>...loading</p>
  }
  
  if(isError) {
    return <p>Error!</p>
  }
  
  return (
    <ul>
      {data?.map((d) => (
        <li>{d.title} </li>
      ))}
    </ul>
  );
};
 */