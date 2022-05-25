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
    tags: ['tagone', 'tagtwo'],
    needsAttention: true,
    bookmarked: false,

    purchaseFreqNum: '6th Purchase',
    cardType2: 'Purchase',
    purchaseInputs: [
        {
            quantities: [1,3,2],
            productType: ['sativa', 'indica', 'hybrid'],
            unitPrice: [50, 50, 40],
            totalItemPrice: [50, 150, 80],
            orderNumber: 1234567890,
            paymentMethod: "Credit Card",
            subtotal: 280,
            deliveryFee: "Free",
            discounts: 0.00,
            cannabisTax: 8.50,
            salesTax: 15.32,
            orderTotal: 303.82

        }
    ]

}

export { test }