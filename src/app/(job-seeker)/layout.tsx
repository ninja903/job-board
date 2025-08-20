import { AppSidebar } from "@/components/sidebar/AppSidebar"
import { SidebarNavMenuGroup } from "@/components/sidebar/SidebarNavMenuGroup"
import { SidebarUserButton } from "@/features/users/components/SidebarUserButton"
import {
  BrainCircuitIcon,
  ClipboardListIcon,
  LayoutDashboard,
  LogInIcon,
  SettingsIcon,
  UserIcon, // ✅ added
} from "lucide-react"
import { ReactNode } from "react"

export default function JobSeekerLayout({
  children,
  sidebar,
}: {
  children: ReactNode
  sidebar: ReactNode
}) {
  return (
    <AppSidebar
      content={
        <>
          {sidebar}
          <SidebarNavMenuGroup
            className="mt-auto"
            items={[
              { href: "/", icon: <ClipboardListIcon />, label: "Job Board" },
              { href: "/ai-search", icon: <BrainCircuitIcon />, label: "AI Search" },

              // signed in items
              {
                href: "/user-settings/profile",
                icon: <UserIcon />,
                label: "Profile",
                authStatus: "signedIn",
              },
              {
                href: "/user-settings/notifications",
                icon: <SettingsIcon />,
                label: "Settings",
                authStatus: "signedIn",
              },
              {
                href: "/employer",
                icon: <LayoutDashboard />,
                label: "Employer Dashboard",
                authStatus: "signedIn",
              },

              // signed out item
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
      footerButton={<SidebarUserButton />}
    >
      {children}
    </AppSidebar>
  );
}
