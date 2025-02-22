'use server'
import { redirect } from 'next/navigation';
export async function handlerAnswer(questionId: string, formData: FormData) {
    const answer_list: { componentFeId: string, value: string }[] = []
    // 找出同样的component_id, 对应的value整合成数组
    const answer_list_map = new Map();
    formData.forEach((value, key) => {
        if (!key.startsWith('$ACTION')) {
            if(answer_list_map.has(key)) {
                answer_list_map.get(key).push(value as string);
            } else {
                answer_list_map.set(key, [value as string]);
            }
        }
    });
    answer_list_map.forEach((value, key) => {
        answer_list.push({
            componentFeId: key,
            value: value.join(',')
        });
    });
    const res = await fetch(`http://localhost:3005/api/answer/create`, {
        method: 'POST',
        body: JSON.stringify({
            questionId: questionId,
            answer_list: answer_list
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if(res.ok) {
        redirect('/success');
    } else {
        redirect('/failure');
    }
}

export async function getComponentLists(questionId: string) {
    const res = await fetch(`http://localhost:3005/api/question/${questionId}`);
    const { data } = await res.json();
    const { componentsList } = data;
    return componentsList;
}