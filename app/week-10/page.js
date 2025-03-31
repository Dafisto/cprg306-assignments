"use client";

import { useUserAuth } from "./_utils/auth-context";
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Page() {
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth(null);
const router = useRouter();

async function handleSignIn() {
    try
    {
        await gitHubSignIn();
        Router.push("week-10/shopping-list")
    
    } catch (error) {
        console.log(error);
    }
}


async function handleSignOut(){
    try 
    {
        await firebaseSignOut();
    
    } catch (error) {
        console.log(error);
    }
}

return (
    <div>
        {user ? (
            <div>
                <p>
                    Welcome, {user.displayName} ({user.email})
                </p>
                <button onClick={handleSignOut}>Sign Out</button>
                <Link href="week-10/shopping-list">Shopping List</Link>
            </div>
    )   :   (
        <button onClick={handleSignIn}>Sign In</button>
    )}
    </div>
    );
};