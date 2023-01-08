
// TODO:: APIのpathをここで一元管理する。hooks内で飲み呼び出される(本番環境はsame origin)
const apiHost = process.env.REACT_APP_API_HOST + '/api/v1' ?? '/api/v1';

export const APIGetFishes = apiHost + '/fishes';

// test
export const APIGetTest = apiHost + '/';
export const APIPostTest = apiHost + '/create';
export const APIPutTest = (id: number) => apiHost + `/${id}`;


export const APIGetUsers = apiHost + '/users';
export const APIPostUserCreate = apiHost + '/users/create';

export const APIPathMasterTest = apiHost + '/master/test';
export const APIPathMasterSample = apiHost + '/master/sample';