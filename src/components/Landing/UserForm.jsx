import React from 'react'

const UserForm = () => {
  return (
    <form>
    <div>
    <label>
    Owner Name:
  </label>
  <input type ="text" name = "Owner Name"/>
 </div>
 <div>
  <label>
    Car Model Name:
  </label>
  <input type = "text" name = "Car Model Name "/>
 </div>
 <div>
 <label>
  Car vehicle Number:
 </label>
 <input type = "number" name = "Car Vehicle Number"/>
 </div>
    <div>
  <label>
    Year of manufacturing:
  </label>
  <input type="number" name="year of manufacturing" />
  </div>
  <div>
    <label>
      Ex showroom price:
    </label>
    <input type = "number" name = "Ex showroom price"/>
  </div>
  <input type="submit" value="Submit" />
</form>
  )
}

export default UserForm