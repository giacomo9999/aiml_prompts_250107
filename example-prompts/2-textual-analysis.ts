const analysisPrompt = `
A metaphor is a figure of speech that directly refers to one thing by mentioning another for rhetorical effect. It implies a comparison without using "like" or "as."

Given a sentence, respond with a JSON object that has two keys: \`reasoning\` and \`answer\`.
The first key's value should contain the reasoning used to determine if the sentence contains a metaphor.
The second key's value should contain either "Yes" or "No".

Q: "Time is a thief that steals our moments."
Does this sentence contain a metaphor?
{
  "reasoning": "The sentence equates 'time' with 'a thief' directly.",
  "answer": "Yes"
}

Q: "Her smile was as bright as the sun."
Does this sentence contain a metaphor?
{
  "reasoning": "The comparison uses 'as', indicating a simile, not a metaphor.",
  "answer": "No"
}

Q: "The world is a stage, and we are merely players."
Does this sentence contain a metaphor?
{
  "reasoning": "It directly compares 'the world' to 'a stage.'",
  "answer": "Yes"
}

Q: "He runs like the wind."
Does this sentence contain a metaphor?
{
  "reasoning": "The sentence uses 'like,' which indicates a simile.",
  "answer": "No"
}

Q: "Her voice was music to his ears."
Does this sentence contain a metaphor?
{
  "reasoning": "<the reasoning used to arrive at the above answer>",
  "answer": "<Yes if it contains a metaphor, No if it does not>"
}
`;

const contentAndLanguage = `

`;

const complexTasksAndCodingPrompts = `
Given a sentence, respond with a JSON object that has two keys: \`reasoning\` and \`answer\`.
The first key's value should contain the reasoning used to determine if the sentence contains a metaphor.
The second key's value should contain either "Yes" or "No".
`;

const specificityAndInformation = `
A metaphor is a figure of speech that directly refers to one thing by mentioning another for rhetorical effect. It implies a comparison without using "like" or "as."
`;

const promptStructureAndClarity = `

`;

const informationForFewShotsPrompts = `
Q: "Time is a thief that steals our moments."
Does this sentence contain a metaphor?
{
  "reasoning": "The sentence equates 'time' with 'a thief' directly.",
  "answer": "Yes"
}

Q: "Her smile was as bright as the sun."
Does this sentence contain a metaphor?
{
  "reasoning": "The comparison uses 'as', indicating a simile, not a metaphor.",
  "answer": "No"
}

Q: "The world is a stage, and we are merely players."
Does this sentence contain a metaphor?
{
  "reasoning": "It directly compares 'the world' to 'a stage.'",
  "answer": "Yes"
}

Q: "He runs like the wind."
Does this sentence contain a metaphor?
{
  "reasoning": "The sentence uses 'like,' which indicates a simile.",
  "answer": "No"
}

Q: "Her voice was music to his ears."
Does this sentence contain a metaphor?
{
  "reasoning": "<the reasoning used to arrive at the above answer>",
  "answer": "<Yes if it contains a metaphor, No if it does not>"
}
`;
