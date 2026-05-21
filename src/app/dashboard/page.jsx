import Image from "next/image";
import { Button } from "@heroui/react";

import Link from "next/link";
import EnrollmentCard from "@/components/EnrollmentCard";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const tokenData = await auth.api.getToken({
    headers: await headers(),
  });
  const token = tokenData?.token;
  if (!session || !session.user) {
    redirect("/login");
  }
  //   console.log(session);
  let enrollment = [];
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/enrollment/${session.user.id}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
        // cache: "no-store",
      },
    );

    if (res.ok) {
      enrollment = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch enrollment data:", error);
  }
  console.log("enrollment: ", enrollment);
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/4">
          <div className="p-6 bg-white border rounded-2xl shadow-sm">
            <Image
              src={
                session.user.image ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(session.user.name)}&background=random`
              }
              alt="profile"
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover"
            />
            <h2 className="text-xl font-bold mt-4">{session.user.name}</h2>
            <p className="text-sm text-slate-500 break-all">
              {session.user.email}
            </p>
          </div>
        </div>

        <div className="w-full md:w-3/4">
          <h1 className="text-3xl font-bold mb-6">My Enrolled Courses</h1>

          <div className="space-y-4">
            {enrollment.length === 0 ? (
              <NotFound />
            ) : (
              enrollment.map((course) => (
                <EnrollmentCard key={course._id} course={course} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const NotFound = () => {
  return (
    <div className="p-12 text-center bg-slate-50 border rounded-2xl">
      <p className="mb-4 text-slate-500 font-medium">
        You haven't enrolled in any courses yet.
      </p>
      <Link href="/courses">
        <Button color="primary" className="font-bold">
          Browse Courses
        </Button>
      </Link>
    </div>
  );
};
