import { inngest } from "../client";

export const clerkCreateUser = inngest.
    createFunction({ id: 'clerk/create-db-user' }, {
        { id:}, {}
    })