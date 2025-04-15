import GuestLayout from "./GuestLayout";
import AuthenticatedLayout from "./AuthenticatedLayout";
import { usePage } from "@inertiajs/react";


export default function MasterLayout({ header, children }) {
    const page = usePage();

    if (page.props.auth.user != null) {
        return (
            <>
                <AuthenticatedLayout>
                    <main>{children}</main>
                </AuthenticatedLayout>
            </>
        )
    } else {
        return (
            <>
                <GuestLayout>
                    <main>{children}</main>
                </GuestLayout>
            </>
        )
    }
}
