import React from 'react';
import LoginPage from './Login';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const page = () => {

    const token:any = cookies().get("token")?.value
    
    if (token) redirect("/admin/dashboard")
    

    return (
        <LoginPage/>
    );
};

export default page;