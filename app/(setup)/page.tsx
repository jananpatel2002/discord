import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

const SetupPage = async () => {
  const profile = await initialProfile();
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/server/${server.id}`);
  }
  
  return <div>Create A Server</div>;
};

export default SetupPage;
