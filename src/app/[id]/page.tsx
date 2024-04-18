import { Title } from "@/components";

export default function Detail({ params }: { params: { id: string } }) {
  console.log("id", params);
  return (
    <div>
      <Title title={params.id} />
    </div>
  );
}
