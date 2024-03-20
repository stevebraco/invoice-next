"use client";
import React from "react";
import { Button } from "./ui/button";
import useHookForm from "@/hooks/useHookForm";

interface Props {
  id?: string | undefined;
  handleDraft: () => void;
  handleDiscard: () => void;
  handleCancel: () => Promise<void>;
}

const ButtonsForm = ({
  id,
  handleDraft,
  handleDiscard,
  handleCancel,
}: Props) => {
  return (
    <>
      {id ? (
        <div className="flex items-center justify-end gap-2 bg-primary-100 dark:bg-[#141625] sticky md:bottom-0 bottom-[70px] left-0 right-0 px-8 h-[110px] shadow-light-100 dark:shadow-dark-100 ">
          <Button
            className="btn btn-light rounded-full"
            size="lg"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button className="btn btn-primary" size="lg" type="submit">
            Save Changes
          </Button>
        </div>
      ) : (
        <div className="flex justify-between items-center  bg-primary-100 dark:bg-[#141625] sticky md:bottom-0 bottom-[70px] left-0 right-0 px-8 h-[110px] shadow-light-100 dark:shadow-dark-100 ">
          <Button
            className="btn btn-light rounded-full"
            size="lg"
            type="button"
            onClick={handleDiscard}
          >
            Discard
          </Button>
          <div className="space-x-3">
            <Button
              type="button"
              className="btn-dark"
              onClick={handleDraft}
              size="lg"
            >
              Save as Draft
            </Button>
            <Button className="btn btn-primary" size="lg" type="submit">
              Save & Send
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonsForm;
