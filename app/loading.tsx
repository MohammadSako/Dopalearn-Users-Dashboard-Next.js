export default function Loading() {
  return (
    <div className="container relative flex-col items-center justify-center md:grid lg:max-w-none lg:px-0 my-10">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h2 className="text-3xl">Loading...</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
