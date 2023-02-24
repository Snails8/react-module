import {  useState } from 'react';

type Method =
  'delete' | 'DELETE'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH';

type PostRequest<T> = {
  method: Method
  path: string
  postData?: T
}

type PostResponse<T> = {
  doPostRequest: ({ method, path, postData }: PostRequest<T>) => Promise<void>
  data: T | undefined,
  loading: boolean,
  error: any,
}

export const usePost = <T>(): PostResponse<T> => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const doPostRequest = async ({
    method,
    path,
    postData,
  }: PostRequest<T>) => {
    try {
      setLoading(true);
      const res = await fetch(path, {
        method: method,
        body: JSON.stringify(postData),
      });
      const data = await res.json();
      setData(data);
    } catch (err: unknown) {
      setError(err as any);
    } finally {
      setLoading(false);
    };
  };

  return {
    doPostRequest,
    data,
    loading,
    error,
  };
};


/**
usage : handleSubmit

  const {doPostRequest, loading, error, data} = usePost();

  async function handleSubmit(e: any) {
    e.preventDefault();
    const postData = {
      // set postData
    };

    await doPostRequest({
      method: 'post',
      path: APIPostUserCreate,
      postData: postData,
    });
  }

 */