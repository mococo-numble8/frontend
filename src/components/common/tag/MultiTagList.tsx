import React, { useCallback, useMemo, useState } from 'react';
import MultiTag from 'components/common/tag/MultiTag';
import styles from './MultiTagList.module.scss';

type PropsType = {
  list: TagType.Tag[];
  name: string;
};

const MultiTagList = ({ name, list }: PropsType) => {
  const tagCount = useMemo<number>(() => list.length, [list]);

  const [checkedState, setCheckedState] = useState<boolean[]>(new Array(tagCount).fill(false));

  const onClickTag = useCallback(
    (index: number) => {
      const nextCheckedState = [...checkedState];
      nextCheckedState[index] = !nextCheckedState[index];
      setCheckedState(nextCheckedState);
      console.log(nextCheckedState);
    },
    [checkedState],
  );

  return (
    <div className={styles.list}>
      {list.map((item, index) => (
        <MultiTag
          key={item.id}
          name={name}
          id={item.id}
          checked={checkedState[index]}
          onClick={() => onClickTag(index)}
          tag={item.tag}
        />
      ))}
    </div>
  );
};

export default MultiTagList;
