import Heading from "@/components/heading";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Heading heading="Dashboard" subheading="Welcome back!"/>
            <div className="flex flex-col md:flex-row gap-4 mt-4 w-full h-full">
                {children}
            </div>
        </>
    );
}