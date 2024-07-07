

type Props = {
  label: string | JSX.Element;
  labelDetail?: string | JSX.Element;
  name?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Checkbox(props: Props) {
  return (
    <div className="flex items-center">
      <input
        id={props.name}
        name={props.name}
        value={props.value}
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        onChange={props.onChange}
        aria-describedby={props.name}
      />
      <label
        htmlFor={props.name}
        className="ml-3 block text-sm leading-6 text-gray-900"
      >
        {props.label}
      </label>
      {props.labelDetail && (
        <p className="mt-1 text-sm leading-6 text-gray-600">
          {props.labelDetail}
        </p>
      )}
    </div>
  );
};
