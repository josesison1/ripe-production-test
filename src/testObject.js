const test = [
  {
    surveyQuestionNme: "Test",
    cardType: "Feedback",
    customerNme: "Keelan Smith-Jones",
    surveyQuestions: [
      {
        surveyQuestionType: "Stars",
        surveyQuestionAnswer: 3.5,
        surveyQuestion: "How do you like the products?",
      },
      {
        surveyQuestionType: "Stars",
        surveyQuestionAnswer: 3.5,
        surveyQuestion: "How was your experience?",
      },
      {
        surveyQuestionType: "Stars",
        surveyQuestionAnswer: 3.5,
        surveyQuestion: "How likely are you to recommend a friend?",
      },
      {
        surveyQuestionType: "Text",
        surveyQuestionAnswer: "This is the answer text",
        surveyQuestion: "Any additional feedback?",
      },
    ],
    tags: ["tagone", "tagtwo"],
    needsAttention: true,
    bookmarked: false,
  },
  {
    purchaseFreqNum: "6th Purchase",
    customerNme: "Keelan Smith-Jones",
    cardType2: "Purchase",
    purchaseInputs: [
      {
        quantities: 1,
        productType: "sativa",
        unitPrice: 50,
        totalItemPrice: 50,

      },
       {
        quantities: 3,
        productType: "indica",
        unitPrice: 50,
        totalItemPrice: 150,

      }, 
      {
        quantities: 2,
        productType: "hybrid",
        unitPrice: 40,
        totalItemPrice: 80,

      },
      {
        orderNumber: 1234567890,
        paymentMethod: "Credit Card",
        subtotal: 280,
        deliveryFee: "Free",
        discounts: 0.0,
        cannabisTax: 8.5,
        salesTax: 15.32,
        orderTotal: 303.82,
        },
    ],
  }
];

export { test };
