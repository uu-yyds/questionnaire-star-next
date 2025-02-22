import React from "react";

interface QuestionCheckBoxProps {
  fe_id: string;
  props: {
    title: string;
    list: { value: string; label: string; checked: boolean }[];
    isVertical: boolean;
  };
}
const QuestionCheckBox = ({ fe_id, props }: QuestionCheckBoxProps) => {
  return <div>
    <label htmlFor={fe_id} className="text-[16px] text-[#333333] font-medium">{props.title}</label>
    <div className={`flex gap-[12px] mb-[16px] py-[6px] ${props.isVertical ? 'flex-col' : ''}`}>
        {props.list.map((item) => {
        const { value, label, checked } = item;
        return (
            <div key={value}>
                <label htmlFor={value} className="text-[16px] text-[#333333] font-medium">
                    <input type="checkbox" name={fe_id} value={value} defaultChecked={checked} />
                    {label}
                </label>
            </div>
        )
    })}
    </div>
  </div>
};

export default QuestionCheckBox;
