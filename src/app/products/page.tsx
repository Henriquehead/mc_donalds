import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="rounded-xl border border-red-500 p-5">
      <Input placeholder="Clique aqui!" className="w-32"></Input>
      <h1 className="text-red-500">Products Page</h1>
      <Button>FSW 2.0</Button>
    </div>
  );
};

export default ProductPage;
