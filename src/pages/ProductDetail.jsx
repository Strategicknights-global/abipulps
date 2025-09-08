import { useParams } from "react-router-dom";

function ProductDetail() {
  const { slug } = useParams();

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Showing details for product: {slug}</p>
    </div>
  );
}

export default ProductDetail;
