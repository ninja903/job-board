import { Suspense } from "react"
import { SidebarUserButtonClient } from "./_SidebarUserButtonClient"
import { getCurrentUser } from "@/services/clerk/lib/getCurrentAuth"
import { SignOutButton } from "@/services/clerk/components/AuthButtons"
import {  SidebarMenuButton } from "@/components/ui/sidebar"
import { LogInIcon } from "lucide-react"

export function SidebarUserButton() {
    return (
        <Suspense>
            <SideBarUserSuspense />
        </Suspense>
    )
};

async function SideBarUserSuspense() {
    const { user } = await getCurrentUser({ allData: true })
    
    if (user == null) {
        return (
            <SignOutButton>
                <SidebarMenuButton>
                    <LogInIcon />
                    <span>Log Out</span>
                </SidebarMenuButton>
            </SignOutButton>
        )
    };

    return <SidebarUserButtonClient user={user}
    />
}
