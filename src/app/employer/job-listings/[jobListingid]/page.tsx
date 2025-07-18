import { Badge } from "@/components/ui/badge";
import { db } from "@/drizzle/db";
import { JobListingTable } from "@/drizzle/schema";
import { JobListingBadges } from "@/features/jobListings/components/JobListingBadges";
import { getJobListingIdTag } from "@/features/jobListings/db/cache/jobListings";
import {  formatJobListingStatus } from "@/features/jobListings/lib/formatters";
import { getCurrentOrganization } from "@/services/clerk/lib/getCurrentAuth";
import { and, eq } from "drizzle-orm";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";
import { Suspense } from "react";


type Props = { 
    params: Promise<{jobListingId: string}>
}

export default function JobListingPage() { 
    return (
        <Suspense>
            <SuspendedPage {...props} />
        </Suspense>
    );
}

async function SuspendedPage({ params }: Props) {
    const { orgId } = await getCurrentOrganization()
    if (orgId == null) return null;

    const { jobListingId } = await params;
    const jobListing = await getjobListing(jobListingId, orgId)
    if (jobListing == null) return notFound()   
    
    return (
        <div className="space-y-6 max-6xl max-auto p-4 @container">
            <div className="flexitems-center justify-between gap-4 @max-4xl:flex-cols @max-4xl:items-start">
                <div><h1 className="text-2xl font-bold tracking-tight">
                    {jobListing.title}
                </h1>
                    <div className="flex flex-wrap gpa-2 mt-2">
                        <Badge>{formatJobListingStatus(jobListing.status)}</Badge>
                        <JobListingBadges jobListing={jobListing} />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );  
}

async function getJobListing(id: string, orgId: string) {
    "use cache"
    cacheTag(getJobListingIdTag(id))
  
    return db.query.JobListingTable.findFirst({
        where: and(
            eq(JobListingTable.id, id),
            eq(JobListingTable.organizationId, orgId)
        ),
    });
  }
