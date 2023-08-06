// 액션 타입 정의
const ADD_USERINFO = "user/ADD_USERINFO";
const SET_ISLOGIN = "user/SET_ISLOGIN";
const ADD_TO_MY_ENT_LIST = "ADD_TO_MY_ENT_LIST";
const REMOVE_FROM_MY_ENT_LIST = "REMOVE_FROM_MY_ENT_LIST";
// 액션 생성자 함수 정의
export const addUserInfo = (userInfo) => ({
	type: ADD_USERINFO,
	payload: userInfo,
});
export const setIsLogin = () => ({
	type: SET_ISLOGIN,
});
const addToMyEntList = (item) => ({
	type: ADD_TO_MY_ENT_LIST,
	payload: item,
});
const removeFromMyEntList = (item) => ({
	type: REMOVE_FROM_MY_ENT_LIST,
	payload: item,
});

// 초기 상태 정의
const initialState = {
	userInfo: {},
	isLogin: false,
	myEntList: [],
};

// 리듀서 함수 정의
const user = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USERINFO:
			return {
				...state,
				// userInfo: { ...action.data }
				userInfo: { ...action.payload },
			};
		case SET_ISLOGIN:
			return {
				...state,
				isLogin: !state.isLogin,
			};
		default:
			return state;
	}
};

export default user;
