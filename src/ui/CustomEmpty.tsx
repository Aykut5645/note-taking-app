import { Empty } from 'antd';
import type { CSSProperties, ReactNode } from 'react';

import { EMPTY_IMAGE_URL } from '../utils/constants.tsx';

type CustomEmpty = {
  children: ReactNode;
  description: ReactNode;
  styles?: CSSProperties;
};

const CustomEmpty = ({ children, description, styles }: CustomEmpty) => {
  return (
    <Empty
      image={EMPTY_IMAGE_URL}
      imageStyle={{ height: '60%', ...styles }}
      description={description}
    >
      {children}
    </Empty>
  );
};

export default CustomEmpty;
