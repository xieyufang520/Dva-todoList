
export default {

  namespace: 'indexPage',

  state: {
    todoList: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(() => {
        dispatch({type: 'save', payload: { todoList: [] }})
      })
    },
  },

  effects: {
    * add({payload}, {put, select}) {
      const indexPage = yield select(state => state.indexPage);
      yield put({
        type: 'save',
        payload: {
          todoList: indexPage.todoList.concat(payload),
        }
      })
    },
    * delete({payload}, {put, select}) {
      const indexPage = yield select(state => state.indexPage);
      let todoList  = [];
      todoList = todoList.concat(indexPage.todoList);
      todoList.splice(payload, 1);
      yield put({
        type: 'save',
        payload: {
          todoList,
        }
      });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
