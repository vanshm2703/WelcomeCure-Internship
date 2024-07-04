import React from 'react'

const Contents=({data}) =>{
  console.log(data)
  return (
    <div className="mt-4 p-4 bg-gray-200 rounded">
    {data} {/* Display the data prop */}
  </div>
  )
}

export default Contents