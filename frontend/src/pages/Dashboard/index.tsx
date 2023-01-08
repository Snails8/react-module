import React from 'react';
import { Link } from 'react-router-dom';
import { createSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { LoadingTemplate } from '../../components/templates/LoadingTemplate/LoadingTemplate';
import { Layout } from '../../components/templates/_Layout/Layout';
import { APITest } from '../../endpoint';
import { swrFetcher } from '../../hooks/fetcher';
import { useFetch } from '../../hooks/useFecth';


export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const {data, loading, error} = useFetch(APITest);

  // const {data, error}= swrFetcher(APITest);
  if (error) {
    return (<LoadingTemplate />);
  };

  

  const params: string = createSearchParams({
    name: 'sample',
    type: 'test',
  }).toString();

  return (
    <>
      <Layout>
        <h1>Sample Home</h1>
        <h1>{data ? "BEと接続中": "BEと未接続"}</h1>
        <nav>
          <ul>
            <li>
              <Link to="training">Training</Link>
            </li>
            <li>
              <Link to="page2">Sample Page2</Link>
            </li>
            <li>
              <Link to="page2?name=鈴木&type=test">
                Sample Page2 With Query1
              </Link>
            </li>
            <li>
              <Link to={`page2?${params}`}>Sample Page2 With Query2</Link>
            </li>
            <li>
              <Link to="page3">Sample Page3 props</Link>
            </li>
            <li>
              <Link to="page4">Sample Page4</Link>
            </li>
          </ul>

          <button onClick={() => navigate('page1')}>SamplePage1</button>
        </nav>
      </Layout>
    </>
  );
};
