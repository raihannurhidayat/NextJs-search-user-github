import { useRouter } from "next/router"

export default function Detail(){

  const router = useRouter()
  const {username} = router.query

  return (
    <div>detail halaman untuk username : {username} </div>
  )
}