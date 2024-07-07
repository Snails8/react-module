
export default function Flex() {
  return (
    <section>
      <div className="bg-gray-100 p-5 border-b border-black">
        <p className="tex-3xl mb-5 font-bold">基本</p>
        <ul>
          <li>・flexは横並びにしてからスタイルを組んでいく。</li>
          <li>・一次元レイアウトが得意。要素が可変の場合、使いやすい</li>
          <li>・細かい配置が決まっている場合や二次元レイアウトが不向き。</li>
          <li>・小要素に対してかけるのでどうしても入れ子構造になりがち</li>
        </ul>
      </div>

      <ItemComponent
        title="1.横並び"
        targetClass="flex"
      />

      <ItemComponent
        title="2. 縦並び"
        targetClass="flex flex-col"
      />

      <ItemComponent
        title="3. 中央揃え"
        targetClass="flex justify-center items-center"
      />

      <ItemComponent
        title="4. 左揃え"
        targetClass="flex justify-start"
      />

      <ItemComponent
        title="5. 右揃え"
        targetClass="flex justify-end"
      />

      <ItemComponent
        title="4. スペース間隔 (２つの場合は左右寄せ可能)"
        targetClass="flex justify-between"
      />

      <ItemComponent
        title="5. スペース間隔"
        targetClass="flex justify-around"
      />

      <ItemComponent
        title="6. スペース間隔"
        targetClass="flex justify-evenly"
      />

      <ItemComponent
        title="7. 折り返し"
        targetClass="flex flex-wrap"
      >
        <div className="flex flex-wrap">
          <div className={`bg-red-300 p-2 w-1/3`}>01</div>
          <div className={`bg-green-300 w-1/3`}>02</div>
          <div className={`bg-blue-400 w-1/2`}>03</div>
        </div>
      </ItemComponent>

      <ItemComponent
        title="8. アイテムのサイズ変更"
        targetClass="flex-1 "
      >
        <div className="flex">
          <div className={`bg-red-300 p-2 flex-1`}>01</div>
          <div className={`bg-green-300 p-2 flex-2`}>02</div>
          <div className={`bg-blue-400 p-2 flex-3`}>03</div>
        </div>
      </ItemComponent>



      <p className="tex-3xl mt-5 font-bold border-b border-black">あんまり使わない</p>
      <ItemComponent
        title="横並び（逆順）"
        targetClass="flex flex-row-reverse"
      />
      <ItemComponent
        title="縦並び（逆順）"
        targetClass="flex flex-col-reverse"
      />
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