import axios from "axios";

export async function getStaticProps({ params }) {
  const res = await axios.get(`http://localhost:3000/api/v1/shops/${params.id}`);
  const shop = res.data;
  return {
    props: {shop: shop}
  };
}

export async function getStaticPaths() {
  const res = await axios.get("http://localhost:3000/api/v1/shops");
  const shops = await res.data;

  const paths = shops.map((shop) => ({
    params: { id: shop.id.toString() },
  }))
  return {
    paths,
    fallback: true,
  }
}

export default function ShopPage({ shop }) {

  return(
    <div className="flex justify-center mt-20">
      <div className="sm:w-2/3 flex flex-col">
        <div>
          <h1 className="text-xl md:text-3xl flex justify-center mb-10">{ shop.name }</h1>
        </div>
        <div className="text-lg md:text-2xl px-6 py-4">
          店舗情報
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden mb-20">
              <table className="min-w-full text-left md:text-lg font-light">
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <th className="whitespace-nowrap px-6 py-4">
                      所在地
                    </th>
                    <td className="whitespace-pre-wrap px-6 py-4">
                      { shop.address }
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <th className="whitespace-nowrap px-6 py-4">
                      アクセス
                    </th>
                    <td className="whitespace-pre-wrap px-6 py-4">
                      { shop.access }
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <th className="whitespace-nowrap px-6 py-4">
                      営業時間
                    </th>
                    <td className="whitespace-pre-wrap px-6 py-4">
                      { shop.open_time }
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <th className="whitespace-nowrap px-6 py-4">
                      定休日
                    </th>
                    <td className="whitespace-pre-wrap px-6 py-4">
                      { shop.closed_days }
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <th className="whitespace-nowrap px-6 py-4">
                      電話番号
                    </th>
                    <td className="whitespace-pre-wrap px-6 py-4">
                      { shop.phone_number }
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <th className="whitespace-nowrap px-6 py-4">
                    駐車場
                    </th>
                    <td className="whitespace-pre-wrap px-6 py-4">
                      { shop.parking }
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <th className="whitespace-nowrap px-6 py-4">
                      メニュー
                    </th>
                    <td className="whitespace-pre-wrap px-6 py-4">
                      { shop.menu }
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <th className="whitespace-nowrap px-6 py-4">
                    食券購入
                    </th>
                    <td className="whitespace-pre-wrap px-6 py-4">
                      { shop.when_to_buy_tickets }
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <th className="whitespace-nowrap px-6 py-4">
                    コール
                    </th>
                    <td className="whitespace-pre-wrap px-6 py-4">
                      { shop.call_timing }
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <th className="whitespace-nowrap px-6 py-4">
                    禁止事項
                    </th>
                    <td className="whitespace-pre-wrap px-6 py-4">
                      { shop.prohibited_matters }
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <th className="whitespace-nowrap px-6 py-4">
                      備考
                    </th>
                    <td className="whitespace-pre-wrap px-6 py-4">
                      { shop.remarks }
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
