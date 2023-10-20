import { LayoutViewFront } from "@/modules/_global/front";

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <LayoutViewFront>
                {children}
            </LayoutViewFront>
        </>
    );
}