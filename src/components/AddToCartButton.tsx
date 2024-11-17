
import { toast } from "react-toastify";

export default function AddToCartButton({
  onAddToCart,
}: {
  onAddToCart: () => void;
}) {
  const handleAddToCart = () => {
    toast.success("Added to cart!", );
    onAddToCart();
  };

  return (
    <>
      <div className="flex">
        <button
          onClick={handleAddToCart}
          className="bg-primary text-white px-4 py-2 rounded hover:border-yellow transition"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}
