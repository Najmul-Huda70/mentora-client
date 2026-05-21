"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const CancelEnrollButton = ({ id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCancelEnrollment = async (e) => {
    e.preventDefault();
    const { data: jwtData } = await authClient.token();
    const token = jwtData?.token;
    if (!token) {
      toast.error("authentication falid. Cancellation not add.");
      return;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/enrollment/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const data = await res.json();
    if (!data) {
      toast.error("Something went wrong");
      return;
    } else {
      toast.success("Enrollment Cancelled Successfully!");
    }
    router.push("/dashboard");
  };

  return (
    <AlertDialog isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button
        color="danger"
        variant="light"
        size="sm"
        onClick={() => setIsOpen(true)}
      >
        Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger onClick={() => setIsOpen(false)} />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Confirm Cancellation</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p className="text-slate-600">
                Are you sure you want to cancel this enrollment? This action
                cannot be undone and you will lose access to the course
                materials.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button
                variant="tertiary"
                disabled={loading}
                onClick={() => setIsOpen(false)}
              >
                Keep Enrollment
              </Button>
              <Button
                color="danger"
                className="font-bold"
                onClick={handleCancelEnrollment}
                isLoading={loading}
              >
                Yes, Cancel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default CancelEnrollButton;
