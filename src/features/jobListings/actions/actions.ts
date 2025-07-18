"use server"

import {z} from "zod"
import { jobListingAiSearchSchema } from "./schemas"
import { getCurrentOrganization } from "@/services/clerk/lib/getCurrentAuth"
import { insertJobListing } from "../db/jobListings"
import { redirect } from "next/navigation"

export async function createJobListings(unsafeData: z.infer<typeof
    jobListingAiSearchSchema>) {
    
    const { orgId } = await getCurrentOrganization()
    
    if (orgId == null) {
        return {
            error: true,
            message: "you don't have permission to create job lsiting",

        }
    }
    const { success, data } = jobListingAiSearchSchema.safeParse(unsafeData)
    if (!success) {
        return {
            error: true,
            message: "there was an error creating job listing",
        }
    }

   
  const jobListing = await insertJobListing({
    ...data,
    organizationId: orgId,
    status: "draft",
  })
    redirect(`/employer/job-listings/${jobListing.id}`)
}