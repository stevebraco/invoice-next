import FilterInvoice from "@/components/FilterInvoice";
import InvoiceList from "@/components/InvoiceList";
import Pagination from "@/components/Pagination";
import { getInvoices } from "@/lib/actions/invoices.action";
import { getUserById } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Home({ searchParams }: SearchParamsProps) {
  const { userId: clerkId } = auth();
  let mongoUser;

  if (clerkId) {
    mongoUser = await getUserById({ userId: clerkId });
  } else {
    return redirect("/sign-in");
  }

  const { invoices, isNext } = await getInvoices({
    userId: mongoUser?._id,
    filter: searchParams.filter,
    page: searchParams.page ? +searchParams.page : 1,
  });
  const result = JSON.parse(invoices);
  return (
    <div className="md:px-3 pb-16 px-3">
      <div className="flex-between pt-14 flex-wrap">
        <div>
          <h1 className="h1">Invoices</h1>
          <p className="text-12 text-light200 hidden sm:block">
            {result.length >= 1
              ? `There are ${result.length} total invoices`
              : "No invoices"}
          </p>
          <p className="text-12 text-light200  sm:hidden">
            {result.length >= 1 ? `${result.length} invoices` : "No invoices"}
          </p>
        </div>
        <FilterInvoice />
      </div>
      <InvoiceList
        invoices={result}
        mongoUserId={JSON.stringify(mongoUser?._id)}
      />
      <Pagination
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={isNext}
      />
    </div>
  );
}
