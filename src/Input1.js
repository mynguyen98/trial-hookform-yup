import React from 'react'

const Input1 = ({ register, errors }) => {
  console.log('render input 1')
  return (
    <div className='input-field'>
      <input
        type='text'
        name='username'
        id='username'
        placeholder='Email'
        autoComplete='off'
        {...register('username')}
      />
      {errors.username && (
        <span style={{ color: 'red' }}>{errors.username.message}</span>
      )}
    </div>
  )
}

export default Input1
