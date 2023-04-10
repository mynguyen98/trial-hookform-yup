import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import yup from './yupGlobal'
import { useForm } from 'react-hook-form'
import Input1 from './Input1'
import Input2 from './Input2'
// khái báo và validate dữ liệu
const schema = yup.object().shape({
  username: yup.string().required('Required').email('Email invalid'),
  pass: yup.string().required(),
})

const Form = () => {
  //form state se thay doi khi validation failed
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // mode: 'onChange', //valide khi change hay chỉ validate khi submit dữ liệu
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => {
    // submit và lấy dữ liệu
    console.log(data)
  }
  console.log(errors)
  return (
    <form className='box' onSubmit={handleSubmit(onSubmit)}>
      <h1>login</h1>
      <Input1 register={register} errors={errors} />
      <Input2 register={register} errors={errors} />
      <button type='submit' id='submit'>
        LOGIN
      </button>
    </form>
  )
}

export default Form
