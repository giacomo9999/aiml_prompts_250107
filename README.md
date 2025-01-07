# Unit AI-1SB: Prompts

## Summary

How do we approach prompting as programming in natural language? What best practices can we apply?

Above all, we want our code to be **maintainable** (adaptable to changing requirements), which is why we make our code **readable** (understandable at a glance), **modular** (separating functionality), and **flexible** (avoiding hard-coded values and tight coupling). These best practices also allow us to build confidence in our code through **testing**. ✅️

There are three key strategies we rely on as software engineers: pseudocode, pair programming, and code review.

- Pseudocode should be language-agnostic – it should be the same whether the “end language” is JS, C++, or natural language. Keep it relatively high level, explaining your approach and the necessary steps.
- Pair programming is all about honing technical communication through the driver-navigator approach. It compels you to clarify your intent (what exactly you want your code to do and how) and to clarify your explanation.
- Performing code review deepens your understanding of a codebase (and a language!) and develops your technical communication; receiving it is a great growth opportunity.

Writing good, clean code is about more than whether it “works” (produces the intended output when executed). This is just as true for prompting as it is for writing JS! Think of the prompt you send to an LLM as a module – a set of functions and data to be run – and lead with your engineering mindset! 🧠

## Challenges

- Copy each [example prompt](example-prompts/) from this repo into a shared Google doc. Think about what purpose each part of the prompt serves. What components can you identify? Use color coding or highlighting to “diagram” the prompts.
- In VS Code, break each prompt into modular components (“functions”) that can be combined into the original prompt (“module”).
- Do code review on the modularized prompts. Include things of interest, surprises, and potential opportunities for improvement. Refactor and add comments to the code where appropriate
- Pair program through the [prompting challenges](prompting-challenges/) provided, following the driver/navigator approach to write pseudocode and draft prompts for each challenge. **Don't “run” your prompts with an LLM!** You're just whiteboarding. 📝


----

Note: The solutions we used draw heavily on methodology from this Medium article: https://medium.com/the-modern-scientist/best-prompt-techniques-for-best-llm-responses-24d2ff4f6bca
