'use client'
import { useSearchParams } from 'next/navigation';
import React, { FC } from 'react'



const User: FC = () => {
    const searchParams = useSearchParams();
    const email = searchParams.get("email");
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold text-gray-800">
                Welcome, {email ? email : "User"}!
            </h1>
        </div>
    )
}

export default User