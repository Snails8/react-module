import { Box } from "@mui/system";
import { useFormContext } from "react-hook-form";
import { Container } from "@module/ui-component";
import { ControlSelect } from "@module/mui-component";
import { ControlCheckBox } from "@module/mui-component";
import { ControlDatePicker } from "@module/mui-component";
import { ControlRadio } from "@module/mui-component";
import { ControlTextField } from "@module/mui-component";

export const SampleForm = () => {
  const {control, trigger, formState: {errors}} = useFormContext();

  const options: any[] = [
    {label: '未選択', value: 'undefined'},
    {label: 'test1', value: 'test1'},
    {label: 'test2', value: 'test2'},
    {label: 'test3', value: 'test3'},
    {label: 'test4', value: 'test4'},
  ];

  const radioOptions: any[] = [
    {label: '男性', value: 'male'},
    {label: '女性', value: 'female'},
    {label: '未回答', value: ''},
  ];

  const checkboxOptions: any[] = [
    {label: 'check1', value: 1},
    {label: 'check2', value: 2},
    {label: 'check3', value: 3},
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
            name="selectId"
            label="希望日"
            options={options}
            control={control}
          />
        </Box>
        <Box sx={{ margin: 2, bgcolor: "white"  }}>
          <ControlSelect
            name="selectId2"
            options={options}
            control={control}
            defaultValue={'test1'}
          />
        </Box>
        <Box sx={{ margin: 2, bgcolor: "white"  }}>
          <ControlSelect
            name="select_disabled"
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

      <h3>Radio</h3>
      <Container type="flex">
        <Box sx={{ margin: 2, bgcolor: "white" }}>
          <ControlRadio 
            name="gender"
            options={radioOptions}
            label="性別"
            control={control}
          />
        </Box>
        <Box sx={{ margin: 2, bgcolor: "white" }}>
          <ControlRadio 
            name="genderDefault"
            options={radioOptions}
            label="性別"
            defaultValue={"female"}
            control={control}
            row
          />
        </Box>
        <Box sx={{ margin: 2, bgcolor: "white" }}>
          <ControlRadio 
            name="genderDisabled"
            options={radioOptions}
            defaultValue={""}
            control={control}
            row
            disabled
          />
        </Box>
      </Container>

      <h3>Checkbox</h3>
      <Container type="flex">
        <Box sx={{ margin: 2, bgcolor: "white" }}>
          <ControlCheckBox 
            name="check"
            options={checkboxOptions}
            errors={errors}
            label="性別"
            control={control}
          />
        </Box>
      </Container>
    </Container>
  );
};