import { Comments, Hero, Loader, Section } from '../components';
import { useGetComentsQuery } from '../redux/commentApi';

export const Home = () => {
  const { isLoading } = useGetComentsQuery();

  return (
    <>
      {isLoading && <Loader />}
      <Section>
        <Hero title="What people are saying." subtitle="Feedback from our customers." />
        <Comments />
      </Section>
    </>
  );
};
