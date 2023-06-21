import { useRouter } from 'next/router';

export const CharPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <div>
        <span>char page: {id}</span>
      </div>
    </>
  );
};
