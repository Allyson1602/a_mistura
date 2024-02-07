export interface ISafetyRatingsBardAi {
  category: string;
  probability: string;
}

export interface IBardAiResponse {
  response: {
    candidates: [
      {
        safetyRatings: ISafetyRatingsBardAi[];
        index: number;
        finishReason: string;
        content: {
          role: string;
          parts: [
            {
              text: string;
            },
          ];
        };
      },
    ];
    promptFeedback: {
      safetyRatings: ISafetyRatingsBardAi[];
    };
    text: Function;
  };
}
