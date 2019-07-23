import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    itemName:"",
    allItems: [],
    showItems: [],
  },
  mutations:{
    pushItem(state,item){
      state.allItems.push(item);
      state.showItems.push(item);
    },
    resetItemName(state){
      state.itemName = ''
    },
    filterItems(state,data){
      if(data == 'Active'){
         state.showItems = state.allItems.filter(e=>(e.isSelected == false))
      }else{
        state.showItems = state.allItems.filter(e=>(e.isSelected == true))
      } 
    },
    getAllItems(state){
      state.showItems = JSON.parse(JSON.stringify(state.allItems))
    },
    setCompletedItem(state,data){
      if(data.itemStatus){
        state.showItems[data.index].isSelected = false
        thstateis.allItems[data.index].isSelected = false
      }else{
        state.showItems[data.index].isSelected = true
        state.allItems[data.index].isSelected = true
      }

    },
    isEditItem(state,data){
      state.showItems[data.index].isEditing = data.status;
    },
    initData(state,data){
      data.forEach(element => {
        let item = {
          val:element.name,
          isSelected: element.state,
          isEditing: false
          }
        state.allItems.push(item)
        state.showItems.push(item)
      });

    }
  },
  actions:{

    async initData (context) {
      axios({
        method: 'get',
        url: 'http://localhost:8080/to-do-lists',
        }).then((response)=>{
        context.commit('initData', response.data)
        })
      
    },
    async postAItem(context,item) {
      axios({
        method: 'post',
          url: 'http://localhost:8080/to-do-lists',
          data: {
               "name": item.val,
               "state": item.isSelected
              }
        })
    }
  }
}) 

export default store