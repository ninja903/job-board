"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobListingSchema } from "../action/schemas";

import z from "zod";

export function JobListingform() {
    const form = useForm({
        resolver: zodResolver(jobListingSchema),
        defaultValues: {
            title: "",
            description: "",
            stateAbbreviation: null,
            city: null,
            wage: null,
            wageInterval: "yearly",
            experienceLevel: "junior",
            type: "full-time",
            locationRequirement: "in-office"

        }
    })
    function onsubmit(data:z.infer<typeof jobListingSchema>) {
        
    }
    // return <Form{...form}>
    //     <form onSubmit={form.handleSubmit(onsubmit)}
    // </Form>

}