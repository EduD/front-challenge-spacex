export const ErrorMessage = ({ error }: { error: string }) => (
  <p className='block my-10 text-xl'>
    It was an error: <span className='text-red-500 font-semibold'>{error}</span>
  </p>
);
