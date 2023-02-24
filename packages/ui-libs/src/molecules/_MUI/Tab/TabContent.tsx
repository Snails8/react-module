;import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';


interface TabMUIContentProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  centered?: boolean;
}

export const TabMUIContent = (props: TabMUIContentProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3}} >
          {children}
        </Box>
      )}
    </div>
  );
};

/**
usage:TabMUIから見た時childrenにあたりcontentsを囲うことでbodyにできる

<TabMUI headers={['content1', 'content2']} tabIdx={tabIdx} handleChange={handleSelected}>
  <TabMUIContent value={tabIdx} index={0}>
    content 1
  </TabMUIContent>
  <TabMUIContent value={tabIdx} index={2}>
    content 2
  </TabMUIContent>
</TabMUI>

 */
