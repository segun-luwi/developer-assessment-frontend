import { MainLayout } from "@/components/layout";
import { useLoginMutation } from "@/services/authentication";
import { wrapper } from "@/store";
import { setCredentials } from "@/store/slice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import cn from "classnames";

const Index: NextPageWithLayout = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [onLogin] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (data: any) => {
    try {
      const result = await onLogin(data).unwrap();
      console.log(result);
      const response = { token: result.access_token, user: result };

      dispatch(setCredentials(response));
      router.replace("/dashboard");
    } catch (error: any) {
      const message = error?.data?.message || "Oops error occured please try again";
      toast(message, { hideProgressBar: true, autoClose: 2000, type: "error" });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#271B43]">
      <div
        className="bg-no-repeat bg-cover flex min-h-screen w-full items-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}>
        <div className="w-full max-w-4xl mx-auto grid md:grid-cols-11 gap-x-10">
          {/* left column text */}
          <div className="col-span-6 pt-8">
            <h3 className="text-[#ebe5f7] text-4xl font-bold leading-snug mb-5 pr-7">
              Introducing Global payroll you can run in your sleep
            </h3>
            <p className="text-[#ebe5f7] leading-relaxed text-base font-medium pr-12">
              Pay team members hired through your own entities in 90+ plus countries wwith Global
              payroll
            </p>

            <Link
              href="/about"
              className="flex items-center gap-x-2 text-[#ebe5f7] text-[18px] font-medium mt-7">
              <span>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </Link>
          </div>

          {/* right column card */}
          <div className="col-span-5">
            <div className="bg-white rounded-md shadow-sm px-4 sm:px-7 py-10">
              <h3 className="text-center text-black text-2xl font-semibold mb-4">Login</h3>
              <div className="border rounded-md py-2.5 px-3 flex items-center justify-center gap-x-3 mb-2.5">
                <Image src="/images/google.png" height={22} width={22} alt="G" />
                <span className="text-blue-400 text-sm">Sign up using Google</span>
              </div>

              <div className="flex items-center justify-center before:flex-auto before:border-t before:border-gray-300 before:mt-1 after:flex-auto after:border-t after:border-gray-300 after:mt-1">
                <span className="py-2 px-2 text-slate-700">Or</span>
              </div>

              <h3 className="text-black text-center text-sm font-semibold mb-4">
                Log in using email address
              </h3>

              <form className="" onSubmit={handleSubmit(handleLogin)}>
                <div className="grid grid-cols-1 gap-6 mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      id="email"
                      {...register("email")}
                      className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-2.5 scale-100 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-2.5">
                      Email address
                    </label>
                  </div>

                  <div className="relative">
                    <input
                       type={showPassword ? "text" : "password"}
                      id="password"
                      {...register("password")}
                      className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                      placeholder=" "
                      required
                    />
                    <div
                      className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-auto"
                      onClick={() => setShowPassword(!showPassword)}>
                      <i
                        className={cn(
                          "text-xl text-neutral-600 bi",
                          showPassword ? "bi-eye" : "bi-eye-slash"
                        )}></i>
                    </div>
                    <label
                      htmlFor="password"
                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-2.5 scale-100 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-2.5">
                      Password
                    </label>
                  </div>
                </div>

                <div className="mb-3 text-right">
                  <Link href="/forgot-password" className="text-right text-[13px] text-blue-600">
                    forgot password ?
                  </Link>
                </div>

                <button type="submit" className="btn-purple text-center w-full">
                  Log in
                </button>
              </form>

              <div className="text-center text-sm mt-5 font-semibold">
                Need to create an account{" "}
                <Link href="" className="text-blue-600">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

Index.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

Index.getInitialProps = wrapper.getInitialPageProps(() => () => {});

export default Index;
