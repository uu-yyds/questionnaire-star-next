import React from "react";

interface QuestionInputProps {
    fe_id: string;
    props: {
        title: string;
        placeholder: string;
    }   
}

const QuestionInput = ({ fe_id, props }: QuestionInputProps) => {
    return <>
        <label htmlFor={fe_id} className="text-[16px] text-[#333333] font-medium">{props.title}</label>
        <div className="mb-[16px] py-[6px]">
            <input className="w-full border border-[#d8d8d8] rounded-[4px] px-[12px] py-[12px]" type="text" placeholder={props.placeholder} name={fe_id} />
        </div>
    </>
};

export default QuestionInput;