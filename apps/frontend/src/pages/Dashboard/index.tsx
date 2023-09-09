import React from 'react';
import { Link } from 'react-router-dom';
import { createSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from '@module/ui-component';
import { Container } from '@module/ui-component';
import { Atoms } from '../../components/organisms/domain/SampleAtomicComponent/Atoms';
import { LoadingTemplate } from '../../components/template/LoadingTemplate/LoadingTemplate';
import { APIPostTest, APIGetTest, APIPutTest, APIGetUsers } from '../../endpoint';
import { useFetch } from '../../hooks/useFetch';
import { usePost } from '../../hooks/usePost';
import { AtomMUI } from '../../components/organisms/domain/SampleAtomicComponent/AtomMUI/AtomMUI';
import { Tab } from '@module/mui-component';
import { TabMUIContent } from '@module/mui-component';
import { useTab } from '@module/mui-component';
import { Molecules } from '../../components/organisms/domain/SampleAtomicComponent/Molecules/Molecales';
import { useFetchSWR } from '../../hooks/useFetchSWR';


export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [data, getLoading, error] = useFetch(APIGetTest);
  
  const {data: swrData, error: swrErr}= useFetchSWR<string>(APIGetUsers);
  const {data: undefinedData, error: e}= useFetchSWR(undefined); // 条件付きfetch


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


  const {tabIdx, handleSelected} = useTab();

  if (loading || getLoading) {
    return (<LoadingTemplate />);
  };

  return (
    <>
      <Container type='center'>
        <div>
          <h1>Sample Home</h1>
          <h1>{data ? "BEと接続中": "BEと未接続"}</h1>
          <h4>通常のfetch：{data ? "ok": "ng"}</h4>
          <h4>swrでfetch：{swrData ? "ok": "ng"}</h4>
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
        <Tab headers={['atoms', 'molecules']} tabIdx={tabIdx} handleChange={handleSelected} width={300} centered>
          <TabMUIContent value={tabIdx} index={0}>
            <Atoms />
            <AtomMUI />
          </TabMUIContent>
          <TabMUIContent  value={tabIdx} index={1}>
            <Molecules />
          </TabMUIContent>
        </Tab>
      </Container>
    </>
  );
};
