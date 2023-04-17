import React from 'react'

const UserForm = () => {
  return (
    <form>
    <div>
  <label>
    Year of manufacturing
    <input type="number" name="year of manufacturing" />
  </label>
  </div>
  <input type="submit" value="Submit" />
</form>
  )
}

export default UserForm