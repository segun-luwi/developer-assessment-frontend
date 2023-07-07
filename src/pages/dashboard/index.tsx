import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { wrapper } from "@/store";
import { useRouter } from "next/router";
import { MainLayout } from "@/components/layout";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/hooks/reduxHooks";
import { User } from "@/types/authModel";

const Index: NextPageWithLayout = () => {
  const router = useRouter();
  const auth = useAppSelector((state) => state.auth);
  const user = auth.user as User;

  return (
    <>
      <Head>
        <title>Dev - Dashboard</title>
      </Head>
      <main className="flex flex-col w-full min-h-screen bg-[#271B43]">
        <div className="max-w-3xl mx-auto w-full mt-10">
          <h3 className="text-center text-2xl text-white mb-4">Dashboard</h3>

          <div className="bg-white rounded-md shadow-sm py-7 px-4">
            <div className="text-2xl font-bold text-slate-700">name: {user?.name}</div>
            <div className="text-2xl font-bold text-slate-700">email: {user?.email}</div>
          </div>
        </div>
      </main>
    </>
  );
};

Index.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

Index.getInitialProps = wrapper.getInitialPageProps(() => () => {});

export default Index;
