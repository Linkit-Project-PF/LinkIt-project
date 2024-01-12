interface componentProps {
  color: string;
  text: string;
  value: string | number;
}

export default function StatisticsCard({ color, text, value }: componentProps) {
  return (
    <div
      className={`flex flex-col w-[350px] p-5 font-manrope rounded-xl justify-center text-lg m-1`}
      style={{ backgroundColor: `${color}` }}
    >
      <div className="flex flex-row gap-7 justify-between">
        <h1>{text}</h1>
        <b className="self-center text-2xl">{value ? value : "..."}</b>
      </div>
    </div>
  );
}
