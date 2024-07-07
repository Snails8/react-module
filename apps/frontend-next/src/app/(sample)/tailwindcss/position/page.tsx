
export default function Position() {
  return (
    <>
      <RelativePositionExample />
      <AbsolutePositionExample />
      <FixedPositionExample />
      <StickyPositionExample />
    </>
  )
}

function RelativePositionExample() {
  return (
    <div className="relative border p-5">
      <div className="absolute top-0 right-0 p-1 bg-blue-200">絶対位置</div>
      相対位置のコンテナ
    </div>
  );
}

function AbsolutePositionExample() {
  return (
    <div className="relative border p-5">
      <div className="absolute top-0 right-0 p-1 bg-red-200">絶対位置</div>
      絶対位置の基準となる相対位置コンテナ
    </div>
  );
}

function FixedPositionExample() {
  return (
    <div className="fixed bottom-0 right-0 p-1 w-full bg-green-200">
      固定位置
    </div>
  );
}

function StickyPositionExample() {
  return (
    <div>
      <div className="sticky top-0 p-1 bg-yellow-200">粘着位置</div>
      スクロールに合わせて移動するコンテンツ
    </div>
  );
}