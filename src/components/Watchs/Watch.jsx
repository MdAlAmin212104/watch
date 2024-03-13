import React, { useEffect, useState } from 'react';
import WatchElement from '../WatchElement/WatchElement';

const Watch = () => {
      const [watch, setWatch] = useState([]);
      // useEffect(() =>{
      //       fetch("../../components/Watchs/data.json")
      //       .then(res => res.json())
      //       .then(data => setWatch(data))
      // }, [])
      useEffect(()=>{
            fetch('../src/components/Watchs/watch.json')
            .then(res => res.json())
            .then(data => setWatch(data))
      }, [])
      
      return (
            <div>
                  <h2>this is watch : {watch.length}</h2>
                  {
                        watch.map(watch => <WatchElement watch ={watch}/>)
                  }
                  
            </div>
      );
};

export default Watch;