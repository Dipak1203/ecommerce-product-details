import { IProduct } from "@/app/interface/global.interface";

export const productData: IProduct[] = [
    {
      id: 1,
      title: "Jacket for men",
      price: 100,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum natus perferendis deserunt totam qui numquam, corrupti nihil, officia ducimus quasi eos, incidunt vero amet ipsa nostrum! Aperiam, quis enim.",
      image: [
        "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1664875849419-3dc59ec24433?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1581961462133-ca8618e89ed3?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ],
      rating: {
        rate: 4.5,
        count: 100,
      },
      inventory:{
        size: ["S", "M", "L"],
        color: ["Black", "Blue"]
      }
    },
  ];

  export const recommendationData = [
    {
      id: 1,
      url: "https://plus.unsplash.com/premium_photo-1664869376082-edfd5e0a3e44?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Product 1",
      price: 100,
    },
    {
      id: 2,
      url: "https://plus.unsplash.com/premium_photo-1664874603053-e7c0b908ee6e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Product 2",
      price: 200,
    },
    {
      id: 3,
      url: "https://plus.unsplash.com/premium_photo-1670948083449-41e3ea2263b7?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Product 3",
      price: 300,
    },
    {
      id: 4,
      url: "https://plus.unsplash.com/premium_photo-1673512199219-633aa32b266d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Product 4",
      price: 400,
    },
  ];
  
  