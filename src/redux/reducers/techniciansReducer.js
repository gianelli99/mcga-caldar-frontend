import {
  CREATE_TECHNICIAN,
  UPDATE_TECHNICIAN,
  DELETE_TECHNICIAN,
  SET_ALL_TECHNICIANS,
} from '../types/techniciansTypes';

const initialState = {
  list: [],
};

export const techniciansReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TECHNICIAN:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case UPDATE_TECHNICIAN:
      return {
        ...state,
        list: state.list.map((tec) =>
          tec.id === action.payload.id ? action.payload : tec
        ),
      };
    case DELETE_TECHNICIAN:
      return {
        ...state,
        list: state.list.filter((tec) => tec.id !== action.payload),
      };
    case SET_ALL_TECHNICIANS:
      return { ...state, list: action.payload };

    default:
      return state;
  }
};
