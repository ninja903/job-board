

"use server";

import { auth, currentUser } from "@clerk/nextjs/server";


export async function hasAiCredits(): Promise<boolean> {

  const { userId } = await auth();

  if (!userId) {
    return false; 
  }


  const user = await currentUser();

  if (!user) {
    return false;
  }


  const credits = user.publicMetadata.aiCredits as number | undefined;
  return (credits ?? 0) > 0;


}