import { CiShoppingCart } from "react-icons/ci";

export function Navbar() {
  return (
    <nav className="">
      <section className="flex justify-between items-center p-6">
        <div className="flex items-center">
          <h1 className="font-bold">E_Commerce</h1>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <button>
              <CiShoppingCart fontSize="28px" />
            </button>
            <span className="text-red-500 absolute bottom-5 font-bold">4</span>
          </div>

        </div>
      </section>
    </nav>
  );
}
