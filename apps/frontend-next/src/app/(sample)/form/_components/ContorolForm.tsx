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
          <div className="p-4">ここに結果出るよ</div>
          <div>
            <p>name：{inputText}</p>
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
          options={["選択1", "選択2", "選択3"]}
        />

        <RadioGroup
          label={"ラジオボタン"}
          name="radio"
          format="row"
          radioGroups={[
            { id: "radio1", title: "ラジオ1", value: "radio1" },
            { id: "radio2", title: "ラジオ2", value: "radio2" },
            { id: "radio3", title: "ラジオ3", value: "radio3" },
          ]}
        />

        <Checkbox label={"チェックボックス"} name="checkbox" value="checkbox" />

        <DatePickerComponent label="日付" />
      </form>
    </>
  );
}
