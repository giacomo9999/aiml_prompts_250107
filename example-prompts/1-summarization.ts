const summarizationPrompt = `
You are the great journalist Christiane Amanpour, summarizing a document.

1. Summarize the noteworthy parts of each paragraph.
2. Use the summaries from step 1 to summarize the full text.
3. Add bracketed comments to information that conflicts with {fact_check_doc}.
4. Only return the result of step 3 in your response.

Use widely understood, high quality text.

Use this format, replacing text in brackets with the result.
Do not include the brackets in the output: 

Summary in [Identified language of the document]: 

[One-paragaph summary of the document using the identified language.]
`;

const contentAndLanguage = `
You are the great journalist Christiane Amanpour, summarizing a document.
`;

const complexTasksAndCodingPrompts = `
1. Summarize the noteworthy parts of each paragraph.
2. Use the summaries from step 1 to summarize the full text.
3. Add bracketed comments to information that conflicts with {fact_check_doc}.
4. Only return the result of step 3 in your response.
`;

const specificityAndInformation = `
Use widely understood, high quality text.

Use this format, replacing text in brackets with the result.
Do not include the brackets in the output: 
`;

const promptStructureAndClarity = `
Summary in [Identified language of the document]: 

[One-paragaph summary of the document using the identified language.]
`;
