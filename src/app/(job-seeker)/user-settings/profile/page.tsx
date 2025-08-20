"use client"

import { UserProfile } from "@clerk/nextjs"

export default function ProfilePage() {
  return (
    // Main container that fills the screen and centers its child.
    // Added padding for better spacing on small screens.
    <div className="flex min-h-screen w-full items-center justify-center bg-muted/40 p-4">
      <UserProfile
        path="/user-settings/profile"
        routing="path"
        appearance={{
          elements: {
            // Control the component's size directly here.
            rootBox: "w-full max-w-3xl",
            // You can style other parts too!
            card: "shadow-lg", 
          },
        }}
      />
    </div>
  )
}