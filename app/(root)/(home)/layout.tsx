import React from "react";
import { Toaster } from "@/components/ui/toaster";
import NavLeft from "@/components/NavLeft";
import { auth } from "@clerk/nextjs";
import { getUserById } from "@/lib/actions/user.action";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const { userId: clerkId } = auth();
  let mongoUser;
  if (clerkId) {
    mongoUser = await getUserById({ userId: clerkId });
  }
  return (
    <main className="h-full">
      <NavLeft userId={JSON.stringify(mongoUser?._id)}>
        <div className="mx-auto w-fullmx-auto w-full max-w-2xl pb-20 px-3">
          {children}
        </div>
        <Toaster />
      </NavLeft>
    </main>
  );
};

export default layout;
