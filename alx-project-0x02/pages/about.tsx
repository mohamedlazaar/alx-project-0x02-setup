import React from 'react';
import Button from '@/components/common/Button';

function about() {
  return (
    <div className='flex flex-col gap-10 justify-center items-center'>
        <h1 className='text-2xl p-10'>About</h1>
        <div className='flex justify-center gap-6'>
          <Button label='button Sm' size='small' shape='rounded-sm' />
          <Button label='button Md' size='medium' shape='rounded-md' />
          <Button label='button Lg' size='large' shape='rounded-full' />
        </div>
    </div>
  )
}

export default about