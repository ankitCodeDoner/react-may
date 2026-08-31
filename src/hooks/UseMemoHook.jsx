import React, { useMemo, useState } from "react";

const products = Array.from({ length: 10000 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
}));

function UseMemoHook() {
    const [search, setSearch] = useState("");
    const [count, setCount] = useState(0);

    console.log("Component Render");



    const filteredProducts = () => {
        return products.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    return (
        <div>
            <h2>Product Search</h2>

            <input
                type="text"
                placeholder="Search product"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <h3>Count: {count}</h3>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

            <p>Products Found: {filteredProducts?.length}</p>
        </div>
    );
}

export default UseMemoHook;
