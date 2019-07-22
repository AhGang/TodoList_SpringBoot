import Vue from 'vue';
import Vuex from 'vuex';
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
    
    }
}) 

export default store