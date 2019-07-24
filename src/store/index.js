import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
// import {Message} from 'iview';
Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    itemName: "",
    allItems: [],
    showItems: [],
  },
  mutations: {
    pushItem(state, item) {
      state.allItems.push(item);
      state.showItems.push(item);
    },
    resetItemName(state) {
      state.itemName = ''
    },
    filterItems(state, data) {
      if (data == 'Active') {
        state.showItems = state.allItems.filter(e => (e.state == false))
      } else {
        state.showItems = state.allItems.filter(e => (e.state == true))
      }
    },
    getAllItems(state) {
      state.showItems = JSON.parse(JSON.stringify(state.allItems))
    },
    setCompletedItem(state, data) {
      if (data.itemStatus) {
        state.showItems[data.index].state = false
        thstateis.allItems[data.index].state = false
      } else {
        state.showItems[data.index].state = true
        state.allItems[data.index].state = true
      }

    },
    isEditItem(state, data) {
      state.showItems[data.index].isEditing = data.status;
    },
    completedItem(state, index) {
      state.showItems[index].state = !state.showItems[index].state
    },
    updateItem(state, data) {
      state.showItems[data.index].name = data.name;
      state.allItems[data.index].name = data.name;
    },
    initData(state, data) {
      state.allItems = []
      state.showItems = []
      if(data!=[]){
            data.forEach(element => {
        let item = {
          id: element.id,
          name: element.name,
          state: element.state,
        }
        state.allItems.push(item)
        state.showItems.push(item)
      });
      }
  
    }
  },
  actions: {

    initData(context) {
      axios({
        method: 'get',
        url: 'http://localhost:8080/to-do-lists',
      }).then((response) => {
        response.status
        context.commit('initData', response.data)
      })


    },

    async postAItem(context, item) {
      try {
        const postRes = await axios({
          method: 'post',
          url: 'http://localhost:8080/to-do-lists',
          data: {
            "name": item.name,
            "state": item.state
          }
        });
      } catch{
        //  Message.error("New item error, please make sure there is no same Item");
      }
      const getRes = await axios({
        method: 'get',
        url: 'http://localhost:8080/to-do-lists',
      });
      context.commit('initData', getRes.data)
    },
    async putAItem(context, index) {
      let item = context.state.showItems[index]
      axios({
        method: 'put',
        url: 'http://localhost:8080/to-do-lists/' + item.id,
        data: item,


      })
    },
    async deleteAItem(context, index) {
      let item = context.state.showItems[index]
      try{
         const deleteRes = axios({
        method: 'delete',
        url: 'http://localhost:8080/to-do-lists/' + item.id
      })
      }catch{

      }
      const getRes = await axios({
        method: 'get',
        url: 'http://localhost:8080/to-do-lists',
      });
      context.commit('initData', getRes.data)
    }

  }
})

export default store