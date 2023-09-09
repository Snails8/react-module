import { ReactNode } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';

type TabMUIProps = {
  headers: string[],
  tabIdx: number,
  handleChange: (event: React.SyntheticEvent, val: number) => void,
  children: ReactNode,
  width?: number
  color?:  "primary" | "secondary" | "inherit",
  centered?: boolean
}

const TabMUI = (props: TabMUIProps ) => {
  const {headers, tabIdx, handleChange, children, width=100,color="primary", centered=false } = props;

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabIdx} onChange={handleChange} aria-label="basic" textColor={color} centered={centered}>
          {headers.map((label: string, idx: number) => (
              <Tab label={label} key={idx} sx={{ minWidth: width }} />
          ))}
        </Tabs>
      </Box>
      { children }
    </Box>
  );
};

export default TabMUI;
/**
 * https://mui.com/material-ui/react-tabs/

usage:
  const {tabIdx, handleSelected} = useSelectTab();

  return (
    <TabMUI headers={['content1', 'content2']} tabIdx={tabIdx} handleChange={handleSelected}>
      <TabMUIContent value={tabIdx} index={0}>
        content 1
      </TabMUIContent>
      <TabMUIContent value={tabIdx} index={2}>
      content 2
      </TabMUIContent>
    </TabMUI>
  );

 */
