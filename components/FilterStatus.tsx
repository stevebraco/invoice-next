import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { filtersStatus } from "@/constants/filters";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";

const FilterStatus = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const paramFilter = searchParams.get("filter");

  const handleUpdateParams = (value: string) => {
    if (value === "all") {
      const newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
      router.push(newUrl, { scroll: false });

      return;
    }
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "filter",
      value: value,
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <div>
      <Select
        onValueChange={handleUpdateParams}
        defaultValue={paramFilter || undefined}
      >
        <SelectTrigger className="hidden sm:inline-flex w-[150px] border-none focus:ring-transparent focus:ring-[#F8F8FB] dark:text-primary-100 ">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectTrigger className=" sm:hidden w-[75px] border-none focus:ring-transparent focus:ring-[#F8F8FB] dark:text-primary-100 ">
          <SelectValue placeholder="Filter" />
        </SelectTrigger>
        <SelectContent className="border-none bg-primary-100 dark:bg-[#252945] dark:text-primary-100">
          <SelectGroup>
            {filtersStatus.map((filter) => (
              <SelectItem
                className="cursor-pointer"
                key={filter.value}
                value={filter.value}
              >
                {filter.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterStatus;
