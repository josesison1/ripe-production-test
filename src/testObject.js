const test = {
    surveyQuestionNme: 'Test',
    cardType: 'Feedback',
    customerNme: 'Keelan Smith-Jones',
    surveyQuestions: [
        {
            surveyQuestionType: "Stars",
            surveyQuestionAnswer: 3.5,
            surveyQuestion: 'How do you like the products?'
        },
        {
            surveyQuestionType: "Stars",
            surveyQuestionAnswer: 3.5,
            surveyQuestion: 'How was your experience?'
        },
        {
            surveyQuestionType: "Stars",
            surveyQuestionAnswer: 3.5,
            surveyQuestion: 'How likely are you to recommend a friend?'
        },
        {
            surveyQuestionType: "Text",
            surveyQuestionAnswer: 'This is the answer text',
            surveyQuestion: 'Any additional feedback?'
        }
    ],
    tags: ['TagOne', 'TagTwo', 'TagThree', 'TagFour'],
    needsAttention: true,
    bookmarked: false
}

export { test }