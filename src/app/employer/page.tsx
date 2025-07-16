import { db } from "@/drizzle/db";
import { JobListingTable } from "@/drizzle/schema";
import {  getJobListingOrganizationTag } from "@/features/jobListings/db/cache/jobListings";
import { getCurrentOrganization } from "@/services/clerk/lib/getCurrentAuth";
import { desc, eq } from "drizzle-orm";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";
import { redirect } from "next/navigation";
import { Suspense } from "react";


export default function EmployerHomePage() {
    return (
        <Suspense>
            <SuspendedPage />
       </Suspense>
    )
};

async function SuspendedPage() {

    const { orgId } = await getCurrentOrganization()
    if (orgId == null) return null;
    
    const jobListings = await getMostRecentJobListings(orgId)

    if (jobListings == null) {
        redirect("/employer/job-listings/new")
    } else {
        redirect(`/employer/job-listings/${jobListings.id}`)
    }
}

async function getMostRecentJobListings(orgId: string) {
    "use cache"

    cacheTag(getJobListingOrganizationTag(orgId))

    return db.query.JobListingTable.findFirst({
        where: eq(JobListingTable.organizationId, orgId),
        orderBy: desc(JobListingTable.createdAt),
        columns: {id: true}
    })
}