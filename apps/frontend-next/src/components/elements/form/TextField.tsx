import { FaCircleExclamation } from "react-icons/fa6";

type Props = {
  name?: string;
  label: string | JSX.Element;
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "time";
  value?: string | number;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function TextField(props: Props) {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {props.label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          id={props.name}
          name={props.name}
          type={props.type}
          value={props.value}
          defaultValue={props.defaultValue}
          placeholder={props.placeholder}
          // aria-invalid="true"
          aria-describedby={`${props.name}-error`}
          className={
            !props.error
              ? // "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                "block w-full px-3 py-2 rounded-md shadow appearance-none border leading-tight focus:outline-none focus:shadow-outline pr-10 text-gray-700 sm:text-sm sm:leading-6"
              : "block w-full px-3 py-2 rounded-md shadow appearance-none border leading-tight focus:outline-none focus:shadow-outline pr-10 text-red-900  placeholder:text-red-300 sm:text-sm sm:leading-6 ring-1 ring-inset focus:ring-1 focus:ring-inset ring-red-300 focus:ring-red-500 "
          }
          onChange={props.onChange}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          {props.error && (
            <FaCircleExclamation
              aria-hidden="true"
              className="h-5 w-5 text-red-500"
            />
          )}
        </div>
      </div>
      {props.error && (
        <p className="mt-2 text-sm text-red-600" id={`${props.name}-error`}>
          {props.error}
        </p>
      )}
    </div>
  );
}
