import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/atoms/UI/Button/Button';
import { Container } from '../../components/atoms/Design/Container/Container';
import { Atoms } from '../../components/organisms/ComponentSample/Atoms';
import { LoadingTemplate } from '../../components/templates/LoadingTemplate/LoadingTemplate';
import { Layout } from '../../components/templates/_Layout/Layout';
import { APIPostTest, APIGetTest, APIPutTest } from '../../endpoint';
import { useFetch } from '../../hooks/useFetch';
import { usePost } from '../../hooks/usePost';
import { AtomMUI } from '../../components/organisms/ComponentSample/AtomMUI/AtomMUI';
import { TabMUI } from '../../components/molecules/_MUI/Tab/Tab';
import { TabMUIContent } from '../../components/molecules/_MUI/Tab/TabContent';
import { useSelectTab } from '../../components/molecules/_MUI/Tab/useSelectTab';
import { Molecules } from '../../components/organisms/ComponentSample/Molecules/Molecales';


export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [data, getLoading, error] = useFetch(APIGetTest);
    // const {data, error}= swrFetcher(APITest);


  const {doPostRequest, loading}= usePost();
  const handleSubmitPost = () => {
    doPostRequest({
      method: 'post',
      path: APIPostTest,
      postData: {sample: 'test', foo: "fuga"}
    });
  };

  const handleSubmitPut = () => {
    doPostRequest({
      method: 'put',
      path: APIPutTest(1),
      postData: {sample: 'test-put', foo: "fuga"}
    });
  };

  const params: string = createSearchParams({
    name: 'sample',
    type: 'test',
  }).toString();


  const {tabIdx, handleSelected} = useSelectTab();

  if (loading || getLoading) {
    return (<LoadingTemplate />);
  };

  return (
    <>
      <Layout isContainerDesign>
        <Container type='center'>
          <div>
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

            <div style={{ display: 'flex', }}>
              <Button label='post' handleClick={handleSubmitPost}/>
              <Button label='put' handleClick={handleSubmitPut}/>
            </div>
          </div>

          <TabMUI headers={['atoms', 'molecules']} tabIdx={tabIdx} handleChange={handleSelected} width={300} centered>
            <TabMUIContent  value={tabIdx} index={0}>
              <Atoms />
              <AtomMUI />
            </TabMUIContent>
            <TabMUIContent  value={tabIdx} index={1}>
              <Molecules />
            </TabMUIContent>
          </TabMUI>


        </Container>
      </Layout>
    </>
  );
};
