import React from "react";
import AdminSideBar from "../admin-view/sidebar";
import AdminHeader from "../admin-view/header";
import { Outlet } from "react-router-dom";
function AdminLayout(){
    return (
        <div className="flex min-h-screen w-full">
            {/* admin sidebar */}
            <AdminSideBar />
            <div className="flex flex-1 flex-col">
                {/* admin header */}
                <AdminHeader />
                <main className="flex dlex bg-muted/40 p-4 md:p-6">
                <Outlet />
                </main>
            </div>
        </div>
    );
}

export default AdminLayout;