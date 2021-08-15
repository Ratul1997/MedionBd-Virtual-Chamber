import {userConstants} from '../constants/userConstants';

const initialState = {
  medicines: [],
  advices: [],
  followup: [],
  cheifComplaint: [],
  history: [],
  diagnosis: [],
  onExamination: [],
  investigation: [],
};
const store = (prev, data) => {
  const newArray = [...prev, data];
  return newArray;
};

const remove = (prev, data) => {
  const newArray = prev.filter(item => {
    return item.key != data.key;
  });
  return newArray;
};

export default function prescriptionReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.STORE_MEDICINE:
      return {
        ...state,
        medicines: store(state.medicines, action.medicine),
      };
    case userConstants.REMOVE_MEDICINE:
      return {
        ...state,
        medicines: remove(state.medicines, action.medicine),
      };
    case userConstants.STORE_ADVICE:
      return {
        ...state,
        advices: store(state.advices, action.advice),
      };

    case userConstants.REMOVE_ADVICE:
      return {
        ...state,
        advices: remove(state.advices, action.advice),
      };
    case userConstants.STORE_FOLLOW_UP:
      return {
        ...state,
        followup: store(state.followup, action.followUp),
      };

    case userConstants.REMOVE_FOLLOW_UP:
      return {
        ...state,
        followup: remove(state.followup, action.followUp),
      };
    case userConstants.STORE_CHIEF_COMPLAINT:
      return {
        ...state,
        cheifComplaint: store(state.cheifComplaint, action.cheifComplaint),
      };

    case userConstants.REMOVE_CHIEF_COMPLAINT:
      return {
        ...state,
        cheifComplaint: remove(state.cheifComplaint, action.cheifComplaint),
      };
    case userConstants.STORE_HISTORY:
      return {
        ...state,
        history: store(state.history, action.history),
      };

    case userConstants.REMOVE_HISTORY:
      return {
        ...state,
        history: remove(state.history, action.history),
      };
    case userConstants.STORE_DIAGNOSIS:
      return {
        ...state,
        diagnosis: store(state.diagnosis, action.diagnosis),
      };

    case userConstants.REMOVE_DIAGNOSIS:
      return {
        ...state,
        diagnosis: remove(state.diagnosis, action.diagnosis),
      };
    case userConstants.STORE_ON_EXAMINATION:
      return {
        ...state,
        onExamination: store(state.onExamination, action.onExamination),
      };

    case userConstants.REMOVE_ON_EXAMINATION:
      return {
        ...state,
        onExamination: remove(state.cheifComplaint, action.onExamination),
      };
    case userConstants.STORE_INVESTIGATION:
      return {
        ...state,
        investigation: store(state.investigation, action.investigation),
      };

    case userConstants.REMOVE_INVESTIGATION:
      return {
        ...state,
        investigation: remove(state.investigation, action.investigation),
      };

    case userConstants.REMOVE_PRESCTIPTION_ALL:
      return {
        medicines: [],
        advices: [],
        followup: [],
        cheifComplaint: [],
        history: [],
        diagnosis: [],
        onExamination: [],
        investigation: [],
      };
    default:
      return state;
  }
}
