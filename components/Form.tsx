export default function Form({value,onChange}:Props){
  return (
    <input placeholder="Cari User di github" className="border border-zinc-100 p-[20px] rounded-[8px]" value={value}
    onChange={onChange}
    />
  )
}


interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}