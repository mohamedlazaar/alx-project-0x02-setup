import React from 'react'
import Link  from 'next/link'

type Props = {}

function Header({}: Props) {
  return (
    <div>
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto p-4">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                        <Link href="/home">Home</Link>
                        <Link href="/about">About</Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header