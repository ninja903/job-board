
import { AppSidebar } from "@/components/sidebar/AppSidebar"
import { SidebarNavMenuGroup } from "@/components/sidebar/SidebarNavMenuGroup"
import { SidebarGroup, SidebarGroupAction, SidebarGroupLabel } from "@/components/ui/sidebar"
import { SidebarOrganizationButton } from "@/features/organizations/components/SidebarOrganizationButton"
import { getCurrentOrganization } from "@/services/clerk/lib/getCurrentAuth"
import {
  ClipboardListIcon,
  LogInIcon,
  PlusIcon,
} from "lucide-react"
import { redirect } from "next/navigation"
import Link from "next/link"
import { ReactNode, Suspense } from "react"


export default function EmployerLayout({ children }: { children: ReactNode }) {
    return (
      <Suspense>
        <LayoutSuspense>{children}</LayoutSuspense>
      </Suspense>
    )
  }

async function LayoutSuspense({ children, }: { children: ReactNode }) {
    const { orgId } = await getCurrentOrganization()
    if(orgId == null) return redirect("/organizations/select")
    return (
        <AppSidebar
            content={
                <>
                    <SidebarGroup>
                        <SidebarGroupLabel>Job Listings</SidebarGroupLabel>
                        <SidebarGroupAction title="Add Job Listings" asChild>
                            <Link href="/employer/job-listings/new">
                            <PlusIcon /><span className="sr-only">Add Job Listings</span>
                            </Link>
                        </SidebarGroupAction>
                    </SidebarGroup>
                    <SidebarNavMenuGroup
                        className="mt-auto"
                        items={[
                            { href: "/", icon: <ClipboardListIcon />, label: "Job Board" },
                            {
                                href: "/sign-in",
                                icon: <LogInIcon />,
                                label: "Sign In",
                                authStatus: "signedOut",
                            },
                        ]}
                    />
                </>
            }
            footerButton={<SidebarOrganizationButton />}
        >
            {children}
        </AppSidebar>
    );
};

