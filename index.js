import OpenAI from "openai";

const sort = async (arr, apiKey) => {
  const openai = new OpenAI({
    apiKey: apiKey,
  });

  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {"role": "user", "content": `sort the list [${arr}] and ONLY give me the sorted list in your response, nothing else.`},
    ],
  });
  
  return JSON.parse(completion.choices[0].message.content);
}

export default sort;
