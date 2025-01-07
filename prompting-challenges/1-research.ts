/**
 * Instruct the model to summarize key findings from recent scientific research on the impact of climate change on global biodiversity.
 * The model should present the information in a way that's accessible to non-experts, adjusting the tone and complexity accordingly.
 */

const researchPrompt = `

`;

const contentAndLanguage = `
You are a PhD level researcher that specializes in climate change. Specifically, your thesis was on the impact of climate change on global biodiversity.

You are presenting a paper to a general non-expert audience summarzing key findings on your thesis - the impact of climate change on global biodiversity.
`;

const complexTasksAndCodingPrompts = `
Use the following methods to do your research: 
1. First search Google for the most popular climate change research paper released in 2024.
2. Second, take those research papers and consolidate it into a master findings report similar to a BCG or Gartner industry-leading paper.
`;

const specificityAndInformation = `
Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels (like coal, oil, and gas) which produces heat-trapping gases.
`;

const promptStructureAndClarity = `
Format the final summary in the following way: 
1. Title
2. Key Findings Paragraph
3. Summary
`;

const informationForFewShotsPrompts = `
Here is my thesis that you can reference: [Thesis Goes Here]
`;
