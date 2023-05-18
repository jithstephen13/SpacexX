import { useState, useEffect } from "react"
import LoadingState from "./LoadingState"
import { useSelector,useDispatch } from 'react-redux'

import {getCapsuleAsync, getCapsuleAsyncSearch} from "../Redux/Data.slice"

export default function Capsules() {
  // const [capsules, setCapsules] = useState([])
  const [text,setText]=useState("")
  const [status, setStatus] = useState('');
  const [original_launch, setOriginal_launch] = useState('');
  const [type, setType] = useState('');

 
  const search  = async (e) => {
        e.preventDefault()
   
      //dispatch(getCapsuleAsyncSearch({status,original_launch,type}))
    }


   
    const{ Capsules, loading,error,} =useSelector((store)=>store.capsule)
    const dispatch=useDispatch()

    useEffect(()=>{
      
      dispatch(getCapsuleAsync())

    },[])



  return (
    <>
      {loading ? (
        <LoadingState />
      ) : (
        <section className="pages-showcase bg-black ">
          <div className="overlay py-20 lg:pt-32">
            <div className="h-80 text-center">
            <h1 className="heading text-4xl text-white">Welcome to SpaceX </h1>
              <h1 className="heading text-4xl text-white">Capsules</h1>
            </div>
            <div className=" h-60 w-screen" id="banner">

            </div>

            <div className=" flex justify-center gap-4 ">
            <form className=" flex justify-center gap-4" onSubmit={search}>
              
          <label className="text-white" htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="active">Active</option>
            <option value="retired">Retired</option>
            <option value="">All</option>
          </select>
          <label className="text-white" htmlFor="original_launch">Original Launch:</label>
          <input
            type="date"
            name="original_launch"
            value={original_launch}
            onChange={(e) => setOriginal_launch(e.target.value)}
          />
          <label className="text-white" htmlFor="type">Type:</label>
          <select
            id="type"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="dragon1">Dragon 1</option>
            <option value="dragon2">Dragon 2</option>
            <option value="">All</option>
          </select>
          <button type="submit" className="bg-white">Search</button>
        </form>

              </div>
           
             
            <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">

              
              {Capsules.map(
                ({
                  reuse_count,
                  water_landings,
                  land_landings,
                  last_update,
                  launches,
                  serial,
                  status,
                  type,
                  id,
                }) => (
                  <article key={id} className="articles p-5">
                    <h2 className="text-white font-bold text-xl">
                      {type},{" "}
                      <span className="opacity-75 text-lg font-normal">
                        {serial}
                      </span>
                    </h2>
                    <ul className="text-sm opacity-75 text-white mt-3">
                      <li>Reused {reuse_count} times</li>
                      <li>{launches.length} launches</li>
                      <li>{water_landings} water landings</li>
                      <li>{land_landings} land landings</li>
                      <li
                        className={`capitalize ${
                          status === "active"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        Status: {status}
                      </li>
                    </ul>
                    <p className="text-white text-sm opacity-75 mt-3">
                      {last_update}
                    </p>
                  </article>
                )
              )}
            </div>
          </div> 
       
        </section>
      )}
    </>
  )
}