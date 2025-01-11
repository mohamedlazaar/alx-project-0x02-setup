import React from 'react'
import Card from '@/components/common/Card'


function home() {
  return (
    <div className='w-full h-full'>
        <h1>Home</h1>
        <div className="flex justify-between items-center w-1/2 mx-auto">
          <Card title="Home 1" description='this is home number 1'/>  
          <Card title="Home 2" description='this is home number 2'/>  
          <Card title="Home 3" description='this is home number 3'/>  
          <Card title="Home 4" description='this is home number 4'/>  
        </div>
        
    </div>
  )
}

export default home