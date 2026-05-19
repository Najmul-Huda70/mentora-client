"use client";

import { Button } from "@heroui/react";
import Image from "next/image";

const GoogleLoginButton = () => {


    return (
        <div className="space-y-4">
            <Button
                variant="bordered"
                className="w-full h-12 font-bold rounded-2xl border-slate-200 hover:bg-slate-50 transition-colors gap-3"
            >
                <Image
                    width={20}
                    height={20}
                    src="https://www.google.com/favicon.ico"
                    className="w-5 h-5"
                    alt="Google"
                />
                Sign in with Google
            </Button>
        </div>
    );
};

export default GoogleLoginButton;