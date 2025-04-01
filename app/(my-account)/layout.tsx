import MyAccountNavigation from "@/components/modular/MyAccountNavigation";

export default function MyAccontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main className="grid grid-cols-3 gap-4  px-8">
          <div className="col-span-1 ">
            <MyAccountNavigation />
          </div>

          <div className="col-span-2">{children}</div>
        </main>
      </body>
    </html>
  );
}
