import React from "react";
import { handlerAnswer as handler, getComponentLists } from "./action";
import QuestionInput from "src/components/QuestionComponents/QuestionInput";
import QuestionRadio from "src/components/QuestionComponents/QuestionRadio";
import QuestionCheckBox from "src/components/QuestionComponents/QuestionCheckBox";

type QuestionInfoProps = {
  title: string;
  desc: string;
}

interface Component {
  fe_id: string;
  title: string;
  isHidden: boolean;
  isLocked: boolean;
  isDisabled: boolean;
  type: string;
  props: any;
}

const QuestionnairePage = async ({
  params,
}: {
  params: Promise<{ id: string }>
  }) => {
  const componentLists = await getComponentLists((await params).id);
  const submitWithQuestionId = handler.bind(null, (await params).id);
  const questionInfo = componentLists.find((component: Component) => component.type === 'questionInfo');
  const { title, desc } = questionInfo?.props as QuestionInfoProps;

  if (componentLists.length === 0) {
    return <div>没有问卷信息</div>;
  }
  return (
    <div className="h-screen py-[20px] flex flex-col items-center">
      <h1 className="text-[24px] text-[#333333] font-medium mb-[20px]">{title}</h1>
      <p className="text-[16px] text-[#333333] font-medium mb-[20px]">{desc}</p>
      <form className="w-3/4" action={submitWithQuestionId}>
        {componentLists.filter((component: Component) => component.type !== 'questionInfo').map((component: Component) => {
          const { fe_id, type, props } = component;
          switch (type) {
            case 'questionInput':
              return <QuestionInput key={fe_id} props={props} fe_id={fe_id} />;
            case 'questionRadio':
              return <QuestionRadio key={fe_id} props={props} fe_id={fe_id} />;
            case 'questionCheckbox':
              return <QuestionCheckBox key={fe_id} props={props} fe_id={fe_id} />;
            default:
              return null;
          }
        })}
        <div className="flex justify-center">
          <button type="submit" className="w-[100px] h-[40px] bg-[#000000] text-[#ffffff] rounded-[4px]">提交</button>
        </div>
      </form>
    </div>
  );
};

export default QuestionnairePage;
