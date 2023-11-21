export default async function Page() {
  return (
    <div className='container min-h-screen flex items-center justify-center'>
      <form className='flex flex-col gap-4 w-1/3'>
        <div className="self-center text-white text-xl font-normal font-['Inter'] leading-7">
          Welcome
        </div>
        <div className='relative'>
          <input
            id='email'
            name='email'
            type='email'
            className='peer bg-transparent placeholder-transparent h-10 w-full border-b-2 border-white text-white focus:outline-none focus:borer-rose-600'
            placeholder='Email'
          />
          <label
            htmlFor='email'
            className='absolute left-0 -top-3.5 text-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm'
          >
            Email
          </label>
        </div>
        <div className='relative'>
          <input
            id='password'
            name='password'
            type='password'
            className='peer bg-transparent placeholder-transparent h-10 w-full border-b-2 border-white text-white focus:outline-none focus:borer-rose-600'
            placeholder='Password'
          />
          <label
            htmlFor='password'
            className='absolute left-0 -top-3.5 text-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm'
          >
            Password
          </label>
        </div>
        <button
          type='submit'
          className='inline-block rounded border-2 border-white px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:text-primary-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
        >
          Sign In
        </button>
        <button
          type='button'
          className='inline-block rounded border-2 border-white px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-white-accent-200 dark:text-primary-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
        >
          Register
        </button>
      </form>
    </div>
  );
}
