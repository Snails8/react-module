"use client";
import { Checkbox } from "@/components/elements/form/CheckBox";
import { DatePickerComponent } from "@/components/elements/form/DatePiker";
import { RadioGroup } from "@/components/elements/form/RadioGroup";
import { Select } from "@/components/elements/form/Select";
import { TextField } from "@/components/elements/form/TextField";
import { Textarea } from "@/components/elements/form/Textarea";
import { useState } from "react";

export function ControlForm() {
  const [inputText, setInputText] = useState("");
  const [inputTextarea, setInputTextarea] = useState("");
  const [inputSelect, setInputSelect] = useState<string>();
  const [inputRadio, setInputRadio] = useState<string>();
  const [inputCheckbox, setInputCheckbox] = useState<boolean>(false);
  const [inputDate, setInputDate] = useState<Date | null>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputTextarea(e.target.value);
  };

  return (
    <>
      <section className="pb-8">
        <div className="bg-gray-200 w-full">
          <div className="p-4">
            ここに結果出るよ
            <div>
              <p>name：{inputText}</p>
              <p>textarea：{inputTextarea}</p>
              <p>select：{inputSelect}</p>
              <p>radio：{inputRadio}</p>
              <p>checkbox：{inputCheckbox ? "true" : "false"}</p>
              <p>date：{inputDate?.toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </section>

      <form className="space-y-2">
        <TextField
          label={"名前"}
          type={"text"}
          name={"text"}
          value={inputText}
          onChange={handleChange}
        />

        <Textarea
          label={"本文"}
          name={"textarea"}
          rows={3}
          value={inputTextarea}
          onChange={handleTextareaChange}
        />

        <Select
          label={"選択"}
          placeholder="選択してください"
          name={"select"}
          value={inputSelect}
          onChange={(e) => setInputSelect(e.target.value)}
          options={["選択1", "選択2", "選択3"]}
        />

        <RadioGroup
          label={"ラジオボタン"}
          name="radio"
          format="row"
          value={inputRadio}
          onChange={(e) => setInputRadio(e.target.value)}
          radioGroups={[
            { id: "radio1", title: "ラジオ1", value: "radio1" },
            { id: "radio2", title: "ラジオ2", value: "radio2" },
            { id: "radio3", title: "ラジオ3", value: "radio3" },
          ]}
        />

        <Checkbox
          label={"チェックボックス"}
          name="checkbox"
          checked={inputCheckbox}
          onChange={() => setInputCheckbox(!inputCheckbox)}
        />

        <DatePickerComponent
          name="date-picker"
          label="日付"
          value={inputDate}
          onChange={(date) => setInputDate(date)}
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >送信(GET)</button>
      </form>
    </>
  );
}
