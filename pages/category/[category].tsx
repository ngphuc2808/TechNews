import CategoryPost from '@/src/components/Category';
import { useSelector } from 'react-redux';
import ErrorPage from '@/src/components/Global/ErrorPage';

const Category = () => {
  const { error } = useSelector((state: any) => state.error);
  return <ErrorPage />;
};

export default Category;
