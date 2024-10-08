import { Skeleton } from "@/components/ui/skeleton";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <Skeleton className="h-5 w-5 rounded-md bg-gray-200" />
        <Skeleton className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <Skeleton className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      {/* <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" /> */}
      <div className="rounded-xl bg-gray-100 p-4">
        <div className="mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4" />
        <div className="flex items-center pb-2 pt-6">
          <Skeleton className="h-5 w-5 rounded-full bg-gray-200" />
          <Skeleton className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function InvoiceSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <Skeleton className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
        <div className="min-w-0">
          <Skeleton className="h-5 w-40 rounded-md bg-gray-200" />
          <Skeleton className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
        </div>
      </div>
      <Skeleton className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <Skeleton className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <div className="flex items-center pb-2 pt-6">
            <Skeleton className="h-5 w-5 rounded-full bg-gray-200" />
            <Skeleton className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function UploadSkeleton() {
  return (
    <div className="flex justify-center">
      <div className="md:border-2 p-10 h-auto w-full grow  bg-white md:rounded-lg ">
        <div className="grid justify-items-center space-y-6 border-gray-300 rounded-lg bg-gray-100 py-10">
          <Skeleton className="w-16 h-16 rounded-md bg-gray-200" />
          <Skeleton className="w-52 h-6 bg-gray-200" />
          <Skeleton className="w-52 h-6 bg-gray-200" />
        </div>
        <div className="md:flex md:flex-row gap-2 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 "></div>
        </div>
        <Skeleton className=" h-6 bg-gray-200 mt-6 rounded-md" />
      </div>
    </div>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Customer Name and Image */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <Skeleton className="h-8 w-8 rounded-full bg-gray-100" />
          <Skeleton className="h-6 w-24 rounded bg-gray-100" />
        </div>
      </td>
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <Skeleton className="h-[38px] w-[38px] rounded bg-gray-100" />
          <Skeleton className="h-[38px] w-[38px] rounded bg-gray-100" />
          <Skeleton className="h-[38px] w-[38px] rounded bg-gray-100" />
        </div>
      </td>
      <td className="whitespace-nowrap px-8 py-3">
        <Skeleton className="h-6 w-32 rounded bg-gray-100" />
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <Skeleton className="h-6 w-16 rounded bg-gray-100" />
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <Skeleton className="h-6 w-16 rounded bg-gray-100" />
      </td>
    </tr>
  );
}

export function InvoicesMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <Skeleton className="mr-2 h-8 w-8 rounded-full bg-gray-100" />
          <Skeleton className="h-6 w-16 rounded bg-gray-100" />
        </div>
        <Skeleton className="h-6 w-16 rounded bg-gray-100" />
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <Skeleton className="h-6 w-16 rounded bg-gray-100" />
          <Skeleton className="mt-2 h-6 w-24 rounded bg-gray-100" />
        </div>
        <div className="flex justify-end gap-2">
          <Skeleton className="h-10 w-10 rounded bg-gray-100" />
          <Skeleton className="h-10 w-10 rounded bg-gray-100" />
        </div>
      </div>
    </div>
  );
}

export function InvoicesTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// My page defualt Skeletons

export default function DashboardSkeleton() {
  return (
    <div className="flex-grow md:overflow-y-auto h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-4">
        <div className="mx-auto max-w-7xl sm:px-6 ">
          <div className="flex lg:flex-row md:flex-col flex-col-reverse gap-4">
            <div className="basis-4/6 space-y-4">
              <KeymetricsSkeleton />
              <KeymetricsSkeleton />
            </div>
            <div className="basis-2/6 space-y-4">
              <AccountSkeleton />
              <RecentPostsSkeleton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomeSkeleton() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64 p-4 space-y-8">
          <Skeleton className="h-16 bg-gray-200" />
          <Skeleton className="h-8 w-28 bg-gray-200" />
          <Skeleton className="h-8 w-28 bg-gray-200" />
          <Skeleton className="h-8 w-36 bg-gray-200" />
          <Skeleton className="h-8 w-32 bg-gray-200" />
          <Skeleton className="h-8 w-32 bg-gray-200" />
          <Skeleton className="h-8 w-32 bg-gray-200" />
        </div>
        <DashboardSkeleton />
      </div>
    </div>
  );
}

export function KeymetricsSkeleton() {
  return (
    <div className=" h-96 p-4 rounded-lg shadow-lg bg-white space-y-6">
      <Skeleton className="h-12 rounded-xl bg-gray-100 p-4" />
      <Skeleton className="h-64 bg-gray-200 rounded-lg" />
    </div>
  );
}

export function AccountSkeleton() {
  return (
    <div className=" h-32 p-4 rounded-lg shadow-lg bg-white space-y-6">
      <Skeleton className="h-6 rounded-md bg-gray-100" />
      <Skeleton className="h-12 bg-gray-200 rounded-lg" />
    </div>
  );
}

export function RecentPostsSkeleton() {
  return (
    <div className=" h-96 p-4 rounded-lg shadow-lg bg-white space-y-6">
      <Skeleton className="h-12 rounded-md bg-gray-100" />
      <Skeleton className="h-64 bg-gray-200 rounded-lg" />
    </div>
  );
}
export function PostsSkeleton() {
  return (
    <div className=" p-4 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col space-y-6">
        <Skeleton className="h-10 rounded-md bg-gray-100" />
        <table className="hidden min-w-full text-gray-900 md:table">
          <thead className="rounded-lg text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                Sort by
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                All vidoes views
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                All comments
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                All likes
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                All privacy
              </th>
              <th scope="col" className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function CommentsSkeleton() {
  return (
    <div className=" p-4 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col space-y-6">
        <Skeleton className="h-10 rounded-md bg-gray-100" />
        <table className="hidden min-w-full text-gray-900 md:table">
          <thead className="rounded-lg text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                All comments
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Posted by all
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                All follower counts
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Jan 20, 2022 - Sep 15 2022
              </th>

              <th scope="col" className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function FeedbackSkeleton() {
  return (
    <div className="container p-4 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row">
          <div className="lg:w-[300px] w-full">
            <Skeleton className="h-10 rounded-md bg-gray-100" />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="lg:w-[200px] w-full">
            <Skeleton className="h-6 rounded-md bg-gray-100" />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="lg:w-[500px] w-full">
            <Skeleton className="h-20 rounded-md bg-gray-100" />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="lg:w-[150px] w-full">
            <Skeleton className="h-6 rounded-md bg-gray-100" />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="lg:w-[500px] w-full">
            <Skeleton className="h-10 rounded-md bg-gray-100" />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="lg:w-[500px] w-full">
            <Skeleton className="h-10 rounded-md bg-gray-100" />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="lg:w-[150px] w-full">
            <Skeleton className="h-6 rounded-md bg-gray-100" />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="lg:w-[300px] w-full">
            <Skeleton className="h-6 rounded-md bg-gray-100" />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="lg:w-[500px] w-full">
            <Skeleton className="h-40 rounded-md bg-gray-100" />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="lg:w-[150px] w-full">
            <Skeleton className="h-6 rounded-md bg-gray-100" />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="lg:w-[500px] w-full">
            <Skeleton className="h-10 rounded-md bg-gray-100" />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="lg:w-[500px] w-full">
            <Skeleton className="h-10 rounded-md bg-gray-100" />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="lg:w-[150px] w-full">
            <Skeleton className="h-10 rounded-md bg-gray-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
