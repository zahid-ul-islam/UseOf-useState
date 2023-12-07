import React from 'react'
import { useState } from 'react'

const Form = () => {
  const [formData, setformData] = useState({fName:'', lName:'', city:'', gender:'' })
  const onChangeData = (property, value)=>{
    setformData(prevObj =>({
      ...prevObj,
      [property]:value
    }))

  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    alert(JSON.stringify(formData))

  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input onChange={(e)=>{onChangeData('fName', e.target.value)}} value={formData.fName} type="text" placeholder='First Name' />
        <input onChange={(e)=>{onChangeData('lName', e.target.value)}} value={formData.lName} type="text" placeholder='Last Name' />

        <select onChange={(e)=>{onChangeData('city', e.target.value)}} value={formData.city} name="" id="">
          <option value="">Choose City</option>
          <option value="Cumilla">Cumilla</option>
          <option value="Chandpur">Chandpur</option>
        </select>

        <input onChange={()=>{onChangeData('gender', 'Male')}} checked={formData.gender==='Male'} type="radio" name='gender' />Male
        <input onChange={()=>{onChangeData('gender', 'Female')}} checked={formData.gender==='Female'} type="radio" name='gender' />Female
        <br />

        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default Form