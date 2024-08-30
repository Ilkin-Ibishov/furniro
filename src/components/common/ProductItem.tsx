import '../../assets/styles/common/ProductItem.scss';
import { Product } from '../../types/common';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {

  return (
    <div className='product-card'>
      <div className='image-block'>
        <img src={product.imageFiles[0]} alt={product.title} />
        <div className={`tag ${product.discountPercent !== 0 ? 'discount-tag': product.isNew ? 'new-tag':  'hidden-tag'}`}>
          {product.isNew && product.discountPercent === 0 ? 'New' : `-${product.discountPercent}%`}
        </div>
      </div>
      <div className='description'>
        <h4>{product.title}</h4>
        <p>{product.subTitle}</p>
        <span>
          <p>{product.discountedPrice.toFixed(2)}</p>
          <p>{product.salePrice}</p>
        </span>
      </div>
      <div className='hover-div'>

      </div>
    </div>
  )
}

export default ProductItem