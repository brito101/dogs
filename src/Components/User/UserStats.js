import React from "react"
import Head from "../Helper/Head"
import useFetch from "../../Hooks/useFetch"
import { STATS_GET } from "../../Api"
import Loading from "../Helper/Loading"
import Error from "../Helper/Error"
import UserStatsGraphs from "./UserStatsGraphs"

const UserStats = () => {
  const { data, error, loading, request } = useFetch()

  React.useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let isMounted = true
    async function getData() {
      const { url, options } = STATS_GET()
      await request(url, options)
    }
    getData()
    return () => {
      isMounted = false
    }
  }, [request])

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data)
    return (
      <div>
        <Head title='Estatísticas' />
        <UserStatsGraphs data={data} />
      </div>
    )
  else return null
}

export default UserStats
