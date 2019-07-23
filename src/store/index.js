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
  completedItem(state,index){
    state.showItems[index].isSelected = ! state.showItems[index].isSelected
  },
  updateItem(state,data){
    state.showItems[data.index].val = data.val;
    state.allItems[data.index].val = data.val;
  },
  initData(state,data){
    data.forEach(element => {
    let item = {
      id:element.id,
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
  },
  async putAItem(context,index) {
    let item = context.state.showItems[index]
    console.log(item)
    axios({
    method: 'put',
    url: 'http://localhost:8080/to-do-lists/' + item.id,
    data: {
       "id": item.id,
       "state": item.isSelected
      }
    })
  }

  }
}) 

export default store