"use client";

import { Invoice } from "@/types";
import React, { createContext, useContext, useState, useEffect } from "react";

interface ActiveFormType {
  activeForm: {
    active?: boolean;
    formValue?: Invoice | {};
  };
  setActiveForm: React.Dispatch<
    React.SetStateAction<{
      active: boolean;
      formValue: Invoice | {};
    }>
  >;
}

const ActiveForm = createContext<ActiveFormType | undefined>(undefined);

export function ActiveFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeForm, setActiveForm] = useState({
    active: false,
    formValue: {},
  });

  return (
    <ActiveForm.Provider value={{ activeForm, setActiveForm }}>
      {children}
    </ActiveForm.Provider>
  );
}

export function useActiveForm() {
  const context = useContext(ActiveForm);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
