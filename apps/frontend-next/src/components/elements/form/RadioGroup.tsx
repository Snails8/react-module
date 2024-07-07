
type Radio = {
  id: string;
  title: string;
  value: string; // TODO:: bool以外も可能にする
};

type Props = {
  radioGroups: Radio[];
  format?: "row" | "column"; 
  label?: string | JSX.Element;
  labelDetail?: string | JSX.Element;
  name?: string;
  value?: string | number;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function RadioGroup(props: Props) {
  return (
    <fieldset>
      {props.label && <legend className="text-sm font-semibold leading-6 text-gray-900">{props.label}</legend>}
      {props.labelDetail &&<p className="mt-1 text-sm leading-6 text-gray-600">{props.labelDetail}</p>}
      <div className={props.format === "column" ? "mt-3 space-y-6": "mt-3 space-y-6 sm:flex sm:items-center sm:space-x-10 sm:space-y-0"}>
        {props.radioGroups.map((radio) => (
          <div key={radio.id} className="flex items-center">
            <input
              defaultChecked={radio.id === 'email'}
              id={radio.id}
              name={props.name}
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor={radio.id} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
              {radio.title}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
