export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-brandBg border-t-transparent" />
        <p className="text-gray-600 text-sm">Loading, please wait...</p>
      </div>
    </div>
  );
}
