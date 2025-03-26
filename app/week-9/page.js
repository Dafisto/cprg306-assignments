"use client";
import { useUserAuth } from "./_utils/auth-context";
import React from 'react';

export default function Page() {
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth(null);

async function handleSignIn() {
    try
    {
        await gitHubSignIn();
    
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
            </div>
    )   :   (
        <button onClick={handleSignIn}>Sign In</button>
    )}
    </div>
    );
};