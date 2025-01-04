import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const Header = () => {
  return (
    <>
        <SignedOut>
            <SignInButton>Sign In</SignInButton>
        </SignedOut>
        <SignedIn>
            <UserButton/>
        </SignedIn>
    </>
  )
}

export default Header