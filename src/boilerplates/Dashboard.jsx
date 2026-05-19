
import Image from 'next/image';
import { Button } from '@heroui/react';

import Link from 'next/link';
import EnrollmentCard from '@/components/EnrollmentCard';

export default async function Dashboard() {


    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Profile */}
                <div className="w-full md:w-1/4">
                    <div className="p-6 bg-white border rounded-2xl">
                        <Image
                            src="https://ui-avatars.com/api/?name=Test+Instructor&background=random"
                            alt="profile"
                            width={96}
                            height={96}
                            className="w-24 h-24 rounded-full"
                        />

                        <h2 className="text-xl font-bold mt-4">
                            Test Instructor
                        </h2>
                        <p className="text-sm text-slate-500">
                            test@gmail.com
                        </p>
                    </div>
                </div>

                {/* Enrollments */}
                <div className="w-full md:w-3/4">
                    <h1 className="text-3xl font-bold mb-6">My Enrolled Courses</h1>

                    <div className="space-y-4">
                        <EnrollmentCard />


                    </div>

                </div>
            </div>
        </div >
    );
}


const NotFound = () => {
    return (
        <div className="p-12 text-center bg-slate-50 border rounded-2xl">
            <p className="mb-4">No courses yet</p>

            <Link href="/courses">
                <Button>Browse Courses</Button>
            </Link>
        </div>
    );
}