import {
	//RECORD_USERINFO,
    SAVE_SELECTED,
} from './mutation-types.js'
import {
	setStore,
	getStore,
} from '../config/mUtils'

export default {

	// 加入
	// [ADD_CART](state, {
	// 	//setStore('buyCart', state.cartList);
	// },
	// 移出
	// [REDUCE_CART](state, {
	//网页初始化时从本地缓存获取数据
	// [INIT_BUYCART](state) {
	// 	//let initCart = getStore('buyCart');
	//清空当前信息
	// [CLEAR_CART](state, shopid) {
	// 	//setStore('buyCart', state.cartList);


	//// 记录用户信息
	//[RECORD_USERINFO](state, info) {
	//	state.userInfo = info;
	//	state.login = true;
	//	setStore('userInfo', info);
	//},
    //记录用户选择（共读目标or往期历史）
    [SAVE_SELECTED](state, selectedValue) {
        state.selectedValue = selectedValue;
    },
}