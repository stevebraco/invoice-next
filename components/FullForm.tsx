import { useActiveForm } from "@/context/ActiveFormProvider";

import React from "react";
import { useParams, usePathname } from "next/navigation";
import {
  useForm,
  useFieldArray,
  useWatch,
  Control,
  FormProvider,
} from "react-hook-form";

import { Button } from "@/components/ui/button";

import TableForm from "./Form/TableForm";
import BillToForm from "./Form/BillToForm";
import BillFromForm from "./Form/BillFromForm";
import useHookForm from "@/hooks/useHookForm";
import ButtonsForm from "./ButtonsForm";
import GoBack from "./GoBack";

type Params = {
  id: string;
};

const FullForm = () => {
  const params = useParams<Params>();
  const { activeForm } = useActiveForm();
  const pathname = usePathname();

  const {
    onSubmit,
    handleDraft,
    handleDiscard,
    methods,
    date,
    setDate,
    handleCancel,
  } = useHookForm(params.id);

  const {
    control,
    register,
    getValues,
    watch,
    setValue,
    formState: { errors },
  } = methods;

  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  const formValues = useWatch({
    name: "items",
    control,
  });

  return (
    <div className="relative z-30">
      <div
        className={`absolute md:top-0 bottom-0 bg-primary-100 dark:bg-[#141625] md:w-[615px] md:z-[-1] rounded-r-xl overflow-auto md:pt-14 sm:pt-14 z-100 max-w-[580px] w-full top-0 h-screen ${
          activeForm.active
            ? "animate-moveRight md:left-[104px] transition-transform duration-500 ease-in-out"
            : "transition-transform duration-500 ease-in-out translate-x-[-100%]"
        } `}
      >
        <GoBack link={pathname} classNames="pt-6 mb-4 px-8 sm:hidden" />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="pb-10 px-14">
              <h2 className="text-2xl font-bold dark:text-primary-100">
                {params.id ? (
                  <>
                    Edit <span className="text-primary400"> #</span>
                    {params.id}{" "}
                  </>
                ) : (
                  "New Invoice"
                )}
              </h2>
              <BillToForm
                control={control}
                errors={errors}
                register={register}
              />
              <BillFromForm
                control={control}
                errors={errors}
                register={register}
                date={date}
                setDate={setDate}
                getValues={getValues}
              />
              <TableForm
                fields={fields}
                control={control}
                formValues={formValues}
                remove={remove}
                watch={watch}
                setValue={setValue}
                register={register}
              />

              <Button
                type="button"
                className="w-full btns btn-light rounded-full mt-4"
                onClick={() =>
                  append({
                    name: "",
                    quantity: 0,
                    price: 0,
                    total: 0,
                  })
                }
              >
                + Add New Item
              </Button>
            </div>

            <ButtonsForm
              id={params.id}
              handleCancel={handleCancel}
              handleDiscard={handleDiscard}
              handleDraft={handleDraft}
            />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default FullForm;
