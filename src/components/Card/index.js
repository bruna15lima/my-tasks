import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context';

import { Container, Label } from './styles';

export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: {type: 'CARD', index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  });

  const [, dropRef] =  useDrop ({
    accept: 'CARD',
    hover(item, monitor){ 
      const draggedListIndex = item.listIndex;
      const targgetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;
      
      if (draggedIndex === targetIndex && draggedListIndex === targgetListIndex) {
        return; 
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.botton - targetSize.top) / 2; 

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targgetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targgetListIndex;  
    }
  })
 
 
  dragRef(dropRef(ref));

  return (
  <Container ref= { ref } isDragging = {isDragging}>
    <header>
      {data.labels.map(label =><Label key={label} color= {label} />)}
      
    </header>
    <p>{data.content}</p>
    { data.user && <img src={data.user} alt=""/> }
  </Container>
  );
}

