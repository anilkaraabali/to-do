import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import i18n from '../i18n'

import { request } from '../api/axios'

export const getTodos = createAsyncThunk('todo/getAllTodos', async (_, { rejectWithValue }) => {
    try {
        const { data } = await request({
            method: 'get',
            url: '/todos'
        })

        return data.todos
    } catch (err) {
        return rejectWithValue(err.error)
    }
})

export const deleteTodos = createAsyncThunk(
    'todo/deleteAllTodos',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await request({
                method: 'delete',
                url: '/todos'
            })

            return data
        } catch {
            return rejectWithValue(i18n.t('fail-delete-all'))
        }
    }
)

export const insertTodo = createAsyncThunk('todo/insert', async (todo, { rejectWithValue }) => {
    try {
        const { data } = await request({
            method: 'post',
            url: `/todos`,
            data: todo
        })

        return data
    } catch {
        return rejectWithValue(i18n.t('fail-insert'))
    }
})

export const updateTodo = createAsyncThunk('todo/update', async (todo, { rejectWithValue }) => {
    try {
        const { data } = await request({
            method: 'patch',
            url: `/todos/${todo.id}`,
            data: todo
        })

        return data
    } catch {
        return rejectWithValue(i18n.t('fail-update'))
    }
})

export const deleteTodo = createAsyncThunk('todo/delete', async (todoId, { rejectWithValue }) => {
    try {
        const { data } = await request({
            method: 'delete',
            url: `/todos/${todoId}`
        })

        return data
    } catch {
        return rejectWithValue(i18n.t('fail-delete'))
    }
})

const { reducer } = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        error: null,
        success: null,
        pending: false
    },
    reducers: {},
    extraReducers: {
        [getTodos.pending.type]: state => {
            state.pending = true
        },
        [getTodos.fulfilled.type]: (state, action) => {
            state.todos = action.payload
            state.pending = false
        },
        [getTodos.rejected.type]: (state, action) => {
            state.error = action.payload
            state.success = null
        },
        [deleteTodos.fulfilled.type]: (state, action) => {
            state.todos = action.payload
            state.success = i18n.t('success-delete-all')
            state.error = null
        },
        [deleteTodos.rejected.type]: (state, action) => {
            state.error = action.payload
            state.success = null
        },
        [updateTodo.fulfilled.type]: (state, action) => {
            const findIndex = state.todos.findIndex(
                todo => todo.id === action.payload.update_todos_by_pk.id
            )
            state.todos[findIndex] = action.payload.update_todos_by_pk
            state.success = i18n.t('success-update')
            state.error = null
        },
        [updateTodo.rejected.type]: (state, action) => {
            state.error = action.payload
            state.success = null
        },
        [insertTodo.fulfilled.type]: (state, action) => {
            state.todos.push(action.payload.insert_todos_one)
            state.success = i18n.t('success-insert')
            state.error = null
        },
        [insertTodo.rejected.type]: (state, action) => {
            state.error = action.payload
            state.success = null
        },
        [deleteTodo.fulfilled.type]: (state, action) => {
            state.todos = state.todos.filter(
                todo => todo.id !== action.payload.delete_todos_by_pk.id
            )
            state.success = i18n.t('success-delete')
            state.error = null
        },
        [deleteTodo.rejected.type]: (state, action) => {
            state.error = action.payload
            state.success = null
        }
    }
})

export default reducer
