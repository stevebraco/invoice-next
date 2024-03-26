"use client";
import { useActiveForm } from "@/context/ActiveFormProvider";
import React, { useEffect } from "react";
import LeftSideBar from "@/components/LeftSideBar";

const NavLeft = ({
  userId,
  children,
}: {
  userId: string;
  children: React.ReactNode;
}) => {
  const { activeForm, setActiveForm } = useActiveForm();

  useEffect(() => {
    if (userId) {
      setActiveForm((prev) => ({ ...prev, userId: JSON.parse(userId) }));
    }
  }, []);

  return (
    <div
      className={`flex flex-col md:flex-row background-main relative h-full  ${
        activeForm.active ? "overflow-hidden" : ""
      }  `}
    >
      <LeftSideBar />

      {children}
    </div>
  );
};

export default NavLeft;
