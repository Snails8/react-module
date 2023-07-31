import { useCallback, useEffect, useState } from "react";

function useDebounce(fn: () => any, ms: number = 0, args: any[] = []) {
  useEffect(() => {
    const handle = setTimeout(fn.bind(args), ms);

    return () => {
      clearTimeout(handle);
    };
  }, args);
};

export default function useDebouncedQuery(onChange: (query: string) => void) {
  const [searchQuery, setSearchQuery] = useState('');

  useDebounce(() => {
      onChange(searchQuery);
    },
    500,
    [searchQuery]
  );

  const clearQuery = useCallback(() => {
    setSearchQuery('');
  }, []);

  return { searchQuery, setSearchQuery, clearQuery };
}

/**
usage

  const loadSuggestions = (query: string) => { ... }
  const { searchQuery, setSearchQuery } = useDebouncedQuery(loadSuggestions);

  return (
    <Input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
  )

 */