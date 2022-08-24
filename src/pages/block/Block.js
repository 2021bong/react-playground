import React from 'react';
import styles from './block.module.css'

const Block = ({blockNum}) => {
  return <div className={styles.block}>{`블럭${blockNum}`}</div>
}

export default Block;