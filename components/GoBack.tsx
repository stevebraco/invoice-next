"use client";
import React from "react";
import { useActiveForm } from "@/context/ActiveFormProvider";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const GoBack = ({
  classNames = "",
  link,
}: {
  classNames?: string;
  link: string;
}) => {
  const { setActiveForm } = useActiveForm();
  const router = useRouter();

  return (
    <div className={`${classNames} mt-2 pt-14 flex items-baseline gap-1`}>
      <Image
        src="/assets/icon-arrow-left.svg"
        width={8}
        height={4}
        alt="arrow left"
      />
      <Button
        className="h3-12"
        onClick={() => {
          router.push(link);
          setActiveForm((prevState) => ({
            ...prevState,
            active: false,
            formValue: {},
          }));
        }}
      >
        Go back
      </Button>
    </div>
  );
};

export default GoBack;
