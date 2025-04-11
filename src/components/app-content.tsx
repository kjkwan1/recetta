import { ReactNode } from "react";

const AppContent = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <main className="flex-1 p-8">
            { children }
        </main>
    )
}

export default AppContent;