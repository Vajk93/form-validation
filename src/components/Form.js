// import { useEffect } from "react";
// import googleFonts from "google-fonts";
import { useForm } from "react-hook-form";

// type Inputs = {
//   example: string
//   exampleRequired: string
// }

function Form() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-slate-100 max-w-sm mx-auto flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/****************** username ******************/}
        <div className="mb-5">
          <input
            type="name"
            className="w-full border border-gray-300 bg-[ffffff] py-2 px-4 rounded-lg focus:outline-none placeholder-gray-300"
            placeholder="Username"
            defaultValue=""
            {...register("username", { required: true })}
          />
          {errors.username && (
            <span className="text-red-600">Please, enter your name</span>
          )}
        </div>

        {/****************** URL ******************/}
        <div className="mb-5">
          <div className="relative flex flex-wrap items-stretch max-w-sm ">
            <span
              className="flex items-center whitespace-nowrap bg-[#f6f6f6] rounded-l-lg border border-r-0 border-solid border-gray-300 px-4 py-[0.45rem] text-center text-lg font-normal text-gray-500 "
              id="inputGroup-sizing-lg"
            >
              http://
            </span>
            <input
              type="text"
              className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r-lg border border-solid border-gray-300 bg-[ffffff] bg-clip-padding px-4 py-[0.45rem]  text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3]focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)]focus:outline-none placeholder-gray-300 "
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              placeholder="yoursite.com"
              {...register("url", { required: true })}
            />
          </div>
          {errors.url && (
            <span className="text-red-600">Please, enter your site</span>
          )}
        </div>

        {/****************** search ******************/}
        <div className="relative flex flex-wrap items-stretch max-w-sm mb-5">
          <span
            className="flex items-center whitespace-nowrap bg-[#ffffff] rounded-l-lg border border-r-0  border-gray-300 px-4 py-[0.45rem] text-center text-xl font-normal text-neutral-700 "
            id="inputGroup-sizing-lg"
          >
            icon
          </span>
          <input
            type="text"
            className="relative m-0 block w-[1px] min-w-0 flex-auto border-x-0 border border-x-amber-700 border-solid border-gray-300 bg-[#ffffff] bg-clip-padding px-4 py-[0.45rem] text-xl font-normal text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3]focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)]focus:outline-none "
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
          <span
            className="flex items-center whitespace-nowrap bg-[#ffffff] rounded-r-lg border border-l-0 border-solid border-neutral-300 px-4 py-[0.45rem] text-center text-xl font-normal text-neutral-700 "
            id="inputGroup-sizing-lg"
          >
            &&
          </span>
        </div>

        {/****************** file ******************/}
        <div className="flex justify-end border border-gray-300 rounded-lg bg-[#ffffff] mb-5">
          <div className="relative overflow-hidden file-input-group">
            <input
              id="file-upload"
              type="file"
              className="absolute inset-0 opacity-0"
            />
            <button
              htmlFor="file-upload"
              className="bg-cyan-400  text-white font-bold py-2 px-4 rounded-lg h-full hover:bg-cyan-700 cursor-pointer"
            >
              Browse
            </button>
          </div>
        </div>

        {/****************** password ******************/}
        <div className="mb-5">
          <label htmlFor="password">Password</label>
          <div className="relative flex flex-wrap items-stretch max-w-sm">
            <input
              type="password"
              className="relative m-0 block w-[1px] min-w-0 flex-auto bg-[#ffffff] border-t border-b border-l   border-gray-300 rounded-l-lg border-r-0  bg-clip-padding px-4 py-[0.45rem] text-xl font-normal text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3]focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)]focus:outline-none "
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              {...register("password", { required: true })}
              placeholder="*********"
            />
            <span
              className="flex items-center whitespace-nowrap bg-[#ffffff] rounded-r-lg border border-l-0  border-gray-300 px-4 py-[0.45rem] text-center text-xl font-normal text-neutral-700 "
              id="inputGroup-sizing-lg"
            >
              icon
            </span>
          </div>

          {errors.password && (
            <span className="text-red-600">Must be at 8 characters</span>
          )}
        </div>

        {/****************** phone number ******************/}
        <div className="flex mb-5">
          <div className="relative">
            <select className="appearance-none bg-[#ffffff] border-t border-r-0 border-b border-l border-gray-300 text-gray-700 py-2 px-4 h-full pr-8 rounded-l-lg rounded-r-0 focus:outline-none">
              <option value="US">US</option>
              <option value="HUN">HUN</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
              <svg
                className="h-4 w-4 fill-current text-gray-500 -mt-1"
                viewBox="0 0 20 20"
              >
                <path d="M10 3.586L3.707 9.878a1 1 0 0 0 1.414 1.414L10 6.414l4.879 4.878a1 1 0 0 0 1.414-1.414L10 3.586z" />
              </svg>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none transform rotate-180">
              <svg
                className="h-4 w-4 fill-current text-gray-500 -mt-1"
                viewBox="0 0 20 20"
              >
                <path d="M10 3.586L3.707 9.878a1 1 0 0 0 1.414 1.414L10 6.414l4.879 4.878a1 1 0 0 0 1.414-1.414L10 3.586z" />
              </svg>
            </div>
          </div>
          <input
            type="number"
            className="border-t border-r border-b border-gray-300 w-full rounded-r-lg rounded-l-0 focus:outline-none placeholder-gray-300"
            placeholder="Phone Number"
            {...register("phone")}
          />
        </div>
        {/****************** bottom of inputs ******************/}
        <input
          type="submit"
          className="w-full rounded-lg py-2 bg-cyan-400 hover:bg-cian-600 text-white font-bold hover:bg-cyan-700 cursor-pointer"
        />
      </form>
    </div>
  );
}

export default Form;
