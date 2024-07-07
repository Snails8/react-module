type Props = {
  title: string
  coverImage: string
  date: string
}

export const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <section className='max-w-2xl mx-auto'>
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter leading-tight md:leading-none m-12 text-center md:text-left">
        {title}
      </h1>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          {/* <DateFormatter dateString={date} /> */}
        </div>
      </div>
    </section>
  )
}
