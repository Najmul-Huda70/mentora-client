"use-client";
import Image from "next/image";
import { Chip } from "@heroui/react";
import CancelEnrollButton from "./CancelEnrollButton";

const EnrollmentCard = ({ course }) => {
  console.log("course enrollment card: ", course);
  const { thumbnail, courseTitle, enrolledAt, _id } = course;
  return (
    <div className="flex gap-4 p-4 bg-white border rounded-xl">
      <Image
        src={thumbnail}
        alt="course"
        width={120}
        height={90}
        className="rounded-lg"
      />

      <div className="flex flex-col grow justify-between">
        <div>
          <h3 className="font-bold">{courseTitle}</h3>
          <p className="text-sm text-slate-500">
            Enrolled On: {new Date(enrolledAt).toDateString()}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <Chip color="success" size="sm">
            Active
          </Chip>

          <CancelEnrollButton id={_id} />
        </div>
      </div>
    </div>
  );
};

export default EnrollmentCard;
