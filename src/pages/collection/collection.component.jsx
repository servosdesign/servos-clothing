import React from 'react';
import { useParams } from 'react-router-dom';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = () => {
  let { collectionId } = useParams();
  return (  
  <div className='collection-page'>
    <h2>Category Page</h2>
  </div>
)};

export default CollectionPage;