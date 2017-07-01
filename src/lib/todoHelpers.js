export const addTodo = (list, item) =>[...list, item]

export const generateId = () => Math.floor(Math.random()*10000)

export const findById = (id, list) => list.find(item=> item.id === id)

export const toggleTodo = (todo) => ({...todo, isComplete:!todo.isComplete })

export const updateTodo = (list,todo) =>list.map((item)=>item.id===todo.id?todo:item) 

export const removeTodo = (list,id) =>list.filter((item)=>item.id!==id) 
