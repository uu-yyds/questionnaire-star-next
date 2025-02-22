import React from "react";

interface QuestionRadioProps {
  fe_id: string;
  props: {
    title: string;
    options: { value: string; label: string }[];
    value: string;
    isVertical: boolean;
  };
}
const QuestionRadio = ({ fe_id, props }: QuestionRadioProps) => {
  return <div>
      <label htmlFor={fe_id} className="text-[16px] text-[#333333] font-medium">{props.title}</label>
      <div className={`flex gap-[12px] mb-[16px] py-[6px] ${props.isVertical ? 'flex-col' : ''}`}>
          {props.options.map((option) => {
            const { value, label } = option;
            return (
              <div key={value}>
                <label htmlFor={value} className="text-[16px] text-[#333333] font-medium">
                    <input type="radio" name={fe_id} value={value} defaultChecked={value === props.value} />
                    {label}
                </label>
              </div>
            );
          })}
      </div>
    </div>
};
export default QuestionRadio;
