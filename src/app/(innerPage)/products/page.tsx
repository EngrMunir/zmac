import Link from "next/link"

const subCategoryList = [
  {
    id: 1,
    name: "Aviator Jacket",
    image: "http://ae04.alicdn.com/kf/S7f3630e1e75b43debf7ed3d3368f952bc.jpg_Q90.jpg_.webp"
  },
  {
    id: 2,
    name: "Aviator Jacket",
    image: "http://ae04.alicdn.com/kf/Sbe5fb35b3a6844ce8947a5afeb21a496T.jpg_Q90.jpg_.webp"
  },
  {
    id: 3,
    name: "Aviator Jacket",
    image: "https://ae01.alicdn.com/kf/S89ac4f2906424a9e8def4b5fe83ba807u/1000x1000.jpg_Q90.jpg_.webp"
  },
  {
    id: 4,
    name: "Aviator Jacket",
    image: "http://ae04.alicdn.com/kf/S8bb193fcdbdb426bb4b68492edaee771z.jpg_Q90.jpg_.webp"
  },
  {
    id: 6,
    name: "Aviator Jacket",
    image: "https://ae01.alicdn.com/kf/S226200b39e884f8ebb7d66006b4d75f5O.jpg_Q90.jpg_.webp"
  },
  {
    id: 7,
    name: "Aviator Jacket",
    image: "http://ae04.alicdn.com/kf/Sb80cb1c174b342a59c1caa27a9eac6bdD.jpg_Q90.jpg_.webp"
  },

]
const Products = () => {
  return (
    <section className="container mt-11">
      <h4 className="text-2xl font-semibold border-b pb-2 mb-7">Men's Clothing</h4>
      <div className="flex justify-between items-center flex-wrap gap-10">
        {
          subCategoryList.map(({ id, image, name }) => {
            return (
              <div key={id} className="text-center">
                <div className="relative w-[219px] h-[219px] rounded-full overflow-hidden flex justify-center items-center">
                  <Link href={"#"} className="absolute w-full h-full rounded-full bg-[rgba(0,0,0,.04)] block"></Link>
                  <Link href={"#"} className="block overflow-hidden">
                    <img src={image} className="w-full block h-full object-cover" />
                  </Link>
                </div>
                <Link href={"#"} className="text-xl font-semibold text-[rgb(58,62,74)] mt-2.5 inline-block">{name}</Link>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Products