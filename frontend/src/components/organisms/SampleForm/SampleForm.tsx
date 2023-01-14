import { Box } from "@mui/system";
import { useFormContext } from "react-hook-form";
import { Container } from "../../atoms/Design/Container/Container";
import { ControlSelect } from "../../atoms/_MUI/ContorlSelect/ControlSelect";
import { ControlDatePicker } from "../../atoms/_MUI/ControlDatePicker/ControlDatePicker";
import { ControlTextField } from "../../atoms/_MUI/ControlTextField/ControlTextField";

export const SampleForm = () => {
  const {control, trigger} = useFormContext();

  const options: any[] = [
    {label: '未選択', value: ''},
    {label: 'test1', value: 'test1'},
    {label: 'test2', value: 'test2'},
    {label: 'test3', value: 'test3'},
    {label: 'test4', value: 'test4'},
  ];

  return  (
    <Container type="center">
      <h3>よくあるinput</h3>
      <Container type="flex">
        <Box sx={{ margin: 2, bgcolor: "white"  }}>
          <ControlTextField 
            label="名前"
            name="name"
            control={control}
            trigger={trigger}
          />
        </Box>
        <Box sx={{ margin: 2, bgcolor: "white"  }}> 
          <ControlTextField 
            label="年齢"
            type="number"
            name="age"
            control={control}
            trigger={trigger}
          />
        </Box>
        <Box sx={{ margin: 2, bgcolor: "white"  }}>
          <ControlTextField 
            label="メール"
            type="email"
            name="email"
            control={control}
            trigger={trigger}
          />
        </Box>
      </Container>

      <h3>Select系</h3>
      <Container type="flex">
        <Box sx={{ margin: 2, bgcolor: "white"  }}>
          <ControlSelect
            name="select_id"
            label="希望日"
            options={options}
            control={control}
          />
        </Box>
        <Box sx={{ margin: 2, bgcolor: "white"  }}>
          <ControlSelect
            name="select_id"
            options={options}
            control={control}
            defaultValue={'test1'}
          />
        </Box>
        <Box sx={{ margin: 2, bgcolor: "white"  }}>
          <ControlSelect
            name="select_id"
            options={options}
            control={control}
            defaultValue={'test1'}
            disabled
          />
        </Box>
      </Container>

      <h3>Date系</h3>
      <Container type="center">
        <Box sx={{ margin: 2, bgcolor: "white" }}>
          <ControlDatePicker 
            name="date"
            control={control}
            trigger={trigger}
          />
        </Box>
      </Container>
    </Container>
  );
};