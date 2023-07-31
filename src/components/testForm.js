import { useForm } from "react-hook-form";

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
          {errors.exampleRequired && (
            <span className="text-red-600">Please, enter your name</span>
          )}
        </div>

        {/****************** bottom of inputs ******************/}
        <input
          type="submit"
          className="w-full rounded-lg py-2 bg-cyan-400 hover:bg-cian-600 text-white font-bold"
        />
      </form>
    </div>
  );
}

export default Form;
