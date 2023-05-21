"use client"
import React from 'react'
import {useAppDispatch, useAppSelector} from '@/redux/hooks'
import {increment, decrement} from '@/redux/features/counterSlice'
import {useGetUserByIdQuery, useGetUsersQuery} from '@/redux/services/userApi'

function HomePage() {
  const count = useAppSelector(state => state.counterReducer.counter)
  const dispatch = useAppDispatch()

  const {data, error, isLoading, isFetching } = useGetUsersQuery(null)

  if (isFetching || isLoading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  

  return (<>
    <div>HomePage</div>
    <div>
      <button
      onClick={
        ()=>{
          dispatch(increment())
        }
      }
      >Increment {count}</button>
      <button
      onClick={
        ()=>{
          dispatch(decrement())
        }
      }
      >Decrement {count}</button>

      {
        data?.map(user => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.username}</p>
            <p>{user.id}</p>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default HomePage