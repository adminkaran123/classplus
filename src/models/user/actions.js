export const fetchUserInfo = () => {
  return {type: 'USER_FETCH_REQUESTED'};
};

export const updateUser = value => {
  return {type: 'USER_UPDATE_REQUESTED', payload: value};
};
