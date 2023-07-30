/* eslint-disable @next/next/no-img-element */
import RootLayouts from "@/components/layouts/RootLayouts";
import React from "react";
import { useSession, signOut } from "next-auth/react";

const ProfilePage = () => {
  const { data: session } = useSession();
  console.log(session)
  return (
    <div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-12 mx-auto">

        <div className="flex flex-col items-center pb-10 justify-center mx-auto my-20">
          <img src={session?.user?.image} alt="" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {session?.user?.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {session?.user?.email}
          </span>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
ProfilePage.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
