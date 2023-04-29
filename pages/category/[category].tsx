import Post from '@/src/components/Post';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { memo, useEffect, useState } from 'react';
import { category } from '@/src/utils/dataConfig';
const Category = () => {
  const router = useRouter();
  const categoryPath = useSelector((state: any) => state.category);

  const [pathName, setPathName] = useState<string>('');

  useEffect(() => {
    if (!categoryPath.path.name) {
      const newArr = category.find((value) => value.key === router.query.category);
      if (newArr) {
        setPathName(newArr.name);
      }
    } else {
      setPathName(categoryPath.path.name);
    }
  }, []);

  return <Post title={pathName} />;
};

export default memo(Category);
