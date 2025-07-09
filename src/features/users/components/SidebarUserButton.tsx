import { auth } from "@clerk/nextjs/server"
import { Suspense } from "react"
import { SidebarUserButtonClient } from "./_SidebarUserButtonClient"

export function SidebarUserButton() {
    return (
        <Suspense>
            <SideBarUserSuspense />
        </Suspense>
    )
};

async function SideBarUserSuspense() {
    const { usesrId } = await auth()
    
    return <SidebarUserButtonClient user={{
        email: "test@.com",
        name: "testuser",
        imageUrl: ""
    }}
    />
}
