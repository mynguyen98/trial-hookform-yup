import React from 'react'

const Input2 = ({ register, errors }) => {
  console.log('render input 2')

  return (
    <div className='input-field'>
      <input
        type='password'
        name='pass'
        id='pass'
        placeholder='Password'
        autoComplete='off'
        {...register('pass')}
      />
      {errors.pass && (
        <span style={{ color: 'red' }}>{errors.pass.message}</span>
      )}
    </div>
  )
}

export default Input2
