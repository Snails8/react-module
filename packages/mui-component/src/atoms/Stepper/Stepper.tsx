import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Typography } from '@mui/material';


const steps = [
  '受領済' ,
  '交渉中',
  '承認済',
  '完了'
];

type Props = {
  status: string
}
export default function HorizontalLabelPositionBelowStepper(props: Props) {
  const {status} = props;
  const mapping: {[key:string]: number} = {
    'received': 1 ,
    'negotiation':2,
    'approved': 3,
    'completed': 4
  }
  
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={mapping[status]} alternativeLabel>
        {steps.map((label, idx) => (
          <Step key={label}>
            <StepLabel>
              <Typography sx={{ 
                  fontWeight: idx + 1 === mapping[status] ? "bold" : '',
                  color: idx + 1 === mapping[status] ? 'black' : '#c0c0c0',
              }}>{label}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}