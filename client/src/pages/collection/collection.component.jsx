import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';
 
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
 
const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  const { title, items } = collection;
 
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
     </CollectionPageContainer>
  );
};
 
export default CollectionPage;