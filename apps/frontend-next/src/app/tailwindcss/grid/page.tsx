import { TextField } from "@module/mui-component"
import { Checkbox } from "@module/ui-component"

export default function Grid() {
  return (
    <section>
      <div className="bg-gray-100 p-5 border-b border-black">
        <p className="tex-3xl mb-5 font-bold">基本</p>
        <ul>
          <li>・Gridはグリットをもとに調整をかける</li>
          <li>・2次元レイアウトが得意。</li>
          <li>・シンプルなレイアウトの場合、flexの方が直感的に記述できる</li>
          <li>・自動的に調整されるレイアウトの生成がやや不向き</li>
        </ul>
      </div>

      <ItemComponent
        title="1.基本の使い方 ３列グリッド 4スペース"
        targetClass="grid grid-cols-3 gap-4"
      >
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-red-300">1</div>
          <div className="p-4 bg-green-300">2</div>
          <div className="p-4 bg-blue-400">3</div>
          <div className="p-4 bg-slate-300">4</div>
          <div className="p-4 bg-fuchsia-300">5</div>
          <div className="p-4 bg-orange-400">6</div>
        </div>
      </ItemComponent>

      <ItemComponent
        title="2.異なる列幅のgrid：12列グリッド 4スペース 小要素で3/12 6/12 3/12"
        targetClass="grid grid-cols-12 gap-4 (col-span-x)"
      >
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3 p-4 bg-red-300">col-span-3</div>
          <div className="col-span-6 p-4 bg-green-300">col-span-6</div>
          <div className="col-span-3 p-4 bg-blue-400">col-span-3</div>
        </div>
      </ItemComponent>

      <ItemComponent
        title="3. レスポンシブグリッド： default 3列グリッド 4スペース / md以上 4列グリッド 4スペース"
        targetClass="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-red-300">1</div>
          <div className="p-4 bg-green-300">2</div>
          <div className="p-4 bg-blue-400">3</div>
          <div className="p-4 bg-gray-300">4</div>
        </div>
      </ItemComponent>

      <ItemComponent
        title="4. グリッドエリアを使用したLayout"
        targetClass="grid grid-rows-3 grid-cols-3 gap-4 (row span-x) (col span-x)"
      >
        <div className="grid grid-rows-3 grid-cols-3 gap-4">
          <div className="row-span-3 col-span-2 p-4 bg-red-300">メインコンテンツ</div>
          <div className="col-span-1 row-span-1 p-4 bg-green-300">サイドバー1</div>
          <div className="col-span-1 row-span-2 p-4 bg-blue-400">サイドバー2</div>
        </div>
      </ItemComponent>

      <ItemComponent
        title="5. 重ね合わせのあるグリッド"
        targetClass="grid grid-cols-2 gap-4 (col-start-1 col-end-3)"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-red-300">アイテム1</div>
          <div className="p-4 bg-green-300">アイテム2</div>
          <div className="p-4 col-start-1 col-end-3 bg-blue-400">アイテム3</div>
        </div>
      </ItemComponent>

      <div className="grid grid-cols-10 space-x-2">
          <div className="col-span-7">
            <TextField
              label="予算"
              name="price"
              type="number"
              placeholder="例) 1000"
              value=""
              className="w-full"
              onChange={() => {}}
            />
          </div>

          <div className="col-span-3">
            <Checkbox
              label="相談する"
              // name="price"
              // value=""
              onChangeHandler={() => {}}
            />
          </div>
        </div>
    </section>
  )
}

function ItemComponent({ title, targetClass, children }: {  title: string, targetClass?: string, children?: React.ReactNode }) {
  return (
    <div className="py-3">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="bg-gray-100">
        {"className="+targetClass}
      </div>
      {children ? children : (
      <div className={targetClass}>
        <div className={`bg-red-300 p-2`}>01</div>
        <div className={`bg-green-300 p-2`}>02</div>
        <div className={`bg-blue-400 p-2`}>03</div>
      </div>
      )}
    </div>
  )
} 