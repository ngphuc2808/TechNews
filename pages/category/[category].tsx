import Post from '@/src/components/Post';
import { useSelector } from 'react-redux';
import { memo } from 'react';

const Category = () => {
  const categoryPath = useSelector((state: any) => state.category);
  return <Post title={categoryPath.path.name} />;
};

export default memo(Category);
