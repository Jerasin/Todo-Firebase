import firebase from 'firebase'
import {ref,onUnmounted} from 'vue'

import {firebaseConfig} from './config'

 // Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();
 const todosCollection = db.collection('todos');


 export const createTodo = todo =>{
     return todosCollection.add(todo);
 }

 export const getTodos = async () =>{
    const todo = await todosCollection.get();
    return todo.exists  ? todo.data() : null;
}

 export const getTodoById = async id =>{
     const todo = await todosCollection.doc(id).get();
     return todo.exists  ? todo.data() : null;
 }

 export const updateTodo = (id,todo) =>{
     return todosCollection.doc(id).update(todo);
 }

 export const deleteTodo = id =>{
     return todosCollection.doc(id).delete();
 }

 export const todoLoading = () =>{
     const todos = ref([])
     const close = todosCollection.onSnapshot(snapshot => {
         todos.value = snapshot.docs.map(doc => ({id: doc.id , ...doc.data()}))
     })
     onUnmounted(close)
     return todos
 }
//   firebase.analytics();