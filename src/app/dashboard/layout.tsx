import { LayoutView } from "@/modules/_global";


export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
        <LayoutView>
            {children}
        </LayoutView>
        </>
    );
}