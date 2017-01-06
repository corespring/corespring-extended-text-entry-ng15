
/** 
 * For the documentation of pie controllers see
 * https://pielabs.github.io/pie-docs/developing/controller.html
 */

let feedback = {
  NO_ANSWER: 'You did not enter a response'
};

let getFeedback = (question) => {
  var fb = question.feedback || {feedbackType: "default"};
  var feedbackType = fb.feedbackType || "default";
  if (feedbackType === "custom") {
    return question.feedback.feedback;
  } else if (feedbackType === "default") {
    return "Your answer was successfully submitted.";
  }
};

let createOutcome = (question, session) => {
  let settings = {
    showFeedback: true
  };

  if (!session) {
    return {
      correctness: 'incorrect',
      correctClass: 'nothing-submitted',
      score: 0,
      feedback: settings.showFeedback ? feedback.NO_ANSWER : null
    };
  }

  if (question && session && question._uid !== session._uid) {
    throw "Error - the uids must match";
  }

  var response = {
    studentResponse: session.value.answers
  };

  if (settings.showFeedback) {
    response.feedback = getFeedback(question);
  }
  response.comments = question.comments;

  return response;
};

export function outcome(question, session, env) {
  const legacyOutcome = createOutcome(question, session, env)
  const raw = legacyOutcome.score;
  const min = 0;
  const max = 1;
  const scaled = (raw - min) / (max - min) + min;

  const id = question.id;
  const score = {
    scaled, raw, min, max
  };
  const completed = true;
  const duration = "PT1M"; //one minute, see https://en.wikipedia.org/wiki/ISO_8601#Durations
  const extensions = {}; //optional, see docs in the link above
  const outcome = {
    id, score, completed, duration, extensions
  };

  return Promise.resolve(outcome);
}

export function model(question, session, env) {
  let result = {
    question, env
  };

  if (env.mode === 'evaluate') {
    result.response = createOutcome(question, session);
  }
  return Promise.resolve(result);
}