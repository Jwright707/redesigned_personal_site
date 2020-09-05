
export const TOP_ARROW_UPDATE = 'TOP_ARROW_UPDATE';
export const BOTTOM_ARROW_UPDATE = 'BOTTOM_ARROW_UPDATE';

export const topArrowUpdate = (values, dispatch) => dispatch({type: TOP_ARROW_UPDATE, payload: values})
export const bottomArrowUpdate = (values, dispatch) => dispatch({type: BOTTOM_ARROW_UPDATE, payload: values})