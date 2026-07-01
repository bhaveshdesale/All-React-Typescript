import { useState } from "react"
import { useGetDevelopersQuery } from "../../services/developerApi";
import DeveloperSkeleton from "../../components/common/Skeleton/DeveloperSkeleton";
import ErrorState from "../../components/common/ErrorState/ErrorState";
import EmptyState from "../../components/common/EmptyState/EmptyState";
import DeveloperSearch from "../../components/developers/DeveloperSearch";
import DeveloperCard from "../../components/developers/DeveloperCard";
import "../../styles/developers/developers.css"
function Developers() {
  const [search, setSearch]=useState("");

//  const {data, isLoading, }= useLazyGetDevelopersQuery();
const {data, isLoading, error}=useGetDevelopersQuery(undefined, {

});
// const {data, isLoading, error}=useLazyGetDevelopersQuery(undefined);
if(isLoading){
  return <DeveloperSkeleton/>

}

if(error){
  return <ErrorState message="Failed to load developers..."/>
}
  if (!data?.users.length) {
    return <EmptyState message="No developers found." />;
  }
 
  return (
    <section className="developers-page">
      <div className="center-input">
      <h1>Developers</h1>
      <DeveloperSearch value={search} onChange={setSearch}/>
      </div>
      <div className="developers">
      {data.users.map((deeloper)=>(
        <DeveloperCard key={deeloper.id} developer={deeloper}/>
      ))}
      </div>
    </section>
  )
}

export default Developers
