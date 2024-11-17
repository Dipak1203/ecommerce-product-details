/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import AddToCartButton from "@/components/AddToCartButton";
import { AvailableInventory } from "@/components/AvailableInventory";
import CartPanel from "@/components/CartPanel";
import ImageGallery from "@/components/ImageGallery";
import { ReCommandation } from "@/components/ReCommandation";
import Spinner from "@/components/loading";
import { productData } from "@/constant/data";
import { useState } from "react";

export default function ProductPage() {
  const productDetails = productData[0];
  const [cartOpen, setCartOpen] = useState(false);
  const isLoading = false;
  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      {isLoading ? (
        <div className="flex h-screen align-middle justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          {productDetails && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ImageGallery images={productDetails.image} />
              <div className="space-y-4">
                <h1 className="text-2xl font-bold">{productDetails.title}</h1>
                <p className="text-gray-600">{productDetails.description}</p>
                <span className="text-xl font-semibold">
                  ${productDetails.price}
                </span>

                {productDetails.inventory.color && (
                  <AvailableInventory
                  title={"Available Colors"}
                  inventory={productDetails.inventory.color}
                  />
                )}

                {productDetails.inventory.size && (
                  <AvailableInventory 
                    title ={ "Available Size"}
                  inventory={productDetails.inventory.size}
                  />
                )}
                <AddToCartButton onAddToCart={() => setCartOpen(true)} />
              </div>
            </div>
          )}
          <CartPanel isOpen={cartOpen} onClose={() => setCartOpen(false)} />
          <div className="py-16">
            <ReCommandation />
          </div>
        </>
      )}
    </div>
  );
}
