export default function Title({ title }: { title: string }) {
  return <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4 font-bold">{title}</h1>;
}
