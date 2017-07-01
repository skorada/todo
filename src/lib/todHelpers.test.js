import {addTodo,findById, toggleTodo, updateTodo, removeTodo} from './todoHelpers'


test('addTodo should add the passed todo to the list', ()=>{

    const startTodos = [
        {id:1, name:"one", isComplete:false},
        {id:2, name:"two", isComplete:false}
    ]

    const newTodo = {id:3, name:"three", isComplete:false}

    const expected = [
        {id:1, name:"one", isComplete:false},
        {id:2, name:"two", isComplete:false},
        {id:3, name:"three", isComplete:false}
    ]

    const result = addTodo(startTodos, newTodo)

    expect(result).toEqual(expected)
})

test('addTodo should add the passed todo to the list without mutating the list', ()=>{

    const startTodos = [
        {id:1, name:"one", isComplete:false},
        {id:2, name:"two", isComplete:false}
    ]

    const newTodo = {id:3, name:"three", isComplete:false}

    const expected = [
        {id:1, name:"one", isComplete:false},
        {id:2, name:"two", isComplete:false},
        {id:3, name:"three", isComplete:false}
    ]

    const result = addTodo(startTodos, newTodo)

    expect(result).not.toBe(startTodos)
})

test('findById should return the expected item from an array', () =>{

    const startTodos = [
        {id:1, name:"one", isComplete:false},
        {id:2, name:"two", isComplete:false},
        {id:3, name:"three", isComplete:false}
    ]

     const expected = {id:2, name:"two", isComplete:false}
     const result = findById(2, startTodos)
     expect(result).toEqual(expected)
} )


test('toggleTodo should should toggle the iscomplete  property of a todo', () =>{
    const startTodo = {id:1, name:"one", isComplete:false}
    const expected = {id:1, name:"one", isComplete:true}
    const result = toggleTodo(startTodo)
    expect(result).toEqual(expected)
    
} )


test('toggleTodo should not mutate the original todo', () =>{

    const startTodo = {id:1, name:"one", isComplete:false}
    const expected = {id:1, name:"one", isComplete:true}
    const result = toggleTodo(startTodo)
    expect(result).not.toBe(startTodo)
} )


test('updateTodo should update an item by id', () =>{

    const startTodos = [
        {id:1, name:"one", isComplete:false},
        {id:2, name:"two", isComplete:false},
        {id:3, name:"three", isComplete:false}
    ]

    const updatedTodo = {id:2, name:"two", isComplete:true}

    const expected = [
        {id:1, name:"one", isComplete:false},
        {id:2, name:"two", isComplete:true},
        {id:3, name:"three", isComplete:false}
    ]

    const result = updateTodo(startTodos, updatedTodo )

    expect(result).toEqual(expected)
} )


test('updateTodo should not mutate the original array', () =>{

const startTodos = [
        {id:1, name:"one", isComplete:false},
        {id:2, name:"two", isComplete:false},
        {id:3, name:"three", isComplete:false}
    ]

    const updatedTodo = {id:2, name:"two", isComplete:true}

    const result =updateTodo(startTodos, updatedTodo )

    expect(result).not.toBe(startTodos)
} )


test('removeTodo should remove the passed todo from the list', ()=>{

    const startTodos = [
       {id:1, name:"one", isComplete:false},
       {id:2, name:"two", isComplete:false},
       {id:3, name:"three", isComplete:false}
    ]

    const targetTodoId = 2

    const expected = [
        {id:1, name:"one", isComplete:false},
        {id:3, name:"three", isComplete:false}
    ]

    const result = removeTodo(startTodos, targetTodoId)

    expect(result).toEqual(expected)
})

test('removeTodo should remove the passed todo from the list without mutating the list', ()=>{

    const startTodos = [
       {id:1, name:"one", isComplete:false},
       {id:2, name:"two", isComplete:false},
       {id:3, name:"three", isComplete:false}
    ]

    const targetTodoId = 2

    const expected = [
        {id:1, name:"one", isComplete:false},
        {id:3, name:"three", isComplete:false}
    ]

    const result = removeTodo(startTodos, targetTodoId)
    expect(result).not.toBe(startTodos)
})