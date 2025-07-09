import { EventSchemas, Inngest} from "inngest"

type Events = {
    "clerk/user.creaded":{}
}

export const inngest = new Inngest({
    id: "Ai-Job-Board",
    schemas: new EventSchemas().fromRecord<Events>(),
});