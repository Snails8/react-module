import { ja } from "date-fns/locale"; // 日本語のロケールをインポート
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  label: string;
  name?: string;
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  type?: "date" | "datetime" | undefined;
  minDate?: Date;
  required?: boolean;
};
export function DatePickerComponent(props: Props) {
  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={props.name}
        className={"block text-sm font-medium leading-6 text-gray-900"}
      >
        {props.label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <DatePicker
        name={props.name}
        dateFormat={
          props.type === "datetime" ? "yyyy/MM/dd HH:mm" : "yyyy-MM-dd"
        }
        locale={ja}
        selected={props.value} //value
        onChange={props.onChange}
        showTimeSelect={props.type === "datetime"}
        timeIntervals={30}
        minDate={props.minDate}
        required={props.required}
        className="border w-full border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}
